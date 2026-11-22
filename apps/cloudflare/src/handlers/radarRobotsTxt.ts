import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarRobotsTxtTopDomainCategoriesRoute,
  getRadarRobotsTxtTopUserAgentsDirectiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarRobotsTxtHandler = app
  .openapi(getRadarRobotsTxtTopDomainCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarRobotsTxtTopUserAgentsDirectiveRoute, (c) => {
    throw new Error('Not implemented')
  })
