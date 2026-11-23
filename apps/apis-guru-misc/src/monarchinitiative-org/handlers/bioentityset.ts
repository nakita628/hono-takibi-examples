import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBioentitysetAssociationsRoute,
  getBioentitysetDescriptorCountsRoute,
  getBioentitysetGraphRoute,
  getBioentitysetHomologsIndexRoute,
  getBioentitysetOverrepresentationRoute,
  getBioentitysetSlimmerAnatomyRoute,
  getBioentitysetSlimmerFunctionRoute,
  getBioentitysetSlimmerPhenotypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bioentitysetHandler = app
  .openapi(getBioentitysetAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetDescriptorCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetHomologsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetOverrepresentationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetSlimmerAnatomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetSlimmerFunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBioentitysetSlimmerPhenotypeRoute, (c) => {
    throw new Error('Not implemented')
  })
