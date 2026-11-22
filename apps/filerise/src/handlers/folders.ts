import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFolderCapabilitiesPhpRoute,
  getApiFolderEncryptionJobStatusPhpRoute,
  getApiFolderEncryptionPlanPhpRoute,
  getApiFolderGetFolderColorsPhpRoute,
  getApiFolderGetFolderEncryptionPhpRoute,
  getApiFolderGetFolderListPhpRoute,
  getApiFolderIsEmptyPhpRoute,
  getApiFolderListChildrenPhpRoute,
  postApiFolderCreateFolderPhpRoute,
  postApiFolderDeleteFolderPhpRoute,
  postApiFolderEncryptionJobStartPhpRoute,
  postApiFolderEncryptionJobTickPhpRoute,
  postApiFolderMoveFolderPhpRoute,
  postApiFolderRenameFolderPhpRoute,
  postApiFolderSaveFolderColorPhpRoute,
  postApiFolderSetFolderEncryptionPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getApiFolderCapabilitiesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderCreateFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderDeleteFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderEncryptionJobStartPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderEncryptionJobStatusPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderEncryptionJobTickPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderEncryptionPlanPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetFolderColorsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetFolderEncryptionPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetFolderListPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderIsEmptyPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderListChildrenPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderMoveFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderRenameFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderSaveFolderColorPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderSetFolderEncryptionPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
