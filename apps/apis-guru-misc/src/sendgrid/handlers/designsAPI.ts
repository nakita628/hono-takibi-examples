import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDesignsIdRoute,
  getDesignsIdRoute,
  getDesignsPreBuiltsIdRoute,
  getDesignsPreBuiltsRoute,
  getDesignsRoute,
  patchDesignsIdRoute,
  postDesignsIdRoute,
  postDesignsPreBuiltsIdRoute,
  postDesignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const designsAPIHandler = app
  .openapi(getDesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDesignsPreBuiltsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDesignsPreBuiltsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDesignsPreBuiltsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
