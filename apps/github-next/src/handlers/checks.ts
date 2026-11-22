import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReposOwnerRepoCheckRunsCheckRunIdAnnotationsRoute,
  getReposOwnerRepoCheckRunsCheckRunIdRoute,
  getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRunsRoute,
  getReposOwnerRepoCheckSuitesCheckSuiteIdRoute,
  getReposOwnerRepoCommitsRefCheckRunsRoute,
  getReposOwnerRepoCommitsRefCheckSuitesRoute,
  patchReposOwnerRepoCheckRunsCheckRunIdRoute,
  patchReposOwnerRepoCheckSuitesPreferencesRoute,
  postReposOwnerRepoCheckRunsCheckRunIdRerequestRoute,
  postReposOwnerRepoCheckRunsRoute,
  postReposOwnerRepoCheckSuitesCheckSuiteIdRerequestRoute,
  postReposOwnerRepoCheckSuitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksHandler = app
  .openapi(postReposOwnerRepoCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckRunsCheckRunIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckRunsCheckRunIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCheckSuitesPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckSuitesCheckSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckSuitesCheckSuiteIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefCheckSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
