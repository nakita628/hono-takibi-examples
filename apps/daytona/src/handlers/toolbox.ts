import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteToolboxSandboxIdToolboxFilesRoute,
  deleteToolboxSandboxIdToolboxGitBranchesRoute,
  deleteToolboxSandboxIdToolboxProcessPtySessionIdRoute,
  deleteToolboxSandboxIdToolboxProcessSessionSessionIdRoute,
  getToolboxSandboxIdToolboxComputeruseDisplayInfoRoute,
  getToolboxSandboxIdToolboxComputeruseDisplayWindowsRoute,
  getToolboxSandboxIdToolboxComputeruseMousePositionRoute,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRoute,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRoute,
  getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotRegionRoute,
  getToolboxSandboxIdToolboxComputeruseScreenshotRoute,
  getToolboxSandboxIdToolboxComputeruseStatusRoute,
  getToolboxSandboxIdToolboxFilesDownloadRoute,
  getToolboxSandboxIdToolboxFilesFindRoute,
  getToolboxSandboxIdToolboxFilesInfoRoute,
  getToolboxSandboxIdToolboxFilesRoute,
  getToolboxSandboxIdToolboxFilesSearchRoute,
  getToolboxSandboxIdToolboxGitBranchesRoute,
  getToolboxSandboxIdToolboxGitHistoryRoute,
  getToolboxSandboxIdToolboxGitStatusRoute,
  getToolboxSandboxIdToolboxLspDocumentSymbolsRoute,
  getToolboxSandboxIdToolboxLspWorkspaceSymbolsRoute,
  getToolboxSandboxIdToolboxProcessPtyRoute,
  getToolboxSandboxIdToolboxProcessPtySessionIdRoute,
  getToolboxSandboxIdToolboxProcessSessionRoute,
  getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRoute,
  getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRoute,
  getToolboxSandboxIdToolboxProcessSessionSessionIdRoute,
  getToolboxSandboxIdToolboxProjectDirRoute,
  getToolboxSandboxIdToolboxUserHomeDirRoute,
  getToolboxSandboxIdToolboxWorkDirRoute,
  postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRoute,
  postToolboxSandboxIdToolboxComputeruseKeyboardKeyRoute,
  postToolboxSandboxIdToolboxComputeruseKeyboardTypeRoute,
  postToolboxSandboxIdToolboxComputeruseMouseClickRoute,
  postToolboxSandboxIdToolboxComputeruseMouseDragRoute,
  postToolboxSandboxIdToolboxComputeruseMouseMoveRoute,
  postToolboxSandboxIdToolboxComputeruseMouseScrollRoute,
  postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRoute,
  postToolboxSandboxIdToolboxComputeruseStartRoute,
  postToolboxSandboxIdToolboxComputeruseStopRoute,
  postToolboxSandboxIdToolboxFilesBulkDownloadRoute,
  postToolboxSandboxIdToolboxFilesBulkUploadRoute,
  postToolboxSandboxIdToolboxFilesFolderRoute,
  postToolboxSandboxIdToolboxFilesMoveRoute,
  postToolboxSandboxIdToolboxFilesPermissionsRoute,
  postToolboxSandboxIdToolboxFilesReplaceRoute,
  postToolboxSandboxIdToolboxFilesUploadRoute,
  postToolboxSandboxIdToolboxGitAddRoute,
  postToolboxSandboxIdToolboxGitBranchesRoute,
  postToolboxSandboxIdToolboxGitCheckoutRoute,
  postToolboxSandboxIdToolboxGitCloneRoute,
  postToolboxSandboxIdToolboxGitCommitRoute,
  postToolboxSandboxIdToolboxGitPullRoute,
  postToolboxSandboxIdToolboxGitPushRoute,
  postToolboxSandboxIdToolboxLspCompletionsRoute,
  postToolboxSandboxIdToolboxLspDidCloseRoute,
  postToolboxSandboxIdToolboxLspDidOpenRoute,
  postToolboxSandboxIdToolboxLspStartRoute,
  postToolboxSandboxIdToolboxLspStopRoute,
  postToolboxSandboxIdToolboxProcessExecuteRoute,
  postToolboxSandboxIdToolboxProcessPtyRoute,
  postToolboxSandboxIdToolboxProcessPtySessionIdResizeRoute,
  postToolboxSandboxIdToolboxProcessSessionRoute,
  postToolboxSandboxIdToolboxProcessSessionSessionIdExecRoute,
} from '../routes'

const app = new OpenAPIHono()

export const toolboxHandler = app
  .openapi(getToolboxSandboxIdToolboxProjectDirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxUserHomeDirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxWorkDirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteToolboxSandboxIdToolboxFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxFilesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesBulkDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxFilesFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxFilesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxFilesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxFilesBulkUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteToolboxSandboxIdToolboxGitBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxGitBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxGitHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxGitCheckoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxGitStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxProcessExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxProcessSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxProcessSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteToolboxSandboxIdToolboxProcessSessionSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxProcessSessionSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxProcessSessionSessionIdExecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxProcessPtyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxProcessPtyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteToolboxSandboxIdToolboxProcessPtySessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxProcessPtySessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxProcessPtySessionIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxLspCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxLspDidCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxLspDidOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxLspDocumentSymbolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxLspStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxLspStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxLspWorkspaceSymbolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseMousePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseMouseMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseMouseClickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseMouseDragRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseMouseScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseKeyboardTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseKeyboardKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolboxSandboxIdToolboxComputeruseKeyboardHotkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseScreenshotRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseScreenshotCompressedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseDisplayInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolboxSandboxIdToolboxComputeruseDisplayWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
