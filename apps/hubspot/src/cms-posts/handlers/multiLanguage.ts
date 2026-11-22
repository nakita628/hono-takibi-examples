import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRoute,
  putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiLanguageHandler = app
  .openapi(postCmsBlogs202609PostsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogs202609PostsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609PostsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
