import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBioentitysetAssociationsRoute,
  getBioentitysetDescriptorCountsRoute,
  getBioentitysetGraphRoute,
  getBioentitysetOverrepresentationRoute,
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
  .openapi(getBioentitysetOverrepresentationRoute, (c) => {
    throw new Error('Not implemented')
  })
