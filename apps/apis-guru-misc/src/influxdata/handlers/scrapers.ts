import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScrapersScraperTargetIDLabelsLabelIDRoute,
  deleteScrapersScraperTargetIDMembersUserIDRoute,
  deleteScrapersScraperTargetIDOwnersUserIDRoute,
  deleteScrapersScraperTargetIDRoute,
  getScrapersRoute,
  getScrapersScraperTargetIDLabelsRoute,
  getScrapersScraperTargetIDMembersRoute,
  getScrapersScraperTargetIDOwnersRoute,
  getScrapersScraperTargetIDRoute,
  patchScrapersScraperTargetIDRoute,
  postScrapersRoute,
  postScrapersScraperTargetIDLabelsRoute,
  postScrapersScraperTargetIDMembersRoute,
  postScrapersScraperTargetIDOwnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scrapersHandler = app
  .openapi(getScrapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrapersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScrapersScraperTargetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrapersScraperTargetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScrapersScraperTargetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrapersScraperTargetIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrapersScraperTargetIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScrapersScraperTargetIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrapersScraperTargetIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrapersScraperTargetIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScrapersScraperTargetIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrapersScraperTargetIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrapersScraperTargetIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScrapersScraperTargetIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
