import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTemplateFilesAsDataUriTemplateIdRoute,
  getTemplateFilesAsFileUrlTemplateIdRoute,
  getTemplateFilesTemplateIdRoute,
  getTemplateListRoute,
  getTemplateTemplateIdRoute,
  postTemplateAddUserTemplateIdRoute,
  postTemplateCreateEmbeddedDraftRoute,
  postTemplateCreateRoute,
  postTemplateDeleteTemplateIdRoute,
  postTemplateRemoveUserTemplateIdRoute,
  postTemplateUpdateFilesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateHandler = app
  .openapi(postTemplateAddUserTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateCreateEmbeddedDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateDeleteTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateFilesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateFilesAsDataUriTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateFilesAsFileUrlTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateRemoveUserTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateUpdateFilesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
