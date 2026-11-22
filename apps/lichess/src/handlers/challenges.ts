import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiChallengeChallengeIdShowRoute,
  getApiChallengeRoute,
  postApiChallengeAiRoute,
  postApiChallengeChallengeIdAcceptRoute,
  postApiChallengeChallengeIdCancelRoute,
  postApiChallengeChallengeIdDeclineRoute,
  postApiChallengeGameIdStartClocksRoute,
  postApiChallengeOpenRoute,
  postApiChallengeUsernameRoute,
  postApiRoundGameIdAddTimeSecondsRoute,
  postApiTokenAdminChallengeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const challengesHandler = app
  .openapi(getApiChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChallengeChallengeIdShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeChallengeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeChallengeIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeChallengeIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeAiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChallengeGameIdStartClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRoundGameIdAddTimeSecondsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTokenAdminChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
