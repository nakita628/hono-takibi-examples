import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomTemplatesIdRoute,
  getCustomTemplatesIdFileRoute,
  getCustomTemplatesIdRoute,
  getCustomTemplatesRoute,
  postCustomTemplatesCreateFileRoute,
  postCustomTemplatesCreateRepositoryRoute,
  postCustomTemplatesCreateStringRoute,
  putCustomTemplatesIdGitFetchRoute,
  putCustomTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customTemplatesHandler = app
  .openapi(getCustomTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomTemplatesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomTemplatesIdGitFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomTemplatesCreateFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomTemplatesCreateRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomTemplatesCreateStringRoute, (c) => {
    throw new Error('Not implemented')
  })
