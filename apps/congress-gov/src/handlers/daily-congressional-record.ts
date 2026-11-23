import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDailyCongressionalRecordRoute,
  getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute,
  getDailyCongressionalRecordVolumeNumberIssueNumberRoute,
  getDailyCongressionalRecordVolumeNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dailyCongressionalRecordHandler = app
  .openapi(getDailyCongressionalRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDailyCongressionalRecordVolumeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDailyCongressionalRecordVolumeNumberIssueNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
