import path from 'path'

function getPathToInitialView() {
    const pathToView = process.env.VIEW || path.resolve(__dirname, '..', 'view')
    return pathToView
}

// run webpack with different configs
