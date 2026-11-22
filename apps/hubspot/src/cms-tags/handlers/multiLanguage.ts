import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRoute,
  putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiLanguageHandler = app
  .openapi(postCmsBlogs202609TagsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogs202609TagsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609TagsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
