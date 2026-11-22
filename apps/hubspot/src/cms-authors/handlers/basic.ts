import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsBlogs202609AuthorsObjectIdRoute,
  getCmsBlogs202609AuthorsObjectIdRoute,
  getCmsBlogs202609AuthorsRoute,
  patchCmsBlogs202609AuthorsObjectIdRoute,
  postCmsBlogs202609AuthorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCmsBlogs202609AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsBlogs202609AuthorsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsBlogs202609AuthorsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsBlogs202609AuthorsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
