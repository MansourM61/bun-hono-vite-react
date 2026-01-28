/**
 * Cleanup script to permanently delete build, report, and other non-source or
 * temporary folders.
 *
 * Code borrowed from [stackoverflow](https://stackoverflow.com/a/52526549).
 * @module cleanup
 */
import {
    existsSync,
    lstatSync,
    readdirSync,
    rmdirSync,
    unlinkSync,
} from 'node:fs'

/**
 * Remove a folder and all of its contents recursively.
 * @param {string} path - name of the folder to remove
 */
function deleteFolderRecursive(path: string) {
    if (existsSync(path) && lstatSync(path).isDirectory()) {
        readdirSync(path).forEach(function (file) {
            const curPath = path + '/' + file

            if (lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath)
            } else {
                // delete file
                unlinkSync(curPath)
            }
        })

        console.log(`Deleting directory "${path}"...`)
        rmdirSync(path)
    }
}

//----------------------------------------------------------------------------//
// Main body
main: (function () {
    console.log('Cleaning working tree...\n')
    console.log()
    deleteFolderRecursive('./client/node_modules')
    deleteFolderRecursive('./client/coverage')
    deleteFolderRecursive('./client/playwright-report')
    deleteFolderRecursive('./client/test-results')
    deleteFolderRecursive('./client/dist')
    deleteFolderRecursive('./client/storybook-static')
    deleteFolderRecursive('./server/node_modules')
    deleteFolderRecursive('./server/dist')
    deleteFolderRecursive('./node_modules')
    console.log('\nSuccessfully cleaned working tree!')
})();