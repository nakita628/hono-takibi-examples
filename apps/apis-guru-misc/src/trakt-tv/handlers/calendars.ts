import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCalendarsAllDvdStartDateDaysRoute,
  getCalendarsAllMoviesStartDateDaysRoute,
  getCalendarsAllShowsNewStartDateDaysRoute,
  getCalendarsAllShowsPremieresStartDateDaysRoute,
  getCalendarsAllShowsStartDateDaysRoute,
  getCalendarsMyDvdStartDateDaysRoute,
  getCalendarsMyMoviesStartDateDaysRoute,
  getCalendarsMyShowsNewStartDateDaysRoute,
  getCalendarsMyShowsPremieresStartDateDaysRoute,
  getCalendarsMyShowsStartDateDaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarsHandler = app
  .openapi(getCalendarsAllDvdStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsAllMoviesStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsAllShowsNewStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsAllShowsPremieresStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsAllShowsStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsMyDvdStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsMyMoviesStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsMyShowsNewStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsMyShowsPremieresStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsMyShowsStartDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
