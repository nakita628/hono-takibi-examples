declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/user-content/by-date.json': {
      $get: {
        input: { query: { date?: string | undefined } }
        output: {
          copyright?: string | undefined
          debug?: { version?: number | undefined } | undefined
          results?:
            | {
                api_timestamp?: string | undefined
                comments?:
                  | {
                      approveDate?: string | undefined
                      assetID?: number | undefined
                      assetURL?: string | undefined
                      commentBody?: string | undefined
                      commentID?: number | undefined
                      commentSequence?: number | undefined
                      commentTitle?: string | undefined
                      commentType?: string | undefined
                      createDate?: string | undefined
                      editorsSelection?: number | undefined
                      lft?: number | undefined
                      parentID?: ({ [x: string]: unknown } | null) | undefined
                      recommendationCount?: number | undefined
                      replies?: { [x: string]: unknown }[] | undefined
                      replyCount?: number | undefined
                      rgt?: number | undefined
                      status?: string | undefined
                      statusID?: number | undefined
                      updateDate?: string | undefined
                      userDisplayName?: string | undefined
                      userID?: number | undefined
                      userLocation?: string | undefined
                      userTitle?: string | undefined
                      userURL?: number | undefined
                    }[]
                  | undefined
                totalCommentsFound?: number | undefined
                totalCommentsReturned?: number | undefined
              }
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user-content/recent.json': {
      $get: {
        input: {}
        output: {
          copyright?: string | undefined
          debug?: { version?: number | undefined } | undefined
          results?:
            | {
                api_timestamp?: string | undefined
                comments?:
                  | {
                      approveDate?: string | undefined
                      asset?:
                        | {
                            'all-properties'?:
                              | {
                                  description?: string | undefined
                                  name?: string | undefined
                                  properties?: { [x: string]: unknown }[] | undefined
                                }[]
                              | undefined
                            assetID?: number | undefined
                            assetTitle?: string | undefined
                            assetURL?: string | undefined
                            createDate?: string | undefined
                            labels?: { [x: string]: unknown }[] | undefined
                            properties?:
                              | {
                                  'automoderation-on'?:
                                    | {
                                        groupID?: number | undefined
                                        taxonomyID?: number | undefined
                                      }
                                    | undefined
                                  'comment-list-sort-editors'?:
                                    | {
                                        groupID?: number | undefined
                                        taxonomyID?: number | undefined
                                      }
                                    | undefined
                                  'reached-max-com-off'?:
                                    | {
                                        groupID?: number | undefined
                                        taxonomyID?: number | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            source?: string | undefined
                            taxonomy?: string | undefined
                            text?: { [x: string]: unknown }[] | undefined
                            updateDate?: string | undefined
                            vendorID?: string | undefined
                          }
                        | undefined
                      assetID?: number | undefined
                      commentBody?: string | undefined
                      commentID?: number | undefined
                      commentSequence?: number | undefined
                      commentTitle?: string | undefined
                      commentType?: string | undefined
                      createDate?: string | undefined
                      display_name?: string | undefined
                      editorsSelection?: number | undefined
                      location?: string | undefined
                      parentID?: ({ [x: string]: unknown } | null) | undefined
                      recommendationCount?: number | undefined
                      replies?: { [x: string]: unknown }[] | undefined
                      status?: string | undefined
                      statusID?: number | undefined
                      updateDate?: string | undefined
                      userDisplayName?: string | undefined
                      userID?: number | undefined
                      userLocation?: string | undefined
                      userTitle?: string | undefined
                      userURL?: string | undefined
                    }[]
                  | undefined
                totalCommentsReturned?: number | undefined
              }
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user-content/url.json': {
      $get: {
        input: { query: { url?: string | undefined } }
        output: {
          copyright?: string | undefined
          debug?: { version?: number | undefined } | undefined
          results?:
            | {
                api_timestamp?: string | undefined
                callerID?: ({ [x: string]: unknown } | null) | undefined
                comments?:
                  | {
                      approveDate?: string | undefined
                      commentBody?: string | undefined
                      commentID?: number | undefined
                      commentSequence?: number | undefined
                      commentTitle?: string | undefined
                      commentType?: string | undefined
                      createDate?: string | undefined
                      depth?: number | undefined
                      editorsSelection?: boolean | undefined
                      parentID?: ({ [x: string]: unknown } | null) | undefined
                      parentUserDisplayName?: ({ [x: string]: unknown } | null) | undefined
                      permID?: string | undefined
                      picURL?: string | undefined
                      recommendations?: number | undefined
                      recommendedFlag?: ({ [x: string]: unknown } | null) | undefined
                      replies?: { [x: string]: unknown }[] | undefined
                      replyCount?: number | undefined
                      reportAbuseFlag?: ({ [x: string]: unknown } | null) | undefined
                      sharing?: number | undefined
                      status?: string | undefined
                      timespeople?: number | undefined
                      trusted?: number | undefined
                      updateDate?: string | undefined
                      userDisplayName?: string | undefined
                      userID?: number | undefined
                      userLocation?: string | undefined
                      userTitle?: ({ [x: string]: unknown } | null) | undefined
                      userURL?: ({ [x: string]: unknown } | null) | undefined
                    }[]
                  | undefined
                depthLimit?: number | undefined
                filter?: (string | null) | undefined
                page?: number | undefined
                replyLimit?: number | undefined
                sort?: string | undefined
                totalCommentsFound?: number | undefined
                totalCommentsReturned?: number | undefined
                totalEditorsSelectionFound?: number | undefined
                totalEditorsSelectionReturned?: number | undefined
                totalParentCommentsFound?: number | undefined
                totalParentCommentsReturned?: number | undefined
                totalRecommendationsFound?: number | undefined
                totalRecommendationsReturned?: number | undefined
                totalReplyCommentsFound?: number | undefined
                totalReplyCommentsReturned?: number | undefined
                totalReporterReplyCommentsFound?: number | undefined
                totalReporterReplyCommentsReturned?: number | undefined
              }
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user-content/user.json': {
      $get: {
        input: { query: { userID?: number | undefined } }
        output: {
          copyright?: string | undefined
          debug?: { version?: number | undefined } | undefined
          results?:
            | {
                api_timestamp?: string | undefined
                comments?:
                  | {
                      approveDate?: string | undefined
                      asset?:
                        | {
                            'all-properties'?:
                              | {
                                  description?: string | undefined
                                  name?: string | undefined
                                  properties?: { [x: string]: unknown }[] | undefined
                                }[]
                              | undefined
                            assetID?: number | undefined
                            assetTitle?: string | undefined
                            assetURL?: string | undefined
                            createDate?: string | undefined
                            labels?:
                              | { labelID?: number | undefined; labelName?: string | undefined }[]
                              | undefined
                            properties?:
                              | {
                                  'automoderation-off'?:
                                    | {
                                        groupID?: number | undefined
                                        taxonomyID?: number | undefined
                                      }
                                    | undefined
                                  'comment-list-sort-approvedate-desc'?:
                                    | {
                                        groupID?: number | undefined
                                        taxonomyID?: number | undefined
                                      }
                                    | undefined
                                  'reached-max-com-on'?:
                                    | {
                                        groupID?: number | undefined
                                        taxonomyID?: number | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            source?: string | undefined
                            taxonomy?: string | undefined
                            text?: { [x: string]: unknown }[] | undefined
                            updateDate?: string | undefined
                            vendorID?: string | undefined
                          }
                        | undefined
                      commentBody?: string | undefined
                      commentID?: number | undefined
                      commentSequence?: number | undefined
                      commentTitle?: string | undefined
                      commentType?: string | undefined
                      createDate?: string | undefined
                      editorsSelection?: boolean | undefined
                      labels?: { [x: string]: unknown }[] | undefined
                      parentID?: ({ [x: string]: unknown } | null) | undefined
                      permid?: number | undefined
                      picURL?: string | undefined
                      recommendations?: number | undefined
                      replies?: { [x: string]: unknown }[] | undefined
                      replyCount?: number | undefined
                      status?: string | undefined
                      updateDate?: string | undefined
                      userDisplayName?: ({ [x: string]: unknown } | null) | undefined
                      userID?: number | undefined
                      userLocation?: ({ [x: string]: unknown } | null) | undefined
                      userSubmittedDisplayName?: string | undefined
                      userSubmittedLocation?: string | undefined
                      userSubmittedTitle?: ({ [x: string]: unknown } | null) | undefined
                      userSubmittedURL?: ({ [x: string]: unknown } | null) | undefined
                      userTitle?: ({ [x: string]: unknown } | null) | undefined
                      userURL?: ({ [x: string]: unknown } | null) | undefined
                    }[]
                  | undefined
                totalCommentsFound?: number | undefined
                totalCommentsReturned?: number | undefined
              }
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
