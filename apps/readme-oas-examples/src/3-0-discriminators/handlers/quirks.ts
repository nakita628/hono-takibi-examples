import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchImproperDiscriminatorPlacementRoute,
  patchRedoclyFlavoredDiscriminatorRoute,
  postPotentiallyUndefinedFormDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quirksHandler = app
  .openapi(patchImproperDiscriminatorPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRedoclyFlavoredDiscriminatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPotentiallyUndefinedFormDataRoute, (c) => {
    throw new Error('Not implemented')
  })
