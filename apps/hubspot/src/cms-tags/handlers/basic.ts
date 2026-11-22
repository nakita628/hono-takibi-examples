import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsBlogs202609TagsObjectIdRoute,
  getCmsBlogs202609AuthorsCursorQueryRoute,
  getCmsBlogs202609AuthorsCursorRoute,
  getCmsBlogs202609PostsCursorQueryRoute,
  getCmsBlogs202609PostsCursorRoute,
  getCmsBlogs202609TagsCursorQueryRoute,
  getCmsBlogs202609TagsCursorRoute,
  getCmsBlogs202609TagsObjectIdRoute,
  getCmsBlogs202609TagsRoute,
  patchCmsBlogs202609TagsObjectIdRoute,
  postCmsBlogs202609TagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCmsBlogs202609AuthorsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609AuthorsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609PostsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsCursorQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609TagsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsBlogs202609TagsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609TagsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
