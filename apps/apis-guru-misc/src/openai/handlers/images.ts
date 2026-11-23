import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postImagesEditsRoute,
  postImagesGenerationsRoute,
  postImagesVariationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(postImagesEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesGenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
