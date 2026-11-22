import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTemplatesTeamsTemplateIdRoute,
  getTeamsTemplatesRoute,
  getTeamsTemplatesTeamsTemplateIdRoute,
  patchTeamsTemplatesTeamsTemplateIdRoute,
  postTeamsTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsTemplatesTeamsTemplateHandler = app
  .openapi(getTeamsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTemplatesTeamsTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTemplatesTeamsTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTemplatesTeamsTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
