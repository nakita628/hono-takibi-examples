import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
  deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute,
  deleteAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute,
  deleteAdminServiceAnnouncementRoute,
  getAdminServiceAnnouncementHealthOverviewsCountRoute,
  getAdminServiceAnnouncementHealthOverviewsRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdIncidentReportRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute,
  getAdminServiceAnnouncementIssuesCountRoute,
  getAdminServiceAnnouncementIssuesRoute,
  getAdminServiceAnnouncementIssuesServiceHealthIssueIdIncidentReportRoute,
  getAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute,
  getAdminServiceAnnouncementMessagesCountRoute,
  getAdminServiceAnnouncementMessagesRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute,
  getAdminServiceAnnouncementRoute,
  patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
  patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute,
  patchAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute,
  patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
  patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute,
  patchAdminServiceAnnouncementRoute,
  postAdminServiceAnnouncementHealthOverviewsRoute,
  postAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute,
  postAdminServiceAnnouncementIssuesRoute,
  postAdminServiceAnnouncementMessagesArchiveRoute,
  postAdminServiceAnnouncementMessagesFavoriteRoute,
  postAdminServiceAnnouncementMessagesMarkReadRoute,
  postAdminServiceAnnouncementMessagesMarkUnreadRoute,
  postAdminServiceAnnouncementMessagesRoute,
  postAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute,
  postAdminServiceAnnouncementMessagesUnarchiveRoute,
  postAdminServiceAnnouncementMessagesUnfavoriteRoute,
  putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
  putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminServiceAnnouncementHandler = app
  .openapi(getAdminServiceAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminServiceAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminServiceAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementHealthOverviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementHealthOverviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdIncidentReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementHealthOverviewsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementIssuesServiceHealthIssueIdIncidentReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementIssuesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminServiceAnnouncementMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMarkReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesMarkUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminServiceAnnouncementMessagesUnfavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
