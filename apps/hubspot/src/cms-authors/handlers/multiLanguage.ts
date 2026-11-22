import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRoute,
  postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRoute,
  postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRoute,
  postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRoute,
  putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiLanguageHandler = app
  .openapi(postCmsBlogs202609AuthorsMultiLanguageAttachToLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageCreateLanguageVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageDetachFromLangGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsBlogs202609AuthorsMultiLanguageSetNewLangPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsBlogs202609AuthorsMultiLanguageUpdateLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
