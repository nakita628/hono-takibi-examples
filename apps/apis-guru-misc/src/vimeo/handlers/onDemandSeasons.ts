import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOndemandPagesOndemandIdSeasonsRoute,
  getOndemandPagesOndemandIdSeasonsSeasonIdRoute,
  getOndemandPagesOndemandIdSeasonsSeasonIdVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandSeasonsHandler = app
  .openapi(getOndemandPagesOndemandIdSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdSeasonsSeasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdSeasonsSeasonIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
