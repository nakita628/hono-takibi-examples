import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1StudioProjectsProjectIdChaptersChapterIdRoute,
  deleteV1StudioProjectsProjectIdRoute,
  getV1StudioProjectsProjectIdChaptersChapterIdRoute,
  getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdRoute,
  getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsRoute,
  getV1StudioProjectsProjectIdChaptersRoute,
  getV1StudioProjectsProjectIdMutedTracksRoute,
  getV1StudioProjectsProjectIdRoute,
  getV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdRoute,
  getV1StudioProjectsProjectIdSnapshotsRoute,
  getV1StudioProjectsRoute,
  postV1StudioPodcastsRoute,
  postV1StudioProjectsProjectIdChaptersChapterIdConvertRoute,
  postV1StudioProjectsProjectIdChaptersChapterIdRoute,
  postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamRoute,
  postV1StudioProjectsProjectIdChaptersRoute,
  postV1StudioProjectsProjectIdContentRoute,
  postV1StudioProjectsProjectIdConvertRoute,
  postV1StudioProjectsProjectIdPronunciationDictionariesRoute,
  postV1StudioProjectsProjectIdRoute,
  postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchiveRoute,
  postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamRoute,
  postV1StudioProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const studioHandler = app
  .openapi(postV1StudioPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdPronunciationDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1StudioProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdChaptersChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1StudioProjectsProjectIdChaptersChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StudioProjectsProjectIdChaptersChapterIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1StudioProjectsProjectIdMutedTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
