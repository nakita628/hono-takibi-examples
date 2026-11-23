import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlueprintsBlueprintIdRoute,
  getBlueprintsBlueprintIdRoute,
  getBlueprintsBlueprintIdSyncsRoute,
  getBlueprintsRoute,
  patchBlueprintsBlueprintIdRoute,
  postBlueprintsValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blueprintsHandler = app
  .openapi(getBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlueprintsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlueprintsBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBlueprintsBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlueprintsBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlueprintsBlueprintIdSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
