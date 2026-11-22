import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  deleteTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  deleteTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  deleteTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  deleteTeamsTeamIdScheduleRoute,
  deleteTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  deleteTeamsTeamIdScheduleShiftsShiftIdRoute,
  deleteTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  deleteTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  deleteTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  deleteTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  deleteTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  getTeamsTeamIdScheduleDayNotesCountRoute,
  getTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  getTeamsTeamIdScheduleDayNotesRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsCountRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  getTeamsTeamIdScheduleOfferShiftRequestsRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  getTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  getTeamsTeamIdScheduleOpenShiftsCountRoute,
  getTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  getTeamsTeamIdScheduleOpenShiftsRoute,
  getTeamsTeamIdScheduleRoute,
  getTeamsTeamIdScheduleSchedulingGroupsCountRoute,
  getTeamsTeamIdScheduleSchedulingGroupsRoute,
  getTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  getTeamsTeamIdScheduleShiftsCountRoute,
  getTeamsTeamIdScheduleShiftsRoute,
  getTeamsTeamIdScheduleShiftsShiftIdRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  getTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  getTeamsTeamIdScheduleTimeCardsCountRoute,
  getTeamsTeamIdScheduleTimeCardsRoute,
  getTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  getTeamsTeamIdScheduleTimeOffReasonsCountRoute,
  getTeamsTeamIdScheduleTimeOffReasonsRoute,
  getTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  getTeamsTeamIdScheduleTimeOffRequestsCountRoute,
  getTeamsTeamIdScheduleTimeOffRequestsRoute,
  getTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  getTeamsTeamIdScheduleTimesOffCountRoute,
  getTeamsTeamIdScheduleTimesOffRoute,
  getTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  patchTeamsTeamIdScheduleDayNotesDayNoteIdRoute,
  patchTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute,
  patchTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute,
  patchTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute,
  patchTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute,
  patchTeamsTeamIdScheduleShiftsShiftIdRoute,
  patchTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute,
  patchTeamsTeamIdScheduleTimeCardsTimeCardIdRoute,
  patchTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute,
  patchTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute,
  patchTeamsTeamIdScheduleTimesOffTimeOffIdRoute,
  postTeamsTeamIdScheduleDayNotesRoute,
  postTeamsTeamIdScheduleOfferShiftRequestsRoute,
  postTeamsTeamIdScheduleOpenShiftChangeRequestsRoute,
  postTeamsTeamIdScheduleOpenShiftsRoute,
  postTeamsTeamIdScheduleSchedulingGroupsRoute,
  postTeamsTeamIdScheduleShareRoute,
  postTeamsTeamIdScheduleShiftsRoute,
  postTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute,
  postTeamsTeamIdScheduleTimeCardsClockInRoute,
  postTeamsTeamIdScheduleTimeCardsRoute,
  postTeamsTeamIdScheduleTimeCardsTimeCardIdClockOutRoute,
  postTeamsTeamIdScheduleTimeCardsTimeCardIdConfirmRoute,
  postTeamsTeamIdScheduleTimeCardsTimeCardIdEndBreakRoute,
  postTeamsTeamIdScheduleTimeCardsTimeCardIdStartBreakRoute,
  postTeamsTeamIdScheduleTimeOffReasonsRoute,
  postTeamsTeamIdScheduleTimeOffRequestsRoute,
  postTeamsTeamIdScheduleTimesOffRoute,
  putTeamsTeamIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsScheduleHandler = app
  .openapi(getTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleDayNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleDayNotesDayNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleDayNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleOfferShiftRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleOfferShiftRequestsOfferShiftRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOfferShiftRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleOpenShiftChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleOpenShiftChangeRequestsOpenShiftChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleOpenShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleOpenShiftsOpenShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleOpenShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleSchedulingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleSchedulingGroupsSchedulingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSchedulingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleShiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleShiftsShiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleShiftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleSwapShiftsChangeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleSwapShiftsChangeRequestsSwapShiftsChangeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleSwapShiftsChangeRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeCardsTimeCardIdClockOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeCardsTimeCardIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeCardsTimeCardIdEndBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeCardsTimeCardIdStartBreakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeCardsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeCardsClockInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeOffReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleTimeOffReasonsTimeOffReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffReasonsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleTimeOffRequestsTimeOffRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimeOffRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamIdScheduleTimesOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsTeamIdScheduleTimesOffTimeOffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdScheduleTimesOffCountRoute, (c) => {
    throw new Error('Not implemented')
  })
