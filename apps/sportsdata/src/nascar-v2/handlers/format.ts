import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDriverDriveridRoute,
  getFormatDriverRaceProjectionsRaceidRoute,
  getFormatDriversRoute,
  getFormatRaceresultRaceidRoute,
  getFormatRacesSeasonRoute,
  getFormatSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatDriverRaceProjectionsRaceidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDriverDriveridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRaceresultRaceidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRacesSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
