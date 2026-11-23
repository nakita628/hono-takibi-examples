import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDesignerTemplatesIdRoute,
  getDesignerTemplatesIdRoute,
  getDesignerTemplatesIndexRoute,
  postDesignerTemplatesIdGenerateRoute,
  postDesignerTemplatesIndexRoute,
  postDesignerTemplatesPreviewRoute,
  putDesignerTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const designerHandler = app
  .openapi(getDesignerTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDesignerTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDesignerTemplatesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDesignerTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDesignerTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDesignerTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDesignerTemplatesIdGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
