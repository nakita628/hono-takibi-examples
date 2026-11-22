import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfficesOfficeIdBriefingDownloadBriefingIdRoute,
  getOfficesOfficeIdBriefingDownloadLatestRoute,
  getOfficesOfficeIdBriefingRoute,
  getOfficesOfficeIdHeadlinesHeadlineIdRoute,
  getOfficesOfficeIdHeadlinesRoute,
  getOfficesOfficeIdRoute,
  getOfficesOfficeIdWeatherstoriesDownloadImageIdRoute,
  getOfficesOfficeIdWeatherstoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const officesHandler = app
  .openapi(getOfficesOfficeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdBriefingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdBriefingDownloadLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdBriefingDownloadBriefingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdHeadlinesHeadlineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdHeadlinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdWeatherstoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfficesOfficeIdWeatherstoriesDownloadImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
