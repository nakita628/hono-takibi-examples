import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getUserContentByDateJsonRoute = createRoute({
  method: 'get',
  path: '/user-content/by-date.json',
  summary: 'Comments by Date',
  operationId: 'GET_user-content-by-date-json',
  request: {
    query: z.object({
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'date', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              debug: z
                .object({ version: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              results: z
                .object({
                  api_timestamp: z.string().exactOptional(),
                  comments: z
                    .array(
                      z
                        .object({
                          approveDate: z.string().exactOptional(),
                          assetID: z.int().exactOptional(),
                          assetURL: z.string().exactOptional(),
                          commentBody: z.string().exactOptional(),
                          commentID: z.int().exactOptional(),
                          commentSequence: z.int().exactOptional(),
                          commentTitle: z.string().exactOptional(),
                          commentType: z.string().exactOptional(),
                          createDate: z.string().exactOptional(),
                          editorsSelection: z.int().exactOptional(),
                          lft: z.int().exactOptional(),
                          parentID: z.any().nullable().exactOptional(),
                          recommendationCount: z.int().exactOptional(),
                          replies: z.array(z.object({})).exactOptional(),
                          replyCount: z.int().exactOptional(),
                          rgt: z.int().exactOptional(),
                          status: z.string().exactOptional(),
                          statusID: z.int().exactOptional(),
                          updateDate: z.string().exactOptional(),
                          userDisplayName: z.string().exactOptional(),
                          userID: z.int().exactOptional(),
                          userLocation: z.string().exactOptional(),
                          userTitle: z.string().exactOptional(),
                          userURL: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  totalCommentsFound: z.int().exactOptional(),
                  totalCommentsReturned: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                debug: { version: 3.1 },
                results: {
                  api_timestamp: '1458149967',
                  comments: [
                    {
                      approveDate: '1451710808',
                      assetID: 3444599,
                      assetURL: 'http://cooking.nytimes.com/recipes/1017904',
                      commentBody:
                        'We used black eyed peas and kale (couldn&#x27;t find mustard greens), and this recipe is fantastic! With cornbread it was perfect!',
                      commentID: 17096625,
                      commentSequence: 17096625,
                      commentTitle: '<br/>',
                      commentType: 'comment',
                      createDate: '1451710797',
                      editorsSelection: 0,
                      lft: 42,
                      parentID: null,
                      recommendationCount: 0,
                      replies: [],
                      replyCount: 0,
                      rgt: 43,
                      status: 'approved',
                      statusID: 2,
                      updateDate: '1451710808',
                      userDisplayName: 'Sharon',
                      userID: 72856041,
                      userLocation: '<br/>',
                      userTitle: 'NULL',
                      userURL: 72856041,
                    },
                  ],
                  totalCommentsFound: 4121,
                  totalCommentsReturned: 25,
                },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getUserContentRecentJsonRoute = createRoute({
  method: 'get',
  path: '/user-content/recent.json',
  summary: 'Recent User Comments',
  operationId: 'GET_user-content-recent-json',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              debug: z
                .object({ version: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              results: z
                .object({
                  api_timestamp: z.string().exactOptional(),
                  comments: z
                    .array(
                      z
                        .object({
                          approveDate: z.string().exactOptional(),
                          asset: z
                            .object({
                              'all-properties': z
                                .array(
                                  z
                                    .object({
                                      description: z.string().exactOptional(),
                                      name: z.string().exactOptional(),
                                      properties: z.array(z.object({})).exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              assetID: z.int().exactOptional(),
                              assetTitle: z.string().exactOptional(),
                              assetURL: z.string().exactOptional(),
                              createDate: z.string().exactOptional(),
                              labels: z.array(z.object({})).exactOptional(),
                              properties: z
                                .object({
                                  'automoderation-on': z
                                    .object({
                                      groupID: z.int().exactOptional(),
                                      taxonomyID: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  'comment-list-sort-editors': z
                                    .object({
                                      groupID: z.int().exactOptional(),
                                      taxonomyID: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  'reached-max-com-off': z
                                    .object({
                                      groupID: z.int().exactOptional(),
                                      taxonomyID: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              source: z.string().exactOptional(),
                              taxonomy: z.string().exactOptional(),
                              text: z.array(z.object({})).exactOptional(),
                              updateDate: z.string().exactOptional(),
                              vendorID: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          assetID: z.int().exactOptional(),
                          commentBody: z.string().exactOptional(),
                          commentID: z.int().exactOptional(),
                          commentSequence: z.int().exactOptional(),
                          commentTitle: z.string().exactOptional(),
                          commentType: z.string().exactOptional(),
                          createDate: z.string().exactOptional(),
                          display_name: z.string().exactOptional(),
                          editorsSelection: z.int().exactOptional(),
                          location: z.string().exactOptional(),
                          parentID: z.any().nullable().exactOptional(),
                          recommendationCount: z.int().exactOptional(),
                          replies: z.array(z.object({})).exactOptional(),
                          status: z.string().exactOptional(),
                          statusID: z.int().exactOptional(),
                          updateDate: z.string().exactOptional(),
                          userDisplayName: z.string().exactOptional(),
                          userID: z.int().exactOptional(),
                          userLocation: z.string().exactOptional(),
                          userTitle: z.string().exactOptional(),
                          userURL: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  totalCommentsReturned: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                debug: { version: 3.1 },
                results: {
                  api_timestamp: '1458149501',
                  comments: [
                    {
                      approveDate: '1458149469',
                      asset: {
                        'all-properties': [
                          { description: 'Not in a group', name: 'no-group', properties: [] },
                        ],
                        assetID: 3449092,
                        assetTitle: 'Kasich, the Boulder Between the G.O.P. and Trump (16collins)',
                        assetURL:
                          'http://www.nytimes.com/2016/03/16/opinion/campaign-stops/kasich-the-boulder-between-the-gop.html',
                        createDate: '1458096538',
                        labels: [],
                        properties: {
                          'automoderation-on': { groupID: 2, taxonomyID: 364114 },
                          'comment-list-sort-editors': { groupID: 1, taxonomyID: 364114 },
                          'reached-max-com-off': { groupID: 3, taxonomyID: 9188 },
                        },
                        source: 'url',
                        taxonomies: [[{ name: 'opinion', taxonomyID: 9188 }]],
                        taxonomy:
                          'opinion/Kasich, the Boulder Between the G.O.P. and Trump (16collins)',
                        text: [],
                        updateDate: '1458149477',
                        vendorID: 'MQdKLYFNCfZ7XvixkGz2rw==',
                      },
                      assetID: 3449092,
                      commentBody:
                        "Two things to know about our Governor Kasich. First, he was one of the few Republican governors to accept Obamacare and Medicaid expansion in Ohio, despite the efforts of legislators from his party. Second, as Gail Collins pointed out, he has done everything in his power to eliminate access to safe abortion in Ohio. This will soon include a bill he is expected to sign that will make it illegal for women to have an abortion after learning their fetus has Down's syndrome. Like most candidates these days, we have to take the good with the bad.",
                      commentID: 17912830,
                      commentSequence: 17912830,
                      commentTitle: '<br/>',
                      commentType: 'comment',
                      createDate: '1458149421',
                      display_name: 'DD',
                      editorsSelection: 0,
                      location: 'Cincinnati, OH',
                      parentID: null,
                      recommendationCount: 0,
                      replies: [],
                      status: 'approved',
                      statusID: 2,
                      updateDate: '1458149469',
                      userDisplayName: 'DD',
                      userID: 64507566,
                      userLocation: 'Cincinnati, OH',
                      userTitle: 'NULL',
                      userURL: 'NULL',
                    },
                  ],
                  totalCommentsReturned: 25,
                },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getUserContentUrlJsonRoute = createRoute({
  method: 'get',
  path: '/user-content/url.json',
  summary: 'Comments by URL',
  operationId: 'GET_user-content-url-json',
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'url', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              debug: z
                .object({ version: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              results: z
                .object({
                  api_timestamp: z.string().exactOptional(),
                  callerID: z.any().nullable().exactOptional(),
                  comments: z
                    .array(
                      z
                        .object({
                          approveDate: z.string().exactOptional(),
                          commentBody: z.string().exactOptional(),
                          commentID: z.int().exactOptional(),
                          commentSequence: z.int().exactOptional(),
                          commentTitle: z.string().exactOptional(),
                          commentType: z.string().exactOptional(),
                          createDate: z.string().exactOptional(),
                          depth: z.int().exactOptional(),
                          editorsSelection: z.boolean().exactOptional(),
                          parentID: z.any().nullable().exactOptional(),
                          parentUserDisplayName: z.any().nullable().exactOptional(),
                          permID: z.string().exactOptional(),
                          picURL: z.string().exactOptional(),
                          recommendations: z.int().exactOptional(),
                          recommendedFlag: z.any().nullable().exactOptional(),
                          replies: z.array(z.any()).exactOptional(),
                          replyCount: z.int().exactOptional(),
                          reportAbuseFlag: z.any().nullable().exactOptional(),
                          sharing: z.int().exactOptional(),
                          status: z.string().exactOptional(),
                          timespeople: z.int().exactOptional(),
                          trusted: z.int().exactOptional(),
                          updateDate: z.string().exactOptional(),
                          userDisplayName: z.string().exactOptional(),
                          userID: z.int().exactOptional(),
                          userLocation: z.string().exactOptional(),
                          userTitle: z.any().nullable().exactOptional(),
                          userURL: z.any().nullable().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  depthLimit: z.int().exactOptional(),
                  filter: z.string().nullable().exactOptional(),
                  page: z.int().exactOptional(),
                  replyLimit: z.int().exactOptional(),
                  sort: z.string().exactOptional(),
                  totalCommentsFound: z.int().exactOptional(),
                  totalCommentsReturned: z.int().exactOptional(),
                  totalEditorsSelectionFound: z.int().exactOptional(),
                  totalEditorsSelectionReturned: z.int().exactOptional(),
                  totalParentCommentsFound: z.int().exactOptional(),
                  totalParentCommentsReturned: z.int().exactOptional(),
                  totalRecommendationsFound: z.int().exactOptional(),
                  totalRecommendationsReturned: z.int().exactOptional(),
                  totalReplyCommentsFound: z.int().exactOptional(),
                  totalReplyCommentsReturned: z.int().exactOptional(),
                  totalReporterReplyCommentsFound: z.int().exactOptional(),
                  totalReporterReplyCommentsReturned: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                debug: { version: 3.1 },
                results: {
                  api_timestamp: '1455718117',
                  callerID: null,
                  comments: [
                    {
                      approveDate: '1199322293',
                      commentBody:
                        'I have always wondered how much energy US would save if it shut down Vegas? Can you imagine the amount of electricity consumed on the strip, the ice melted for its water supply - all in the name of gambling? That\'s the kind of consumerism I would like to see halted. Same goes for all the downtown skylines which cause so much light pollution. Even a simple thing like having an "off" switch in the homes rather than just power outlets would save a lot of energy and hopefully make a huge difference in the "consumption footprint." Can American live with that?<br/><br/>As for the growing economies of China & India: the increased industrialization has also increased environmental pollution in those countries. West has conveniently handed down it\'s dirty work to them. And at the same time we have Americans screaming about lost jobs. When will they realize that they can\'t have it both ways?<br/><br/>All in all they are acting like spoilt brats who have realized that they are no longer the teacher\'s favorite. Is it surprising that other folks hate you for your spoilt ways, at the same time envying how you have it so easy?<br/><br/>',
                      commentID: 20831,
                      commentSequence: 138,
                      commentTitle: '',
                      commentType: 'comment',
                      createDate: '1199309173',
                      depth: 1,
                      editorsSelection: false,
                      parentID: null,
                      parentUserDisplayName: null,
                      permID: '138',
                      picURL: 'http://graphics8.nytimes.com/images/apps/timespeople/none.png',
                      recommendations: 5,
                      recommendedFlag: null,
                      replies: [],
                      replyCount: 0,
                      reportAbuseFlag: null,
                      sharing: 0,
                      status: 'approved',
                      timespeople: 1,
                      trusted: 0,
                      updateDate: '1199322293',
                      userDisplayName: 'byakushi',
                      userID: 44150303,
                      userLocation: 'US',
                      userTitle: null,
                      userURL: null,
                    },
                  ],
                  depthLimit: 0,
                  filter: '',
                  page: 1,
                  replyLimit: 3,
                  sort: 'oldest',
                  totalCommentsFound: 138,
                  totalCommentsReturned: 25,
                  totalEditorsSelectionFound: 13,
                  totalEditorsSelectionReturned: 1,
                  totalParentCommentsFound: 138,
                  totalParentCommentsReturned: 25,
                  totalRecommendationsFound: 118,
                  totalRecommendationsReturned: 23,
                  totalReplyCommentsFound: 0,
                  totalReplyCommentsReturned: 0,
                  totalReporterReplyCommentsFound: 0,
                  totalReporterReplyCommentsReturned: 0,
                },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getUserContentUserJsonRoute = createRoute({
  method: 'get',
  path: '/user-content/user.json',
  summary: 'Comments by User',
  operationId: 'GET_user-content-user-json',
  request: {
    query: z.object({
      userID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'userID', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              debug: z
                .object({ version: z.number().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              results: z
                .object({
                  api_timestamp: z.string().exactOptional(),
                  comments: z
                    .array(
                      z
                        .object({
                          approveDate: z.string().exactOptional(),
                          asset: z
                            .object({
                              'all-properties': z
                                .array(
                                  z
                                    .object({
                                      description: z.string().exactOptional(),
                                      name: z.string().exactOptional(),
                                      properties: z.array(z.object({})).exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              assetID: z.int().exactOptional(),
                              assetTitle: z.string().exactOptional(),
                              assetURL: z.string().exactOptional(),
                              createDate: z.string().exactOptional(),
                              labels: z
                                .array(
                                  z
                                    .object({
                                      labelID: z.int().exactOptional(),
                                      labelName: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              properties: z
                                .object({
                                  'automoderation-off': z
                                    .object({
                                      groupID: z.int().exactOptional(),
                                      taxonomyID: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  'comment-list-sort-approvedate-desc': z
                                    .object({
                                      groupID: z.int().exactOptional(),
                                      taxonomyID: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  'reached-max-com-on': z
                                    .object({
                                      groupID: z.int().exactOptional(),
                                      taxonomyID: z.int().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              source: z.string().exactOptional(),
                              taxonomy: z.string().exactOptional(),
                              text: z.array(z.object({})).exactOptional(),
                              updateDate: z.string().exactOptional(),
                              vendorID: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          commentBody: z.string().exactOptional(),
                          commentID: z.int().exactOptional(),
                          commentSequence: z.int().exactOptional(),
                          commentTitle: z.string().exactOptional(),
                          commentType: z.string().exactOptional(),
                          createDate: z.string().exactOptional(),
                          editorsSelection: z.boolean().exactOptional(),
                          labels: z.array(z.object({})).exactOptional(),
                          parentID: z.any().nullable().exactOptional(),
                          permid: z.int().exactOptional(),
                          picURL: z.string().exactOptional(),
                          recommendations: z.int().exactOptional(),
                          replies: z.array(z.object({})).exactOptional(),
                          replyCount: z.int().exactOptional(),
                          status: z.string().exactOptional(),
                          updateDate: z.string().exactOptional(),
                          userDisplayName: z.any().nullable().exactOptional(),
                          userID: z.int().exactOptional(),
                          userLocation: z.any().nullable().exactOptional(),
                          userSubmittedDisplayName: z.string().exactOptional(),
                          userSubmittedLocation: z.string().exactOptional(),
                          userSubmittedTitle: z.any().nullable().exactOptional(),
                          userSubmittedURL: z.any().nullable().exactOptional(),
                          userTitle: z.any().nullable().exactOptional(),
                          userURL: z.any().nullable().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  totalCommentsFound: z.int().exactOptional(),
                  totalCommentsReturned: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                debug: { version: 3.1 },
                results: {
                  api_timestamp: '1458150045',
                  comments: [
                    {
                      approveDate: '1316728099',
                      asset: {
                        'all-properties': [
                          { description: 'Not in a group', name: 'no-group', properties: [] },
                        ],
                        assetID: 3267087,
                        assetTitle: 'Cellphone Service Coming to the Subway',
                        assetURL:
                          'http://cityroom.blogs.nytimes.com/2011/09/22/cell-phone-service-on-some-subway-platforms-starts-next-week/',
                        createDate: '1316722025',
                        labels: [{ labelID: 54906, labelName: 'NYT_Blogs' }],
                        properties: {
                          'automoderation-off': { groupID: 2, taxonomyID: 199832 },
                          'comment-list-sort-approvedate-desc': { groupID: 1, taxonomyID: 199832 },
                          'reached-max-com-on': { groupID: 3, taxonomyID: 199832 },
                        },
                        source: 'url',
                        taxonomies: [[{ name: 'blogs', taxonomyID: 70457 }]],
                        taxonomy: 'blogs/cityroom/Cellphone Service Coming to the Subway',
                        text: [],
                        updateDate: '1319743568',
                        vendorID: 'P12Rq7kT2AvJyomlFgcylQ==',
                      },
                      commentBody: 'time to Google for "cell phone signal blocker"...',
                      commentID: 4570862,
                      commentSequence: 10,
                      commentTitle: 'hardcoded comment title',
                      commentType: 'comment',
                      createDate: '1316723787',
                      editorsSelection: false,
                      labels: [],
                      parentID: null,
                      permid: 10,
                      picURL:
                        'http://pimage.timespeople.nytimes.com/2364/811/cropped-2364811.jpg?0.8428952772024576',
                      recommendations: 11,
                      replies: [],
                      replyCount: 0,
                      status: 'approved',
                      updateDate: '1316728099',
                      userDisplayName: null,
                      userID: 2364811,
                      userLocation: null,
                      userSubmittedDisplayName: 'Jim',
                      userSubmittedLocation: 'NYC',
                      userSubmittedTitle: null,
                      userSubmittedURL: null,
                      userTitle: null,
                      userURL: null,
                    },
                  ],
                  totalCommentsFound: 2,
                  totalCommentsReturned: 2,
                },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})
