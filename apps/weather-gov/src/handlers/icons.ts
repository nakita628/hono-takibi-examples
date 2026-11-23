import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIconsRoute,
  getIconsSetTimeOfDayFirstRoute,
  getIconsSetTimeOfDayFirstSecondRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iconsHandler = app
  .openapi(getIconsSetTimeOfDayFirstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIconsSetTimeOfDayFirstSecondRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIconsRoute, (c) => {
    throw new Error('Not implemented')
  })
