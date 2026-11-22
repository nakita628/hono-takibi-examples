import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentSitesRoute, postV1beta1ParentSitesRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1beta1ParentSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
