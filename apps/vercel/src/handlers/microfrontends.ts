import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1MicrofrontendsDeploymentIdConfigRoute,
  getV1MicrofrontendsGroupsGroupIdProjectsRoute,
  getV1MicrofrontendsGroupsRoute,
  getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigRoute,
  postV1MicrofrontendsGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const microfrontendsHandler = app
  .openapi(getV1MicrofrontendsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MicrofrontendsGroupsGroupIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MicrofrontendsDeploymentIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MicrofrontendsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
