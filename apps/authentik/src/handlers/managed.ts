import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteManagedBlueprintsInstanceUuidIndexRoute,
  getManagedBlueprintsAvailableIndexRoute,
  getManagedBlueprintsIndexRoute,
  getManagedBlueprintsInstanceUuidIndexRoute,
  getManagedBlueprintsInstanceUuidUsedByIndexRoute,
  patchManagedBlueprintsInstanceUuidIndexRoute,
  postManagedBlueprintsImportIndexRoute,
  postManagedBlueprintsIndexRoute,
  postManagedBlueprintsInstanceUuidApplyIndexRoute,
  postManagedBlueprintsValidateIndexRoute,
  putManagedBlueprintsInstanceUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedHandler = app
  .openapi(getManagedBlueprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedBlueprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedBlueprintsInstanceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagedBlueprintsInstanceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchManagedBlueprintsInstanceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteManagedBlueprintsInstanceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedBlueprintsInstanceUuidApplyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedBlueprintsInstanceUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedBlueprintsAvailableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedBlueprintsImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedBlueprintsValidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
