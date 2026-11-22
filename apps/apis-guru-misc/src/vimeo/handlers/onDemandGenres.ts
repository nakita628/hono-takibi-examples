import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdGenresGenreIdRoute,
  getOndemandGenresGenreIdPagesOndemandIdRoute,
  getOndemandGenresGenreIdPagesRoute,
  getOndemandGenresGenreIdRoute,
  getOndemandGenresRoute,
  getOndemandPagesOndemandIdGenresGenreIdRoute,
  getOndemandPagesOndemandIdGenresRoute,
  putOndemandPagesOndemandIdGenresGenreIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandGenresHandler = app
  .openapi(getOndemandGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandGenresGenreIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandGenresGenreIdPagesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdGenresGenreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
