import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiMembersHistoryRoute,
  getApiMembersIdBiographyRoute,
  getApiMembersIdContactRoute,
  getApiMembersIdContributionSummaryRoute,
  getApiMembersIdEdmsRoute,
  getApiMembersIdExperienceRoute,
  getApiMembersIdFocusRoute,
  getApiMembersIdLatestElectionResultRoute,
  getApiMembersIdPortraitRoute,
  getApiMembersIdPortraitUrlRoute,
  getApiMembersIdRegisteredInterestsRoute,
  getApiMembersIdRoute,
  getApiMembersIdStaffRoute,
  getApiMembersIdSynopsisRoute,
  getApiMembersIdThumbnailRoute,
  getApiMembersIdThumbnailUrlRoute,
  getApiMembersIdVotingRoute,
  getApiMembersIdWrittenQuestionsRoute,
  getApiMembersSearchHistoricalRoute,
  getApiMembersSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getApiMembersHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersSearchHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdBiographyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdContributionSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdEdmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdExperienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdFocusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdLatestElectionResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdPortraitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdPortraitUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdRegisteredInterestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdSynopsisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdThumbnailUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdVotingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembersIdWrittenQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
