type RepoId = {
  name: string
  type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/notifications': {
      $get: {
        input: {
          query: {
            p?: number | undefined
            readStatus?: 'all' | 'unread' | undefined
            repoType?: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | undefined
            repoName?: string | undefined
            postAuthor?: string | undefined
            paperId?: string | undefined
            articleId?: string | undefined
            mention?: 'all' | 'participating' | 'mentions' | undefined
            lastUpdate?: string | undefined
          }
        }
        output: {
          notifications: (
            | {
                type: 'paper'
                updatedAt: string
                read: boolean
                discussionEventId?: string | undefined
                paper: { _id: string; title: string }
                paperDiscussion: {
                  id: string
                  participating: { _id: string; avatar: string; user: string }[]
                  paperId: string
                }
              }
            | {
                type: 'repo'
                updatedAt: string
                read: boolean
                discussionEventId?: string | undefined
                repo: RepoId
                discussion: {
                  num: number
                  title: string
                  status: 'draft' | 'open' | 'closed' | 'merged'
                  id: string
                  isPullRequest: boolean
                  participating: { _id: string; avatar: string; user: string }[]
                }
              }
            | {
                type: 'post'
                updatedAt: string
                read: boolean
                discussionEventId?: string | undefined
                post: {
                  id: string
                  slug: string
                  authorName: string
                  title: string
                  participating: { _id: string; avatar: string; user: string }[]
                }
              }
            | {
                type: 'community_blog'
                updatedAt: string
                read: boolean
                discussionEventId?: string | undefined
                blog: {
                  id: string
                  slug: string
                  title: string
                  canonical: boolean
                  authorName?: string | undefined
                  participating: { _id: string; avatar: string; user: string }[]
                }
              }
          )[]
          count: { view: number; unread: number; all: number }
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/mcp': {
      $get: {
        input: {}
        output: {
          builtInTools: string[]
          spaceTools: { _id: string; name: string; emoji: string; subdomain: string }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/webhooks': {
      $get: {
        input: {}
        output: {
          id: string
          url?: string | undefined
          job?:
            | {
                dockerImage?: string | undefined
                spaceId: {}
                environment: { [x: string]: string }
                arguments?: string[] | undefined
                command?: string[] | undefined
                flavor:
                  | 'cpu-basic'
                  | 'cpu-upgrade'
                  | 'cpu-performance'
                  | 'cpu-xl'
                  | 'sprx8'
                  | 'zero-a10g'
                  | 't4-small'
                  | 't4-medium'
                  | 'l4x1'
                  | 'l4x4'
                  | 'l40sx1'
                  | 'l40sx4'
                  | 'l40sx8'
                  | 'a10g-small'
                  | 'a10g-large'
                  | 'a10g-largex2'
                  | 'a10g-largex4'
                  | 'a100-large'
                  | 'a100x4'
                  | 'a100x8'
                  | 'h200'
                  | 'h200x2'
                  | 'h200x4'
                  | 'h200x8'
                  | 'rtx-pro-6000'
                  | 'rtx-pro-6000x2'
                  | 'rtx-pro-6000x4'
                  | 'rtx-pro-6000x8'
                  | 'inf2x6'
                timeoutSeconds: number | ({ [x: string]: unknown } | null)
                labels?: { [x: string]: string } | undefined
                secrets?: string[] | undefined
              }
            | {
                dockerImage: {}
                spaceId?: string | undefined
                environment: { [x: string]: string }
                arguments?: string[] | undefined
                command?: string[] | undefined
                flavor:
                  | 'cpu-basic'
                  | 'cpu-upgrade'
                  | 'cpu-performance'
                  | 'cpu-xl'
                  | 'sprx8'
                  | 'zero-a10g'
                  | 't4-small'
                  | 't4-medium'
                  | 'l4x1'
                  | 'l4x4'
                  | 'l40sx1'
                  | 'l40sx4'
                  | 'l40sx8'
                  | 'a10g-small'
                  | 'a10g-large'
                  | 'a10g-largex2'
                  | 'a10g-largex4'
                  | 'a100-large'
                  | 'a100x4'
                  | 'a100x8'
                  | 'h200'
                  | 'h200x2'
                  | 'h200x4'
                  | 'h200x8'
                  | 'rtx-pro-6000'
                  | 'rtx-pro-6000x2'
                  | 'rtx-pro-6000x4'
                  | 'rtx-pro-6000x8'
                  | 'inf2x6'
                timeoutSeconds: number | ({ [x: string]: unknown } | null)
                labels?: { [x: string]: string } | undefined
                secrets?: string[] | undefined
              }
            | undefined
          jobSourceId?: string | undefined
          disabled: boolean | 'suspended-after-failure'
          watched: {
            name: string
            type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | 'user' | 'org'
            avatarUrl?: string | undefined
          }[]
          hasSecret: boolean
          domains: ('repo' | 'discussion')[]
          lastTriggerAt?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            watched: {
              type:
                | 'dataset'
                | 'model'
                | 'space'
                | 'bucket'
                | 'kernel'
                | 'container'
                | 'user'
                | 'org'
              name: string
            }[]
            url?: string | undefined
            job?:
              | {
                  spaceId: {}
                  dockerImage?: string | undefined
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  environment?: { [x: string]: string } | undefined
                  secrets?: { [x: string]: string } | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  arch?: 'amd64' | 'arm64' | undefined
                  timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                  attempts?: number | undefined
                  labels?: { [x: string]: string } | undefined
                  volumes?:
                    | {
                        type: 'bucket' | 'model' | 'dataset' | 'space'
                        source: string
                        mountPath: string
                        revision?: string | undefined
                        readOnly?: boolean | undefined
                        path?: string | undefined
                      }[]
                    | undefined
                  expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                  ssh?: { enabled?: boolean | undefined } | undefined
                  network?: { group: string; aliases?: string[] | undefined } | undefined
                  resourceGroupId?: string | undefined
                }
              | {
                  spaceId?: string | undefined
                  dockerImage: {}
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  environment?: { [x: string]: string } | undefined
                  secrets?: { [x: string]: string } | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  arch?: 'amd64' | 'arm64' | undefined
                  timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                  attempts?: number | undefined
                  labels?: { [x: string]: string } | undefined
                  volumes?:
                    | {
                        type: 'bucket' | 'model' | 'dataset' | 'space'
                        source: string
                        mountPath: string
                        revision?: string | undefined
                        readOnly?: boolean | undefined
                        path?: string | undefined
                      }[]
                    | undefined
                  expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                  ssh?: { enabled?: boolean | undefined } | undefined
                  network?: { group: string; aliases?: string[] | undefined } | undefined
                  resourceGroupId?: string | undefined
                }
              | undefined
            jobSourceId?: string | undefined
            secrets?: { [x: string]: string } | undefined
            domains: ('repo' | 'discussion')[]
            secret?: string | undefined
          }
        }
        output: {
          webhook: {
            id: string
            url?: string | undefined
            job?:
              | {
                  dockerImage?: string | undefined
                  spaceId: {}
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | {
                  dockerImage: {}
                  spaceId?: string | undefined
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | undefined
            jobSourceId?: string | undefined
            disabled: boolean | 'suspended-after-failure'
            watched: {
              name: string
              type:
                | 'dataset'
                | 'model'
                | 'space'
                | 'bucket'
                | 'kernel'
                | 'container'
                | 'user'
                | 'org'
              avatarUrl?: string | undefined
            }[]
            hasSecret: boolean
            domains: ('repo' | 'discussion')[]
            lastTriggerAt?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/webhooks/:webhookId': {
      $get: {
        input: { param: { webhookId: string } }
        output: {
          webhook: {
            id: string
            url?: string | undefined
            job?:
              | {
                  dockerImage?: string | undefined
                  spaceId: {}
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | {
                  dockerImage: {}
                  spaceId?: string | undefined
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | undefined
            jobSourceId?: string | undefined
            disabled: boolean | 'suspended-after-failure'
            watched: {
              name: string
              type:
                | 'dataset'
                | 'model'
                | 'space'
                | 'bucket'
                | 'kernel'
                | 'container'
                | 'user'
                | 'org'
              avatarUrl?: string | undefined
            }[]
            hasSecret: boolean
            domains: ('repo' | 'discussion')[]
            lastTriggerAt?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { webhookId: string } } & {
          json: {
            watched: {
              type:
                | 'dataset'
                | 'model'
                | 'space'
                | 'bucket'
                | 'kernel'
                | 'container'
                | 'user'
                | 'org'
              name: string
            }[]
            url?: string | undefined
            job?:
              | {
                  spaceId: {}
                  dockerImage?: string | undefined
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  environment?: { [x: string]: string } | undefined
                  secrets?: { [x: string]: string } | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  arch?: 'amd64' | 'arm64' | undefined
                  timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                  attempts?: number | undefined
                  labels?: { [x: string]: string } | undefined
                  volumes?:
                    | {
                        type: 'bucket' | 'model' | 'dataset' | 'space'
                        source: string
                        mountPath: string
                        revision?: string | undefined
                        readOnly?: boolean | undefined
                        path?: string | undefined
                      }[]
                    | undefined
                  expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                  ssh?: { enabled?: boolean | undefined } | undefined
                  network?: { group: string; aliases?: string[] | undefined } | undefined
                  resourceGroupId?: string | undefined
                }
              | {
                  spaceId?: string | undefined
                  dockerImage: {}
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  environment?: { [x: string]: string } | undefined
                  secrets?: { [x: string]: string } | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  arch?: 'amd64' | 'arm64' | undefined
                  timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                  attempts?: number | undefined
                  labels?: { [x: string]: string } | undefined
                  volumes?:
                    | {
                        type: 'bucket' | 'model' | 'dataset' | 'space'
                        source: string
                        mountPath: string
                        revision?: string | undefined
                        readOnly?: boolean | undefined
                        path?: string | undefined
                      }[]
                    | undefined
                  expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                  ssh?: { enabled?: boolean | undefined } | undefined
                  network?: { group: string; aliases?: string[] | undefined } | undefined
                  resourceGroupId?: string | undefined
                }
              | undefined
            jobSourceId?: string | undefined
            secrets?: { [x: string]: string } | undefined
            domains: ('repo' | 'discussion')[]
            secret?: string | undefined
          }
        }
        output: {
          webhook: {
            id: string
            url?: string | undefined
            job?:
              | {
                  dockerImage?: string | undefined
                  spaceId: {}
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | {
                  dockerImage: {}
                  spaceId?: string | undefined
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | undefined
            jobSourceId?: string | undefined
            disabled: boolean | 'suspended-after-failure'
            watched: {
              name: string
              type:
                | 'dataset'
                | 'model'
                | 'space'
                | 'bucket'
                | 'kernel'
                | 'container'
                | 'user'
                | 'org'
              avatarUrl?: string | undefined
            }[]
            hasSecret: boolean
            domains: ('repo' | 'discussion')[]
            lastTriggerAt?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webhookId: string } }
        output: {}
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/webhooks/:webhookId/:action': {
      $post: {
        input: { param: { webhookId: string; action: 'enable' | 'disable' } }
        output: {
          webhook: {
            id: string
            url?: string | undefined
            job?:
              | {
                  dockerImage?: string | undefined
                  spaceId: {}
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | {
                  dockerImage: {}
                  spaceId?: string | undefined
                  environment: { [x: string]: string }
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  timeoutSeconds: number | ({ [x: string]: unknown } | null)
                  labels?: { [x: string]: string } | undefined
                  secrets?: string[] | undefined
                }
              | undefined
            jobSourceId?: string | undefined
            disabled: boolean | 'suspended-after-failure'
            watched: {
              name: string
              type:
                | 'dataset'
                | 'model'
                | 'space'
                | 'bucket'
                | 'kernel'
                | 'container'
                | 'user'
                | 'org'
              avatarUrl?: string | undefined
            }[]
            hasSecret: boolean
            domains: ('repo' | 'discussion')[]
            lastTriggerAt?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/webhooks/:webhookId/replay/:logId': {
      $post: {
        input: { param: { webhookId: string; logId: string } }
        output: { status: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/papers/claim': {
      $post: {
        input: {
          json: { paperId: string; claimAuthorId: string; targetUserId?: string | undefined }
        }
        output: { ok: boolean; claimedPaperId: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/repositories': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            type?: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | undefined
            limit?: number | undefined
            sort?: 'storage' | 'updatedAt' | undefined
            direction?: 'asc' | 'desc' | undefined
          }
        }
        output: {
          id: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          updatedAt: string
          visibility: 'public' | 'private' | 'protected'
          storage: number
          storagePercent: number
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/settings/tokens': {
      $get: {
        input: { param: { name: string } } & {
          query: { cursor?: string | undefined; limit?: number | undefined; q?: string | undefined }
        }
        output: {
          _id: string
          displayName: string
          role: 'read' | 'write' | 'fineGrained'
          last4?: string | undefined
          createdAt: string
          lastUsedAt?: string | undefined
          owner: { _id: string; name: string; fullname: string; avatarUrl: string }
          authorization?:
            | {
                status: 'pending' | 'approved' | 'revoked' | 'denied'
                requestedAt: string
                authorizedAt?: string | undefined
                authorizer?: { name: string; fullname: string; avatarUrl: string } | undefined
              }
            | undefined
          fineGrained?:
            | {
                scoped: {
                  entity: {
                    _id: string
                    type:
                      | 'dataset'
                      | 'model'
                      | 'space'
                      | 'bucket'
                      | 'kernel'
                      | 'container'
                      | 'collection'
                      | 'org'
                      | 'user'
                      | 'resource-group'
                      | 'oauth-app'
                  }
                  permissions: (
                    | 'repo.read'
                    | 'repo.content.read'
                    | 'repo.content.metadata.read'
                    | 'repo.content.write'
                    | 'repo.lfs.read'
                    | 'repo.devMode.read'
                    | 'repo.config.read'
                    | 'repo.config.write'
                    | 'repo.config.doi.write'
                    | 'repo.config.visibility.write'
                    | 'repo.config.variables.write'
                    | 'repo.config.secrets.write'
                    | 'repo.access.read'
                    | 'repo.access.write'
                    | 'repo.contribute.write'
                    | 'repo.delete.write'
                    | 'repo.write'
                    | 'discussion.write'
                    | 'post.write'
                    | 'collection.write'
                    | 'collection.read'
                    | 'user.write'
                    | 'user.preferences.write'
                    | 'user.settings.notifications.write'
                    | 'user.notifications.read'
                    | 'user.notifications.write'
                    | 'user.org.write'
                    | 'user.membership.read'
                    | 'user.membership.write'
                    | 'user.oauth.authorizations.write'
                    | 'user.webhooks.read'
                    | 'user.webhooks.write'
                    | 'user.mcp.read'
                    | 'user.read'
                    | 'user.social.likes.write'
                    | 'user.social.follows.write'
                    | 'user.social.blocks.write'
                    | 'user.social.upvotes.write'
                    | 'user.tokens.read'
                    | 'user.tokens.write'
                    | 'user.billing.read'
                    | 'user.billing.write'
                    | 'user.email.read'
                    | 'user.email.write'
                    | 'user.papers.write'
                    | 'user.cryptoKeys.write'
                    | 'user.inference-providers.write'
                    | 'user.authentication.read'
                    | 'user.authentication.write'
                    | 'user.info.write'
                    | 'user.gated-repos-requests.read'
                    | 'user.gated-repos-requests.write'
                    | 'oauthApp.read'
                    | 'oauthApp.write'
                    | 'org.read'
                    | 'org.billing.read'
                    | 'org.billing.write'
                    | 'org.providerMappings.write'
                    | 'org.serviceAccounts.read'
                    | 'org.serviceAccounts.write'
                    | 'org.members.read'
                    | 'org.members.write'
                    | 'org.networkSecurity.read'
                    | 'org.networkSecurity.write'
                    | 'org.analytics.read'
                    | 'org.repos.read'
                    | 'org.auditLog.write'
                    | 'org.repoSettings.write'
                    | 'org.write'
                    | 'blog.read'
                    | 'blog.write'
                    | 'resourceGroup.read'
                    | 'resourceGroup.write'
                    | 'resourceGroup.settings.write'
                    | 'resourceGroup.resources.write'
                    | 'inference.serverless.write'
                    | 'inference.endpoints.read'
                    | 'inference.endpoints.write'
                    | 'inference.endpoints.infer.write'
                    | 'sql-console.embed.read'
                    | 'sql-console.embed.write'
                    | 'job.read'
                    | 'job.write'
                  )[]
                }[]
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/settings/repositories': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            search?: string | undefined
            type?: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | undefined
            limit?: number | undefined
            sort?: 'storage' | 'updatedAt' | undefined
            direction?: 'asc' | 'desc' | undefined
          }
        }
        output: {
          id: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          updatedAt: string
          visibility: 'public' | 'private' | 'protected'
          storage: number
          storagePercent: number
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/settings/sso/credentials': {
      $put: {
        input: { param: { name: string } } & {
          json: { clientSecret: string } | { x509Cert: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/audit-log/export': {
      $get: {
        input: { param: { name: string } } & { query: { q?: string | undefined } }
        output: {
          _id: string
          createdAt: string
          type:
            | 'billing.update_payment_method'
            | 'billing.create_customer'
            | 'billing.remove_payment_method'
            | 'billing.aws_add'
            | 'billing.aws_remove'
            | 'billing.gcp_add'
            | 'billing.gcp_remove'
            | 'billing.marketplace_approve'
            | 'billing.cancel_subscription'
            | 'billing.end_subscription'
            | 'billing.renew_subscription'
            | 'billing.start_subscription'
            | 'billing.un_cancel_subscription'
            | 'billing.update_subscription'
            | 'billing.update_subscription_plan'
            | 'collection.create'
            | 'collection.delete'
            | 'collection.update_resource_group'
            | 'org.add_user'
            | 'org.change_role'
            | 'org.change_account_type'
            | 'org.create'
            | 'org.delete'
            | 'org.restore'
            | 'org.invite_user'
            | 'org.invite.accept'
            | 'org.invite.email'
            | 'org.join.from_domain'
            | 'org.join.automatic'
            | 'org.leave'
            | 'org.remove_user'
            | 'org.rename'
            | 'org.rotate_token'
            | 'org.sso_login'
            | 'org.sso_join'
            | 'org.sso_credential.authorize'
            | 'org.sso_credential.deauthorize'
            | 'org.update_join_settings'
            | 'org.update_settings'
            | 'org.settings.regions'
            | 'org.settings.profile'
            | 'org.settings.resource_groups'
            | 'org.settings.publisher_gating'
            | 'org.settings.inference_providers'
            | 'org.settings.inference_providers.keys.add'
            | 'org.settings.inference_providers.keys.remove'
            | 'org.settings.inference_providers.usage'
            | 'org.settings.sso'
            | 'org.settings.sso.enable'
            | 'org.settings.sso.disable'
            | 'org.settings.security.repo_visibility'
            | 'org.settings.security.2fa.enable'
            | 'org.settings.security.2fa.disable'
            | 'org.settings.security.auto_join.enable'
            | 'org.settings.security.auto_join.disable'
            | 'org.settings.security.members_privacy.enable'
            | 'org.settings.security.members_privacy.disable'
            | 'org.settings.network'
            | 'org.settings.network.ip_restriction.enable'
            | 'org.settings.network.ip_restriction.disable'
            | 'org.settings.network.auth_enforcement.enable'
            | 'org.settings.network.auth_enforcement.disable'
            | 'org.token_approval.enabled'
            | 'org.token_approval.disabled'
            | 'org.token_approval.authorization_request'
            | 'org.token_approval.authorization_request.authorized'
            | 'org.token_approval.authorization_request.revoked'
            | 'org.token_approval.authorization_request.denied'
            | 'org.audit_log.export'
            | 'org.repo_analytics.export'
            | 'org.blog_analytics.export'
            | 'repo.add_secrets'
            | 'repo.remove_secrets'
            | 'repo.add_secret'
            | 'repo.update_secret'
            | 'repo.remove_secret'
            | 'repo.create'
            | 'repo.delete'
            | 'repo.disable'
            | 'repo.removeDisable'
            | 'repo.duplication'
            | 'repo.delete_doi'
            | 'repo.move'
            | 'repo.update_resource_group'
            | 'repo.update_settings'
            | 'repo.add_variable'
            | 'repo.update_variable'
            | 'repo.remove_variable'
            | 'repo.add_variables'
            | 'repo.remove_variables'
            | 'repo.delete_lfs_file'
            | 'repo.add_trusted_publisher'
            | 'repo.remove_trusted_publisher'
            | 'spaces.add_storage'
            | 'spaces.remove_storage'
            | 'spaces.set_volumes'
            | 'spaces.remove_volumes'
            | 'spaces.update_hardware'
            | 'spaces.update_sleep_time'
            | 'resource_group.create'
            | 'resource_group.add_users'
            | 'resource_group.remove_users'
            | 'resource_group.change_role'
            | 'resource_group.settings'
            | 'resource_group.delete'
            | 'resource_group.invite_user'
            | 'resource_group.invite.revoke'
            | 'jobs.create'
            | 'jobs.cancel'
            | 'jobs.update_labels'
            | 'jobs.update_expose'
            | 'scheduled_job.create'
            | 'scheduled_job.delete'
            | 'scheduled_job.resume'
            | 'scheduled_job.suspend'
            | 'scheduled_job.run'
            | 'scheduled_job.update_schedule'
            | 'scheduled_job.update_labels'
            | 'org.service_account.create'
            | 'org.service_account.delete'
            | 'org.service_account.token.create'
            | 'org.service_account.token.delete'
            | 'org.service_account.token.invalidate'
            | 'org.service_account.token.rotate'
            | 'org.service_account.token.update'
            | 'org.service_account.token.s3_credential.create'
            | 'org.service_account.token.s3_credential.delete'
            | 'org.service_account.trusted_publisher.create'
            | 'org.service_account.trusted_publisher.delete'
            | 'oauth.token'
            | 'oauth.app.create'
            | 'oauth.app.update'
            | 'oauth.app.secret.rotate'
            | 'oauth.app.secret.delete'
            | 'oauth.app.secret.expire'
            | 'oauth.app.delete'
            | 'oauth.app.move'
          data?: { [x: string]: unknown } | undefined
          message: string
          ip?: string | undefined
          location?:
            | { formatted: string; country?: string | undefined; city?: string | undefined }
            | undefined
          userAgent?: string | undefined
          author: {
            _id: string
            user: string
            avatarUrl: string
            type: 'user' | 'system'
            deleted?: boolean | undefined
          }
          token?:
            | {
                type: 'access_token'
                id: string
                role?: 'read' | 'write' | 'fineGrained' | undefined
                last4?: string | undefined
                deleted: boolean
              }
            | undefined
          oauth?: { clientId: string; name?: string | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId': {
      $patch: {
        input: { param: { name: string; resourceGroupId: string } } & {
          json: {
            name?: string | undefined
            description?: string | undefined
            spendLimits?:
              | {
                  total?: number | ({ [x: string]: unknown } | null) | undefined
                  inferenceProviders?: number | ({ [x: string]: unknown } | null) | undefined
                  spaces?: number | ({ [x: string]: unknown } | null) | undefined
                  jobs?: number | ({ [x: string]: unknown } | null) | undefined
                  endpoints?: number | ({ [x: string]: unknown } | null) | undefined
                }
              | undefined
          }
        }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string; resourceGroupId: string } }
        output: { success: boolean }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string; resourceGroupId: string } }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId/settings': {
      $post: {
        input: { param: { name: string; resourceGroupId: string } } & {
          json: {
            autoJoin?:
              | {
                  enabled: true | 'true'
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                  scope?: 'all' | 'read_plus' | undefined
                }
              | { enabled: false | 'false' }
              | undefined
          }
        }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId/users': {
      $post: {
        input: { param: { name: string; resourceGroupId: string } } & {
          json: {
            users: (
              | {
                  name: string
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                }
              | {
                  user: string
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                }
            )[]
          }
        }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId/invite': {
      $post: {
        input: { param: { name: string; resourceGroupId: string } } & {
          json: { username: string; role: 'read' | 'write' }
        }
        output: {
          id: string
          role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
          externalCollaborator?: boolean | undefined
          expiresAt: string
          author?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
              }
            | undefined
          invitee: {
            _id: string
            orgs?: { id: string; name: string; fullname: string; avatarUrl: string }[] | undefined
            avatarUrl: string
            fullname: string
            isPro: boolean
            user: string
            numModels?: number | undefined
            numDatasets?: number | undefined
            numSpaces?: number | undefined
            numBuckets?: number | undefined
            numKernels?: number | undefined
            numDiscussions?: number | undefined
            numPapers?: number | undefined
            numUpvotes?: number | undefined
            numLikes?: number | undefined
            numFollowers?: number | undefined
            numFollowing?: number | undefined
            numFollowingOrgs?: number | undefined
            details?: string | undefined
            isFollowing?: boolean | undefined
            reasonToFollow?: string | undefined
            primaryOrgAvatarUrl?: string | undefined
            serviceAccount?:
              | { id: string; org: string; orgAvatarUrl: string; description?: string | undefined }
              | undefined
            type: 'user'
          }
          resourceGroup?: { id: string; role: 'read' | 'write' } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId/invitations': {
      $get: {
        input: { param: { name: string; resourceGroupId: string } }
        output: {
          id: string
          role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
          externalCollaborator?: boolean | undefined
          expiresAt: string
          author?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
              }
            | undefined
          invitee: {
            _id: string
            orgs?: { id: string; name: string; fullname: string; avatarUrl: string }[] | undefined
            avatarUrl: string
            fullname: string
            isPro: boolean
            user: string
            numModels?: number | undefined
            numDatasets?: number | undefined
            numSpaces?: number | undefined
            numBuckets?: number | undefined
            numKernels?: number | undefined
            numDiscussions?: number | undefined
            numPapers?: number | undefined
            numUpvotes?: number | undefined
            numLikes?: number | undefined
            numFollowers?: number | undefined
            numFollowing?: number | undefined
            numFollowingOrgs?: number | undefined
            details?: string | undefined
            isFollowing?: boolean | undefined
            reasonToFollow?: string | undefined
            primaryOrgAvatarUrl?: string | undefined
            serviceAccount?:
              | { id: string; org: string; orgAvatarUrl: string; description?: string | undefined }
              | undefined
            type: 'user'
          }
          resourceGroup?: { id: string; role: 'read' | 'write' } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId/invitation/:id/resend': {
      $post: {
        input: { param: { name: string; resourceGroupId: string; id: string } }
        output: {
          id: string
          role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
          externalCollaborator?: boolean | undefined
          expiresAt: string
          author?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
              }
            | undefined
          invitee: {
            _id: string
            orgs?: { id: string; name: string; fullname: string; avatarUrl: string }[] | undefined
            avatarUrl: string
            fullname: string
            isPro: boolean
            user: string
            numModels?: number | undefined
            numDatasets?: number | undefined
            numSpaces?: number | undefined
            numBuckets?: number | undefined
            numKernels?: number | undefined
            numDiscussions?: number | undefined
            numPapers?: number | undefined
            numUpvotes?: number | undefined
            numLikes?: number | undefined
            numFollowers?: number | undefined
            numFollowing?: number | undefined
            numFollowingOrgs?: number | undefined
            details?: string | undefined
            isFollowing?: boolean | undefined
            reasonToFollow?: string | undefined
            primaryOrgAvatarUrl?: string | undefined
            serviceAccount?:
              | { id: string; org: string; orgAvatarUrl: string; description?: string | undefined }
              | undefined
            type: 'user'
          }
          resourceGroup?: { id: string; role: 'read' | 'write' } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/:resourceGroupId/users/:username': {
      $delete: {
        input: { param: { name: string; resourceGroupId: string; username: string } }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string; resourceGroupId: string; username: string } } & {
          json:
            | { role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit' }
            | { resetToScimRole: true }
        }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups': {
      $get: {
        input: { param: { name: string } }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          json: {
            name: string
            description?: string | undefined
            users?:
              | {
                  user: string
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                }[]
              | undefined
            repos?: RepoId[] | undefined
            autoJoin?:
              | {
                  enabled: true
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                  scope?: 'all' | 'read_plus' | undefined
                }
              | { enabled: false }
              | undefined
          }
        }
        output: {
          id: string
          name: string
          description?: (string | null) | undefined
          autoJoin?:
            | {
                enabled: true
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
                scope?: 'all' | 'read_plus' | undefined
              }
            | { enabled: false }
            | undefined
          spendLimits?:
            | {
                total?: number | undefined
                inferenceProviders?: number | undefined
                spaces?: number | undefined
                jobs?: number | undefined
                endpoints?: number | undefined
              }
            | undefined
          users: {
            type: 'user'
            _id: string
            fullname: string
            name: string
            avatarUrl: string
            role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
            orgRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
            addedBy?: string | undefined
            roleSetBy?: (string | null) | undefined
            isExternalCollaborator?: boolean | undefined
          }[]
          resources: (
            | {
                type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
                name: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'collection'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | {
                type: 'blog'
                id: string
                slug: string
                title: string
                addedBy?: string | undefined
                private: boolean
              }
            | { type: 'job'; id: string; name?: string | undefined; addedBy?: string | undefined }
            | {
                type: 'scheduled-job'
                id: string
                name?: string | undefined
                addedBy?: string | undefined
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/resource-groups/settings': {
      $get: {
        input: { param: { name: string } }
        output: {
          minRoleToCreate: 'admin' | 'write' | 'contributor' | 'read'
          allowExternalInvites: boolean
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          json: {
            minRoleToCreate?: 'admin' | 'write' | 'contributor' | 'read' | undefined
            allowExternalInvites?: string | boolean | undefined
          }
        }
        output: {
          minRoleToCreate: 'admin' | 'write' | 'contributor' | 'read'
          allowExternalInvites: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/settings/network-security': {
      $get: {
        input: { param: { name: string } }
        output: {
          enforceAuth: boolean
          areCidrRangesApproved: boolean
          enforceIpRestriction: boolean
          highRateLimits: boolean
          ipRanges: string[]
          blockedContents: {
            resource: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | '*'
            scope: string
          }[]
          allowedContents: {
            resource: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | '*'
            scope: string
          }[]
          keepReposMetadataVisible: boolean
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          json: {
            enforceAuth?: boolean | undefined
            enforceIpRestriction?: boolean | undefined
            highRateLimits?: boolean | undefined
            ipRanges?: (string | string)[] | undefined
            blockedContents?:
              | {
                  resource: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | '*'
                  scope: string
                }[]
              | undefined
            allowedContents?:
              | {
                  resource: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | '*'
                  scope: string
                }[]
              | undefined
            keepReposMetadataVisible?: boolean | undefined
          }
        }
        output: {
          enforceAuth: boolean | 'pending'
          enforceIpRestriction: boolean
          highRateLimits: boolean
          ipRanges: string[]
          blockedContents: {
            resource: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | '*'
            scope: string
          }[]
          allowedContents: {
            resource: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container' | '*'
            scope: string
          }[]
          keepReposMetadataVisible: boolean
          areCidrRangesApproved: boolean
          validatedIpRanges: string[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/service-accounts': {
      $get: {
        input: { param: { name: string } }
        output: {
          _id: string
          user: string
          name: string
          email: string
          description?: string | undefined
          createdAt: string
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          json: { name: string; description?: string | undefined }
        }
        output: {
          _id: string
          user: string
          fullname: string
          description?: string | undefined
          createdAt: string
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/organizations/:name/service-accounts/:serviceAccountId': {
      $get: {
        input: { param: { name: string; serviceAccountId: string } }
        output: {
          _id: string
          user: string
          name: string
          email: string
          description?: string | undefined
          createdAt: string
          accessTokens?:
            | {
                _id: string
                displayName: string
                createdAt: string
                lastUsedAt?: string | undefined
                expiration?: string | undefined
                role: 'read' | 'write' | 'fineGrained'
                permissions: (
                  | 'repo.content.read'
                  | 'repo.contribute.write'
                  | 'repo.write'
                  | 'inference.serverless.write'
                  | 'inference.endpoints.infer.write'
                  | 'inference.endpoints.write'
                  | 'org.read'
                  | 'org.write'
                  | 'collection.read'
                  | 'collection.write'
                  | 'resourceGroup.write'
                  | 'job.write'
                  | 'org.serviceAccounts.read'
                  | 'org.serviceAccounts.write'
                  | 'org.auditLog.write'
                )[]
                repoIds: string[]
                repoPermissions: ('repo.content.read' | 'repo.write')[]
                resourceGroupIds: string[]
                resourceGroupPermissions: ('repo.content.read' | 'repo.write')[]
                userPermissions: 'user.gated-repos-requests.write'[]
                endpointPatterns: string[]
                last4?: string | undefined
                skipNetworkSecurity?: boolean | undefined
                canReadGatedRepos?: boolean | undefined
                s3AccessKey?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string; serviceAccountId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens': {
      $post: {
        input: { param: { name: string; serviceAccountId: string } } & {
          json: {
            displayName?: string | undefined
            permissions?:
              | (
                  | 'repo.content.read'
                  | 'repo.contribute.write'
                  | 'repo.write'
                  | 'inference.serverless.write'
                  | 'inference.endpoints.infer.write'
                  | 'inference.endpoints.write'
                  | 'org.read'
                  | 'org.write'
                  | 'collection.read'
                  | 'collection.write'
                  | 'resourceGroup.write'
                  | 'job.write'
                  | 'org.serviceAccounts.read'
                  | 'org.serviceAccounts.write'
                  | 'org.auditLog.write'
                )[]
              | undefined
            repoIds?: string[] | undefined
            repoPermissions?: ('repo.content.read' | 'repo.write')[] | undefined
            resourceGroupIds?: string[] | undefined
            resourceGroupPermissions?: ('repo.content.read' | 'repo.write')[] | undefined
            userPermissions?: 'user.gated-repos-requests.write'[] | undefined
            endpointPatterns?: string[] | undefined
            skipNetworkSecurity?: boolean | undefined
            canReadGatedRepos?: boolean | undefined
          }
        }
        output: {
          token: string
          tokenInfo: {
            _id: string
            displayName: string
            createdAt: string
            permissions?: string[] | undefined
            repoIds: string[]
            repoPermissions: string[]
            resourceGroupIds: string[]
            resourceGroupPermissions: string[]
            userPermissions: string[]
            endpointPatterns: string[]
            skipNetworkSecurity: boolean
            canReadGatedRepos: boolean
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId': {
      $delete: {
        input: { param: { name: string; serviceAccountId: string; tokenId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $patch: {
        input: { param: { name: string; serviceAccountId: string; tokenId: string } } & {
          json: {
            displayName?: string | undefined
            permissions?:
              | (
                  | 'repo.content.read'
                  | 'repo.contribute.write'
                  | 'repo.write'
                  | 'inference.serverless.write'
                  | 'inference.endpoints.infer.write'
                  | 'inference.endpoints.write'
                  | 'org.read'
                  | 'org.write'
                  | 'collection.read'
                  | 'collection.write'
                  | 'resourceGroup.write'
                  | 'job.write'
                  | 'org.serviceAccounts.read'
                  | 'org.serviceAccounts.write'
                  | 'org.auditLog.write'
                )[]
              | undefined
            repoIds?: string[] | undefined
            repoPermissions?: ('repo.content.read' | 'repo.write')[] | undefined
            resourceGroupIds?: string[] | undefined
            resourceGroupPermissions?: ('repo.content.read' | 'repo.write')[] | undefined
            userPermissions?: 'user.gated-repos-requests.write'[] | undefined
            endpointPatterns?: string[] | undefined
            skipNetworkSecurity?: boolean | undefined
            canReadGatedRepos?: boolean | undefined
          }
        }
        output: {
          _id: string
          displayName: string
          permissions: string[]
          repoIds: string[]
          repoPermissions: string[]
          resourceGroupIds: string[]
          resourceGroupPermissions: string[]
          userPermissions: string[]
          endpointPatterns: string[]
          skipNetworkSecurity: boolean
          canReadGatedRepos: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId/rotate': {
      $post: {
        input: { param: { name: string; serviceAccountId: string; tokenId: string } }
        output: {
          token: string
          tokenInfo: {
            _id: string
            displayName: string
            createdAt: string
            last4?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/service-accounts/:serviceAccountId/trusted-publishers': {
      $get: {
        input: { param: { name: string; serviceAccountId: string } }
        output: {
          _id: string
          issuerUrl: string
          claims: { [x: string]: { kind: 'eq'; value: string } | { kind: 'prefix'; value: string } }
          configuredBy?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          createdAt: string
          lastUsedAt?: string | undefined
          capabilities?: ('inference-api' | 'request-gated-repos')[] | undefined
          permissions?: ('repo.content.read' | 'repo.content.write')[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string; serviceAccountId: string } } & {
          json: {
            issuerUrl: string
            claims: {
              [x: string]: { kind: 'eq'; value: string } | { kind: 'prefix'; value: string }
            }
            capabilities?: ('inference-api' | 'request-gated-repos')[] | undefined
          }
        }
        output: {
          _id: string
          issuerUrl: string
          claims: { [x: string]: { kind: 'eq'; value: string } | { kind: 'prefix'; value: string } }
          configuredBy?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          createdAt: string
          lastUsedAt?: string | undefined
          capabilities?: ('inference-api' | 'request-gated-repos')[] | undefined
          permissions?: ('repo.content.read' | 'repo.content.write')[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/avatar': {
      $get: {
        input: { param: { name: string } } & { query: { redirect?: string | undefined } }
        output: { avatarUrl: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/members': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            search?: string | undefined
            email?: string | undefined
            cursor?: string | undefined
            limit?: number | undefined
            includeExternal?: string | undefined
          }
        }
        output: {
          avatarUrl: string
          fullname: string
          isPro: boolean
          user: string
          type: 'user'
          isFollowing?: boolean | undefined
          _id: string
          role?: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | undefined
          resourceGroups?:
            | {
                name: string
                id: string
                numUsers: number
                role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
                assignedRole: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | 'inherit'
              }[]
            | undefined
          twoFaEnabled?: boolean | undefined
          verifiedEmail?: (string | null) | undefined
          isExternalCollaborator?: boolean | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/scim/v2/ServiceProviderConfig': {
      $get: {
        input: { param: { name: string } }
        output: {
          schemas: string[]
          documentationUri: string
          patch: { supported: boolean }
          bulk: { supported: boolean; maxOperations: number; maxPayloadSize: number }
          filter: { supported: boolean; maxResults: number }
          changePassword: { supported: boolean }
          sort: { supported: boolean }
          etag: { supported: boolean }
          authenticationSchemes: {
            type: string
            name: string
            description: string
            specUri: string
            documentationUri: string
          }[]
          meta: { resourceType: string; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/scim/v2/ResourceTypes': {
      $get: {
        input: { param: { name: string } }
        output: {
          schemas: string[]
          id: string
          name: string
          description: string
          endpoint: string
          schema: string
          meta: { resourceType: string; location: string }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/scim/v2/Schemas': {
      $get: {
        input: { param: { name: string } }
        output: {
          schemas: string[]
          id: string
          name: string
          description: string
          attributes: { [x: string]: unknown }[]
          meta: { resourceType: string; location: string }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/scim/v2/Schemas/:schemaId': {
      $get: {
        input: { param: { name: string; schemaId: string } }
        output: {
          schemas: string[]
          id: string
          name: string
          description: string
          attributes: { [x: string]: unknown }[]
          meta: { resourceType: string; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/scim/v2/Users': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            startIndex?: number | undefined
            count?: number | undefined
            filter?: string | undefined
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:api:messages:2.0:ListResponse'[]
          totalResults: number
          itemsPerPage: number
          startIndex: number
          Resources: {
            schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
            id: string
            externalId: string | ({ [x: string]: unknown } | null)
            userName: string
            displayName: string
            name: { givenName: string; familyName: string; formatted: string }
            emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
            active: boolean
            meta: { resourceType: 'User'; location: string }
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { name: string } } & {
              json: {
                schemas: string[]
                userName: string
                emails: { value: string }[]
                name: { givenName: string; familyName: string }
                active?: boolean | undefined
                externalId: string
              }
            }
            output: {
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
              id: string
              externalId: string | ({ [x: string]: unknown } | null)
              userName: string
              displayName: string
              name: { givenName: string; familyName: string; formatted: string }
              emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
              active: boolean
              meta: { resourceType: 'User'; location: string }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              json: {
                schemas: string[]
                userName: string
                emails: { value: string }[]
                name: { givenName: string; familyName: string }
                active?: boolean | undefined
                externalId: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/organizations/:name/scim/v2/Users/:userId': {
      $get: {
        input: { param: { name: string; userId: string } }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
          id: string
          externalId: string | ({ [x: string]: unknown } | null)
          userName: string
          displayName: string
          name: { givenName: string; familyName: string; formatted: string }
          emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
          active: boolean
          meta: { resourceType: 'User'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { name: string; userId: string } } & {
              json: {
                schemas: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[]
                Operations: {
                  op: string
                  path?:
                    | 'active'
                    | 'externalId'
                    | 'userName'
                    | 'emails[type eq "work"].value'
                    | 'name.givenName'
                    | 'name.familyName'
                    | undefined
                  value: { [x: string]: unknown }
                }[]
              }
            }
            output: {
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
              id: string
              externalId: string | ({ [x: string]: unknown } | null)
              userName: string
              displayName: string
              name: { givenName: string; familyName: string; formatted: string }
              emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
              active: boolean
              meta: { resourceType: 'User'; location: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; userId: string } } & {
              json: {
                schemas: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[]
                Operations: {
                  op: string
                  path?:
                    | 'active'
                    | 'externalId'
                    | 'userName'
                    | 'emails[type eq "work"].value'
                    | 'name.givenName'
                    | 'name.familyName'
                    | undefined
                  value: { [x: string]: unknown }
                }[]
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { name: string; userId: string } } & {
              json: {
                schemas: string[]
                userName: string
                emails: { value: string }[]
                name: { givenName: string; familyName: string }
                active?: boolean | undefined
                externalId: string
              }
            }
            output: {
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
              id: string
              externalId: string | ({ [x: string]: unknown } | null)
              userName: string
              displayName: string
              name: { givenName: string; familyName: string; formatted: string }
              emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
              active: boolean
              meta: { resourceType: 'User'; location: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; userId: string } } & {
              json: {
                schemas: string[]
                userName: string
                emails: { value: string }[]
                name: { givenName: string; familyName: string }
                active?: boolean | undefined
                externalId: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
      $delete: {
        input: { param: { name: string; userId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/api/organizations/:name/scim/v2/Groups': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            startIndex?: number | undefined
            count?: number | undefined
            filter?: string | undefined
            excludedAttributes?: 'members' | undefined
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:api:messages:2.0:ListResponse'[]
          totalResults: number
          itemsPerPage: number
          startIndex: number
          Resources: {
            schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
            id: string
            displayName: string
            members?: { value: string }[] | undefined
            externalId?: string | ({ [x: string]: unknown } | null) | undefined
            meta: { resourceType: 'Group'; location: string }
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { name: string } } & {
              json: {
                displayName: string
                externalId?: string | undefined
                members: { value: string }[]
              }
            }
            output: {
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
              id: string
              displayName: string
              members: { value: string }[]
              externalId?: string | ({ [x: string]: unknown } | null) | undefined
              meta: { resourceType: 'Group'; location: string }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              json: {
                displayName: string
                externalId?: string | undefined
                members: { value: string }[]
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/organizations/:name/scim/v2/Groups/:groupId': {
      $get: {
        input: { param: { name: string; groupId: string } } & {
          query: { excludedAttributes?: 'members' | undefined }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
          id: string
          displayName: string
          members?: { value: string }[] | undefined
          externalId?: string | ({ [x: string]: unknown } | null) | undefined
          meta: { resourceType: 'Group'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string; groupId: string } } & {
          json: {
            schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
            displayName: string
            externalId?: string | undefined
            members: { value: string }[]
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
          id: string
          displayName: string
          members: { value: string }[]
          externalId?: string | ({ [x: string]: unknown } | null) | undefined
          meta: { resourceType: 'Group'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string; groupId: string } } & {
          json: {
            schemas: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[]
            Operations: (
              | { op: string; path: string; value?: { value: string }[] | undefined }
              | { op: string; path?: string | undefined; value: { [x: string]: unknown } }
            )[]
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
          id: string
          displayName: string
          members: { value: string }[]
          externalId?: string | ({ [x: string]: unknown } | null) | undefined
          meta: { resourceType: 'Group'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string; groupId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/api/organizations/:name/scim-provisioning/v2/Users': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            startIndex?: number | undefined
            count?: number | undefined
            filter?: string | undefined
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:api:messages:2.0:ListResponse'[]
          totalResults: number
          itemsPerPage: number
          startIndex: number
          Resources: {
            schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
            id: string
            externalId: string | ({ [x: string]: unknown } | null)
            userName: string
            displayName: string
            name: { givenName: string; familyName: string; formatted: string }
            emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
            active: boolean
            meta: { resourceType: 'User'; location: string }
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          json: {
            schemas: string[]
            userName: string
            emails: { value: string }[]
            active?: boolean | undefined
            externalId: string
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
          id: string
          externalId: string | ({ [x: string]: unknown } | null)
          userName: string
          displayName: string
          name: { givenName: string; familyName: string; formatted: string }
          emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
          active: boolean
          meta: { resourceType: 'User'; location: string }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/organizations/:name/scim-provisioning/v2/Users/:userId': {
      $get: {
        input: { param: { name: string; userId: string } }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
          id: string
          externalId: string | ({ [x: string]: unknown } | null)
          userName: string
          displayName: string
          name: { givenName: string; familyName: string; formatted: string }
          emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
          active: boolean
          meta: { resourceType: 'User'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string; userId: string } } & {
          json: {
            schemas: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[]
            Operations: {
              op: string
              path?:
                | 'active'
                | 'externalId'
                | 'userName'
                | 'emails[type eq "work"].value'
                | 'name.givenName'
                | 'name.familyName'
                | undefined
              value: { [x: string]: unknown }
            }[]
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
          id: string
          externalId: string | ({ [x: string]: unknown } | null)
          userName: string
          displayName: string
          name: { givenName: string; familyName: string; formatted: string }
          emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
          active: boolean
          meta: { resourceType: 'User'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { name: string; userId: string } } & {
              json: { schemas: string[]; active?: boolean | undefined; externalId: string }
            }
            output: {
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:User'[]
              id: string
              externalId: string | ({ [x: string]: unknown } | null)
              userName: string
              displayName: string
              name: { givenName: string; familyName: string; formatted: string }
              emails: { value: string; primary: boolean; type?: 'work' | undefined }[]
              active: boolean
              meta: { resourceType: 'User'; location: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; userId: string } } & {
              json: { schemas: string[]; active?: boolean | undefined; externalId: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | {
            input: { param: { name: string; userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { name: string; userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/organizations/:name/scim-provisioning/v2/Groups': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            startIndex?: number | undefined
            count?: number | undefined
            filter?: string | undefined
            excludedAttributes?: 'members' | undefined
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:api:messages:2.0:ListResponse'[]
          totalResults: number
          itemsPerPage: number
          startIndex: number
          Resources: {
            schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
            id: string
            displayName: string
            members?: { value: string }[] | undefined
            externalId?: string | ({ [x: string]: unknown } | null) | undefined
            meta: { resourceType: 'Group'; location: string }
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { name: string } } & {
              json: {
                displayName: string
                externalId?: string | undefined
                members: { value: string }[]
              }
            }
            output: {
              schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
              id: string
              displayName: string
              members: { value: string }[]
              externalId?: string | ({ [x: string]: unknown } | null) | undefined
              meta: { resourceType: 'Group'; location: string }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & {
              json: {
                displayName: string
                externalId?: string | undefined
                members: { value: string }[]
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId': {
      $get: {
        input: { param: { name: string; groupId: string } } & {
          query: { excludedAttributes?: 'members' | undefined }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
          id: string
          displayName: string
          members?: { value: string }[] | undefined
          externalId?: string | ({ [x: string]: unknown } | null) | undefined
          meta: { resourceType: 'Group'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string; groupId: string } } & {
          json: {
            schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
            displayName: string
            externalId?: string | undefined
            members: { value: string }[]
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
          id: string
          displayName: string
          members: { value: string }[]
          externalId?: string | ({ [x: string]: unknown } | null) | undefined
          meta: { resourceType: 'Group'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string; groupId: string } } & {
          json: {
            schemas: 'urn:ietf:params:scim:api:messages:2.0:PatchOp'[]
            Operations: (
              | { op: string; path: string; value?: { value: string }[] | undefined }
              | { op: string; path?: string | undefined; value: { [x: string]: unknown } }
            )[]
          }
        }
        output: {
          schemas: 'urn:ietf:params:scim:schemas:core:2.0:Group'[]
          id: string
          displayName: string
          members: { value: string }[]
          externalId?: string | ({ [x: string]: unknown } | null) | undefined
          meta: { resourceType: 'Group'; location: string }
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string; groupId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/oauth/register': {
      $post: {
        input: {
          json: {
            redirect_uris?: string[] | undefined
            client_name?: string | undefined
            client_uri?: string | undefined
            logo_uri?: string | undefined
            scope?: string | undefined
            contacts?: string[] | undefined
            token_endpoint_auth_method?:
              | 'client_secret_basic'
              | 'none'
              | 'client_secret_post'
              | undefined
            software_id?: string | undefined
            software_version?: string | undefined
          }
        }
        output: {
          client_id: string
          client_secret?: string | undefined
          client_id_issued_at: number
          client_secret_expires_at: number
          redirect_uris: string[]
          client_name?: string | undefined
          client_uri?: string | undefined
          logo_uri?: string | undefined
          scope: string
          grant_types: (
            | 'urn:ietf:params:oauth:grant-type:token-exchange'
            | 'urn:ietf:params:oauth:grant-type:device_code'
            | 'authorization_code'
            | 'refresh_token'
          )[]
          contacts?: string[] | undefined
          token_endpoint_auth_method?:
            | 'client_secret_basic'
            | 'none'
            | 'client_secret_post'
            | undefined
          software_id?: string | undefined
          software_version?: string | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/oauth/device': {
      $post: {
        input: { json: { client_id: string; scope?: string | undefined } }
        output: {
          device_code: string
          user_code: string
          verification_uri: string
          expires_in: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/userinfo': {
      $get: {
        input: {}
        output: {
          sub: string
          name?: string | undefined
          preferred_username?: string | undefined
          profile?: string | undefined
          picture?: string | undefined
          website?: string | undefined
          email?: string | undefined
          email_verified?: boolean | undefined
          hardwareItems?:
            | { sku: unknown[]; mem: number; num: number; isPrimary?: true | undefined }[]
            | undefined
          isPro: boolean
          canPay?: boolean | undefined
          billingMode?: 'prepaid' | 'postpaid' | undefined
          groups: string[]
          orgs: {
            sub: string
            name: string
            picture: string
            preferred_username: string
            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
            canPay?: boolean | undefined
            billingMode?: 'prepaid' | 'postpaid' | undefined
            roleInOrg?: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | undefined
            securityRestrictions?:
              | ('mfa' | 'token-policy' | 'token-revoked' | 'sso' | 'ip')[]
              | undefined
            resourceGroups?:
              | {
                  sub: string
                  name: string
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
                }[]
              | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {}
        output: {
          sub: string
          name?: string | undefined
          preferred_username?: string | undefined
          profile?: string | undefined
          picture?: string | undefined
          website?: string | undefined
          email?: string | undefined
          email_verified?: boolean | undefined
          hardwareItems?:
            | { sku: unknown[]; mem: number; num: number; isPrimary?: true | undefined }[]
            | undefined
          isPro: boolean
          canPay?: boolean | undefined
          billingMode?: 'prepaid' | 'postpaid' | undefined
          groups: string[]
          orgs: {
            sub: string
            name: string
            picture: string
            preferred_username: string
            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
            canPay?: boolean | undefined
            billingMode?: 'prepaid' | 'postpaid' | undefined
            roleInOrg?: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | undefined
            securityRestrictions?:
              | ('mfa' | 'token-policy' | 'token-revoked' | 'sso' | 'ip')[]
              | undefined
            resourceGroups?:
              | {
                  sub: string
                  name: string
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
                }[]
              | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/registry/token': {
      $get: {
        input: { query: { service: string; scope?: string | string[] | undefined } }
        output: { token: string; access_token: string; expires_in: number; issued_at: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/blog/:slug/comment': {
      $post: {
        input: { param: { slug: string } } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/blog/:slug/comment/:commentId/reply': {
      $post: {
        input: { param: { slug: string; commentId: string } } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/blog/:namespace/:slug/comment': {
      $post: {
        input: { param: { namespace: string; slug: string } } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/blog/:namespace/:slug/comment/:commentId/reply': {
      $post: {
        input: { param: { namespace: string; slug: string; commentId: string } } & {
          json: { comment: string }
        }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/blog/:namespace/:slug/resource-group': {
      $get: {
        input: { param: { namespace: string; slug: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { namespace: string; slug: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: {
          resourceGroupId: string | ({ [x: string]: unknown } | null)
          id: string
          slug: string
          title: string
          private: boolean
          addedBy: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/docs': {
      $get: {
        input: {}
        output: { id: string; url: string; category?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/docs/search': {
      $get: {
        input: {
          query: {
            q: string
            product?:
              | 'hub'
              | 'transformers'
              | 'diffusers'
              | 'datasets'
              | 'gradio'
              | 'trackio'
              | 'smolagents'
              | 'huggingface_hub'
              | 'cli'
              | 'huggingface.js'
              | 'transformers.js'
              | 'inference-providers'
              | 'inference-endpoints'
              | 'peft'
              | 'accelerate'
              | 'optimum'
              | 'optimum-habana'
              | 'optimum-neuron'
              | 'optimum-intel'
              | 'optimum-executorch'
              | 'optimum-tpu'
              | 'tokenizers'
              | 'llm-course'
              | 'context-course'
              | 'robotics-course'
              | 'mcp-course'
              | 'smol-course'
              | 'agents-course'
              | 'deep-rl-course'
              | 'computer-vision-course'
              | 'evaluate'
              | 'tasks'
              | 'dataset-viewer'
              | 'trl'
              | 'openenv'
              | 'simulate'
              | 'sagemaker'
              | 'timm'
              | 'safetensors'
              | 'tgi'
              | 'setfit'
              | 'audio-course'
              | 'lerobot'
              | 'reachy_mini'
              | 'autotrain'
              | 'tei'
              | 'bitsandbytes'
              | 'cookbook'
              | 'sentence_transformers'
              | 'ml-games-course'
              | 'diffusion-course'
              | 'ml-for-3d-course'
              | 'chat-ui'
              | 'leaderboards'
              | 'lighteval'
              | 'argilla'
              | 'distilabel'
              | 'microsoft-azure'
              | 'kernels'
              | 'google-cloud'
              | 'xet'
              | undefined
            limit?: number | undefined
          }
        }
        output: {
          id: string
          _vectors: { embeddings: number[] }
          heading1: string
          text: string
          text_plain: string
          product: string
          source_page_url: string
          source_page_title: string
          heading2?: string | undefined
          heading3?: string | undefined
          heading4?: string | undefined
          heading5?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/docs/search/full-text': {
      $get: {
        input: { query: { q: string; limit?: number | undefined; domain?: string | undefined } }
        output: {
          hits: {
            url: string
            hierarchy_lvl0?: string | undefined
            hierarchy_lvl1?: string | undefined
            hierarchy_lvl2?: string | undefined
            hierarchy_lvl3?: string | undefined
            hierarchy_lvl4?: string | undefined
            hierarchy_lvl5?: string | undefined
            hierarchy_lvl6?: string | undefined
            _formatted?:
              | {
                  url?: string | undefined
                  hierarchy_lvl0?: string | undefined
                  hierarchy_lvl1?: string | undefined
                  hierarchy_lvl2?: string | undefined
                  hierarchy_lvl3?: string | undefined
                  hierarchy_lvl4?: string | undefined
                  hierarchy_lvl5?: string | undefined
                  hierarchy_lvl6?: string | undefined
                  content?: string | undefined
                }
              | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/whoami-v2': {
      $get: {
        input: {}
        output: {
          auth: {
            type: string
            accessToken?:
              | {
                  displayName: string
                  role: 'read' | 'write' | 'god' | 'fineGrained'
                  fineGrained?:
                    | {
                        scoped: {
                          entity: {
                            _id: string
                            name?: string | undefined
                            type:
                              | 'dataset'
                              | 'model'
                              | 'space'
                              | 'bucket'
                              | 'kernel'
                              | 'container'
                              | 'collection'
                              | 'org'
                              | 'user'
                              | 'resource-group'
                              | 'oauth-app'
                          }
                          permissions: string[]
                        }[]
                        global?: ('discussion.write' | 'post.write')[] | undefined
                        canReadGatedRepos?: boolean | undefined
                      }
                    | undefined
                  createdAt: string
                }
              | undefined
            expiresAt?: string | undefined
            resource?: { sub: string } | undefined
          }
          type: 'user'
          id: string
          name: string
          fullname: string
          email?: (string | null) | undefined
          canPay?: boolean | undefined
          billingMode?: 'prepaid' | 'postpaid' | undefined
          avatarUrl: string
          periodEnd?: (number | null) | undefined
          emailVerified?: boolean | undefined
          isPro: boolean
          orgs: {
            type: 'org'
            id: string
            name: string
            fullname: string
            email?: (string | null) | undefined
            canPay?: boolean | undefined
            spendLimitReached?: boolean | undefined
            billingMode?: 'prepaid' | 'postpaid' | undefined
            avatarUrl: string
            periodEnd?: (number | null) | undefined
            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
            roleInOrg?: 'admin' | 'write' | 'contributor' | 'read' | 'no_access' | undefined
            securityRestrictions?:
              | ('mfa' | 'token-policy' | 'token-revoked' | 'sso' | 'ip')[]
              | undefined
            resourceGroups?:
              | {
                  id: string
                  name: string
                  role: 'admin' | 'write' | 'contributor' | 'read' | 'no_access'
                }[]
              | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/billing/usage-by-resource-group': {
      $get: {
        input: { param: { name: string } } & {
          query: { startDate?: string | undefined; endDate?: string | undefined }
        }
        output: {
          currency: string
          periods: {
            period: string
            resourceGroups: {
              id: string | null
              name: string | null
              storage: { privateGB: number; publicGB: number }
              inference: { requestCount: number; costCents: number }
              compute: {
                spaces: { uptimeSec: number; costCents: number }
                endpoints: { uptimeSec: number; costCents: number }
                jobs: { uptimeSec: number; costCents: number }
              }
            }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/billing/usage-by-inference-session': {
      $get: {
        input: { param: { name: string } } & {
          query: { startDate?: string | undefined; endDate?: string | undefined }
        }
        output: {
          currency: string
          periods: {
            period: string
            sessions: { id: string; requestCount: number; costCents: number }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/billing/usage/inference': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            startDate?: string | undefined
            endDate?: string | undefined
            limit?: number | undefined
          }
        }
        output: {
          period: string
          usage: {
            user: string | null
            model: string | null
            provider: string
            requestCount: number
            costCents: number
            inputTokens: number
            outputTokens: number
            cachedInputTokens: number
          }[]
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/billing/credits': {
      $get: {
        input: { param: { name: string } }
        output: {
          balanceUsd: number
          billingMode: 'postpaid' | 'prepaid'
          balances: {
            name?: string | undefined
            type: 'included' | 'purchased' | 'granted'
            balanceUsd: number
            expiresAt?: string | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/billing/prepaid-credits/purchase-link': {
      $post: {
        input: { param: { name: string } } & { json: { amountUsd: number } }
        output: { url: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/billing/credits': {
      $get: {
        input: {}
        output: {
          balanceUsd: number
          billingMode: 'postpaid' | 'prepaid'
          balances: {
            name?: string | undefined
            type: 'included' | 'purchased' | 'granted'
            balanceUsd: number
            expiresAt?: string | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/billing/prepaid-credits/purchase-link': {
      $post: {
        input: { json: { amountUsd: number } }
        output: { url: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/billing/usage-by-inference-session': {
      $get: {
        input: { query: { startDate?: string | undefined; endDate?: string | undefined } }
        output: {
          currency: string
          periods: {
            period: string
            sessions: { id: string; requestCount: number; costCents: number }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/settings/billing/usage/jobs': {
      $get: {
        input: {}
        output: {
          usage: {
            usedMicroUsd: number
            totalMinutes: number
            periodStart: string
            periodEnd: string
            jobDetails: {
              jobId: string
              hardwareFlavor: string
              totalMinutes: number
              totalCostMicroUsd: number
              startedAt: string
              completedAt?: string | undefined
            }[]
          }
          hasAccess: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/overview': {
      $get: {
        input: { param: { username: string } }
        output: {
          _id: string
          orgs?: { id: string; name: string; fullname: string; avatarUrl: string }[] | undefined
          avatarUrl: string
          fullname: string
          isPro: boolean
          user: string
          numModels?: number | undefined
          numDatasets?: number | undefined
          numSpaces?: number | undefined
          numBuckets?: number | undefined
          numKernels?: number | undefined
          numDiscussions?: number | undefined
          numPapers?: number | undefined
          numUpvotes?: number | undefined
          numLikes?: number | undefined
          numFollowers?: number | undefined
          numFollowing?: number | undefined
          numFollowingOrgs?: number | undefined
          details?: string | undefined
          isFollowing?: boolean | undefined
          reasonToFollow?: string | undefined
          primaryOrgAvatarUrl?: string | undefined
          serviceAccount?:
            | { id: string; org: string; orgAvatarUrl: string; description?: string | undefined }
            | undefined
          type: 'user'
          createdAt: string
          hardwareItems?:
            | { sku: unknown[]; mem: number; num: number; isPrimary?: true | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/socials': {
      $get: {
        input: { param: { username: string } }
        output: {
          _id: string
          user: string
          socialHandles: {
            twitter?: string | undefined
            github?: string | undefined
            linkedin?: string | undefined
            bluesky?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/avatar': {
      $get: {
        input: { param: { username: string } } & { query: { redirect?: string | undefined } }
        output: { avatarUrl: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/likes': {
      $get: {
        input: { param: { username: string } } & {
          query: { limit?: number | undefined; cursor?: string | undefined }
        }
        output: {
          createdAt: string
          repo: {
            name: string
            type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/followers': {
      $get: {
        input: { param: { username: string } } & {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            expand?: 'followedAt'[] | undefined
          }
        }
        output: (
          | {
              _id: string
              orgs?: { id: string; name: string; fullname: string; avatarUrl: string }[] | undefined
              avatarUrl: string
              fullname: string
              isPro: boolean
              user: string
              numModels?: number | undefined
              numDatasets?: number | undefined
              numSpaces?: number | undefined
              numBuckets?: number | undefined
              numKernels?: number | undefined
              numDiscussions?: number | undefined
              numPapers?: number | undefined
              numUpvotes?: number | undefined
              numLikes?: number | undefined
              numFollowers?: number | undefined
              numFollowing?: number | undefined
              numFollowingOrgs?: number | undefined
              details?: string | undefined
              isFollowing?: boolean | undefined
              reasonToFollow?: string | undefined
              primaryOrgAvatarUrl?: string | undefined
              serviceAccount?:
                | {
                    id: string
                    org: string
                    orgAvatarUrl: string
                    description?: string | undefined
                  }
                | undefined
              type: 'user'
            }
          | { _id: string; followedAt: string }
        )[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/following': {
      $get: {
        input: { param: { username: string } } & { query: { cursor?: string | undefined } }
        output: {
          _id: string
          orgs?: { id: string; name: string; fullname: string; avatarUrl: string }[] | undefined
          avatarUrl: string
          fullname: string
          isPro: boolean
          user: string
          numModels?: number | undefined
          numDatasets?: number | undefined
          numSpaces?: number | undefined
          numBuckets?: number | undefined
          numKernels?: number | undefined
          numDiscussions?: number | undefined
          numPapers?: number | undefined
          numUpvotes?: number | undefined
          numLikes?: number | undefined
          numFollowers?: number | undefined
          numFollowing?: number | undefined
          numFollowingOrgs?: number | undefined
          details?: string | undefined
          isFollowing?: boolean | undefined
          reasonToFollow?: string | undefined
          primaryOrgAvatarUrl?: string | undefined
          serviceAccount?:
            | { id: string; org: string; orgAvatarUrl: string; description?: string | undefined }
            | undefined
          type: 'user'
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:username/following/orgs': {
      $get: {
        input: { param: { username: string } } & { query: { cursor?: string | undefined } }
        output: {
          _id: string
          avatarUrl: string
          name: string
          fullname: string
          type: 'org'
          isHf: boolean
          orgType?:
            | 'company'
            | 'university'
            | 'classroom'
            | 'non-profit'
            | 'government'
            | 'community'
            | undefined
          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
          isFollowing?: boolean | undefined
          numModels?: number | undefined
          followerCount?: number | undefined
          reasonToFollow?: string | undefined
          emailDomains?: { domain: string; verified?: boolean | undefined }[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/organizations/:name/socials': {
      $get: {
        input: { param: { name: string } }
        output: {
          _id: string
          org: string
          socialHandles: {
            twitter?: string | undefined
            github?: string | undefined
            linkedin?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/inference-endpoints/:namespace/auth-check/:perms': {
      $post:
        | {
            input: { param: { namespace: string; perms: 'read' | 'write' | 'infer' } } & {
              query: {
                own?: string | undefined
                is_creator?: string | undefined
                creator_id?: string | undefined
                incur_cost?: string | undefined
                resource_group_id?: string | undefined
                repo_id?: string | undefined
              }
            }
            output: {
              namespace: { id: string; name: string }
              user: { id: string; name: string; hasHfLevelAccess?: boolean | undefined }
              resourceGroupId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; perms: 'read' | 'write' | 'infer' } } & {
              query: {
                own?: string | undefined
                is_creator?: string | undefined
                creator_id?: string | undefined
                incur_cost?: string | undefined
                resource_group_id?: string | undefined
                repo_id?: string | undefined
              }
            }
            output: {
              namespace: { id: string; name: string }
              user: { id: string; name: string; hasHfLevelAccess?: boolean | undefined }
              patternRestrictions: string[]
              resourceGroupId?: string | undefined
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/inference-endpoints/:namespace/:endpoint/auth-check/:perms': {
      $post:
        | {
            input: {
              param: { namespace: string; endpoint: string; perms: 'read' | 'write' | 'infer' }
            } & {
              query: {
                own?: string | undefined
                is_creator?: string | undefined
                creator_id?: string | undefined
                incur_cost?: string | undefined
                resource_group_id?: string | undefined
                repo_id?: string | undefined
              }
            }
            output: {
              namespace: { id: string; name: string }
              user: { id: string; name: string; hasHfLevelAccess?: boolean | undefined }
              resourceGroupId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { namespace: string; endpoint: string; perms: 'read' | 'write' | 'infer' }
            } & {
              query: {
                own?: string | undefined
                is_creator?: string | undefined
                creator_id?: string | undefined
                incur_cost?: string | undefined
                resource_group_id?: string | undefined
                repo_id?: string | undefined
              }
            }
            output: {
              namespace: { id: string; name: string }
              user: { id: string; name: string; hasHfLevelAccess?: boolean | undefined }
              patternRestrictions: string[]
              resourceGroupId?: string | undefined
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/jobs/:namespace/auth-check/:perms': {
      $post: {
        input: { param: { namespace: string; perms: 'read' | 'write' } }
        output: { namespace: { id: string; name: string }; user: { id: string; name: string } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/:jobId/auth-check/:perms': {
      $post: {
        input: { param: { namespace: string; jobId: string; perms: 'read' | 'write' } }
        output: { namespace: { id: string; name: string }; user: { id: string; name: string } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/treesize/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } }
        output: { path: string; size: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/treesize/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } }
        output: { path: string; size: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/treesize/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } }
        output: { path: string; size: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/safetensors-metadata/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; path: string } }
        output: {
          sharded: true
          index: { metadata?: { [x: string]: string | number } | undefined }
          headers: {
            [x: string]: {
              [x: string]:
                | { dtype: string; shape: number[]; data_offsets: unknown[] }
                | { [x: string]: string }
            }
          }
          parameterCount: { [x: string]: number }
          parameterTotal?: number | undefined
          filepaths: string[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/lfs-files': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            cursor?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'size' | 'pushedAt' | undefined
            xet?: string | undefined
          }
        }
        output: {
          pusher?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          ref?: string | undefined
          fileOid: string
          oid: string
          size: number
          pushedAt: string
          filename?: string | undefined
          xetHash?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/lfs-files': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            cursor?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'size' | 'pushedAt' | undefined
            xet?: string | undefined
          }
        }
        output: {
          pusher?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          ref?: string | undefined
          fileOid: string
          oid: string
          size: number
          pushedAt: string
          filename?: string | undefined
          xetHash?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/lfs-files': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            cursor?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            sort?: 'size' | 'pushedAt' | undefined
            xet?: string | undefined
          }
        }
        output: {
          pusher?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          ref?: string | undefined
          fileOid: string
          oid: string
          size: number
          pushedAt: string
          filename?: string | undefined
          xetHash?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/lfs-files/duplicate': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/kernels/:namespace/:repo/lfs-files/duplicate': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/datasets/:namespace/:repo/lfs-files/duplicate': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/spaces/:namespace/:repo/lfs-files/duplicate': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/buckets/:namespace/:repo/lfs-files/duplicate': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                target: { type: 'model' | 'space' | 'dataset' | 'kernel'; name: string }
                files: { xetHash: string; sha256: string; filename?: string | undefined }[]
              }
            }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { xetHash: string; sha256: string; error: string }[]
            }
            outputFormat: 'json'
            status: 207
          }
    }
  } & {
    '/api/models/:namespace/:repo/commits/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          query: {
            p?: number | undefined
            expand?: 'formatted'[] | undefined
            limit?: number | undefined
          }
        }
        output: {
          id: string
          title: string
          message: string
          authors: { user: string; avatar?: string | undefined }[]
          date: string
          formatted?: { title: string; message?: string | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/commits/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          query: {
            p?: number | undefined
            expand?: 'formatted'[] | undefined
            limit?: number | undefined
          }
        }
        output: {
          id: string
          title: string
          message: string
          authors: { user: string; avatar?: string | undefined }[]
          date: string
          formatted?: { title: string; message?: string | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/commits/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          query: {
            p?: number | undefined
            expand?: 'formatted'[] | undefined
            limit?: number | undefined
          }
        }
        output: {
          id: string
          title: string
          message: string
          authors: { user: string; avatar?: string | undefined }[]
          date: string
          formatted?: { title: string; message?: string | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/refs': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: { include_prs?: string | undefined }
        }
        output: {
          tags: { name: string; ref: string; targetCommit: string }[]
          branches: { name: string; ref: string; targetCommit: string }[]
          converts: { name: string; ref: string; targetCommit: string }[]
          pullRequests?: { name: string; ref: string; targetCommit: string }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/refs': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: { include_prs?: string | undefined }
        }
        output: {
          tags: { name: string; ref: string; targetCommit: string }[]
          branches: { name: string; ref: string; targetCommit: string }[]
          converts: { name: string; ref: string; targetCommit: string }[]
          pullRequests?: { name: string; ref: string; targetCommit: string }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/refs': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: { include_prs?: string | undefined }
        }
        output: {
          tags: { name: string; ref: string; targetCommit: string }[]
          branches: { name: string; ref: string; targetCommit: string }[]
          converts: { name: string; ref: string; targetCommit: string }[]
          pullRequests?: { name: string; ref: string; targetCommit: string }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/compare/:compare': {
      $get: {
        input: { param: { namespace: string; repo: string; compare: string } } & {
          query: { raw?: string | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/compare/:compare': {
      $get: {
        input: { param: { namespace: string; repo: string; compare: string } } & {
          query: { raw?: string | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/compare/:compare': {
      $get: {
        input: { param: { namespace: string; repo: string; compare: string } } & {
          query: { raw?: string | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/paths-info/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          json: { paths: string[] | string; expand?: string | boolean | undefined }
        }
        output: {
          type: 'file' | 'directory' | 'unknown'
          oid: string
          size: number
          lfs?: { pointerSize: number } | undefined
          xetHash?: string | undefined
          path: string
          lastCommit?: { id: string; title: string; date: string } | undefined
          securityFileStatus?:
            | {
                status:
                  | 'unscanned'
                  | 'safe'
                  | 'queued'
                  | 'error'
                  | 'caution'
                  | 'suspicious'
                  | 'unsafe'
                jFrogScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                protectAiScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                avScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                pickleImportScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                virusTotalScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/paths-info/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          json: { paths: string[] | string; expand?: string | boolean | undefined }
        }
        output: {
          type: 'file' | 'directory' | 'unknown'
          oid: string
          size: number
          lfs?: { pointerSize: number } | undefined
          xetHash?: string | undefined
          path: string
          lastCommit?: { id: string; title: string; date: string } | undefined
          securityFileStatus?:
            | {
                status:
                  | 'unscanned'
                  | 'safe'
                  | 'queued'
                  | 'error'
                  | 'caution'
                  | 'suspicious'
                  | 'unsafe'
                jFrogScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                protectAiScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                avScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                pickleImportScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                virusTotalScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/paths-info/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          json: { paths: string[] | string; expand?: string | boolean | undefined }
        }
        output: {
          type: 'file' | 'directory' | 'unknown'
          oid: string
          size: number
          lfs?: { pointerSize: number } | undefined
          xetHash?: string | undefined
          path: string
          lastCommit?: { id: string; title: string; date: string } | undefined
          securityFileStatus?:
            | {
                status:
                  | 'unscanned'
                  | 'safe'
                  | 'queued'
                  | 'error'
                  | 'caution'
                  | 'suspicious'
                  | 'unsafe'
                jFrogScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                protectAiScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                avScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                pickleImportScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                virusTotalScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/preupload/:rev': {
      $post:
        | {
            input: { param: { namespace: string; repo: string; rev: string } } & {
              json: {
                files: { path: string; size: number; sample: string }[]
                gitAttributes?: string | undefined
                gitIgnore?: string | undefined
              }
            }
            output: {
              files: {
                path: string
                uploadMode: 'lfs' | 'regular'
                shouldIgnore: boolean
                oid?: string | undefined
              }[]
              commitOid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string } } & {
              json: {
                files: { path: string; size: number; sample: string }[]
                gitAttributes?: string | undefined
                gitIgnore?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/spaces/:namespace/:repo/preupload/:rev': {
      $post:
        | {
            input: { param: { namespace: string; repo: string; rev: string } } & {
              json: {
                files: { path: string; size: number; sample: string }[]
                gitAttributes?: string | undefined
                gitIgnore?: string | undefined
              }
            }
            output: {
              files: {
                path: string
                uploadMode: 'lfs' | 'regular'
                shouldIgnore: boolean
                oid?: string | undefined
              }[]
              commitOid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string } } & {
              json: {
                files: { path: string; size: number; sample: string }[]
                gitAttributes?: string | undefined
                gitIgnore?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/datasets/:namespace/:repo/preupload/:rev': {
      $post:
        | {
            input: { param: { namespace: string; repo: string; rev: string } } & {
              json: {
                files: { path: string; size: number; sample: string }[]
                gitAttributes?: string | undefined
                gitIgnore?: string | undefined
              }
            }
            output: {
              files: {
                path: string
                uploadMode: 'lfs' | 'regular'
                shouldIgnore: boolean
                oid?: string | undefined
              }[]
              commitOid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string } } & {
              json: {
                files: { path: string; size: number; sample: string }[]
                gitAttributes?: string | undefined
                gitIgnore?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/models/:namespace/:repo/xet-write-token/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/xet-write-token/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/xet-write-token/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace/:repo/xet-write-token': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo/xet-write-token': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/xet-read-token/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/xet-read-token/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/xet-read-token/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace/:repo/xet-read-token': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo/xet-read-token': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { casUrl: string; exp: number; accessToken: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/commit/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          query: { create_pr?: string | undefined; hot_reload?: string | undefined }
        } & { header: { 'Content-Type'?: 'application/json' | 'application/x-ndjson' | undefined } }
        output: {
          success: boolean
          pullRequestUrl?: string | undefined
          commitOid: string
          commitUrl: string
          hookOutput: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/commit/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          query: { create_pr?: string | undefined; hot_reload?: string | undefined }
        } & { header: { 'Content-Type'?: 'application/json' | 'application/x-ndjson' | undefined } }
        output: {
          success: boolean
          pullRequestUrl?: string | undefined
          commitOid: string
          commitUrl: string
          hookOutput: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/commit/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          query: { create_pr?: string | undefined; hot_reload?: string | undefined }
        } & { header: { 'Content-Type'?: 'application/json' | 'application/x-ndjson' | undefined } }
        output: {
          success: boolean
          pullRequestUrl?: string | undefined
          commitOid: string
          commitUrl: string
          hookOutput: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/resource-group': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: {
          name: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          private: boolean
          addedBy: string
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/resource-group': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: {
          name: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          private: boolean
          addedBy: string
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/resource-group': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: {
          name: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          private: boolean
          addedBy: string
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace/:repo/resource-group': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: {
          name: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          private: boolean
          addedBy: string
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo/resource-group': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: {
          name: string
          type: 'dataset' | 'model' | 'space' | 'bucket' | 'kernel' | 'container'
          private: boolean
          addedBy: string
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/super-squash/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          json: { message?: string | undefined }
        }
        output: { commitId: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/super-squash/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          json: { message?: string | undefined }
        }
        output: { commitId: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/super-squash/:rev': {
      $post: {
        input: { param: { namespace: string; repo: string; rev: string } } & {
          json: { message?: string | undefined }
        }
        output: { commitId: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/settings': {
      $put: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            private?: boolean | undefined
            visibility?: 'private' | 'public' | 'protected' | undefined
            discussionsDisabled?: boolean | undefined
            discussionsSorting?: 'recently-created' | 'trending' | 'reactions' | undefined
            gated?: false | 'auto' | 'manual' | undefined
            orgMembersGated?: boolean | undefined
            gatedProfileSharing?:
              | { username: true; email: boolean }
              | { username: false; email: false }
              | undefined
            gatedNotificationsEmail?: string | undefined
            gatedNotificationsMode?: 'bulk' | 'real-time' | undefined
          }
        }
        output: {
          private?: boolean | undefined
          visibility?: 'private' | 'public' | 'protected' | undefined
          discussionsDisabled?: boolean | undefined
          discussionsSorting?: 'recently-created' | 'trending' | 'reactions' | undefined
          gated?: false | 'auto' | 'manual' | undefined
          orgMembersGated?: boolean | undefined
          gatedProfileSharing?:
            | { username: true; email: boolean }
            | { username: false; email: false }
            | undefined
          gatedNotificationsEmail?: string | undefined
          gatedNotificationsMode?: 'bulk' | 'real-time' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/settings': {
      $put: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            private?: boolean | undefined
            visibility?: 'private' | 'public' | 'protected' | undefined
            discussionsDisabled?: boolean | undefined
            discussionsSorting?: 'recently-created' | 'trending' | 'reactions' | undefined
            gated?: false | 'auto' | 'manual' | undefined
            orgMembersGated?: boolean | undefined
            gatedProfileSharing?:
              | { username: true; email: boolean }
              | { username: false; email: false }
              | undefined
            gatedNotificationsEmail?: string | undefined
            gatedNotificationsMode?: 'bulk' | 'real-time' | undefined
          }
        }
        output: {
          private?: boolean | undefined
          visibility?: 'private' | 'public' | 'protected' | undefined
          discussionsDisabled?: boolean | undefined
          discussionsSorting?: 'recently-created' | 'trending' | 'reactions' | undefined
          gated?: false | 'auto' | 'manual' | undefined
          orgMembersGated?: boolean | undefined
          gatedProfileSharing?:
            | { username: true; email: boolean }
            | { username: false; email: false }
            | undefined
          gatedNotificationsEmail?: string | undefined
          gatedNotificationsMode?: 'bulk' | 'real-time' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/settings': {
      $put: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            private?: boolean | undefined
            visibility?: 'private' | 'public' | 'protected' | undefined
            discussionsDisabled?: boolean | undefined
            discussionsSorting?: 'recently-created' | 'trending' | 'reactions' | undefined
            gated?: false | 'auto' | 'manual' | undefined
            orgMembersGated?: boolean | undefined
            gatedProfileSharing?:
              | { username: true; email: boolean }
              | { username: false; email: false }
              | undefined
            gatedNotificationsEmail?: string | undefined
            gatedNotificationsMode?: 'bulk' | 'real-time' | undefined
          }
        }
        output: {
          private?: boolean | undefined
          visibility?: 'private' | 'public' | 'protected' | undefined
          discussionsDisabled?: boolean | undefined
          discussionsSorting?: 'recently-created' | 'trending' | 'reactions' | undefined
          gated?: false | 'auto' | 'manual' | undefined
          orgMembersGated?: boolean | undefined
          gatedProfileSharing?:
            | { username: true; email: boolean }
            | { username: false; email: false }
            | undefined
          gatedNotificationsEmail?: string | undefined
          gatedNotificationsMode?: 'bulk' | 'real-time' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/settings/trusted-publishers': {
      $get: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels' | 'buckets' | 'containers'
            namespace: string
            repo: string
          }
        }
        output: {
          _id: string
          issuerUrl: string
          claims: { [x: string]: { kind: 'eq'; value: string } | { kind: 'prefix'; value: string } }
          configuredBy?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          createdAt: string
          lastUsedAt?: string | undefined
          capabilities?: ('inference-api' | 'request-gated-repos')[] | undefined
          permissions?: ('repo.content.read' | 'repo.content.write')[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels' | 'buckets' | 'containers'
            namespace: string
            repo: string
          }
        } & {
          json: {
            issuerUrl: string
            claims: {
              [x: string]: { kind: 'eq'; value: string } | { kind: 'prefix'; value: string }
            }
            permissions?: ('repo.content.read' | 'repo.content.write')[] | undefined
          }
        }
        output: {
          _id: string
          issuerUrl: string
          claims: { [x: string]: { kind: 'eq'; value: string } | { kind: 'prefix'; value: string } }
          configuredBy?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          createdAt: string
          lastUsedAt?: string | undefined
          capabilities?: ('inference-api' | 'request-gated-repos')[] | undefined
          permissions?: ('repo.content.read' | 'repo.content.write')[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/tree/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
          query: {
            expand?: string | undefined
            recursive?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: {
          type: 'file' | 'directory' | 'unknown'
          oid: string
          size?: number | undefined
          lfs?: { oid: string; size: number; pointerSize: number } | undefined
          xetHash?: string | undefined
          lastCommit?: { id: string; title: string; date: string } | undefined
          securityFileStatus?:
            | {
                status:
                  | 'unscanned'
                  | 'safe'
                  | 'queued'
                  | 'error'
                  | 'caution'
                  | 'suspicious'
                  | 'unsafe'
                jFrogScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                protectAiScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                avScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                pickleImportScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                virusTotalScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/tree/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
          query: {
            expand?: string | undefined
            recursive?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: {
          type: 'file' | 'directory' | 'unknown'
          oid: string
          size?: number | undefined
          lfs?: { oid: string; size: number; pointerSize: number } | undefined
          xetHash?: string | undefined
          lastCommit?: { id: string; title: string; date: string } | undefined
          securityFileStatus?:
            | {
                status:
                  | 'unscanned'
                  | 'safe'
                  | 'queued'
                  | 'error'
                  | 'caution'
                  | 'suspicious'
                  | 'unsafe'
                jFrogScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                protectAiScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                avScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                pickleImportScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                virusTotalScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/tree/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
          query: {
            expand?: string | undefined
            recursive?: string | undefined
            limit?: number | undefined
            cursor?: string | undefined
          }
        }
        output: {
          type: 'file' | 'directory' | 'unknown'
          oid: string
          size?: number | undefined
          lfs?: { oid: string; size: number; pointerSize: number } | undefined
          xetHash?: string | undefined
          lastCommit?: { id: string; title: string; date: string } | undefined
          securityFileStatus?:
            | {
                status:
                  | 'unscanned'
                  | 'safe'
                  | 'queued'
                  | 'error'
                  | 'caution'
                  | 'suspicious'
                  | 'unsafe'
                jFrogScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                protectAiScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
                avScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                pickleImportScan: {
                  status:
                    | 'unscanned'
                    | 'safe'
                    | 'queued'
                    | 'error'
                    | 'caution'
                    | 'suspicious'
                    | 'unsafe'
                  message?: string | undefined
                  reportLink?: string | undefined
                  reportLabel?: string | undefined
                  pickleImports?:
                    | {
                        module: string
                        name: string
                        safety: 'innocuous' | 'suspicious' | 'dangerous'
                      }[]
                    | undefined
                  version?: string | undefined
                }
                virusTotalScan?:
                  | {
                      status:
                        | 'unscanned'
                        | 'safe'
                        | 'queued'
                        | 'error'
                        | 'caution'
                        | 'suspicious'
                        | 'unsafe'
                      message?: string | undefined
                      reportLink?: string | undefined
                      reportLabel?: string | undefined
                      pickleImports?:
                        | {
                            module: string
                            name: string
                            safety: 'innocuous' | 'suspicious' | 'dangerous'
                          }[]
                        | undefined
                      version?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/notebook/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } }
        output: { error: string } | { notInCache: true } | { url: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/notebook/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } }
        output: { error: string } | { notInCache: true } | { url: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/notebook/:rev/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string; path: string } }
        output: { error: string } | { notInCache: true } | { url: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/scan': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          scansDone: boolean
          filesWithIssues: {
            path: string
            level: 'unscanned' | 'safe' | 'queued' | 'error' | 'caution' | 'suspicious' | 'unsafe'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/scan': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          scansDone: boolean
          filesWithIssues: {
            path: string
            level: 'unscanned' | 'safe' | 'queued' | 'error' | 'caution' | 'suspicious' | 'unsafe'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/scan': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          scansDone: boolean
          filesWithIssues: {
            path: string
            level: 'unscanned' | 'safe' | 'queued' | 'error' | 'caution' | 'suspicious' | 'unsafe'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/kernels/:namespace/:repo/scan': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          scansDone: boolean
          filesWithIssues: {
            path: string
            level: 'unscanned' | 'safe' | 'queued' | 'error' | 'caution' | 'suspicious' | 'unsafe'
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/discussions': {
      $get: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
          }
        } & {
          query: {
            p?: number | undefined
            type?: 'all' | 'discussion' | 'pull_request' | undefined
            status?: 'all' | 'open' | 'closed' | undefined
            author?: string | undefined
            search?: string | undefined
            sort?: 'recently-created' | 'trending' | 'reactions' | undefined
          }
        }
        output: {
          discussions: {
            num: number
            author?:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            repo: RepoId
            title: string
            createdAt: string
            topReactions: {
              reaction:
                | '🔥'
                | '🚀'
                | '👀'
                | '❤️'
                | '🤗'
                | '😎'
                | '➕'
                | '🧠'
                | '👍'
                | '🤝'
                | '😔'
                | '🤯'
              count: number
            }[]
            status: 'draft' | 'open' | 'closed' | 'merged'
            isPullRequest: boolean
            numComments: number
            numReactionUsers: number
            pinned: boolean
            repoOwner?:
              | {
                  name: string
                  type: 'org' | 'user'
                  isParticipating: boolean
                  isDiscussionAuthor: boolean
                }
              | undefined
          }[]
          count: number
          start: number
          numClosedDiscussions?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
          }
        } & { json: { title: string; description: string; pullRequest?: boolean | undefined } }
        output: {
          url: string
          num: number
          pullRequest: boolean
          references?: { base: string; mergeCommitId?: string | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/discussions/:num': {
      $get: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
            num: string
          }
        }
        output:
          | {
              diffUrl?: string | undefined
              _id: string
              num?: number | undefined
              author?:
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'org'
                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                    isUserFollowing?: boolean | undefined
                  }
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'user'
                    isPro: boolean
                    isUserFollowing?: boolean | undefined
                    primaryOrg?:
                      | {
                          avatarUrl: string
                          fullname: string
                          name: string
                          type: 'org'
                          isHf: boolean
                          isFollowing?: boolean | undefined
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          details?: string | undefined
                          hasPrivateMembersList?: boolean | undefined
                          userRole?:
                            | 'admin'
                            | 'write'
                            | 'contributor'
                            | 'read'
                            | 'no_access'
                            | undefined
                          numUsers?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              org?:
                | {
                    avatarUrl: string
                    email?: string | undefined
                    fullname: string
                    name: string
                    type: 'org'
                    isHf: boolean
                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                    details?: string | undefined
                    hasPrivateMembersList?: boolean | undefined
                    requiresSSO?: boolean | undefined
                  }
                | undefined
              repo?: RepoId | undefined
              title: string
              createdAt?: string | undefined
              status: 'draft' | 'open' | 'closed' | 'merged'
              events: (
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'comment'
                    data: {
                      edited: boolean
                      hidden: boolean
                      hiddenBy?: string | undefined
                      hiddenReason?:
                        | 'Spam'
                        | 'Abuse'
                        | 'Graphic Content'
                        | 'Resolved'
                        | 'Off-Topic'
                        | 'Low Quality'
                        | undefined
                      latest: {
                        raw: string
                        html: string
                        updatedAt: string
                        author?:
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'org'
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              isUserFollowing?: boolean | undefined
                            }
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'user'
                              isPro: boolean
                              isUserFollowing?: boolean | undefined
                              primaryOrg?:
                                | {
                                    avatarUrl: string
                                    fullname: string
                                    name: string
                                    type: 'org'
                                    isHf: boolean
                                    isFollowing?: boolean | undefined
                                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                    details?: string | undefined
                                    hasPrivateMembersList?: boolean | undefined
                                    userRole?:
                                      | 'admin'
                                      | 'write'
                                      | 'contributor'
                                      | 'read'
                                      | 'no_access'
                                      | undefined
                                    numUsers?: number | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                      numEdits: number
                      editors: string[]
                      editorAvatarUrls: string[]
                      reactions: {
                        reaction:
                          | '🔥'
                          | '🚀'
                          | '👀'
                          | '❤️'
                          | '🤗'
                          | '😎'
                          | '➕'
                          | '🧠'
                          | '👍'
                          | '🤝'
                          | '😔'
                          | '🤯'
                        users: string[]
                        count: number
                      }[]
                      identifiedLanguage?: { language: string; probability: number } | undefined
                      relatedEventId?: string | undefined
                      isReport?: boolean | undefined
                      parentCommentId?: string | undefined
                    }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'status-change'
                    data: {
                      status: 'draft' | 'open' | 'closed' | 'merged'
                      reason?: string | undefined
                    }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'commit'
                    data: { subject: string; oid: string }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'title-change'
                    data: { from: string; to: string }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'pinning-change'
                    data: { pinned: boolean }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'locking-change'
                    data: { locked: boolean }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'report-status-change'
                    data: { report: boolean }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'ref-deleted'
                    data: {}
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'commits-truncated'
                    data: { hiddenCommits: number; headOid: string }
                  }
              )[]
              pinned: boolean
              locked: boolean
              collection: 'discussions' | 'paper_discussions' | 'social_posts' | 'community_blogs'
              isPullRequest: false
              isReport: boolean
            }
          | {
              diffUrl?: string | undefined
              _id: string
              num?: number | undefined
              author?:
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'org'
                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                    isUserFollowing?: boolean | undefined
                  }
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'user'
                    isPro: boolean
                    isUserFollowing?: boolean | undefined
                    primaryOrg?:
                      | {
                          avatarUrl: string
                          fullname: string
                          name: string
                          type: 'org'
                          isHf: boolean
                          isFollowing?: boolean | undefined
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          details?: string | undefined
                          hasPrivateMembersList?: boolean | undefined
                          userRole?:
                            | 'admin'
                            | 'write'
                            | 'contributor'
                            | 'read'
                            | 'no_access'
                            | undefined
                          numUsers?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              org?:
                | {
                    avatarUrl: string
                    email?: string | undefined
                    fullname: string
                    name: string
                    type: 'org'
                    isHf: boolean
                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                    details?: string | undefined
                    hasPrivateMembersList?: boolean | undefined
                    requiresSSO?: boolean | undefined
                  }
                | undefined
              repo?: RepoId | undefined
              title: string
              createdAt?: string | undefined
              status: 'draft' | 'open' | 'closed' | 'merged'
              events: (
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'comment'
                    data: {
                      edited: boolean
                      hidden: boolean
                      hiddenBy?: string | undefined
                      hiddenReason?:
                        | 'Spam'
                        | 'Abuse'
                        | 'Graphic Content'
                        | 'Resolved'
                        | 'Off-Topic'
                        | 'Low Quality'
                        | undefined
                      latest: {
                        raw: string
                        html: string
                        updatedAt: string
                        author?:
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'org'
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              isUserFollowing?: boolean | undefined
                            }
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'user'
                              isPro: boolean
                              isUserFollowing?: boolean | undefined
                              primaryOrg?:
                                | {
                                    avatarUrl: string
                                    fullname: string
                                    name: string
                                    type: 'org'
                                    isHf: boolean
                                    isFollowing?: boolean | undefined
                                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                    details?: string | undefined
                                    hasPrivateMembersList?: boolean | undefined
                                    userRole?:
                                      | 'admin'
                                      | 'write'
                                      | 'contributor'
                                      | 'read'
                                      | 'no_access'
                                      | undefined
                                    numUsers?: number | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                      numEdits: number
                      editors: string[]
                      editorAvatarUrls: string[]
                      reactions: {
                        reaction:
                          | '🔥'
                          | '🚀'
                          | '👀'
                          | '❤️'
                          | '🤗'
                          | '😎'
                          | '➕'
                          | '🧠'
                          | '👍'
                          | '🤝'
                          | '😔'
                          | '🤯'
                        users: string[]
                        count: number
                      }[]
                      identifiedLanguage?: { language: string; probability: number } | undefined
                      relatedEventId?: string | undefined
                      isReport?: boolean | undefined
                      parentCommentId?: string | undefined
                    }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'status-change'
                    data: {
                      status: 'draft' | 'open' | 'closed' | 'merged'
                      reason?: string | undefined
                    }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'commit'
                    data: { subject: string; oid: string }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'title-change'
                    data: { from: string; to: string }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'pinning-change'
                    data: { pinned: boolean }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'locking-change'
                    data: { locked: boolean }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'report-status-change'
                    data: { report: boolean }
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'ref-deleted'
                    data: {}
                  }
                | {
                    id: string
                    createdAt: string
                    author?:
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          isOwner?: boolean | undefined
                          isOrgMember?: boolean | undefined
                          isBlockedByMe?: boolean | undefined
                          oauthApp?:
                            | {
                                imageUrl?: string | undefined
                                imageData?:
                                  | { emoji: string; colorFrom: string; colorTo: string }
                                  | undefined
                                url?: string | undefined
                                name: string
                              }
                            | undefined
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    type: 'commits-truncated'
                    data: { hiddenCommits: number; headOid: string }
                  }
              )[]
              pinned: boolean
              locked: boolean
              collection: 'discussions'
              isPullRequest: true
              filesWithConflicts: string[] | true
              changes: {
                base: string
                mergeCommitId?: string | undefined
                headCommitId?: string | undefined
                refDeleted?: boolean | undefined
              }
            }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/discussions/:num/comment': {
      $post: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
            num: string
          }
        } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/discussions/:num/status': {
      $post: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
            num: string
          }
        } & { json: { status: 'open' | 'closed'; comment?: string | undefined } }
        output: {
          newStatus: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'status-change'
            data: { status: 'draft' | 'open' | 'closed' | 'merged'; reason?: string | undefined }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/discussions/:num/title': {
      $post: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
            num: string
          }
        } & { json: { title: string } }
        output: {
          newTitle: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'title-change'
            data: { from: string; to: string }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/discussions/:num/storage': {
      $get: {
        input: {
          param: {
            repoType: 'models' | 'spaces' | 'datasets' | 'kernels'
            namespace: string
            repo: string
            num: string
          }
        }
        output: { estimatedStorage: number; refDeleted: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/kernels': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            author?: string | string[] | undefined
            id?: string | string[] | undefined
            arxivIds?: string | string[] | undefined
            filter?: string | string[] | undefined
            sort?:
              | 'downloads'
              | 'likes'
              | 'lastModified'
              | 'trendingScore'
              | 'likes30d'
              | '_id'
              | 'id'
              | undefined
            direction?: '1' | '-1' | undefined
            limit?: number | undefined
            cursor?: string | undefined
            full?: boolean | undefined
            gated?: boolean | undefined
            expand?:
              | 'author'
              | 'cardData'
              | 'disabled'
              | 'downloads'
              | 'downloadsAllTime'
              | 'gated'
              | 'lastModified'
              | 'createdAt'
              | 'likes'
              | 'private'
              | 'sha'
              | 'files'
              | 'tags'
              | 'trendingScore'
              | 'buildMetadata'
              | 'supportedDriverFamilies'
              | 'resourceGroup'
              | 'arxivIds'
              | (
                  | 'author'
                  | 'cardData'
                  | 'disabled'
                  | 'downloads'
                  | 'downloadsAllTime'
                  | 'gated'
                  | 'lastModified'
                  | 'createdAt'
                  | 'likes'
                  | 'private'
                  | 'sha'
                  | 'files'
                  | 'tags'
                  | 'trendingScore'
                  | 'buildMetadata'
                  | 'supportedDriverFamilies'
                  | 'resourceGroup'
                  | 'arxivIds'
                )[]
              | undefined
          }
        }
        output: {
          _id: string
          id: string
          author?: string | undefined
          private?: boolean | undefined
          cardData?: { [x: string]: { [x: string]: unknown } } | undefined
          disabled?: boolean | undefined
          downloads?: number | undefined
          downloadsAllTime?: number | undefined
          gated?: boolean | 'auto' | 'manual' | undefined
          lastModified?: string | undefined
          createdAt?: string | undefined
          likes?: number | undefined
          sha?: string | undefined
          files?: string[] | undefined
          tags?: string[] | undefined
          trendingScore?: number | undefined
          buildMetadata?:
            | {
                compatibility?:
                  | {
                      torch: ('2.8' | '2.9' | '2.10' | '2.11' | '2.12' | '2.13' | '2.14')[]
                      os: ('macos' | 'linux' | 'windows')[]
                      arch: ('x86_64' | 'arm64' | 'aarch64')[]
                    }
                  | undefined
                backends: {
                  type: 'cuda' | 'rocm' | 'metal' | 'xpu' | 'cpu' | 'webgpu'
                  hardwareTypes: (
                    | '5.0'
                    | '5.2'
                    | '6.0'
                    | '6.1'
                    | '6.2'
                    | '7.0'
                    | '7.2'
                    | '7.5'
                    | '8.0'
                    | '8.6'
                    | '8.7'
                    | '8.9'
                    | '9.0'
                    | '10.0'
                    | '10.3'
                    | '11.0'
                    | '12.0'
                    | '12.1'
                    | '13.0'
                    | '5.0+PTX'
                    | '5.2+PTX'
                    | '6.0+PTX'
                    | '6.1+PTX'
                    | '6.2+PTX'
                    | '7.0+PTX'
                    | '7.2+PTX'
                    | '7.5+PTX'
                    | '8.0+PTX'
                    | '8.6+PTX'
                    | '8.7+PTX'
                    | '8.9+PTX'
                    | '9.0+PTX'
                    | '10.0+PTX'
                    | '10.3+PTX'
                    | '11.0+PTX'
                    | '12.0+PTX'
                    | '12.1+PTX'
                    | '13.0+PTX'
                    | '9.0a'
                    | '10.0a'
                    | '10.3a'
                    | '11.0a'
                    | '12.0a'
                    | '12.1a'
                    | '13.0a'
                    | '10.0f'
                    | '12.0f'
                    | '13.0f'
                    | 'gfx900'
                    | 'gfx906'
                    | 'gfx908'
                    | 'gfx90a'
                    | 'gfx942'
                    | 'gfx950'
                    | 'gfx1030'
                    | 'gfx1100'
                    | 'gfx1101'
                    | 'gfx1102'
                    | 'gfx1150'
                    | 'gfx1151'
                    | 'gfx1200'
                    | 'gfx1201'
                  )[]
                  noArchs?: true | undefined
                }[]
                builder?:
                  | { version: string; commit?: string | undefined; dirty?: boolean | undefined }
                  | undefined
              }
            | undefined
          supportedDriverFamilies?:
            | ('cuda' | 'rocm' | 'metal' | 'xpu' | 'cpu' | 'webgpu')[]
            | undefined
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/kernels/:namespace/:repo': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          _id: string
          author: string
          downloads: number
          id: string
          isLikedByUser: boolean
          lastModified: string
          likes: number
          private: boolean
          repoType: 'kernel'
          sha: string
          gated: false | 'auto' | 'manual'
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          authorData?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          files?: string[] | undefined
          supportedDriverFamilies?:
            | ('cuda' | 'rocm' | 'metal' | 'xpu' | 'cpu' | 'webgpu')[]
            | undefined
          trustedPublisher?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/kernels/:namespace/:repo/revision/:rev': {
      $get: {
        input: { param: { namespace: string; repo: string; rev: string } }
        output: {
          _id: string
          author: string
          downloads: number
          id: string
          isLikedByUser: boolean
          lastModified: string
          likes: number
          private: boolean
          repoType: 'kernel'
          sha: string
          gated: false | 'auto' | 'manual'
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          authorData?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
            | undefined
          files?: string[] | undefined
          supportedDriverFamilies?:
            | ('cuda' | 'rocm' | 'metal' | 'xpu' | 'cpu' | 'webgpu')[]
            | undefined
          trustedPublisher?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/leaderboard': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            task_id?: string | undefined
            max_params?: string | undefined
            base_model?: string | undefined
          }
        }
        output: {
          rank: number
          modelId: string
          author:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
          value: number
          verified?: boolean | undefined
          source?:
            | {
                url: string
                name?: string | undefined
                isExternal: boolean
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          pullRequest?: number | undefined
          filename: string
          notes?: string | undefined
          lower_is_better?: boolean | undefined
          num_parameters?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/jwt': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            write?: string | undefined
            expiration?: string | undefined
            expires_in?: number | undefined
            encrypted?: string | undefined
            inference_api?: string | undefined
            include_pro_status?: string | undefined
            billing_details?: string | undefined
          }
        }
        output: {
          accessToken: string
          exp?: number | undefined
          token: string
          encryptedToken?: { encrypted: string; keyId: string } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/jwt': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            write?: string | undefined
            expiration?: string | undefined
            expires_in?: number | undefined
            encrypted?: string | undefined
            inference_api?: string | undefined
            include_pro_status?: string | undefined
            billing_details?: string | undefined
          }
        }
        output: {
          accessToken: string
          exp?: number | undefined
          token: string
          encryptedToken?: { encrypted: string; keyId: string } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/jwt': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: {
            write?: string | undefined
            expiration?: string | undefined
            expires_in?: number | undefined
            encrypted?: string | undefined
            inference_api?: string | undefined
            include_pro_status?: string | undefined
            billing_details?: string | undefined
          }
        }
        output: {
          accessToken: string
          exp?: number | undefined
          token: string
          encryptedToken?: { encrypted: string; keyId: string } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/agent-harnesses': {
      $get: {
        input: {}
        output: {
          standardEnvVars: string[]
          harnesses: {
            [x: string]: {
              prettyLabel: string
              repoUrl?: string | undefined
              docsUrl?: string | undefined
              description?: string | undefined
              envVars?: { [x: string]: string } | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models-tags-by-type': {
      $get: {
        input: {
          query: {
            type?:
              | 'pipeline_tag'
              | 'library'
              | 'dataset'
              | 'bucket'
              | 'language'
              | 'license'
              | 'arxiv'
              | 'doi'
              | 'region'
              | 'deploy'
              | 'other'
              | undefined
          }
        }
        output: {
          [x: string]: {
            id: string
            label: string
            type:
              | 'pipeline_tag'
              | 'library'
              | 'dataset'
              | 'bucket'
              | 'language'
              | 'license'
              | 'arxiv'
              | 'doi'
              | 'region'
              | 'deploy'
              | 'other'
            subType?: string | undefined
            clickable?: boolean | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets-tags-by-type': {
      $get: {
        input: {
          query: {
            type?:
              | 'benchmark'
              | 'task_categories'
              | 'size_categories'
              | 'modality'
              | 'format'
              | 'library'
              | 'language'
              | 'license'
              | 'arxiv'
              | 'doi'
              | 'region'
              | 'other'
              | 'task_ids'
              | 'annotations_creators'
              | 'language_creators'
              | 'multilinguality'
              | 'source_datasets'
              | undefined
          }
        }
        output: {
          [x: string]: {
            id: string
            label: string
            type:
              | 'benchmark'
              | 'task_categories'
              | 'size_categories'
              | 'modality'
              | 'format'
              | 'library'
              | 'language'
              | 'license'
              | 'arxiv'
              | 'doi'
              | 'region'
              | 'other'
              | 'task_ids'
              | 'annotations_creators'
              | 'language_creators'
              | 'multilinguality'
              | 'source_datasets'
            subType?: string | undefined
            clickable?: boolean | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/trending': {
      $get: {
        input: {
          query: {
            type?: 'all' | 'model' | 'space' | 'dataset' | undefined
            limit?: number | undefined
          }
        }
        output: {
          recentlyTrending: (
            | {
                repoType: 'dataset'
                repoData: {
                  author: string
                  id: string
                  isLikedByUser: boolean
                  likes: number
                  datasetsServerInfo?:
                    | {
                        viewer: 'preview' | 'viewer-partial' | 'viewer'
                        numRows: number | null
                        libraries: (
                          | 'mlcroissant'
                          | 'webdataset'
                          | 'datasets'
                          | 'pandas'
                          | 'dask'
                          | 'distilabel'
                          | 'fiftyone'
                          | 'lance'
                          | 'argilla'
                          | 'polars'
                          | 'duckdb'
                          | 'datadesigner'
                          | 'harbor'
                          | 'verifiers'
                          | 'openenv'
                          | 'nemo-gym'
                          | 'agentenv'
                          | 'lerobot'
                        )[]
                        formats: (
                          | 'json'
                          | 'csv'
                          | 'parquet'
                          | 'imagefolder'
                          | 'audiofolder'
                          | 'webdataset'
                          | 'text'
                          | 'arrow'
                          | 'optimized-parquet'
                          | 'agent-traces'
                        )[]
                        modalities: (
                          | '3d'
                          | 'audio'
                          | 'document'
                          | 'geospatial'
                          | 'image'
                          | 'tabular'
                          | 'text'
                          | 'timeseries'
                          | 'video'
                        )[]
                      }
                    | undefined
                  private: boolean
                  repoType: 'dataset'
                  downloads: number
                  gated: false | 'auto' | 'manual'
                  lastModified: string
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  isBenchmark?: boolean | undefined
                  isTraces?: boolean | undefined
                  isEnvironment?: boolean | undefined
                }
              }
            | {
                repoType: 'model'
                repoData: {
                  author: string
                  downloads: number
                  id: string
                  availableInferenceProviders: {
                    provider:
                      | 'baseten'
                      | 'cerebras'
                      | 'cohere'
                      | 'deepinfra'
                      | 'fal-ai'
                      | 'featherless-ai'
                      | 'fireworks-ai'
                      | 'groq'
                      | 'hf-inference'
                      | 'humain-ai'
                      | 'novita'
                      | 'nscale'
                      | 'openai'
                      | 'openrouter'
                      | 'ovhcloud'
                      | 'publicai'
                      | 'replicate'
                      | 'scaleway'
                      | 'together'
                      | 'wavespeed'
                      | 'zai-org'
                    providerStatus: 'live' | 'staging' | 'error'
                    modelStatus: 'live' | 'staging' | 'error'
                    providerId: string
                    task:
                      | 'text-classification'
                      | 'token-classification'
                      | 'table-question-answering'
                      | 'question-answering'
                      | 'zero-shot-classification'
                      | 'translation'
                      | 'summarization'
                      | 'feature-extraction'
                      | 'text-generation'
                      | 'fill-mask'
                      | 'sentence-similarity'
                      | 'text-to-speech'
                      | 'text-to-audio'
                      | 'automatic-speech-recognition'
                      | 'audio-to-audio'
                      | 'audio-classification'
                      | 'audio-text-to-text'
                      | 'voice-activity-detection'
                      | 'depth-estimation'
                      | 'image-classification'
                      | 'object-detection'
                      | 'image-segmentation'
                      | 'text-to-image'
                      | 'image-to-text'
                      | 'image-to-image'
                      | 'image-to-video'
                      | 'unconditional-image-generation'
                      | 'video-classification'
                      | 'reinforcement-learning'
                      | 'robotics'
                      | 'tabular-classification'
                      | 'tabular-regression'
                      | 'tabular-to-text'
                      | 'table-to-text'
                      | 'multiple-choice'
                      | 'text-ranking'
                      | 'text-retrieval'
                      | 'time-series-forecasting'
                      | 'text-to-video'
                      | 'image-text-to-text'
                      | 'image-text-to-image'
                      | 'image-text-to-video'
                      | 'visual-question-answering'
                      | 'document-question-answering'
                      | 'zero-shot-image-classification'
                      | 'graph-ml'
                      | 'mask-generation'
                      | 'zero-shot-object-detection'
                      | 'text-to-3d'
                      | 'image-to-3d'
                      | 'image-feature-extraction'
                      | 'video-text-to-text'
                      | 'keypoint-detection'
                      | 'visual-document-retrieval'
                      | 'any-to-any'
                      | 'video-to-video'
                      | 'other'
                      | 'conversational'
                    adapterType?: 'lora' | undefined
                    adapterWeightsPath?: string | undefined
                    features?: { toolCalling?: boolean | undefined } | undefined
                    isCheapestPricingOutput: boolean
                    isFastestThroughput: boolean
                    isModelAuthor: boolean
                    tokensPerSecond?: number | undefined
                    pricingOutput?: number | undefined
                    freeUntil?: string | undefined
                  }[]
                  openRouterProviders?: string[] | undefined
                  isLikedByUser: boolean
                  lastModified: string
                  likes: number
                  pipeline_tag?: string | undefined
                  private: boolean
                  repoType: 'model'
                  gated: false | 'auto' | 'manual'
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  numParameters?: number | undefined
                  authorData?:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                    | undefined
                  widgetOutputUrls?: string[] | undefined
                  isPreRelease?: true | undefined
                }
              }
            | {
                repoType: 'space'
                repoData: {
                  author: string
                  colorFrom: string
                  colorTo: string
                  createdAt: string
                  emoji: string
                  id: string
                  isLikedByUser: boolean
                  lastModified: string
                  likes: number
                  pinned: boolean
                  private: boolean
                  repoType: 'space'
                  title: string
                  sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                  runtime: {
                    stage:
                      | 'NO_APP_FILE'
                      | 'CONFIG_ERROR'
                      | 'BUILDING'
                      | 'BUILD_ERROR'
                      | 'APP_STARTING'
                      | 'RUNNING'
                      | 'RUNNING_BUILDING'
                      | 'RUNNING_APP_STARTING'
                      | 'RUNTIME_ERROR'
                      | 'DELETING'
                      | 'STOPPED'
                      | 'PAUSED'
                      | 'SLEEPING'
                    hardware: {
                      current:
                        | 'cpu-basic'
                        | 'cpu-upgrade'
                        | 'cpu-performance'
                        | 'cpu-xl'
                        | 'sprx8'
                        | 'zero-a10g'
                        | 't4-small'
                        | 't4-medium'
                        | 'l4x1'
                        | 'l4x4'
                        | 'l40sx1'
                        | 'l40sx4'
                        | 'l40sx8'
                        | 'a10g-small'
                        | 'a10g-large'
                        | 'a10g-largex2'
                        | 'a10g-largex4'
                        | 'a100-large'
                        | 'a100x4'
                        | 'a100x8'
                        | 'h200'
                        | 'h200x2'
                        | 'h200x4'
                        | 'h200x8'
                        | 'rtx-pro-6000'
                        | 'rtx-pro-6000x2'
                        | 'rtx-pro-6000x4'
                        | 'rtx-pro-6000x8'
                        | 'inf2x6'
                        | ({ [x: string]: unknown } | null)
                      requested:
                        | 'cpu-basic'
                        | 'cpu-upgrade'
                        | 'cpu-performance'
                        | 'cpu-xl'
                        | 'sprx8'
                        | 'zero-a10g'
                        | 't4-small'
                        | 't4-medium'
                        | 'l4x1'
                        | 'l4x4'
                        | 'l40sx1'
                        | 'l40sx4'
                        | 'l40sx8'
                        | 'a10g-small'
                        | 'a10g-large'
                        | 'a10g-largex2'
                        | 'a10g-largex4'
                        | 'a100-large'
                        | 'a100x4'
                        | 'a100x8'
                        | 'h200'
                        | 'h200x2'
                        | 'h200x4'
                        | 'h200x8'
                        | 'rtx-pro-6000'
                        | 'rtx-pro-6000x2'
                        | 'rtx-pro-6000x4'
                        | 'rtx-pro-6000x8'
                        | 'inf2x6'
                        | ({ [x: string]: unknown } | null)
                    }
                    errorMessage?: string | undefined
                    gcTimeout?: (number | null) | undefined
                    replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                    devMode?: boolean | undefined
                    domains?:
                      | {
                          domain: string
                          isCustom?: (boolean | null) | undefined
                          stage:
                            | 'READY'
                            | 'PENDING'
                            | 'PENDING_CHALLENGE'
                            | 'EXPIRED_CHALLENGE'
                            | 'MISCONFIGURED'
                        }[]
                      | undefined
                    sha?: string | undefined
                    hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                  }
                  disabled: boolean
                  originRepo?:
                    | {
                        author:
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'org'
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              isUserFollowing?: boolean | undefined
                            }
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'user'
                              isPro: boolean
                              isUserFollowing?: boolean | undefined
                              primaryOrg?:
                                | {
                                    avatarUrl: string
                                    fullname: string
                                    name: string
                                    type: 'org'
                                    isHf: boolean
                                    isFollowing?: boolean | undefined
                                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                    details?: string | undefined
                                    hasPrivateMembersList?: boolean | undefined
                                    userRole?:
                                      | 'admin'
                                      | 'write'
                                      | 'contributor'
                                      | 'read'
                                      | 'no_access'
                                      | undefined
                                    numUsers?: number | undefined
                                  }
                                | undefined
                            }
                        name: string
                      }
                    | undefined
                  ai_short_description?: string | undefined
                  ai_category?: string | undefined
                  trendingScore?: number | undefined
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  tags: string[]
                  authorData?:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                    | undefined
                  shortDescription?: string | undefined
                  semanticRelevancyScore?: number | undefined
                  featured: boolean
                  visibility: 'public' | 'private' | 'protected'
                }
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/quicksearch': {
      $get: {
        input: {
          query: {
            q?: string | undefined
            limit?: number | number | undefined
            lang?:
              | 'aa'
              | 'ab'
              | 'ae'
              | 'af'
              | 'ak'
              | 'am'
              | 'an'
              | 'ar'
              | 'as'
              | 'av'
              | 'ay'
              | 'az'
              | 'ba'
              | 'be'
              | 'bg'
              | 'bh'
              | 'bi'
              | 'bm'
              | 'bn'
              | 'bo'
              | 'br'
              | 'bs'
              | 'ca'
              | 'ce'
              | 'ch'
              | 'co'
              | 'cr'
              | 'cs'
              | 'cu'
              | 'cv'
              | 'cy'
              | 'da'
              | 'de'
              | 'dv'
              | 'dz'
              | 'ee'
              | 'el'
              | 'en'
              | 'eo'
              | 'es'
              | 'et'
              | 'eu'
              | 'fa'
              | 'ff'
              | 'fi'
              | 'fj'
              | 'fo'
              | 'fr'
              | 'fy'
              | 'ga'
              | 'gd'
              | 'gl'
              | 'gn'
              | 'gu'
              | 'gv'
              | 'ha'
              | 'he'
              | 'hi'
              | 'ho'
              | 'hr'
              | 'ht'
              | 'hu'
              | 'hy'
              | 'hz'
              | 'ia'
              | 'id'
              | 'ie'
              | 'ig'
              | 'ii'
              | 'ik'
              | 'io'
              | 'is'
              | 'it'
              | 'iu'
              | 'ja'
              | 'jv'
              | 'ka'
              | 'kg'
              | 'ki'
              | 'kj'
              | 'kk'
              | 'kl'
              | 'km'
              | 'kn'
              | 'ko'
              | 'kr'
              | 'ks'
              | 'ku'
              | 'kv'
              | 'kw'
              | 'ky'
              | 'la'
              | 'lb'
              | 'lg'
              | 'li'
              | 'ln'
              | 'lo'
              | 'lt'
              | 'lu'
              | 'lv'
              | 'mg'
              | 'mh'
              | 'mi'
              | 'mk'
              | 'ml'
              | 'mn'
              | 'mr'
              | 'ms'
              | 'mt'
              | 'my'
              | 'na'
              | 'nb'
              | 'nd'
              | 'ne'
              | 'ng'
              | 'nl'
              | 'nn'
              | 'no'
              | 'nr'
              | 'nv'
              | 'ny'
              | 'oc'
              | 'oj'
              | 'om'
              | 'or'
              | 'os'
              | 'pa'
              | 'pi'
              | 'pl'
              | 'ps'
              | 'pt'
              | 'qu'
              | 'rm'
              | 'rn'
              | 'ro'
              | 'ru'
              | 'rw'
              | 'sa'
              | 'sc'
              | 'sd'
              | 'se'
              | 'sg'
              | 'si'
              | 'sk'
              | 'sl'
              | 'sm'
              | 'sn'
              | 'so'
              | 'sq'
              | 'sr'
              | 'ss'
              | 'st'
              | 'su'
              | 'sv'
              | 'sw'
              | 'ta'
              | 'te'
              | 'tg'
              | 'th'
              | 'ti'
              | 'tk'
              | 'tl'
              | 'tn'
              | 'to'
              | 'tr'
              | 'ts'
              | 'tt'
              | 'tw'
              | 'ty'
              | 'ug'
              | 'uk'
              | 'ur'
              | 'uz'
              | 've'
              | 'vi'
              | 'vo'
              | 'wa'
              | 'wo'
              | 'xh'
              | 'yi'
              | 'yo'
              | 'za'
              | 'zh'
              | 'zu'
              | string
              | undefined
            library?:
              | 'aadya-neural'
              | 'acestep'
              | 'adapter-transformers'
              | 'alkove'
              | 'allennlp'
              | 'aneforge'
              | 'anemoi'
              | 'araclip'
              | 'asimov'
              | 'aviation-ner'
              | 'asteroid'
              | 'audiocraft'
              | 'audioseal'
              | 'bagel-mot'
              | 'basedecision'
              | 'bboxmaskpose'
              | 'ben2'
              | 'bertopic'
              | 'big_vision'
              | 'bionemo'
              | 'birder'
              | 'birefnet'
              | 'bm25s'
              | 'boltzgen'
              | 'cancertathomev2'
              | 'cartesia_pytorch'
              | 'cartesia_mlx'
              | 'causilo'
              | 'ccpfn'
              | 'champ'
              | 'chatterbox'
              | 'chaossim'
              | 'chat_tts'
              | 'chessqueries'
              | 'chexmix'
              | 'chronos-forecasting'
              | 'circuit-tracer'
              | 'clara'
              | 'clipscope'
              | 'cloud-agents'
              | 'collectorvision'
              | 'colipri'
              | 'cooperscene'
              | 'cosyvoice'
              | 'cotracker'
              | 'colpali'
              | 'comet'
              | 'cortiq'
              | 'cosmos'
              | 'cxr-foundation'
              | 'deepforest'
              | 'depth-anything-v2'
              | 'depth-pro'
              | 'derm-foundation'
              | 'describe-anything'
              | 'dewml'
              | 'dia-tts'
              | 'dia2'
              | 'diff-interpretation-tuning'
              | 'diffree'
              | 'diffusers'
              | 'diffusionkit'
              | 'docking-at-home'
              | 'doctr'
              | 'drinkme'
              | 'edsnlp'
              | 'egohand'
              | 'elm'
              | 'encoderfile'
              | 'ensomi'
              | 'espnet'
              | 'eupe'
              | 'fahr-face'
              | 'fairseq'
              | 'fastai'
              | 'fastprint'
              | 'fasttext'
              | 'fixer'
              | 'flair'
              | 'flexray'
              | 'flextab'
              | 'fme'
              | 'fse'
              | 'gaussianformer'
              | 'gemma.cpp'
              | 'geometry-crafter'
              | 'gliformer'
              | 'gliner'
              | 'gliner2'
              | 'glm-tts'
              | 'glyd'
              | 'glyph-byt5'
              | 'granite-library'
              | 'grok'
              | 'habibi-tts'
              | 'hallo'
              | 'minimax-h3'
              | 'mect'
              | 'hermes'
              | 'holomotion'
              | 'hezar'
              | 'htrflow'
              | 'hunyuan-dit'
              | 'hunyuan3d-2'
              | 'hunyuanworld-voyager'
              | 'hy-worldplay'
              | 'hy-world-2'
              | 'image-matching-models'
              | 'imstoucan'
              | 'index-tts'
              | 'infinitetalk'
              | 'infinite-you'
              | 'intellifold'
              | 'ising-decoding'
              | 'jev-style'
              | 'keras'
              | 'tf-keras'
              | 'keras-hub'
              | 'zeromodels'
              | 'kernels'
              | 'kimi-audio'
              | 'kittentts'
              | 'konfai'
              | 'kronos'
              | 'k2'
              | 'lyra-2.0'
              | 'lagernvs'
              | 'laya'
              | 'ltx'
              | 'lightning-ir'
              | 'litert'
              | 'litert-lm'
              | 'lerobot'
              | 'libreyolo'
              | 'lightglue'
              | 'limx-dynamics'
              | 'lingbot-map'
              | 'liveportrait'
              | 'longcat-video-avatar-1.5'
              | 'linnet-tts'
              | 'llama-cpp-python'
              | 'mini-omni2'
              | 'mindspore'
              | 'magi-1'
              | 'magenta-realtime'
              | 'magenta-realtime-2'
              | 'mamba-ssm'
              | 'manas-1'
              | 'mars5-tts'
              | 'matanyone'
              | 'memra'
              | 'mesh-anything'
              | 'merlin'
              | 'medvae'
              | 'mflux'
              | 'microduck'
              | 'minicpm-ocr'
              | 'mitie'
              | 'mjlab'
              | 'ml-agents'
              | 'ml-sharp'
              | 'mlx'
              | 'mlx-image'
              | 'mlc-llm'
              | 'model2vec'
              | 'mobilint'
              | 'montreal-forced-aligner'
              | 'moshi'
              | 'mtvcraft'
              | 'multimolecule'
              | 'nemo'
              | 'ninfer'
              | 'nobg'
              | 'nv-medtech'
              | 'onnxruntime-genai'
              | 'open-oasis'
              | 'open_clip'
              | 'openasr'
              | 'opendde'
              | 'opendecision'
              | 'openpeerllm'
              | 'open-sora'
              | 'outetts'
              | 'paddlenlp'
              | 'PaddleOCR'
              | 'peft'
              | 'perception-encoder'
              | 'phantom-wan'
              | 'pika-h3-flex'
              | 'piper'
              | 'pixeldense'
              | 'pocket-tts'
              | 'pqgan'
              | 'protomotions'
              | 'pruna-ai'
              | 'pxia'
              | 'pyannote-audio'
              | 'py-feat'
              | 'pythae'
              | 'quantumpeer'
              | 'qwen3_tts'
              | 'recurrentgemma'
              | 'relik'
              | 'refiners'
              | 'renderformer'
              | 'reverb'
              | 'rkllm'
              | 'robo-orchard-lab'
              | 'routee-powertrain'
              | 'rt-detr-hand-detector-v1'
              | 'rwkv'
              | 'saelens'
              | 'sage-music'
              | 'scail-2'
              | 'sam2'
              | 'sam-3d-body'
              | 'sam-3d-objects'
              | 'same'
              | 'sample-factory'
              | 'sap-case'
              | 'sap-rpt-1-oss'
              | 'sapiens'
              | 'sapiens2'
              | 'seedvr'
              | 'self-forcing'
              | 'sentence-transformers'
              | 'setfit'
              | 'shadow'
              | 'sklearn'
              | 'spacy'
              | 'span-marker'
              | 'speechbrain'
              | 'ssr-speech'
              | 'stable-audio-3'
              | 'stable-audio-tools'
              | 'monkeyocr'
              | 'diffusion-single-file'
              | 'seed-story'
              | 'skala'
              | 'soloaudio'
              | 'songbloom'
              | 'stable-baselines3'
              | 'stanza'
              | 'strands-decider'
              | 'supertonic'
              | 'svdtrunc'
              | 'swarmformer'
              | 'synthefy-migas'
              | 'f5-tts'
              | 'genmo'
              | 'tencent-song-generation'
              | 'tensorflowtts'
              | 'tensorrt'
              | 'tabpfn'
              | 'terratorch'
              | 'tic-clip'
              | 'timesfm'
              | 'timee-ts'
              | 'timm'
              | 'tirex'
              | 'tirex-2'
              | 'torchgeo'
              | 'torch-pointcloud'
              | 'transformers'
              | 'transformers.js'
              | 'trellis'
              | 'trellis2'
              | 'tunejury'
              | 'ultralytics'
              | 'unitree-rl'
              | 'univa'
              | 'uni-3dar'
              | 'unity-sentis'
              | 'sana'
              | 'videoprism'
              | 'verto-asr'
              | 'vfi-mamba'
              | 'vismatch'
              | 'lvface'
              | 'voicecraft'
              | 'voxcpm'
              | 'vui'
              | 'vqweb'
              | 'vibevoice'
              | 'videox_fun'
              | 'wan2.2'
              | 'wavegen'
              | 'wham'
              | 'whisperkit'
              | 'wilddet3d'
              | 'yolov10'
              | 'yolov26'
              | 'zao-lib'
              | 'zipsplat'
              | 'zonos'
              | '3dtopia-xl'
              | string
              | undefined
            type?:
              | (
                  | 'model'
                  | 'dataset'
                  | 'space'
                  | 'org'
                  | 'user'
                  | 'paper'
                  | 'collection'
                  | 'bucket'
                  | 'container'
                  | 'kernel'
                  | 'blog'
                )[]
              | string[]
              | undefined
            orgsFilter?: ('own' | 'unwatched')[] | string[] | undefined
            reposFilter?:
              | ('skip_disabled' | 'skip_gated' | 'own' | 'own_orgs' | 'granted_access')[]
              | string[]
              | undefined
            pipelines?:
              | (
                  | 'text-classification'
                  | 'token-classification'
                  | 'table-question-answering'
                  | 'question-answering'
                  | 'zero-shot-classification'
                  | 'translation'
                  | 'summarization'
                  | 'feature-extraction'
                  | 'text-generation'
                  | 'fill-mask'
                  | 'sentence-similarity'
                  | 'text-to-speech'
                  | 'text-to-audio'
                  | 'automatic-speech-recognition'
                  | 'audio-to-audio'
                  | 'audio-classification'
                  | 'audio-text-to-text'
                  | 'voice-activity-detection'
                  | 'depth-estimation'
                  | 'image-classification'
                  | 'object-detection'
                  | 'image-segmentation'
                  | 'text-to-image'
                  | 'image-to-text'
                  | 'image-to-image'
                  | 'image-to-video'
                  | 'unconditional-image-generation'
                  | 'video-classification'
                  | 'reinforcement-learning'
                  | 'robotics'
                  | 'tabular-classification'
                  | 'tabular-regression'
                  | 'tabular-to-text'
                  | 'table-to-text'
                  | 'multiple-choice'
                  | 'text-ranking'
                  | 'text-retrieval'
                  | 'time-series-forecasting'
                  | 'text-to-video'
                  | 'image-text-to-text'
                  | 'image-text-to-image'
                  | 'image-text-to-video'
                  | 'visual-question-answering'
                  | 'document-question-answering'
                  | 'zero-shot-image-classification'
                  | 'graph-ml'
                  | 'mask-generation'
                  | 'zero-shot-object-detection'
                  | 'text-to-3d'
                  | 'image-to-3d'
                  | 'image-feature-extraction'
                  | 'video-text-to-text'
                  | 'keypoint-detection'
                  | 'visual-document-retrieval'
                  | 'any-to-any'
                  | 'video-to-video'
                  | 'other'
                )[]
              | string
              | string[]
              | undefined
            exclude?: string[] | undefined
            namespace?: string | undefined
            includeInvitees?: boolean | string | undefined
            repoName?: string | undefined
            repoType?:
              | 'dataset'
              | 'model'
              | 'space'
              | 'bucket'
              | 'kernel'
              | 'container'
              | string
              | undefined
            discussionId?: string | undefined
            discussionCollectionName?: string | undefined
            spacesTags?: string[] | undefined
          }
        }
        output: {
          datasets: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          datasetsCount: number
          models: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          modelsCount: number
          orgs: { _id: string; avatarUrl: string; fullname: string; name: string }[]
          q: string
          spaces: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
            emoji: string
          }[]
          spacesCount: number
          users: { _id: string; avatarUrl: string; fullname: string; user: string }[]
          papers: { _id: string; id: string; private?: boolean | undefined }[]
          papersCount: number
          collections: { _id: string; title: string; description?: string | undefined }[]
          collectionsCount: number
          buckets: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          bucketsCount: number
          containers: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          containersCount: number
          kernels: { _id: string; id: string; private?: boolean | undefined }[]
          kernelsCount: number
          blogs: { _id: string; slug: string; title: string; private: boolean }[]
          blogsCount: number
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            q?: string | undefined
            limit?: number | number | undefined
            lang?:
              | 'aa'
              | 'ab'
              | 'ae'
              | 'af'
              | 'ak'
              | 'am'
              | 'an'
              | 'ar'
              | 'as'
              | 'av'
              | 'ay'
              | 'az'
              | 'ba'
              | 'be'
              | 'bg'
              | 'bh'
              | 'bi'
              | 'bm'
              | 'bn'
              | 'bo'
              | 'br'
              | 'bs'
              | 'ca'
              | 'ce'
              | 'ch'
              | 'co'
              | 'cr'
              | 'cs'
              | 'cu'
              | 'cv'
              | 'cy'
              | 'da'
              | 'de'
              | 'dv'
              | 'dz'
              | 'ee'
              | 'el'
              | 'en'
              | 'eo'
              | 'es'
              | 'et'
              | 'eu'
              | 'fa'
              | 'ff'
              | 'fi'
              | 'fj'
              | 'fo'
              | 'fr'
              | 'fy'
              | 'ga'
              | 'gd'
              | 'gl'
              | 'gn'
              | 'gu'
              | 'gv'
              | 'ha'
              | 'he'
              | 'hi'
              | 'ho'
              | 'hr'
              | 'ht'
              | 'hu'
              | 'hy'
              | 'hz'
              | 'ia'
              | 'id'
              | 'ie'
              | 'ig'
              | 'ii'
              | 'ik'
              | 'io'
              | 'is'
              | 'it'
              | 'iu'
              | 'ja'
              | 'jv'
              | 'ka'
              | 'kg'
              | 'ki'
              | 'kj'
              | 'kk'
              | 'kl'
              | 'km'
              | 'kn'
              | 'ko'
              | 'kr'
              | 'ks'
              | 'ku'
              | 'kv'
              | 'kw'
              | 'ky'
              | 'la'
              | 'lb'
              | 'lg'
              | 'li'
              | 'ln'
              | 'lo'
              | 'lt'
              | 'lu'
              | 'lv'
              | 'mg'
              | 'mh'
              | 'mi'
              | 'mk'
              | 'ml'
              | 'mn'
              | 'mr'
              | 'ms'
              | 'mt'
              | 'my'
              | 'na'
              | 'nb'
              | 'nd'
              | 'ne'
              | 'ng'
              | 'nl'
              | 'nn'
              | 'no'
              | 'nr'
              | 'nv'
              | 'ny'
              | 'oc'
              | 'oj'
              | 'om'
              | 'or'
              | 'os'
              | 'pa'
              | 'pi'
              | 'pl'
              | 'ps'
              | 'pt'
              | 'qu'
              | 'rm'
              | 'rn'
              | 'ro'
              | 'ru'
              | 'rw'
              | 'sa'
              | 'sc'
              | 'sd'
              | 'se'
              | 'sg'
              | 'si'
              | 'sk'
              | 'sl'
              | 'sm'
              | 'sn'
              | 'so'
              | 'sq'
              | 'sr'
              | 'ss'
              | 'st'
              | 'su'
              | 'sv'
              | 'sw'
              | 'ta'
              | 'te'
              | 'tg'
              | 'th'
              | 'ti'
              | 'tk'
              | 'tl'
              | 'tn'
              | 'to'
              | 'tr'
              | 'ts'
              | 'tt'
              | 'tw'
              | 'ty'
              | 'ug'
              | 'uk'
              | 'ur'
              | 'uz'
              | 've'
              | 'vi'
              | 'vo'
              | 'wa'
              | 'wo'
              | 'xh'
              | 'yi'
              | 'yo'
              | 'za'
              | 'zh'
              | 'zu'
              | string
              | undefined
            library?:
              | 'aadya-neural'
              | 'acestep'
              | 'adapter-transformers'
              | 'alkove'
              | 'allennlp'
              | 'aneforge'
              | 'anemoi'
              | 'araclip'
              | 'asimov'
              | 'aviation-ner'
              | 'asteroid'
              | 'audiocraft'
              | 'audioseal'
              | 'bagel-mot'
              | 'basedecision'
              | 'bboxmaskpose'
              | 'ben2'
              | 'bertopic'
              | 'big_vision'
              | 'bionemo'
              | 'birder'
              | 'birefnet'
              | 'bm25s'
              | 'boltzgen'
              | 'cancertathomev2'
              | 'cartesia_pytorch'
              | 'cartesia_mlx'
              | 'causilo'
              | 'ccpfn'
              | 'champ'
              | 'chatterbox'
              | 'chaossim'
              | 'chat_tts'
              | 'chessqueries'
              | 'chexmix'
              | 'chronos-forecasting'
              | 'circuit-tracer'
              | 'clara'
              | 'clipscope'
              | 'cloud-agents'
              | 'collectorvision'
              | 'colipri'
              | 'cooperscene'
              | 'cosyvoice'
              | 'cotracker'
              | 'colpali'
              | 'comet'
              | 'cortiq'
              | 'cosmos'
              | 'cxr-foundation'
              | 'deepforest'
              | 'depth-anything-v2'
              | 'depth-pro'
              | 'derm-foundation'
              | 'describe-anything'
              | 'dewml'
              | 'dia-tts'
              | 'dia2'
              | 'diff-interpretation-tuning'
              | 'diffree'
              | 'diffusers'
              | 'diffusionkit'
              | 'docking-at-home'
              | 'doctr'
              | 'drinkme'
              | 'edsnlp'
              | 'egohand'
              | 'elm'
              | 'encoderfile'
              | 'ensomi'
              | 'espnet'
              | 'eupe'
              | 'fahr-face'
              | 'fairseq'
              | 'fastai'
              | 'fastprint'
              | 'fasttext'
              | 'fixer'
              | 'flair'
              | 'flexray'
              | 'flextab'
              | 'fme'
              | 'fse'
              | 'gaussianformer'
              | 'gemma.cpp'
              | 'geometry-crafter'
              | 'gliformer'
              | 'gliner'
              | 'gliner2'
              | 'glm-tts'
              | 'glyd'
              | 'glyph-byt5'
              | 'granite-library'
              | 'grok'
              | 'habibi-tts'
              | 'hallo'
              | 'minimax-h3'
              | 'mect'
              | 'hermes'
              | 'holomotion'
              | 'hezar'
              | 'htrflow'
              | 'hunyuan-dit'
              | 'hunyuan3d-2'
              | 'hunyuanworld-voyager'
              | 'hy-worldplay'
              | 'hy-world-2'
              | 'image-matching-models'
              | 'imstoucan'
              | 'index-tts'
              | 'infinitetalk'
              | 'infinite-you'
              | 'intellifold'
              | 'ising-decoding'
              | 'jev-style'
              | 'keras'
              | 'tf-keras'
              | 'keras-hub'
              | 'zeromodels'
              | 'kernels'
              | 'kimi-audio'
              | 'kittentts'
              | 'konfai'
              | 'kronos'
              | 'k2'
              | 'lyra-2.0'
              | 'lagernvs'
              | 'laya'
              | 'ltx'
              | 'lightning-ir'
              | 'litert'
              | 'litert-lm'
              | 'lerobot'
              | 'libreyolo'
              | 'lightglue'
              | 'limx-dynamics'
              | 'lingbot-map'
              | 'liveportrait'
              | 'longcat-video-avatar-1.5'
              | 'linnet-tts'
              | 'llama-cpp-python'
              | 'mini-omni2'
              | 'mindspore'
              | 'magi-1'
              | 'magenta-realtime'
              | 'magenta-realtime-2'
              | 'mamba-ssm'
              | 'manas-1'
              | 'mars5-tts'
              | 'matanyone'
              | 'memra'
              | 'mesh-anything'
              | 'merlin'
              | 'medvae'
              | 'mflux'
              | 'microduck'
              | 'minicpm-ocr'
              | 'mitie'
              | 'mjlab'
              | 'ml-agents'
              | 'ml-sharp'
              | 'mlx'
              | 'mlx-image'
              | 'mlc-llm'
              | 'model2vec'
              | 'mobilint'
              | 'montreal-forced-aligner'
              | 'moshi'
              | 'mtvcraft'
              | 'multimolecule'
              | 'nemo'
              | 'ninfer'
              | 'nobg'
              | 'nv-medtech'
              | 'onnxruntime-genai'
              | 'open-oasis'
              | 'open_clip'
              | 'openasr'
              | 'opendde'
              | 'opendecision'
              | 'openpeerllm'
              | 'open-sora'
              | 'outetts'
              | 'paddlenlp'
              | 'PaddleOCR'
              | 'peft'
              | 'perception-encoder'
              | 'phantom-wan'
              | 'pika-h3-flex'
              | 'piper'
              | 'pixeldense'
              | 'pocket-tts'
              | 'pqgan'
              | 'protomotions'
              | 'pruna-ai'
              | 'pxia'
              | 'pyannote-audio'
              | 'py-feat'
              | 'pythae'
              | 'quantumpeer'
              | 'qwen3_tts'
              | 'recurrentgemma'
              | 'relik'
              | 'refiners'
              | 'renderformer'
              | 'reverb'
              | 'rkllm'
              | 'robo-orchard-lab'
              | 'routee-powertrain'
              | 'rt-detr-hand-detector-v1'
              | 'rwkv'
              | 'saelens'
              | 'sage-music'
              | 'scail-2'
              | 'sam2'
              | 'sam-3d-body'
              | 'sam-3d-objects'
              | 'same'
              | 'sample-factory'
              | 'sap-case'
              | 'sap-rpt-1-oss'
              | 'sapiens'
              | 'sapiens2'
              | 'seedvr'
              | 'self-forcing'
              | 'sentence-transformers'
              | 'setfit'
              | 'shadow'
              | 'sklearn'
              | 'spacy'
              | 'span-marker'
              | 'speechbrain'
              | 'ssr-speech'
              | 'stable-audio-3'
              | 'stable-audio-tools'
              | 'monkeyocr'
              | 'diffusion-single-file'
              | 'seed-story'
              | 'skala'
              | 'soloaudio'
              | 'songbloom'
              | 'stable-baselines3'
              | 'stanza'
              | 'strands-decider'
              | 'supertonic'
              | 'svdtrunc'
              | 'swarmformer'
              | 'synthefy-migas'
              | 'f5-tts'
              | 'genmo'
              | 'tencent-song-generation'
              | 'tensorflowtts'
              | 'tensorrt'
              | 'tabpfn'
              | 'terratorch'
              | 'tic-clip'
              | 'timesfm'
              | 'timee-ts'
              | 'timm'
              | 'tirex'
              | 'tirex-2'
              | 'torchgeo'
              | 'torch-pointcloud'
              | 'transformers'
              | 'transformers.js'
              | 'trellis'
              | 'trellis2'
              | 'tunejury'
              | 'ultralytics'
              | 'unitree-rl'
              | 'univa'
              | 'uni-3dar'
              | 'unity-sentis'
              | 'sana'
              | 'videoprism'
              | 'verto-asr'
              | 'vfi-mamba'
              | 'vismatch'
              | 'lvface'
              | 'voicecraft'
              | 'voxcpm'
              | 'vui'
              | 'vqweb'
              | 'vibevoice'
              | 'videox_fun'
              | 'wan2.2'
              | 'wavegen'
              | 'wham'
              | 'whisperkit'
              | 'wilddet3d'
              | 'yolov10'
              | 'yolov26'
              | 'zao-lib'
              | 'zipsplat'
              | 'zonos'
              | '3dtopia-xl'
              | string
              | undefined
            type?:
              | (
                  | 'model'
                  | 'dataset'
                  | 'space'
                  | 'org'
                  | 'user'
                  | 'paper'
                  | 'collection'
                  | 'bucket'
                  | 'container'
                  | 'kernel'
                  | 'blog'
                )[]
              | string[]
              | undefined
            orgsFilter?: ('own' | 'unwatched')[] | string[] | undefined
            reposFilter?:
              | ('skip_disabled' | 'skip_gated' | 'own' | 'own_orgs' | 'granted_access')[]
              | string[]
              | undefined
            pipelines?:
              | (
                  | 'text-classification'
                  | 'token-classification'
                  | 'table-question-answering'
                  | 'question-answering'
                  | 'zero-shot-classification'
                  | 'translation'
                  | 'summarization'
                  | 'feature-extraction'
                  | 'text-generation'
                  | 'fill-mask'
                  | 'sentence-similarity'
                  | 'text-to-speech'
                  | 'text-to-audio'
                  | 'automatic-speech-recognition'
                  | 'audio-to-audio'
                  | 'audio-classification'
                  | 'audio-text-to-text'
                  | 'voice-activity-detection'
                  | 'depth-estimation'
                  | 'image-classification'
                  | 'object-detection'
                  | 'image-segmentation'
                  | 'text-to-image'
                  | 'image-to-text'
                  | 'image-to-image'
                  | 'image-to-video'
                  | 'unconditional-image-generation'
                  | 'video-classification'
                  | 'reinforcement-learning'
                  | 'robotics'
                  | 'tabular-classification'
                  | 'tabular-regression'
                  | 'tabular-to-text'
                  | 'table-to-text'
                  | 'multiple-choice'
                  | 'text-ranking'
                  | 'text-retrieval'
                  | 'time-series-forecasting'
                  | 'text-to-video'
                  | 'image-text-to-text'
                  | 'image-text-to-image'
                  | 'image-text-to-video'
                  | 'visual-question-answering'
                  | 'document-question-answering'
                  | 'zero-shot-image-classification'
                  | 'graph-ml'
                  | 'mask-generation'
                  | 'zero-shot-object-detection'
                  | 'text-to-3d'
                  | 'image-to-3d'
                  | 'image-feature-extraction'
                  | 'video-text-to-text'
                  | 'keypoint-detection'
                  | 'visual-document-retrieval'
                  | 'any-to-any'
                  | 'video-to-video'
                  | 'other'
                )[]
              | string
              | string[]
              | undefined
            exclude?: string[] | undefined
            namespace?: string | undefined
            includeInvitees?: boolean | string | undefined
            repoName?: string | undefined
            repoType?:
              | 'dataset'
              | 'model'
              | 'space'
              | 'bucket'
              | 'kernel'
              | 'container'
              | string
              | undefined
            discussionId?: string | undefined
            discussionCollectionName?: string | undefined
            spacesTags?: string[] | undefined
          }
        } & {
          json: {
            q?: string | undefined
            limit?: number | number | undefined
            lang?:
              | 'aa'
              | 'ab'
              | 'ae'
              | 'af'
              | 'ak'
              | 'am'
              | 'an'
              | 'ar'
              | 'as'
              | 'av'
              | 'ay'
              | 'az'
              | 'ba'
              | 'be'
              | 'bg'
              | 'bh'
              | 'bi'
              | 'bm'
              | 'bn'
              | 'bo'
              | 'br'
              | 'bs'
              | 'ca'
              | 'ce'
              | 'ch'
              | 'co'
              | 'cr'
              | 'cs'
              | 'cu'
              | 'cv'
              | 'cy'
              | 'da'
              | 'de'
              | 'dv'
              | 'dz'
              | 'ee'
              | 'el'
              | 'en'
              | 'eo'
              | 'es'
              | 'et'
              | 'eu'
              | 'fa'
              | 'ff'
              | 'fi'
              | 'fj'
              | 'fo'
              | 'fr'
              | 'fy'
              | 'ga'
              | 'gd'
              | 'gl'
              | 'gn'
              | 'gu'
              | 'gv'
              | 'ha'
              | 'he'
              | 'hi'
              | 'ho'
              | 'hr'
              | 'ht'
              | 'hu'
              | 'hy'
              | 'hz'
              | 'ia'
              | 'id'
              | 'ie'
              | 'ig'
              | 'ii'
              | 'ik'
              | 'io'
              | 'is'
              | 'it'
              | 'iu'
              | 'ja'
              | 'jv'
              | 'ka'
              | 'kg'
              | 'ki'
              | 'kj'
              | 'kk'
              | 'kl'
              | 'km'
              | 'kn'
              | 'ko'
              | 'kr'
              | 'ks'
              | 'ku'
              | 'kv'
              | 'kw'
              | 'ky'
              | 'la'
              | 'lb'
              | 'lg'
              | 'li'
              | 'ln'
              | 'lo'
              | 'lt'
              | 'lu'
              | 'lv'
              | 'mg'
              | 'mh'
              | 'mi'
              | 'mk'
              | 'ml'
              | 'mn'
              | 'mr'
              | 'ms'
              | 'mt'
              | 'my'
              | 'na'
              | 'nb'
              | 'nd'
              | 'ne'
              | 'ng'
              | 'nl'
              | 'nn'
              | 'no'
              | 'nr'
              | 'nv'
              | 'ny'
              | 'oc'
              | 'oj'
              | 'om'
              | 'or'
              | 'os'
              | 'pa'
              | 'pi'
              | 'pl'
              | 'ps'
              | 'pt'
              | 'qu'
              | 'rm'
              | 'rn'
              | 'ro'
              | 'ru'
              | 'rw'
              | 'sa'
              | 'sc'
              | 'sd'
              | 'se'
              | 'sg'
              | 'si'
              | 'sk'
              | 'sl'
              | 'sm'
              | 'sn'
              | 'so'
              | 'sq'
              | 'sr'
              | 'ss'
              | 'st'
              | 'su'
              | 'sv'
              | 'sw'
              | 'ta'
              | 'te'
              | 'tg'
              | 'th'
              | 'ti'
              | 'tk'
              | 'tl'
              | 'tn'
              | 'to'
              | 'tr'
              | 'ts'
              | 'tt'
              | 'tw'
              | 'ty'
              | 'ug'
              | 'uk'
              | 'ur'
              | 'uz'
              | 've'
              | 'vi'
              | 'vo'
              | 'wa'
              | 'wo'
              | 'xh'
              | 'yi'
              | 'yo'
              | 'za'
              | 'zh'
              | 'zu'
              | string
              | undefined
            library?:
              | 'aadya-neural'
              | 'acestep'
              | 'adapter-transformers'
              | 'alkove'
              | 'allennlp'
              | 'aneforge'
              | 'anemoi'
              | 'araclip'
              | 'asimov'
              | 'aviation-ner'
              | 'asteroid'
              | 'audiocraft'
              | 'audioseal'
              | 'bagel-mot'
              | 'basedecision'
              | 'bboxmaskpose'
              | 'ben2'
              | 'bertopic'
              | 'big_vision'
              | 'bionemo'
              | 'birder'
              | 'birefnet'
              | 'bm25s'
              | 'boltzgen'
              | 'cancertathomev2'
              | 'cartesia_pytorch'
              | 'cartesia_mlx'
              | 'causilo'
              | 'ccpfn'
              | 'champ'
              | 'chatterbox'
              | 'chaossim'
              | 'chat_tts'
              | 'chessqueries'
              | 'chexmix'
              | 'chronos-forecasting'
              | 'circuit-tracer'
              | 'clara'
              | 'clipscope'
              | 'cloud-agents'
              | 'collectorvision'
              | 'colipri'
              | 'cooperscene'
              | 'cosyvoice'
              | 'cotracker'
              | 'colpali'
              | 'comet'
              | 'cortiq'
              | 'cosmos'
              | 'cxr-foundation'
              | 'deepforest'
              | 'depth-anything-v2'
              | 'depth-pro'
              | 'derm-foundation'
              | 'describe-anything'
              | 'dewml'
              | 'dia-tts'
              | 'dia2'
              | 'diff-interpretation-tuning'
              | 'diffree'
              | 'diffusers'
              | 'diffusionkit'
              | 'docking-at-home'
              | 'doctr'
              | 'drinkme'
              | 'edsnlp'
              | 'egohand'
              | 'elm'
              | 'encoderfile'
              | 'ensomi'
              | 'espnet'
              | 'eupe'
              | 'fahr-face'
              | 'fairseq'
              | 'fastai'
              | 'fastprint'
              | 'fasttext'
              | 'fixer'
              | 'flair'
              | 'flexray'
              | 'flextab'
              | 'fme'
              | 'fse'
              | 'gaussianformer'
              | 'gemma.cpp'
              | 'geometry-crafter'
              | 'gliformer'
              | 'gliner'
              | 'gliner2'
              | 'glm-tts'
              | 'glyd'
              | 'glyph-byt5'
              | 'granite-library'
              | 'grok'
              | 'habibi-tts'
              | 'hallo'
              | 'minimax-h3'
              | 'mect'
              | 'hermes'
              | 'holomotion'
              | 'hezar'
              | 'htrflow'
              | 'hunyuan-dit'
              | 'hunyuan3d-2'
              | 'hunyuanworld-voyager'
              | 'hy-worldplay'
              | 'hy-world-2'
              | 'image-matching-models'
              | 'imstoucan'
              | 'index-tts'
              | 'infinitetalk'
              | 'infinite-you'
              | 'intellifold'
              | 'ising-decoding'
              | 'jev-style'
              | 'keras'
              | 'tf-keras'
              | 'keras-hub'
              | 'zeromodels'
              | 'kernels'
              | 'kimi-audio'
              | 'kittentts'
              | 'konfai'
              | 'kronos'
              | 'k2'
              | 'lyra-2.0'
              | 'lagernvs'
              | 'laya'
              | 'ltx'
              | 'lightning-ir'
              | 'litert'
              | 'litert-lm'
              | 'lerobot'
              | 'libreyolo'
              | 'lightglue'
              | 'limx-dynamics'
              | 'lingbot-map'
              | 'liveportrait'
              | 'longcat-video-avatar-1.5'
              | 'linnet-tts'
              | 'llama-cpp-python'
              | 'mini-omni2'
              | 'mindspore'
              | 'magi-1'
              | 'magenta-realtime'
              | 'magenta-realtime-2'
              | 'mamba-ssm'
              | 'manas-1'
              | 'mars5-tts'
              | 'matanyone'
              | 'memra'
              | 'mesh-anything'
              | 'merlin'
              | 'medvae'
              | 'mflux'
              | 'microduck'
              | 'minicpm-ocr'
              | 'mitie'
              | 'mjlab'
              | 'ml-agents'
              | 'ml-sharp'
              | 'mlx'
              | 'mlx-image'
              | 'mlc-llm'
              | 'model2vec'
              | 'mobilint'
              | 'montreal-forced-aligner'
              | 'moshi'
              | 'mtvcraft'
              | 'multimolecule'
              | 'nemo'
              | 'ninfer'
              | 'nobg'
              | 'nv-medtech'
              | 'onnxruntime-genai'
              | 'open-oasis'
              | 'open_clip'
              | 'openasr'
              | 'opendde'
              | 'opendecision'
              | 'openpeerllm'
              | 'open-sora'
              | 'outetts'
              | 'paddlenlp'
              | 'PaddleOCR'
              | 'peft'
              | 'perception-encoder'
              | 'phantom-wan'
              | 'pika-h3-flex'
              | 'piper'
              | 'pixeldense'
              | 'pocket-tts'
              | 'pqgan'
              | 'protomotions'
              | 'pruna-ai'
              | 'pxia'
              | 'pyannote-audio'
              | 'py-feat'
              | 'pythae'
              | 'quantumpeer'
              | 'qwen3_tts'
              | 'recurrentgemma'
              | 'relik'
              | 'refiners'
              | 'renderformer'
              | 'reverb'
              | 'rkllm'
              | 'robo-orchard-lab'
              | 'routee-powertrain'
              | 'rt-detr-hand-detector-v1'
              | 'rwkv'
              | 'saelens'
              | 'sage-music'
              | 'scail-2'
              | 'sam2'
              | 'sam-3d-body'
              | 'sam-3d-objects'
              | 'same'
              | 'sample-factory'
              | 'sap-case'
              | 'sap-rpt-1-oss'
              | 'sapiens'
              | 'sapiens2'
              | 'seedvr'
              | 'self-forcing'
              | 'sentence-transformers'
              | 'setfit'
              | 'shadow'
              | 'sklearn'
              | 'spacy'
              | 'span-marker'
              | 'speechbrain'
              | 'ssr-speech'
              | 'stable-audio-3'
              | 'stable-audio-tools'
              | 'monkeyocr'
              | 'diffusion-single-file'
              | 'seed-story'
              | 'skala'
              | 'soloaudio'
              | 'songbloom'
              | 'stable-baselines3'
              | 'stanza'
              | 'strands-decider'
              | 'supertonic'
              | 'svdtrunc'
              | 'swarmformer'
              | 'synthefy-migas'
              | 'f5-tts'
              | 'genmo'
              | 'tencent-song-generation'
              | 'tensorflowtts'
              | 'tensorrt'
              | 'tabpfn'
              | 'terratorch'
              | 'tic-clip'
              | 'timesfm'
              | 'timee-ts'
              | 'timm'
              | 'tirex'
              | 'tirex-2'
              | 'torchgeo'
              | 'torch-pointcloud'
              | 'transformers'
              | 'transformers.js'
              | 'trellis'
              | 'trellis2'
              | 'tunejury'
              | 'ultralytics'
              | 'unitree-rl'
              | 'univa'
              | 'uni-3dar'
              | 'unity-sentis'
              | 'sana'
              | 'videoprism'
              | 'verto-asr'
              | 'vfi-mamba'
              | 'vismatch'
              | 'lvface'
              | 'voicecraft'
              | 'voxcpm'
              | 'vui'
              | 'vqweb'
              | 'vibevoice'
              | 'videox_fun'
              | 'wan2.2'
              | 'wavegen'
              | 'wham'
              | 'whisperkit'
              | 'wilddet3d'
              | 'yolov10'
              | 'yolov26'
              | 'zao-lib'
              | 'zipsplat'
              | 'zonos'
              | '3dtopia-xl'
              | string
              | undefined
            type?:
              | (
                  | 'model'
                  | 'dataset'
                  | 'space'
                  | 'org'
                  | 'user'
                  | 'paper'
                  | 'collection'
                  | 'bucket'
                  | 'container'
                  | 'kernel'
                  | 'blog'
                )[]
              | string[]
              | undefined
            orgsFilter?: ('own' | 'unwatched')[] | string[] | undefined
            reposFilter?:
              | ('skip_disabled' | 'skip_gated' | 'own' | 'own_orgs' | 'granted_access')[]
              | string[]
              | undefined
            pipelines?:
              | (
                  | 'text-classification'
                  | 'token-classification'
                  | 'table-question-answering'
                  | 'question-answering'
                  | 'zero-shot-classification'
                  | 'translation'
                  | 'summarization'
                  | 'feature-extraction'
                  | 'text-generation'
                  | 'fill-mask'
                  | 'sentence-similarity'
                  | 'text-to-speech'
                  | 'text-to-audio'
                  | 'automatic-speech-recognition'
                  | 'audio-to-audio'
                  | 'audio-classification'
                  | 'audio-text-to-text'
                  | 'voice-activity-detection'
                  | 'depth-estimation'
                  | 'image-classification'
                  | 'object-detection'
                  | 'image-segmentation'
                  | 'text-to-image'
                  | 'image-to-text'
                  | 'image-to-image'
                  | 'image-to-video'
                  | 'unconditional-image-generation'
                  | 'video-classification'
                  | 'reinforcement-learning'
                  | 'robotics'
                  | 'tabular-classification'
                  | 'tabular-regression'
                  | 'tabular-to-text'
                  | 'table-to-text'
                  | 'multiple-choice'
                  | 'text-ranking'
                  | 'text-retrieval'
                  | 'time-series-forecasting'
                  | 'text-to-video'
                  | 'image-text-to-text'
                  | 'image-text-to-image'
                  | 'image-text-to-video'
                  | 'visual-question-answering'
                  | 'document-question-answering'
                  | 'zero-shot-image-classification'
                  | 'graph-ml'
                  | 'mask-generation'
                  | 'zero-shot-object-detection'
                  | 'text-to-3d'
                  | 'image-to-3d'
                  | 'image-feature-extraction'
                  | 'video-text-to-text'
                  | 'keypoint-detection'
                  | 'visual-document-retrieval'
                  | 'any-to-any'
                  | 'video-to-video'
                  | 'other'
                )[]
              | string
              | string[]
              | undefined
            exclude?: string[] | undefined
            namespace?: string | undefined
            includeInvitees?: boolean | string | undefined
            repoName?: string | undefined
            repoType?:
              | 'dataset'
              | 'model'
              | 'space'
              | 'bucket'
              | 'kernel'
              | 'container'
              | string
              | undefined
            discussionId?: string | undefined
            discussionCollectionName?: string | undefined
            spacesTags?: string[] | undefined
          }
        }
        output: {
          datasets: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          datasetsCount: number
          models: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          modelsCount: number
          orgs: { _id: string; avatarUrl: string; fullname: string; name: string }[]
          q: string
          spaces: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
            emoji: string
          }[]
          spacesCount: number
          users: { _id: string; avatarUrl: string; fullname: string; user: string }[]
          papers: { _id: string; id: string; private?: boolean | undefined }[]
          papersCount: number
          collections: { _id: string; title: string; description?: string | undefined }[]
          collectionsCount: number
          buckets: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          bucketsCount: number
          containers: {
            _id: string
            id: string
            private?: boolean | undefined
            authorType?: 'user' | 'org' | undefined
          }[]
          containersCount: number
          kernels: { _id: string; id: string; private?: boolean | undefined }[]
          kernelsCount: number
          blogs: { _id: string; slug: string; title: string; private: boolean }[]
          blogsCount: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/hardware': {
      $get: {
        input: {}
        output: {
          name: string
          prettyName: string
          cpu: string
          ram: string
          accelerator:
            | {
                type: 'gpu' | 'neuron'
                model: string
                quantity: string
                vram: string
                manufacturer: 'Nvidia' | 'AWS'
              }
            | ({ [x: string]: unknown } | null)
          unitCostMicroUSD: number
          unitCostUSD: number
          unitLabel: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/templates': {
      $get: {
        input: {}
        output: {
          templates: {
            sdk: 'docker' | 'static' | 'gradio'
            name: string
            repoId: string
            preferredPrivate: boolean
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/zero-gpu/quota': {
      $get: {
        input: {}
        output: {
          base: number
          current: number
          resetsAt: string | ({ [x: string]: unknown } | null)
          overquotaUsed?: number | undefined
          runs?:
            | {
                used: number
                limit: number
                remaining: number
                resetsAt: string | ({ [x: string]: unknown } | null)
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/secrets': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          [x: string]: {
            key: string
            description?: string | undefined
            updatedAt?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spaces/:namespace/:repo/variables': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          [x: string]: {
            key: string
            value: string
            description?: string | undefined
            updatedAt?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/duplicate': {
      $post: {
        input: { param: { repoType: 'spaces'; namespace: string; repo: string } } & {
          json: {
            repository: string
            private?: boolean | undefined
            visibility?: 'private' | 'public' | 'protected' | undefined
            resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
            hardware?:
              | 'cpu-basic'
              | 'cpu-upgrade'
              | 'cpu-performance'
              | 'cpu-xl'
              | 'sprx8'
              | 'zero-a10g'
              | 't4-small'
              | 't4-medium'
              | 'l4x1'
              | 'l4x4'
              | 'l40sx1'
              | 'l40sx4'
              | 'l40sx8'
              | 'a10g-small'
              | 'a10g-large'
              | 'a10g-largex2'
              | 'a10g-largex4'
              | 'a100-large'
              | 'a100x4'
              | 'a100x8'
              | 'h200'
              | 'h200x2'
              | 'h200x4'
              | 'h200x8'
              | 'rtx-pro-6000'
              | 'rtx-pro-6000x2'
              | 'rtx-pro-6000x4'
              | 'rtx-pro-6000x8'
              | 'inf2x6'
              | ''
              | undefined
            sleepTimeSeconds?: number | -1 | undefined
            secrets?: { key: string; description?: string | undefined; value: string }[] | undefined
            variables?:
              | { key: string; description?: string | undefined; value: string }[]
              | undefined
            volumes?:
              | {
                  type: 'bucket' | 'model' | 'dataset' | 'space'
                  source: string
                  mountPath: string
                  revision?: string | undefined
                  readOnly?: boolean | undefined
                  path?: string | undefined
                }[]
              | undefined
          }
        }
        output: { url: string; filesCopyPending: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/duplicate/status': {
      $get: {
        input: {
          param: { repoType: 'models' | 'datasets' | 'spaces'; namespace: string; repo: string }
        }
        output: {
          pending: boolean
          filesTotal?: number | undefined
          filesCopied?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/repos/create': {
      $post:
        | {
            input: {
              json:
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type: 'dataset'
                  }
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type?: 'model' | undefined
                  }
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type: 'kernel'
                  }
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type: 'space'
                    template?: string | undefined
                    short_description?: string | undefined
                    hardware?:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | 'zerogpu'
                      | undefined
                    secrets?:
                      | { key: string; description?: string | undefined; value: string }[]
                      | undefined
                    variables?:
                      | { key: string; description?: string | undefined; value: string }[]
                      | undefined
                    sleepTimeSeconds?: number | -1 | undefined
                    volumes?:
                      | {
                          type: 'bucket' | 'model' | 'dataset' | 'space'
                          source: string
                          mountPath: string
                          revision?: string | undefined
                          readOnly?: boolean | undefined
                          path?: string | undefined
                        }[]
                      | undefined
                    sdk: 'gradio' | 'docker' | 'static'
                    sdkVersion?: (string | null) | undefined
                    devModeEnabled?: boolean | undefined
                  }
            }
            output: {
              url: string
              name: string
              id: string
              filesCopyPending?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type: 'dataset'
                  }
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type?: 'model' | undefined
                  }
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type: 'kernel'
                  }
                | {
                    name: string
                    organization?: (string | null) | undefined
                    region?: 'us' | 'eu' | undefined
                    license?:
                      | 'apache-2.0'
                      | 'mit'
                      | 'openrail'
                      | 'bigscience-openrail-m'
                      | 'creativeml-openrail-m'
                      | 'bigscience-bloom-rail-1.0'
                      | 'bigcode-openrail-m'
                      | 'afl-3.0'
                      | 'artistic-2.0'
                      | 'bsl-1.0'
                      | 'bsd'
                      | 'bsd-2-clause'
                      | 'bsd-3-clause'
                      | 'bsd-3-clause-clear'
                      | 'c-uda'
                      | 'cc'
                      | 'cc0-1.0'
                      | 'cc-by-2.0'
                      | 'cc-by-2.5'
                      | 'cc-by-3.0'
                      | 'cc-by-4.0'
                      | 'cc-by-sa-3.0'
                      | 'cc-by-sa-4.0'
                      | 'cc-by-nc-2.0'
                      | 'cc-by-nc-3.0'
                      | 'cc-by-nc-4.0'
                      | 'cc-by-nd-4.0'
                      | 'cc-by-nc-nd-3.0'
                      | 'cc-by-nc-nd-4.0'
                      | 'cc-by-nc-sa-2.0'
                      | 'cc-by-nc-sa-3.0'
                      | 'cc-by-nc-sa-4.0'
                      | 'cdla-sharing-1.0'
                      | 'cdla-permissive-1.0'
                      | 'cdla-permissive-2.0'
                      | 'wtfpl'
                      | 'ecl-2.0'
                      | 'epl-1.0'
                      | 'epl-2.0'
                      | 'etalab-2.0'
                      | 'eupl-1.1'
                      | 'eupl-1.2'
                      | 'agpl-3.0'
                      | 'gfdl'
                      | 'gpl'
                      | 'gpl-2.0'
                      | 'gpl-3.0'
                      | 'lgpl'
                      | 'lgpl-2.1'
                      | 'lgpl-3.0'
                      | 'isc'
                      | 'h-research'
                      | 'intel-research'
                      | 'lppl-1.3c'
                      | 'ms-pl'
                      | 'apple-ascl'
                      | 'apple-amlr'
                      | 'mpl-2.0'
                      | 'odc-by'
                      | 'odbl'
                      | 'openmdw-1.0'
                      | 'openmdw-1.1'
                      | 'openrail++'
                      | 'osl-3.0'
                      | 'postgresql'
                      | 'ofl-1.1'
                      | 'ncsa'
                      | 'unlicense'
                      | 'zlib'
                      | 'pddl'
                      | 'lgpl-lr'
                      | 'deepfloyd-if-license'
                      | 'fair-noncommercial-research-license'
                      | 'llama2'
                      | 'llama3'
                      | 'llama3.1'
                      | 'llama3.2'
                      | 'llama3.3'
                      | 'llama4'
                      | 'grok2-community'
                      | 'gemma'
                      | 'unknown'
                      | 'other'
                      | undefined
                    license_name?: string | undefined
                    license_link?: 'LICENSE' | 'LICENSE.md' | string | undefined
                    private?: (boolean | null) | undefined
                    visibility?: 'private' | 'public' | 'protected' | undefined
                    resourceGroupId?: string | ({ [x: string]: unknown } | null) | undefined
                    files?:
                      | {
                          content: string
                          path: string
                          encoding?: 'utf-8' | 'base64' | undefined
                        }[]
                      | undefined
                    type: 'space'
                    template?: string | undefined
                    short_description?: string | undefined
                    hardware?:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | 'zerogpu'
                      | undefined
                    secrets?:
                      | { key: string; description?: string | undefined; value: string }[]
                      | undefined
                    variables?:
                      | { key: string; description?: string | undefined; value: string }[]
                      | undefined
                    sleepTimeSeconds?: number | -1 | undefined
                    volumes?:
                      | {
                          type: 'bucket' | 'model' | 'dataset' | 'space'
                          source: string
                          mountPath: string
                          revision?: string | undefined
                          readOnly?: boolean | undefined
                          path?: string | undefined
                        }[]
                      | undefined
                    sdk: 'gradio' | 'docker' | 'static'
                    sdkVersion?: (string | null) | undefined
                    devModeEnabled?: boolean | undefined
                  }
            }
            output: { error: string; url: string }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/:repoType/:namespace/:repo/sql-console/embed/:id': {
      $patch: {
        input: { param: { repoType: 'datasets'; namespace: string; repo: string; id: string } } & {
          json: {
            title?: string | undefined
            private?: boolean | undefined
            sql?: string | undefined
          }
        }
        output: {
          _id: string
          repoId: string
          views: { key: string; displayName: string; viewName: string }[]
          sql: string
          title: string
          userId: string
          createdAt: string
          slug: string
          private?: boolean | undefined
          rating?: number | undefined
          justification?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { repoType: 'datasets'; namespace: string; repo: string; id: string } }
        output: {}
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/sql-console/embed/:id/hide': {
      $post: {
        input: { param: { repoType: 'datasets'; namespace: string; repo: string; id: string } }
        output: {}
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/api/:repoType/:namespace/:repo/sql-console/embed': {
      $post: {
        input: { param: { repoType: 'datasets'; namespace: string; repo: string } } & {
          json: {
            sql: string
            title: string
            private?: boolean | undefined
            views: { key: string; displayName: string; viewName: string }[]
          }
        }
        output: {
          _id: string
          repoId: string
          views: { key: string; displayName: string; viewName: string }[]
          sql: string
          title: string
          userId: string
          createdAt: string
          slug: string
          private?: boolean | undefined
          rating?: number | undefined
          justification?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spaces/:namespace/:repo/resolve/:rev/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 307
          }
    }
  } & {
    '/datasets/:namespace/:repo/resolve/:rev/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 307
          }
    }
  } & {
    '/:namespace/:repo/resolve/:rev/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 307
          }
    }
  } & {
    '/api/resolve-cache/spaces/:namespace/:repo/:rev/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 307
          }
    }
  } & {
    '/api/resolve-cache/datasets/:namespace/:repo/:rev/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 307
          }
    }
  } & {
    '/api/resolve-cache/models/:namespace/:repo/:rev/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 304
          }
        | {
            input: { param: { namespace: string; repo: string; rev: string; path: string } } & {
              header: {
                Range?: string | undefined
                Accept?: 'application/vnd.xet-fileinfo+json' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 307
          }
    }
  } & {
    '/:namespace/:repo/ask-access': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { [x: string]: { [x: string]: unknown } }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 303
      }
    }
  } & {
    '/datasets/:namespace/:repo/ask-access': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { [x: string]: { [x: string]: unknown } }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 303
      }
    }
  } & {
    '/:namespace/:repo/user-access-report': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:namespace/:repo/user-access-report': {
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/user-access-request/:status': {
      $get: {
        input: {
          param: {
            namespace: string
            repo: string
            status: 'pending' | 'accepted' | 'rejected' | 'reset'
          }
        } & {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
            q?: string | undefined
          }
        }
        output: {
          requestId: string
          user?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
                email?: string | undefined
                verifiedOrgNames: string[]
              }
            | undefined
          grantedBy?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
                email?: string | undefined
              }
            | {}
            | undefined
          status: 'accepted' | 'rejected' | 'pending' | 'reset'
          fields?: { [x: string]: string } | undefined
          timestamp: string
          reviewedAt?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/user-access-request/:status': {
      $get: {
        input: {
          param: {
            namespace: string
            repo: string
            status: 'pending' | 'accepted' | 'rejected' | 'reset'
          }
        } & {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
            q?: string | undefined
          }
        }
        output: {
          requestId: string
          user?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
                email?: string | undefined
                verifiedOrgNames: string[]
              }
            | undefined
          grantedBy?:
            | {
                _id: string
                orgs?:
                  | { id: string; name: string; fullname: string; avatarUrl: string }[]
                  | undefined
                avatarUrl: string
                fullname: string
                isPro: boolean
                user: string
                numModels?: number | undefined
                numDatasets?: number | undefined
                numSpaces?: number | undefined
                numBuckets?: number | undefined
                numKernels?: number | undefined
                numDiscussions?: number | undefined
                numPapers?: number | undefined
                numUpvotes?: number | undefined
                numLikes?: number | undefined
                numFollowers?: number | undefined
                numFollowing?: number | undefined
                numFollowingOrgs?: number | undefined
                details?: string | undefined
                isFollowing?: boolean | undefined
                reasonToFollow?: string | undefined
                primaryOrgAvatarUrl?: string | undefined
                serviceAccount?:
                  | {
                      id: string
                      org: string
                      orgAvatarUrl: string
                      description?: string | undefined
                    }
                  | undefined
                type: 'user'
                email?: string | undefined
              }
            | {}
            | undefined
          status: 'accepted' | 'rejected' | 'pending' | 'reset'
          fields?: { [x: string]: string } | undefined
          timestamp: string
          reviewedAt?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/models/:namespace/:repo/user-access-request/batch': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            status: 'accepted' | 'rejected' | 'pending' | 'reset'
            rejectionReason?: string | undefined
            resetReason?: string | undefined
            requests: ({ requestId: string } | { userId: string } | { user: string })[]
          }
        }
        output: {
          requestId?: string | undefined
          userId?: string | undefined
          user?: string | undefined
          ok: boolean
          error?: 'user_not_found' | 'request_not_found' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/datasets/:namespace/:repo/user-access-request/batch': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            status: 'accepted' | 'rejected' | 'pending' | 'reset'
            rejectionReason?: string | undefined
            resetReason?: string | undefined
            requests: ({ requestId: string } | { userId: string } | { user: string })[]
          }
        }
        output: {
          requestId?: string | undefined
          userId?: string | undefined
          user?: string | undefined
          ok: boolean
          error?: 'user_not_found' | 'request_not_found' | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/daily_papers': {
      $get: {
        input: {
          query: {
            p?: number | undefined
            limit?: number | undefined
            date?: string | undefined
            week?: string | undefined
            month?: string | undefined
            submitter?: string | undefined
            sort?: 'publishedAt' | 'trending' | undefined
          }
        }
        output: {
          paper: {
            id: string
            authors: {
              _id: string
              name: string
              status?: string | undefined
              statusLastChangedAt?: string | undefined
              user?:
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    isPro: boolean
                    name: string
                    type: string
                    user?: string | undefined
                    isHf?: boolean | undefined
                    isHfAdmin?: boolean | undefined
                    isMod?: boolean | undefined
                    followerCount?: number | undefined
                  }
                | undefined
              hidden: boolean
            }[]
            mediaUrls?: string[] | undefined
            publishedAt: string
            submittedOnDailyAt?: string | undefined
            title: string
            submittedOnDailyBy?:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  isPro: boolean
                  name: string
                  type: string
                  user?: string | undefined
                  isHf?: boolean | undefined
                  isHfAdmin?: boolean | undefined
                  isMod?: boolean | undefined
                  followerCount?: number | undefined
                }
              | undefined
            summary: string
            upvotes: number
            withdrawnAt?: string | undefined
            discussionId: string
            projectPage?: string | undefined
            githubRepo?: string | undefined
            ai_summary?: string | undefined
            ai_keywords?: string[] | undefined
            ai_summary_model?: string | undefined
            githubStars?: number | undefined
          }
          publishedAt: string
          title: string
          summary: string
          mediaUrls?: string[] | undefined
          thumbnail: string
          numComments: number
          submittedBy: {
            _id: string
            avatarUrl: string
            fullname: string
            isPro: boolean
            name: string
            type: string
            user?: string | undefined
            isHf?: boolean | undefined
            isHfAdmin?: boolean | undefined
            isMod?: boolean | undefined
            followerCount?: number | undefined
          }
          isAuthorParticipating: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/papers': {
      $get: {
        input: { query: { cursor?: string | undefined; limit?: number | undefined } }
        output: {
          id: string
          title: string
          upvotes: number
          publishedAt: string
          thumbnailUrl?: string | undefined
          authors: {
            _id: string
            name: string
            status?: string | undefined
            statusLastChangedAt?: string | undefined
            user?:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  isPro: boolean
                  name: string
                  type: string
                  user?: string | undefined
                  isHf?: boolean | undefined
                  isHfAdmin?: boolean | undefined
                  isMod?: boolean | undefined
                  followerCount?: number | undefined
                }
              | undefined
            hidden: boolean
          }[]
          summary: string
          projectPage?: string | undefined
          githubRepo?: string | undefined
          ai_summary?: string | undefined
          organization?:
            | {
                _id: string
                name: string
                fullname?: string | undefined
                avatar?: string | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/papers/index': {
      $post: { input: { json: { arxivId: string } }; output: {}; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/papers/:paperId': {
      $get: {
        input: { param: { paperId: string } } & {
          query: {
            field?:
              | 'submissionDeadline'
              | 'comments'
              | ('submissionDeadline' | 'comments')[]
              | undefined
          }
        }
        output: {
          id: string
          authors: {
            _id: string
            name: string
            status?: string | undefined
            statusLastChangedAt?: string | undefined
            user?:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  isPro: boolean
                  name: string
                  type: string
                  user?: string | undefined
                  isHf?: boolean | undefined
                  isHfAdmin?: boolean | undefined
                  isMod?: boolean | undefined
                  followerCount?: number | undefined
                }
              | undefined
            hidden: boolean
          }[]
          mediaUrls?: string[] | undefined
          publishedAt: string
          submittedOnDailyAt?: string | undefined
          title: string
          submittedOnDailyBy?:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                isPro: boolean
                name: string
                type: string
                user?: string | undefined
                isHf?: boolean | undefined
                isHfAdmin?: boolean | undefined
                isMod?: boolean | undefined
                followerCount?: number | undefined
              }
            | undefined
          summary: string
          upvotes: number
          withdrawnAt?: string | undefined
          discussionId: string
          projectPage?: string | undefined
          githubRepo?: string | undefined
          ai_summary?: string | undefined
          ai_keywords?: string[] | undefined
          ai_summary_model?: string | undefined
          githubStars?: number | undefined
          submissionDeadline?: string | undefined
          linkedModels: {
            author: string
            downloads: number
            id: string
            availableInferenceProviders: {
              provider:
                | 'baseten'
                | 'cerebras'
                | 'cohere'
                | 'deepinfra'
                | 'fal-ai'
                | 'featherless-ai'
                | 'fireworks-ai'
                | 'groq'
                | 'hf-inference'
                | 'humain-ai'
                | 'novita'
                | 'nscale'
                | 'openai'
                | 'openrouter'
                | 'ovhcloud'
                | 'publicai'
                | 'replicate'
                | 'scaleway'
                | 'together'
                | 'wavespeed'
                | 'zai-org'
              providerStatus: 'live' | 'staging' | 'error'
              modelStatus: 'live' | 'staging' | 'error'
              providerId: string
              task:
                | 'text-classification'
                | 'token-classification'
                | 'table-question-answering'
                | 'question-answering'
                | 'zero-shot-classification'
                | 'translation'
                | 'summarization'
                | 'feature-extraction'
                | 'text-generation'
                | 'fill-mask'
                | 'sentence-similarity'
                | 'text-to-speech'
                | 'text-to-audio'
                | 'automatic-speech-recognition'
                | 'audio-to-audio'
                | 'audio-classification'
                | 'audio-text-to-text'
                | 'voice-activity-detection'
                | 'depth-estimation'
                | 'image-classification'
                | 'object-detection'
                | 'image-segmentation'
                | 'text-to-image'
                | 'image-to-text'
                | 'image-to-image'
                | 'image-to-video'
                | 'unconditional-image-generation'
                | 'video-classification'
                | 'reinforcement-learning'
                | 'robotics'
                | 'tabular-classification'
                | 'tabular-regression'
                | 'tabular-to-text'
                | 'table-to-text'
                | 'multiple-choice'
                | 'text-ranking'
                | 'text-retrieval'
                | 'time-series-forecasting'
                | 'text-to-video'
                | 'image-text-to-text'
                | 'image-text-to-image'
                | 'image-text-to-video'
                | 'visual-question-answering'
                | 'document-question-answering'
                | 'zero-shot-image-classification'
                | 'graph-ml'
                | 'mask-generation'
                | 'zero-shot-object-detection'
                | 'text-to-3d'
                | 'image-to-3d'
                | 'image-feature-extraction'
                | 'video-text-to-text'
                | 'keypoint-detection'
                | 'visual-document-retrieval'
                | 'any-to-any'
                | 'video-to-video'
                | 'other'
                | 'conversational'
              adapterType?: 'lora' | undefined
              adapterWeightsPath?: string | undefined
              features?: { toolCalling?: boolean | undefined } | undefined
              isCheapestPricingOutput: boolean
              isFastestThroughput: boolean
              isModelAuthor: boolean
              tokensPerSecond?: number | undefined
              pricingOutput?: number | undefined
              freeUntil?: string | undefined
            }[]
            openRouterProviders?: string[] | undefined
            isLikedByUser: boolean
            lastModified: string
            likes: number
            pipeline_tag?: string | undefined
            private: boolean
            repoType: 'model'
            gated: false | 'auto' | 'manual'
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            numParameters?: number | undefined
            authorData?:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            widgetOutputUrls?: string[] | undefined
            isPreRelease?: true | undefined
          }[]
          numTotalModels: number
          linkedDatasets: {
            author: string
            id: string
            isLikedByUser: boolean
            likes: number
            datasetsServerInfo?:
              | {
                  viewer: 'preview' | 'viewer-partial' | 'viewer'
                  numRows: number | null
                  libraries: (
                    | 'mlcroissant'
                    | 'webdataset'
                    | 'datasets'
                    | 'pandas'
                    | 'dask'
                    | 'distilabel'
                    | 'fiftyone'
                    | 'lance'
                    | 'argilla'
                    | 'polars'
                    | 'duckdb'
                    | 'datadesigner'
                    | 'harbor'
                    | 'verifiers'
                    | 'openenv'
                    | 'nemo-gym'
                    | 'agentenv'
                    | 'lerobot'
                  )[]
                  formats: (
                    | 'json'
                    | 'csv'
                    | 'parquet'
                    | 'imagefolder'
                    | 'audiofolder'
                    | 'webdataset'
                    | 'text'
                    | 'arrow'
                    | 'optimized-parquet'
                    | 'agent-traces'
                  )[]
                  modalities: (
                    | '3d'
                    | 'audio'
                    | 'document'
                    | 'geospatial'
                    | 'image'
                    | 'tabular'
                    | 'text'
                    | 'timeseries'
                    | 'video'
                  )[]
                }
              | undefined
            private: boolean
            repoType: 'dataset'
            downloads: number
            gated: false | 'auto' | 'manual'
            lastModified: string
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            isBenchmark?: boolean | undefined
            isTraces?: boolean | undefined
            isEnvironment?: boolean | undefined
          }[]
          numTotalDatasets: number
          linkedSpaces: {
            id: string
            emoji: string
            running: boolean
            shortDescription?: string | undefined
            featured: boolean
          }[]
          numTotalSpaces: number
          comments?:
            | {
                id: string
                createdAt: string
                author?:
                  | {
                      isOwner?: boolean | undefined
                      isOrgMember?: boolean | undefined
                      isBlockedByMe?: boolean | undefined
                      oauthApp?:
                        | {
                            imageUrl?: string | undefined
                            imageData?:
                              | { emoji: string; colorFrom: string; colorTo: string }
                              | undefined
                            url?: string | undefined
                            name: string
                          }
                        | undefined
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      isOwner?: boolean | undefined
                      isOrgMember?: boolean | undefined
                      isBlockedByMe?: boolean | undefined
                      oauthApp?:
                        | {
                            imageUrl?: string | undefined
                            imageData?:
                              | { emoji: string; colorFrom: string; colorTo: string }
                              | undefined
                            url?: string | undefined
                            name: string
                          }
                        | undefined
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                type: 'comment'
                data: {
                  edited: boolean
                  hidden: boolean
                  hiddenBy?: string | undefined
                  hiddenReason?:
                    | 'Spam'
                    | 'Abuse'
                    | 'Graphic Content'
                    | 'Resolved'
                    | 'Off-Topic'
                    | 'Low Quality'
                    | undefined
                  latest: {
                    raw: string
                    html: string
                    updatedAt: string
                    author?:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                  numEdits: number
                  editors: string[]
                  editorAvatarUrls: string[]
                  reactions: {
                    reaction:
                      | '🔥'
                      | '🚀'
                      | '👀'
                      | '❤️'
                      | '🤗'
                      | '😎'
                      | '➕'
                      | '🧠'
                      | '👍'
                      | '🤝'
                      | '😔'
                      | '🤯'
                    users: string[]
                    count: number
                  }[]
                  identifiedLanguage?: { language: string; probability: number } | undefined
                  relatedEventId?: string | undefined
                  isReport?: boolean | undefined
                  parentCommentId?: string | undefined
                }
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/papers/:paperId/comment': {
      $post: {
        input: { param: { paperId: string } } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/papers/:paperId/comment/:commentId/reply': {
      $post: {
        input: { param: { paperId: string; commentId: string } } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/papers/:paperId/links': {
      $post: {
        input: { param: { paperId: string } } & {
          json: {
            projectPage?: string | ({ [x: string]: unknown } | null) | undefined
            githubRepo?: string | ({ [x: string]: unknown } | null) | undefined
            organizationId?: string | ({ [x: string]: unknown } | null) | undefined
          }
        }
        output: {}
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/papers/:paperId/media': {
      $post: {
        input: { param: { paperId: string } } & { json: { mediaUrls: string[] } }
        output: {}
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/posts/:username/:postSlug/comment': {
      $post: {
        input: { param: { username: string; postSlug: string } } & { json: { comment: string } }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/posts/:username/:postSlug/comment/:commentId/reply': {
      $post: {
        input: { param: { username: string; postSlug: string; commentId: string } } & {
          json: { comment: string }
        }
        output: {
          newMessage: {
            id: string
            createdAt: string
            author?:
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  isOwner?: boolean | undefined
                  isOrgMember?: boolean | undefined
                  isBlockedByMe?: boolean | undefined
                  oauthApp?:
                    | {
                        imageUrl?: string | undefined
                        imageData?:
                          | { emoji: string; colorFrom: string; colorTo: string }
                          | undefined
                        url?: string | undefined
                        name: string
                      }
                    | undefined
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'comment'
            data: {
              edited: boolean
              hidden: boolean
              hiddenBy?: string | undefined
              hiddenReason?:
                | 'Spam'
                | 'Abuse'
                | 'Graphic Content'
                | 'Resolved'
                | 'Off-Topic'
                | 'Low Quality'
                | undefined
              latest: {
                raw: string
                html: string
                updatedAt: string
                author?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
              numEdits: number
              editors: string[]
              editorAvatarUrls: string[]
              reactions: {
                reaction:
                  | '🔥'
                  | '🚀'
                  | '👀'
                  | '❤️'
                  | '🤗'
                  | '😎'
                  | '➕'
                  | '🧠'
                  | '👍'
                  | '🤝'
                  | '😔'
                  | '🤯'
                users: string[]
                count: number
              }[]
              identifiedLanguage?: { language: string; probability: number } | undefined
              relatedEventId?: string | undefined
              isReport?: boolean | undefined
              parentCommentId?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/collections/:namespace/:slug-:id': {
      $get: {
        input: { param: { namespace: string; slug: string; id: string } }
        output: {
          slug: string
          title: string
          description?: string | undefined
          lastUpdated: string
          gating:
            | true
            | false
            | {
                mode: 'auto'
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
            | {
                mode: 'manual'
                notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
          owner:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
          position: number
          theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
          private: boolean
          upvotes: number
          shareUrl: string
          isUpvotedByUser: boolean
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          items: (
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                isLikedByUser: boolean
                likes: number
                datasetsServerInfo?:
                  | {
                      viewer: 'preview' | 'viewer-partial' | 'viewer'
                      numRows: number | null
                      libraries: (
                        | 'mlcroissant'
                        | 'webdataset'
                        | 'datasets'
                        | 'pandas'
                        | 'dask'
                        | 'distilabel'
                        | 'fiftyone'
                        | 'lance'
                        | 'argilla'
                        | 'polars'
                        | 'duckdb'
                        | 'datadesigner'
                        | 'harbor'
                        | 'verifiers'
                        | 'openenv'
                        | 'nemo-gym'
                        | 'agentenv'
                        | 'lerobot'
                      )[]
                      formats: (
                        | 'json'
                        | 'csv'
                        | 'parquet'
                        | 'imagefolder'
                        | 'audiofolder'
                        | 'webdataset'
                        | 'text'
                        | 'arrow'
                        | 'optimized-parquet'
                        | 'agent-traces'
                      )[]
                      modalities: (
                        | '3d'
                        | 'audio'
                        | 'document'
                        | 'geospatial'
                        | 'image'
                        | 'tabular'
                        | 'text'
                        | 'timeseries'
                        | 'video'
                      )[]
                    }
                  | undefined
                private: boolean
                repoType: 'dataset'
                downloads: number
                gated: false | 'auto' | 'manual'
                lastModified: string
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                isBenchmark?: boolean | undefined
                isTraces?: boolean | undefined
                isEnvironment?: boolean | undefined
                type: 'dataset'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                downloads: number
                id: string
                availableInferenceProviders: {
                  provider:
                    | 'baseten'
                    | 'cerebras'
                    | 'cohere'
                    | 'deepinfra'
                    | 'fal-ai'
                    | 'featherless-ai'
                    | 'fireworks-ai'
                    | 'groq'
                    | 'hf-inference'
                    | 'humain-ai'
                    | 'novita'
                    | 'nscale'
                    | 'openai'
                    | 'openrouter'
                    | 'ovhcloud'
                    | 'publicai'
                    | 'replicate'
                    | 'scaleway'
                    | 'together'
                    | 'wavespeed'
                    | 'zai-org'
                  providerStatus: 'live' | 'staging' | 'error'
                  modelStatus: 'live' | 'staging' | 'error'
                  providerId: string
                  task:
                    | 'text-classification'
                    | 'token-classification'
                    | 'table-question-answering'
                    | 'question-answering'
                    | 'zero-shot-classification'
                    | 'translation'
                    | 'summarization'
                    | 'feature-extraction'
                    | 'text-generation'
                    | 'fill-mask'
                    | 'sentence-similarity'
                    | 'text-to-speech'
                    | 'text-to-audio'
                    | 'automatic-speech-recognition'
                    | 'audio-to-audio'
                    | 'audio-classification'
                    | 'audio-text-to-text'
                    | 'voice-activity-detection'
                    | 'depth-estimation'
                    | 'image-classification'
                    | 'object-detection'
                    | 'image-segmentation'
                    | 'text-to-image'
                    | 'image-to-text'
                    | 'image-to-image'
                    | 'image-to-video'
                    | 'unconditional-image-generation'
                    | 'video-classification'
                    | 'reinforcement-learning'
                    | 'robotics'
                    | 'tabular-classification'
                    | 'tabular-regression'
                    | 'tabular-to-text'
                    | 'table-to-text'
                    | 'multiple-choice'
                    | 'text-ranking'
                    | 'text-retrieval'
                    | 'time-series-forecasting'
                    | 'text-to-video'
                    | 'image-text-to-text'
                    | 'image-text-to-image'
                    | 'image-text-to-video'
                    | 'visual-question-answering'
                    | 'document-question-answering'
                    | 'zero-shot-image-classification'
                    | 'graph-ml'
                    | 'mask-generation'
                    | 'zero-shot-object-detection'
                    | 'text-to-3d'
                    | 'image-to-3d'
                    | 'image-feature-extraction'
                    | 'video-text-to-text'
                    | 'keypoint-detection'
                    | 'visual-document-retrieval'
                    | 'any-to-any'
                    | 'video-to-video'
                    | 'other'
                    | 'conversational'
                  adapterType?: 'lora' | undefined
                  adapterWeightsPath?: string | undefined
                  features?: { toolCalling?: boolean | undefined } | undefined
                  isCheapestPricingOutput: boolean
                  isFastestThroughput: boolean
                  isModelAuthor: boolean
                  tokensPerSecond?: number | undefined
                  pricingOutput?: number | undefined
                  freeUntil?: string | undefined
                }[]
                openRouterProviders?: string[] | undefined
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pipeline_tag?: string | undefined
                private: boolean
                repoType: 'model'
                gated: false | 'auto' | 'manual'
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                numParameters?: number | undefined
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                widgetOutputUrls?: string[] | undefined
                isPreRelease?: true | undefined
                type: 'model'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                colorFrom: string
                colorTo: string
                createdAt: string
                emoji: string
                id: string
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pinned: boolean
                private: boolean
                repoType: 'space'
                title: string
                sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                runtime: {
                  stage:
                    | 'NO_APP_FILE'
                    | 'CONFIG_ERROR'
                    | 'BUILDING'
                    | 'BUILD_ERROR'
                    | 'APP_STARTING'
                    | 'RUNNING'
                    | 'RUNNING_BUILDING'
                    | 'RUNNING_APP_STARTING'
                    | 'RUNTIME_ERROR'
                    | 'DELETING'
                    | 'STOPPED'
                    | 'PAUSED'
                    | 'SLEEPING'
                  hardware: {
                    current:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                    requested:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                  }
                  errorMessage?: string | undefined
                  gcTimeout?: (number | null) | undefined
                  replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                  devMode?: boolean | undefined
                  domains?:
                    | {
                        domain: string
                        isCustom?: (boolean | null) | undefined
                        stage:
                          | 'READY'
                          | 'PENDING'
                          | 'PENDING_CHALLENGE'
                          | 'EXPIRED_CHALLENGE'
                          | 'MISCONFIGURED'
                      }[]
                    | undefined
                  sha?: string | undefined
                  hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                }
                disabled: boolean
                originRepo?:
                  | {
                      author:
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'org'
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            isUserFollowing?: boolean | undefined
                          }
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'user'
                            isPro: boolean
                            isUserFollowing?: boolean | undefined
                            primaryOrg?:
                              | {
                                  avatarUrl: string
                                  fullname: string
                                  name: string
                                  type: 'org'
                                  isHf: boolean
                                  isFollowing?: boolean | undefined
                                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                  details?: string | undefined
                                  hasPrivateMembersList?: boolean | undefined
                                  userRole?:
                                    | 'admin'
                                    | 'write'
                                    | 'contributor'
                                    | 'read'
                                    | 'no_access'
                                    | undefined
                                  numUsers?: number | undefined
                                }
                              | undefined
                          }
                      name: string
                    }
                  | undefined
                ai_short_description?: string | undefined
                ai_category?: string | undefined
                trendingScore?: number | undefined
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                tags: string[]
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                shortDescription?: string | undefined
                semanticRelevancyScore?: number | undefined
                featured: boolean
                visibility: 'public' | 'private' | 'protected'
                type: 'space'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                id: string
                title: string
                upvotes: number
                publishedAt: string
                thumbnailUrl?: string | undefined
                isUpvotedByUser?: boolean | undefined
                type: 'paper'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                slug: string
                lastUpdated: string
                description?: string | undefined
                owner:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                title: string
                theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                upvotes: number
                isUpvotedByUser: boolean
                shareUrl: string
                id: string
                numberItems: number
                type: 'collection'
              }
            | {
                _id: {}
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                private?: (boolean | null) | undefined
                description?: (string | null) | undefined
                createdAt: string
                updatedAt: string
                size: number
                totalFiles: number
                repoType: 'bucket' | 'container'
                adminTags?: string[] | undefined
                disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                type: 'bucket'
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { namespace: string; slug: string; id: string } } & {
          json: {
            position?: number | undefined
            private?: boolean | undefined
            theme?: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo' | undefined
            title?: string | undefined
            description?: string | undefined
            gating?:
              | false
              | {
                  mode: 'auto'
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
              | {
                  mode: 'manual'
                  notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          data: {
            slug: string
            title: string
            description?: string | undefined
            lastUpdated: string
            gating:
              | true
              | false
              | {
                  mode: 'auto'
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
              | {
                  mode: 'manual'
                  notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
            owner:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
            position: number
            theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
            private: boolean
            upvotes: number
            shareUrl: string
            isUpvotedByUser: boolean
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            items: (
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  id: string
                  isLikedByUser: boolean
                  likes: number
                  datasetsServerInfo?:
                    | {
                        viewer: 'preview' | 'viewer-partial' | 'viewer'
                        numRows: number | null
                        libraries: (
                          | 'mlcroissant'
                          | 'webdataset'
                          | 'datasets'
                          | 'pandas'
                          | 'dask'
                          | 'distilabel'
                          | 'fiftyone'
                          | 'lance'
                          | 'argilla'
                          | 'polars'
                          | 'duckdb'
                          | 'datadesigner'
                          | 'harbor'
                          | 'verifiers'
                          | 'openenv'
                          | 'nemo-gym'
                          | 'agentenv'
                          | 'lerobot'
                        )[]
                        formats: (
                          | 'json'
                          | 'csv'
                          | 'parquet'
                          | 'imagefolder'
                          | 'audiofolder'
                          | 'webdataset'
                          | 'text'
                          | 'arrow'
                          | 'optimized-parquet'
                          | 'agent-traces'
                        )[]
                        modalities: (
                          | '3d'
                          | 'audio'
                          | 'document'
                          | 'geospatial'
                          | 'image'
                          | 'tabular'
                          | 'text'
                          | 'timeseries'
                          | 'video'
                        )[]
                      }
                    | undefined
                  private: boolean
                  repoType: 'dataset'
                  downloads: number
                  gated: false | 'auto' | 'manual'
                  lastModified: string
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  isBenchmark?: boolean | undefined
                  isTraces?: boolean | undefined
                  isEnvironment?: boolean | undefined
                  type: 'dataset'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  downloads: number
                  id: string
                  availableInferenceProviders: {
                    provider:
                      | 'baseten'
                      | 'cerebras'
                      | 'cohere'
                      | 'deepinfra'
                      | 'fal-ai'
                      | 'featherless-ai'
                      | 'fireworks-ai'
                      | 'groq'
                      | 'hf-inference'
                      | 'humain-ai'
                      | 'novita'
                      | 'nscale'
                      | 'openai'
                      | 'openrouter'
                      | 'ovhcloud'
                      | 'publicai'
                      | 'replicate'
                      | 'scaleway'
                      | 'together'
                      | 'wavespeed'
                      | 'zai-org'
                    providerStatus: 'live' | 'staging' | 'error'
                    modelStatus: 'live' | 'staging' | 'error'
                    providerId: string
                    task:
                      | 'text-classification'
                      | 'token-classification'
                      | 'table-question-answering'
                      | 'question-answering'
                      | 'zero-shot-classification'
                      | 'translation'
                      | 'summarization'
                      | 'feature-extraction'
                      | 'text-generation'
                      | 'fill-mask'
                      | 'sentence-similarity'
                      | 'text-to-speech'
                      | 'text-to-audio'
                      | 'automatic-speech-recognition'
                      | 'audio-to-audio'
                      | 'audio-classification'
                      | 'audio-text-to-text'
                      | 'voice-activity-detection'
                      | 'depth-estimation'
                      | 'image-classification'
                      | 'object-detection'
                      | 'image-segmentation'
                      | 'text-to-image'
                      | 'image-to-text'
                      | 'image-to-image'
                      | 'image-to-video'
                      | 'unconditional-image-generation'
                      | 'video-classification'
                      | 'reinforcement-learning'
                      | 'robotics'
                      | 'tabular-classification'
                      | 'tabular-regression'
                      | 'tabular-to-text'
                      | 'table-to-text'
                      | 'multiple-choice'
                      | 'text-ranking'
                      | 'text-retrieval'
                      | 'time-series-forecasting'
                      | 'text-to-video'
                      | 'image-text-to-text'
                      | 'image-text-to-image'
                      | 'image-text-to-video'
                      | 'visual-question-answering'
                      | 'document-question-answering'
                      | 'zero-shot-image-classification'
                      | 'graph-ml'
                      | 'mask-generation'
                      | 'zero-shot-object-detection'
                      | 'text-to-3d'
                      | 'image-to-3d'
                      | 'image-feature-extraction'
                      | 'video-text-to-text'
                      | 'keypoint-detection'
                      | 'visual-document-retrieval'
                      | 'any-to-any'
                      | 'video-to-video'
                      | 'other'
                      | 'conversational'
                    adapterType?: 'lora' | undefined
                    adapterWeightsPath?: string | undefined
                    features?: { toolCalling?: boolean | undefined } | undefined
                    isCheapestPricingOutput: boolean
                    isFastestThroughput: boolean
                    isModelAuthor: boolean
                    tokensPerSecond?: number | undefined
                    pricingOutput?: number | undefined
                    freeUntil?: string | undefined
                  }[]
                  openRouterProviders?: string[] | undefined
                  isLikedByUser: boolean
                  lastModified: string
                  likes: number
                  pipeline_tag?: string | undefined
                  private: boolean
                  repoType: 'model'
                  gated: false | 'auto' | 'manual'
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  numParameters?: number | undefined
                  authorData?:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                    | undefined
                  widgetOutputUrls?: string[] | undefined
                  isPreRelease?: true | undefined
                  type: 'model'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  colorFrom: string
                  colorTo: string
                  createdAt: string
                  emoji: string
                  id: string
                  isLikedByUser: boolean
                  lastModified: string
                  likes: number
                  pinned: boolean
                  private: boolean
                  repoType: 'space'
                  title: string
                  sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                  runtime: {
                    stage:
                      | 'NO_APP_FILE'
                      | 'CONFIG_ERROR'
                      | 'BUILDING'
                      | 'BUILD_ERROR'
                      | 'APP_STARTING'
                      | 'RUNNING'
                      | 'RUNNING_BUILDING'
                      | 'RUNNING_APP_STARTING'
                      | 'RUNTIME_ERROR'
                      | 'DELETING'
                      | 'STOPPED'
                      | 'PAUSED'
                      | 'SLEEPING'
                    hardware: {
                      current:
                        | 'cpu-basic'
                        | 'cpu-upgrade'
                        | 'cpu-performance'
                        | 'cpu-xl'
                        | 'sprx8'
                        | 'zero-a10g'
                        | 't4-small'
                        | 't4-medium'
                        | 'l4x1'
                        | 'l4x4'
                        | 'l40sx1'
                        | 'l40sx4'
                        | 'l40sx8'
                        | 'a10g-small'
                        | 'a10g-large'
                        | 'a10g-largex2'
                        | 'a10g-largex4'
                        | 'a100-large'
                        | 'a100x4'
                        | 'a100x8'
                        | 'h200'
                        | 'h200x2'
                        | 'h200x4'
                        | 'h200x8'
                        | 'rtx-pro-6000'
                        | 'rtx-pro-6000x2'
                        | 'rtx-pro-6000x4'
                        | 'rtx-pro-6000x8'
                        | 'inf2x6'
                        | ({ [x: string]: unknown } | null)
                      requested:
                        | 'cpu-basic'
                        | 'cpu-upgrade'
                        | 'cpu-performance'
                        | 'cpu-xl'
                        | 'sprx8'
                        | 'zero-a10g'
                        | 't4-small'
                        | 't4-medium'
                        | 'l4x1'
                        | 'l4x4'
                        | 'l40sx1'
                        | 'l40sx4'
                        | 'l40sx8'
                        | 'a10g-small'
                        | 'a10g-large'
                        | 'a10g-largex2'
                        | 'a10g-largex4'
                        | 'a100-large'
                        | 'a100x4'
                        | 'a100x8'
                        | 'h200'
                        | 'h200x2'
                        | 'h200x4'
                        | 'h200x8'
                        | 'rtx-pro-6000'
                        | 'rtx-pro-6000x2'
                        | 'rtx-pro-6000x4'
                        | 'rtx-pro-6000x8'
                        | 'inf2x6'
                        | ({ [x: string]: unknown } | null)
                    }
                    errorMessage?: string | undefined
                    gcTimeout?: (number | null) | undefined
                    replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                    devMode?: boolean | undefined
                    domains?:
                      | {
                          domain: string
                          isCustom?: (boolean | null) | undefined
                          stage:
                            | 'READY'
                            | 'PENDING'
                            | 'PENDING_CHALLENGE'
                            | 'EXPIRED_CHALLENGE'
                            | 'MISCONFIGURED'
                        }[]
                      | undefined
                    sha?: string | undefined
                    hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                  }
                  disabled: boolean
                  originRepo?:
                    | {
                        author:
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'org'
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              isUserFollowing?: boolean | undefined
                            }
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'user'
                              isPro: boolean
                              isUserFollowing?: boolean | undefined
                              primaryOrg?:
                                | {
                                    avatarUrl: string
                                    fullname: string
                                    name: string
                                    type: 'org'
                                    isHf: boolean
                                    isFollowing?: boolean | undefined
                                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                    details?: string | undefined
                                    hasPrivateMembersList?: boolean | undefined
                                    userRole?:
                                      | 'admin'
                                      | 'write'
                                      | 'contributor'
                                      | 'read'
                                      | 'no_access'
                                      | undefined
                                    numUsers?: number | undefined
                                  }
                                | undefined
                            }
                        name: string
                      }
                    | undefined
                  ai_short_description?: string | undefined
                  ai_category?: string | undefined
                  trendingScore?: number | undefined
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  tags: string[]
                  authorData?:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                    | undefined
                  shortDescription?: string | undefined
                  semanticRelevancyScore?: number | undefined
                  featured: boolean
                  visibility: 'public' | 'private' | 'protected'
                  type: 'space'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  id: string
                  title: string
                  upvotes: number
                  publishedAt: string
                  thumbnailUrl?: string | undefined
                  isUpvotedByUser?: boolean | undefined
                  type: 'paper'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  slug: string
                  lastUpdated: string
                  description?: string | undefined
                  owner:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                  title: string
                  theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                  upvotes: number
                  isUpvotedByUser: boolean
                  shareUrl: string
                  id: string
                  numberItems: number
                  type: 'collection'
                }
              | {
                  _id: {}
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  id: string
                  private?: (boolean | null) | undefined
                  description?: (string | null) | undefined
                  createdAt: string
                  updatedAt: string
                  size: number
                  totalFiles: number
                  repoType: 'bucket' | 'container'
                  adminTags?: string[] | undefined
                  disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                  cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  type: 'bucket'
                }
            )[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/collections/:namespace/:slug': {
      $get: {
        input: { param: { namespace: string; slug: string } }
        output: {
          slug: string
          title: string
          description?: string | undefined
          lastUpdated: string
          gating:
            | true
            | false
            | {
                mode: 'auto'
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
            | {
                mode: 'manual'
                notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
          owner:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
          position: number
          theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
          private: boolean
          upvotes: number
          shareUrl: string
          isUpvotedByUser: boolean
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          items: (
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                isLikedByUser: boolean
                likes: number
                datasetsServerInfo?:
                  | {
                      viewer: 'preview' | 'viewer-partial' | 'viewer'
                      numRows: number | null
                      libraries: (
                        | 'mlcroissant'
                        | 'webdataset'
                        | 'datasets'
                        | 'pandas'
                        | 'dask'
                        | 'distilabel'
                        | 'fiftyone'
                        | 'lance'
                        | 'argilla'
                        | 'polars'
                        | 'duckdb'
                        | 'datadesigner'
                        | 'harbor'
                        | 'verifiers'
                        | 'openenv'
                        | 'nemo-gym'
                        | 'agentenv'
                        | 'lerobot'
                      )[]
                      formats: (
                        | 'json'
                        | 'csv'
                        | 'parquet'
                        | 'imagefolder'
                        | 'audiofolder'
                        | 'webdataset'
                        | 'text'
                        | 'arrow'
                        | 'optimized-parquet'
                        | 'agent-traces'
                      )[]
                      modalities: (
                        | '3d'
                        | 'audio'
                        | 'document'
                        | 'geospatial'
                        | 'image'
                        | 'tabular'
                        | 'text'
                        | 'timeseries'
                        | 'video'
                      )[]
                    }
                  | undefined
                private: boolean
                repoType: 'dataset'
                downloads: number
                gated: false | 'auto' | 'manual'
                lastModified: string
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                isBenchmark?: boolean | undefined
                isTraces?: boolean | undefined
                isEnvironment?: boolean | undefined
                type: 'dataset'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                downloads: number
                id: string
                availableInferenceProviders: {
                  provider:
                    | 'baseten'
                    | 'cerebras'
                    | 'cohere'
                    | 'deepinfra'
                    | 'fal-ai'
                    | 'featherless-ai'
                    | 'fireworks-ai'
                    | 'groq'
                    | 'hf-inference'
                    | 'humain-ai'
                    | 'novita'
                    | 'nscale'
                    | 'openai'
                    | 'openrouter'
                    | 'ovhcloud'
                    | 'publicai'
                    | 'replicate'
                    | 'scaleway'
                    | 'together'
                    | 'wavespeed'
                    | 'zai-org'
                  providerStatus: 'live' | 'staging' | 'error'
                  modelStatus: 'live' | 'staging' | 'error'
                  providerId: string
                  task:
                    | 'text-classification'
                    | 'token-classification'
                    | 'table-question-answering'
                    | 'question-answering'
                    | 'zero-shot-classification'
                    | 'translation'
                    | 'summarization'
                    | 'feature-extraction'
                    | 'text-generation'
                    | 'fill-mask'
                    | 'sentence-similarity'
                    | 'text-to-speech'
                    | 'text-to-audio'
                    | 'automatic-speech-recognition'
                    | 'audio-to-audio'
                    | 'audio-classification'
                    | 'audio-text-to-text'
                    | 'voice-activity-detection'
                    | 'depth-estimation'
                    | 'image-classification'
                    | 'object-detection'
                    | 'image-segmentation'
                    | 'text-to-image'
                    | 'image-to-text'
                    | 'image-to-image'
                    | 'image-to-video'
                    | 'unconditional-image-generation'
                    | 'video-classification'
                    | 'reinforcement-learning'
                    | 'robotics'
                    | 'tabular-classification'
                    | 'tabular-regression'
                    | 'tabular-to-text'
                    | 'table-to-text'
                    | 'multiple-choice'
                    | 'text-ranking'
                    | 'text-retrieval'
                    | 'time-series-forecasting'
                    | 'text-to-video'
                    | 'image-text-to-text'
                    | 'image-text-to-image'
                    | 'image-text-to-video'
                    | 'visual-question-answering'
                    | 'document-question-answering'
                    | 'zero-shot-image-classification'
                    | 'graph-ml'
                    | 'mask-generation'
                    | 'zero-shot-object-detection'
                    | 'text-to-3d'
                    | 'image-to-3d'
                    | 'image-feature-extraction'
                    | 'video-text-to-text'
                    | 'keypoint-detection'
                    | 'visual-document-retrieval'
                    | 'any-to-any'
                    | 'video-to-video'
                    | 'other'
                    | 'conversational'
                  adapterType?: 'lora' | undefined
                  adapterWeightsPath?: string | undefined
                  features?: { toolCalling?: boolean | undefined } | undefined
                  isCheapestPricingOutput: boolean
                  isFastestThroughput: boolean
                  isModelAuthor: boolean
                  tokensPerSecond?: number | undefined
                  pricingOutput?: number | undefined
                  freeUntil?: string | undefined
                }[]
                openRouterProviders?: string[] | undefined
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pipeline_tag?: string | undefined
                private: boolean
                repoType: 'model'
                gated: false | 'auto' | 'manual'
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                numParameters?: number | undefined
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                widgetOutputUrls?: string[] | undefined
                isPreRelease?: true | undefined
                type: 'model'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                colorFrom: string
                colorTo: string
                createdAt: string
                emoji: string
                id: string
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pinned: boolean
                private: boolean
                repoType: 'space'
                title: string
                sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                runtime: {
                  stage:
                    | 'NO_APP_FILE'
                    | 'CONFIG_ERROR'
                    | 'BUILDING'
                    | 'BUILD_ERROR'
                    | 'APP_STARTING'
                    | 'RUNNING'
                    | 'RUNNING_BUILDING'
                    | 'RUNNING_APP_STARTING'
                    | 'RUNTIME_ERROR'
                    | 'DELETING'
                    | 'STOPPED'
                    | 'PAUSED'
                    | 'SLEEPING'
                  hardware: {
                    current:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                    requested:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                  }
                  errorMessage?: string | undefined
                  gcTimeout?: (number | null) | undefined
                  replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                  devMode?: boolean | undefined
                  domains?:
                    | {
                        domain: string
                        isCustom?: (boolean | null) | undefined
                        stage:
                          | 'READY'
                          | 'PENDING'
                          | 'PENDING_CHALLENGE'
                          | 'EXPIRED_CHALLENGE'
                          | 'MISCONFIGURED'
                      }[]
                    | undefined
                  sha?: string | undefined
                  hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                }
                disabled: boolean
                originRepo?:
                  | {
                      author:
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'org'
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            isUserFollowing?: boolean | undefined
                          }
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'user'
                            isPro: boolean
                            isUserFollowing?: boolean | undefined
                            primaryOrg?:
                              | {
                                  avatarUrl: string
                                  fullname: string
                                  name: string
                                  type: 'org'
                                  isHf: boolean
                                  isFollowing?: boolean | undefined
                                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                  details?: string | undefined
                                  hasPrivateMembersList?: boolean | undefined
                                  userRole?:
                                    | 'admin'
                                    | 'write'
                                    | 'contributor'
                                    | 'read'
                                    | 'no_access'
                                    | undefined
                                  numUsers?: number | undefined
                                }
                              | undefined
                          }
                      name: string
                    }
                  | undefined
                ai_short_description?: string | undefined
                ai_category?: string | undefined
                trendingScore?: number | undefined
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                tags: string[]
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                shortDescription?: string | undefined
                semanticRelevancyScore?: number | undefined
                featured: boolean
                visibility: 'public' | 'private' | 'protected'
                type: 'space'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                id: string
                title: string
                upvotes: number
                publishedAt: string
                thumbnailUrl?: string | undefined
                isUpvotedByUser?: boolean | undefined
                type: 'paper'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                slug: string
                lastUpdated: string
                description?: string | undefined
                owner:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                title: string
                theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                upvotes: number
                isUpvotedByUser: boolean
                shareUrl: string
                id: string
                numberItems: number
                type: 'collection'
              }
            | {
                _id: {}
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                private?: (boolean | null) | undefined
                description?: (string | null) | undefined
                createdAt: string
                updatedAt: string
                size: number
                totalFiles: number
                repoType: 'bucket' | 'container'
                adminTags?: string[] | undefined
                disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                type: 'bucket'
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { namespace: string; slug: string } } & {
          json: {
            position?: number | undefined
            private?: boolean | undefined
            theme?: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo' | undefined
            title?: string | undefined
            description?: string | undefined
            gating?:
              | false
              | {
                  mode: 'auto'
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
              | {
                  mode: 'manual'
                  notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          data: {
            slug: string
            title: string
            description?: string | undefined
            lastUpdated: string
            gating:
              | true
              | false
              | {
                  mode: 'auto'
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
              | {
                  mode: 'manual'
                  notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                  profileSharing?:
                    | { username: true; email: boolean }
                    | { username: false; email: false }
                    | undefined
                }
            owner:
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'org'
                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                  isUserFollowing?: boolean | undefined
                }
              | {
                  _id: string
                  avatarUrl: string
                  fullname: string
                  name: string
                  isHf: boolean
                  isHfAdmin: boolean
                  isMod: boolean
                  followerCount?: number | undefined
                  type: 'user'
                  isPro: boolean
                  isUserFollowing?: boolean | undefined
                  primaryOrg?:
                    | {
                        avatarUrl: string
                        fullname: string
                        name: string
                        type: 'org'
                        isHf: boolean
                        isFollowing?: boolean | undefined
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        details?: string | undefined
                        hasPrivateMembersList?: boolean | undefined
                        userRole?:
                          | 'admin'
                          | 'write'
                          | 'contributor'
                          | 'read'
                          | 'no_access'
                          | undefined
                        numUsers?: number | undefined
                      }
                    | undefined
                }
            position: number
            theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
            private: boolean
            upvotes: number
            shareUrl: string
            isUpvotedByUser: boolean
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            items: (
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  id: string
                  isLikedByUser: boolean
                  likes: number
                  datasetsServerInfo?:
                    | {
                        viewer: 'preview' | 'viewer-partial' | 'viewer'
                        numRows: number | null
                        libraries: (
                          | 'mlcroissant'
                          | 'webdataset'
                          | 'datasets'
                          | 'pandas'
                          | 'dask'
                          | 'distilabel'
                          | 'fiftyone'
                          | 'lance'
                          | 'argilla'
                          | 'polars'
                          | 'duckdb'
                          | 'datadesigner'
                          | 'harbor'
                          | 'verifiers'
                          | 'openenv'
                          | 'nemo-gym'
                          | 'agentenv'
                          | 'lerobot'
                        )[]
                        formats: (
                          | 'json'
                          | 'csv'
                          | 'parquet'
                          | 'imagefolder'
                          | 'audiofolder'
                          | 'webdataset'
                          | 'text'
                          | 'arrow'
                          | 'optimized-parquet'
                          | 'agent-traces'
                        )[]
                        modalities: (
                          | '3d'
                          | 'audio'
                          | 'document'
                          | 'geospatial'
                          | 'image'
                          | 'tabular'
                          | 'text'
                          | 'timeseries'
                          | 'video'
                        )[]
                      }
                    | undefined
                  private: boolean
                  repoType: 'dataset'
                  downloads: number
                  gated: false | 'auto' | 'manual'
                  lastModified: string
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  isBenchmark?: boolean | undefined
                  isTraces?: boolean | undefined
                  isEnvironment?: boolean | undefined
                  type: 'dataset'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  downloads: number
                  id: string
                  availableInferenceProviders: {
                    provider:
                      | 'baseten'
                      | 'cerebras'
                      | 'cohere'
                      | 'deepinfra'
                      | 'fal-ai'
                      | 'featherless-ai'
                      | 'fireworks-ai'
                      | 'groq'
                      | 'hf-inference'
                      | 'humain-ai'
                      | 'novita'
                      | 'nscale'
                      | 'openai'
                      | 'openrouter'
                      | 'ovhcloud'
                      | 'publicai'
                      | 'replicate'
                      | 'scaleway'
                      | 'together'
                      | 'wavespeed'
                      | 'zai-org'
                    providerStatus: 'live' | 'staging' | 'error'
                    modelStatus: 'live' | 'staging' | 'error'
                    providerId: string
                    task:
                      | 'text-classification'
                      | 'token-classification'
                      | 'table-question-answering'
                      | 'question-answering'
                      | 'zero-shot-classification'
                      | 'translation'
                      | 'summarization'
                      | 'feature-extraction'
                      | 'text-generation'
                      | 'fill-mask'
                      | 'sentence-similarity'
                      | 'text-to-speech'
                      | 'text-to-audio'
                      | 'automatic-speech-recognition'
                      | 'audio-to-audio'
                      | 'audio-classification'
                      | 'audio-text-to-text'
                      | 'voice-activity-detection'
                      | 'depth-estimation'
                      | 'image-classification'
                      | 'object-detection'
                      | 'image-segmentation'
                      | 'text-to-image'
                      | 'image-to-text'
                      | 'image-to-image'
                      | 'image-to-video'
                      | 'unconditional-image-generation'
                      | 'video-classification'
                      | 'reinforcement-learning'
                      | 'robotics'
                      | 'tabular-classification'
                      | 'tabular-regression'
                      | 'tabular-to-text'
                      | 'table-to-text'
                      | 'multiple-choice'
                      | 'text-ranking'
                      | 'text-retrieval'
                      | 'time-series-forecasting'
                      | 'text-to-video'
                      | 'image-text-to-text'
                      | 'image-text-to-image'
                      | 'image-text-to-video'
                      | 'visual-question-answering'
                      | 'document-question-answering'
                      | 'zero-shot-image-classification'
                      | 'graph-ml'
                      | 'mask-generation'
                      | 'zero-shot-object-detection'
                      | 'text-to-3d'
                      | 'image-to-3d'
                      | 'image-feature-extraction'
                      | 'video-text-to-text'
                      | 'keypoint-detection'
                      | 'visual-document-retrieval'
                      | 'any-to-any'
                      | 'video-to-video'
                      | 'other'
                      | 'conversational'
                    adapterType?: 'lora' | undefined
                    adapterWeightsPath?: string | undefined
                    features?: { toolCalling?: boolean | undefined } | undefined
                    isCheapestPricingOutput: boolean
                    isFastestThroughput: boolean
                    isModelAuthor: boolean
                    tokensPerSecond?: number | undefined
                    pricingOutput?: number | undefined
                    freeUntil?: string | undefined
                  }[]
                  openRouterProviders?: string[] | undefined
                  isLikedByUser: boolean
                  lastModified: string
                  likes: number
                  pipeline_tag?: string | undefined
                  private: boolean
                  repoType: 'model'
                  gated: false | 'auto' | 'manual'
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  numParameters?: number | undefined
                  authorData?:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                    | undefined
                  widgetOutputUrls?: string[] | undefined
                  isPreRelease?: true | undefined
                  type: 'model'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  colorFrom: string
                  colorTo: string
                  createdAt: string
                  emoji: string
                  id: string
                  isLikedByUser: boolean
                  lastModified: string
                  likes: number
                  pinned: boolean
                  private: boolean
                  repoType: 'space'
                  title: string
                  sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                  runtime: {
                    stage:
                      | 'NO_APP_FILE'
                      | 'CONFIG_ERROR'
                      | 'BUILDING'
                      | 'BUILD_ERROR'
                      | 'APP_STARTING'
                      | 'RUNNING'
                      | 'RUNNING_BUILDING'
                      | 'RUNNING_APP_STARTING'
                      | 'RUNTIME_ERROR'
                      | 'DELETING'
                      | 'STOPPED'
                      | 'PAUSED'
                      | 'SLEEPING'
                    hardware: {
                      current:
                        | 'cpu-basic'
                        | 'cpu-upgrade'
                        | 'cpu-performance'
                        | 'cpu-xl'
                        | 'sprx8'
                        | 'zero-a10g'
                        | 't4-small'
                        | 't4-medium'
                        | 'l4x1'
                        | 'l4x4'
                        | 'l40sx1'
                        | 'l40sx4'
                        | 'l40sx8'
                        | 'a10g-small'
                        | 'a10g-large'
                        | 'a10g-largex2'
                        | 'a10g-largex4'
                        | 'a100-large'
                        | 'a100x4'
                        | 'a100x8'
                        | 'h200'
                        | 'h200x2'
                        | 'h200x4'
                        | 'h200x8'
                        | 'rtx-pro-6000'
                        | 'rtx-pro-6000x2'
                        | 'rtx-pro-6000x4'
                        | 'rtx-pro-6000x8'
                        | 'inf2x6'
                        | ({ [x: string]: unknown } | null)
                      requested:
                        | 'cpu-basic'
                        | 'cpu-upgrade'
                        | 'cpu-performance'
                        | 'cpu-xl'
                        | 'sprx8'
                        | 'zero-a10g'
                        | 't4-small'
                        | 't4-medium'
                        | 'l4x1'
                        | 'l4x4'
                        | 'l40sx1'
                        | 'l40sx4'
                        | 'l40sx8'
                        | 'a10g-small'
                        | 'a10g-large'
                        | 'a10g-largex2'
                        | 'a10g-largex4'
                        | 'a100-large'
                        | 'a100x4'
                        | 'a100x8'
                        | 'h200'
                        | 'h200x2'
                        | 'h200x4'
                        | 'h200x8'
                        | 'rtx-pro-6000'
                        | 'rtx-pro-6000x2'
                        | 'rtx-pro-6000x4'
                        | 'rtx-pro-6000x8'
                        | 'inf2x6'
                        | ({ [x: string]: unknown } | null)
                    }
                    errorMessage?: string | undefined
                    gcTimeout?: (number | null) | undefined
                    replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                    devMode?: boolean | undefined
                    domains?:
                      | {
                          domain: string
                          isCustom?: (boolean | null) | undefined
                          stage:
                            | 'READY'
                            | 'PENDING'
                            | 'PENDING_CHALLENGE'
                            | 'EXPIRED_CHALLENGE'
                            | 'MISCONFIGURED'
                        }[]
                      | undefined
                    sha?: string | undefined
                    hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                  }
                  disabled: boolean
                  originRepo?:
                    | {
                        author:
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'org'
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              isUserFollowing?: boolean | undefined
                            }
                          | {
                              _id: string
                              avatarUrl: string
                              fullname: string
                              name: string
                              isHf: boolean
                              isHfAdmin: boolean
                              isMod: boolean
                              followerCount?: number | undefined
                              type: 'user'
                              isPro: boolean
                              isUserFollowing?: boolean | undefined
                              primaryOrg?:
                                | {
                                    avatarUrl: string
                                    fullname: string
                                    name: string
                                    type: 'org'
                                    isHf: boolean
                                    isFollowing?: boolean | undefined
                                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                    details?: string | undefined
                                    hasPrivateMembersList?: boolean | undefined
                                    userRole?:
                                      | 'admin'
                                      | 'write'
                                      | 'contributor'
                                      | 'read'
                                      | 'no_access'
                                      | undefined
                                    numUsers?: number | undefined
                                  }
                                | undefined
                            }
                        name: string
                      }
                    | undefined
                  ai_short_description?: string | undefined
                  ai_category?: string | undefined
                  trendingScore?: number | undefined
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  tags: string[]
                  authorData?:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                    | undefined
                  shortDescription?: string | undefined
                  semanticRelevancyScore?: number | undefined
                  featured: boolean
                  visibility: 'public' | 'private' | 'protected'
                  type: 'space'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  id: string
                  title: string
                  upvotes: number
                  publishedAt: string
                  thumbnailUrl?: string | undefined
                  isUpvotedByUser?: boolean | undefined
                  type: 'paper'
                }
              | {
                  _id: string
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  slug: string
                  lastUpdated: string
                  description?: string | undefined
                  owner:
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'org'
                        plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                        isUserFollowing?: boolean | undefined
                      }
                    | {
                        _id: string
                        avatarUrl: string
                        fullname: string
                        name: string
                        isHf: boolean
                        isHfAdmin: boolean
                        isMod: boolean
                        followerCount?: number | undefined
                        type: 'user'
                        isPro: boolean
                        isUserFollowing?: boolean | undefined
                        primaryOrg?:
                          | {
                              avatarUrl: string
                              fullname: string
                              name: string
                              type: 'org'
                              isHf: boolean
                              isFollowing?: boolean | undefined
                              plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                              details?: string | undefined
                              hasPrivateMembersList?: boolean | undefined
                              userRole?:
                                | 'admin'
                                | 'write'
                                | 'contributor'
                                | 'read'
                                | 'no_access'
                                | undefined
                              numUsers?: number | undefined
                            }
                          | undefined
                      }
                  title: string
                  theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                  upvotes: number
                  isUpvotedByUser: boolean
                  shareUrl: string
                  id: string
                  numberItems: number
                  type: 'collection'
                }
              | {
                  _id: {}
                  note?: { html: string; text: string } | undefined
                  gallery?: string[] | undefined
                  position: number
                  author: string
                  id: string
                  private?: (boolean | null) | undefined
                  description?: (string | null) | undefined
                  createdAt: string
                  updatedAt: string
                  size: number
                  totalFiles: number
                  repoType: 'bucket' | 'container'
                  adminTags?: string[] | undefined
                  disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                  cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                  resourceGroup?:
                    | { id: string; name: string; numUsers?: number | undefined }
                    | undefined
                  type: 'bucket'
                }
            )[]
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/collections/:namespace/:slug-:id/items': {
      $post: {
        input: { param: { namespace: string; slug: string; id: string } } & {
          json: {
            item: {
              type: 'paper' | 'collection' | 'space' | 'model' | 'dataset' | 'bucket'
              id: string
            }
            note?: string | undefined
          }
        }
        output: {
          slug: string
          title: string
          description?: string | undefined
          lastUpdated: string
          gating:
            | true
            | false
            | {
                mode: 'auto'
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
            | {
                mode: 'manual'
                notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
          owner:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
          position: number
          theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
          private: boolean
          upvotes: number
          shareUrl: string
          isUpvotedByUser: boolean
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          items: (
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                isLikedByUser: boolean
                likes: number
                datasetsServerInfo?:
                  | {
                      viewer: 'preview' | 'viewer-partial' | 'viewer'
                      numRows: number | null
                      libraries: (
                        | 'mlcroissant'
                        | 'webdataset'
                        | 'datasets'
                        | 'pandas'
                        | 'dask'
                        | 'distilabel'
                        | 'fiftyone'
                        | 'lance'
                        | 'argilla'
                        | 'polars'
                        | 'duckdb'
                        | 'datadesigner'
                        | 'harbor'
                        | 'verifiers'
                        | 'openenv'
                        | 'nemo-gym'
                        | 'agentenv'
                        | 'lerobot'
                      )[]
                      formats: (
                        | 'json'
                        | 'csv'
                        | 'parquet'
                        | 'imagefolder'
                        | 'audiofolder'
                        | 'webdataset'
                        | 'text'
                        | 'arrow'
                        | 'optimized-parquet'
                        | 'agent-traces'
                      )[]
                      modalities: (
                        | '3d'
                        | 'audio'
                        | 'document'
                        | 'geospatial'
                        | 'image'
                        | 'tabular'
                        | 'text'
                        | 'timeseries'
                        | 'video'
                      )[]
                    }
                  | undefined
                private: boolean
                repoType: 'dataset'
                downloads: number
                gated: false | 'auto' | 'manual'
                lastModified: string
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                isBenchmark?: boolean | undefined
                isTraces?: boolean | undefined
                isEnvironment?: boolean | undefined
                type: 'dataset'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                downloads: number
                id: string
                availableInferenceProviders: {
                  provider:
                    | 'baseten'
                    | 'cerebras'
                    | 'cohere'
                    | 'deepinfra'
                    | 'fal-ai'
                    | 'featherless-ai'
                    | 'fireworks-ai'
                    | 'groq'
                    | 'hf-inference'
                    | 'humain-ai'
                    | 'novita'
                    | 'nscale'
                    | 'openai'
                    | 'openrouter'
                    | 'ovhcloud'
                    | 'publicai'
                    | 'replicate'
                    | 'scaleway'
                    | 'together'
                    | 'wavespeed'
                    | 'zai-org'
                  providerStatus: 'live' | 'staging' | 'error'
                  modelStatus: 'live' | 'staging' | 'error'
                  providerId: string
                  task:
                    | 'text-classification'
                    | 'token-classification'
                    | 'table-question-answering'
                    | 'question-answering'
                    | 'zero-shot-classification'
                    | 'translation'
                    | 'summarization'
                    | 'feature-extraction'
                    | 'text-generation'
                    | 'fill-mask'
                    | 'sentence-similarity'
                    | 'text-to-speech'
                    | 'text-to-audio'
                    | 'automatic-speech-recognition'
                    | 'audio-to-audio'
                    | 'audio-classification'
                    | 'audio-text-to-text'
                    | 'voice-activity-detection'
                    | 'depth-estimation'
                    | 'image-classification'
                    | 'object-detection'
                    | 'image-segmentation'
                    | 'text-to-image'
                    | 'image-to-text'
                    | 'image-to-image'
                    | 'image-to-video'
                    | 'unconditional-image-generation'
                    | 'video-classification'
                    | 'reinforcement-learning'
                    | 'robotics'
                    | 'tabular-classification'
                    | 'tabular-regression'
                    | 'tabular-to-text'
                    | 'table-to-text'
                    | 'multiple-choice'
                    | 'text-ranking'
                    | 'text-retrieval'
                    | 'time-series-forecasting'
                    | 'text-to-video'
                    | 'image-text-to-text'
                    | 'image-text-to-image'
                    | 'image-text-to-video'
                    | 'visual-question-answering'
                    | 'document-question-answering'
                    | 'zero-shot-image-classification'
                    | 'graph-ml'
                    | 'mask-generation'
                    | 'zero-shot-object-detection'
                    | 'text-to-3d'
                    | 'image-to-3d'
                    | 'image-feature-extraction'
                    | 'video-text-to-text'
                    | 'keypoint-detection'
                    | 'visual-document-retrieval'
                    | 'any-to-any'
                    | 'video-to-video'
                    | 'other'
                    | 'conversational'
                  adapterType?: 'lora' | undefined
                  adapterWeightsPath?: string | undefined
                  features?: { toolCalling?: boolean | undefined } | undefined
                  isCheapestPricingOutput: boolean
                  isFastestThroughput: boolean
                  isModelAuthor: boolean
                  tokensPerSecond?: number | undefined
                  pricingOutput?: number | undefined
                  freeUntil?: string | undefined
                }[]
                openRouterProviders?: string[] | undefined
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pipeline_tag?: string | undefined
                private: boolean
                repoType: 'model'
                gated: false | 'auto' | 'manual'
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                numParameters?: number | undefined
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                widgetOutputUrls?: string[] | undefined
                isPreRelease?: true | undefined
                type: 'model'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                colorFrom: string
                colorTo: string
                createdAt: string
                emoji: string
                id: string
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pinned: boolean
                private: boolean
                repoType: 'space'
                title: string
                sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                runtime: {
                  stage:
                    | 'NO_APP_FILE'
                    | 'CONFIG_ERROR'
                    | 'BUILDING'
                    | 'BUILD_ERROR'
                    | 'APP_STARTING'
                    | 'RUNNING'
                    | 'RUNNING_BUILDING'
                    | 'RUNNING_APP_STARTING'
                    | 'RUNTIME_ERROR'
                    | 'DELETING'
                    | 'STOPPED'
                    | 'PAUSED'
                    | 'SLEEPING'
                  hardware: {
                    current:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                    requested:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                  }
                  errorMessage?: string | undefined
                  gcTimeout?: (number | null) | undefined
                  replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                  devMode?: boolean | undefined
                  domains?:
                    | {
                        domain: string
                        isCustom?: (boolean | null) | undefined
                        stage:
                          | 'READY'
                          | 'PENDING'
                          | 'PENDING_CHALLENGE'
                          | 'EXPIRED_CHALLENGE'
                          | 'MISCONFIGURED'
                      }[]
                    | undefined
                  sha?: string | undefined
                  hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                }
                disabled: boolean
                originRepo?:
                  | {
                      author:
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'org'
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            isUserFollowing?: boolean | undefined
                          }
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'user'
                            isPro: boolean
                            isUserFollowing?: boolean | undefined
                            primaryOrg?:
                              | {
                                  avatarUrl: string
                                  fullname: string
                                  name: string
                                  type: 'org'
                                  isHf: boolean
                                  isFollowing?: boolean | undefined
                                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                  details?: string | undefined
                                  hasPrivateMembersList?: boolean | undefined
                                  userRole?:
                                    | 'admin'
                                    | 'write'
                                    | 'contributor'
                                    | 'read'
                                    | 'no_access'
                                    | undefined
                                  numUsers?: number | undefined
                                }
                              | undefined
                          }
                      name: string
                    }
                  | undefined
                ai_short_description?: string | undefined
                ai_category?: string | undefined
                trendingScore?: number | undefined
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                tags: string[]
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                shortDescription?: string | undefined
                semanticRelevancyScore?: number | undefined
                featured: boolean
                visibility: 'public' | 'private' | 'protected'
                type: 'space'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                id: string
                title: string
                upvotes: number
                publishedAt: string
                thumbnailUrl?: string | undefined
                isUpvotedByUser?: boolean | undefined
                type: 'paper'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                slug: string
                lastUpdated: string
                description?: string | undefined
                owner:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                title: string
                theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                upvotes: number
                isUpvotedByUser: boolean
                shareUrl: string
                id: string
                numberItems: number
                type: 'collection'
              }
            | {
                _id: {}
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                private?: (boolean | null) | undefined
                description?: (string | null) | undefined
                createdAt: string
                updatedAt: string
                size: number
                totalFiles: number
                repoType: 'bucket' | 'container'
                adminTags?: string[] | undefined
                disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                type: 'bucket'
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/collections/:namespace/:slug/items': {
      $post: {
        input: { param: { namespace: string; slug: string } } & {
          json: {
            item: {
              type: 'paper' | 'collection' | 'space' | 'model' | 'dataset' | 'bucket'
              id: string
            }
            note?: string | undefined
          }
        }
        output: {
          slug: string
          title: string
          description?: string | undefined
          lastUpdated: string
          gating:
            | true
            | false
            | {
                mode: 'auto'
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
            | {
                mode: 'manual'
                notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                profileSharing?:
                  | { username: true; email: boolean }
                  | { username: false; email: false }
                  | undefined
              }
          owner:
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'org'
                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                isUserFollowing?: boolean | undefined
              }
            | {
                _id: string
                avatarUrl: string
                fullname: string
                name: string
                isHf: boolean
                isHfAdmin: boolean
                isMod: boolean
                followerCount?: number | undefined
                type: 'user'
                isPro: boolean
                isUserFollowing?: boolean | undefined
                primaryOrg?:
                  | {
                      avatarUrl: string
                      fullname: string
                      name: string
                      type: 'org'
                      isHf: boolean
                      isFollowing?: boolean | undefined
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      details?: string | undefined
                      hasPrivateMembersList?: boolean | undefined
                      userRole?:
                        | 'admin'
                        | 'write'
                        | 'contributor'
                        | 'read'
                        | 'no_access'
                        | undefined
                      numUsers?: number | undefined
                    }
                  | undefined
              }
          position: number
          theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
          private: boolean
          upvotes: number
          shareUrl: string
          isUpvotedByUser: boolean
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          items: (
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                isLikedByUser: boolean
                likes: number
                datasetsServerInfo?:
                  | {
                      viewer: 'preview' | 'viewer-partial' | 'viewer'
                      numRows: number | null
                      libraries: (
                        | 'mlcroissant'
                        | 'webdataset'
                        | 'datasets'
                        | 'pandas'
                        | 'dask'
                        | 'distilabel'
                        | 'fiftyone'
                        | 'lance'
                        | 'argilla'
                        | 'polars'
                        | 'duckdb'
                        | 'datadesigner'
                        | 'harbor'
                        | 'verifiers'
                        | 'openenv'
                        | 'nemo-gym'
                        | 'agentenv'
                        | 'lerobot'
                      )[]
                      formats: (
                        | 'json'
                        | 'csv'
                        | 'parquet'
                        | 'imagefolder'
                        | 'audiofolder'
                        | 'webdataset'
                        | 'text'
                        | 'arrow'
                        | 'optimized-parquet'
                        | 'agent-traces'
                      )[]
                      modalities: (
                        | '3d'
                        | 'audio'
                        | 'document'
                        | 'geospatial'
                        | 'image'
                        | 'tabular'
                        | 'text'
                        | 'timeseries'
                        | 'video'
                      )[]
                    }
                  | undefined
                private: boolean
                repoType: 'dataset'
                downloads: number
                gated: false | 'auto' | 'manual'
                lastModified: string
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                isBenchmark?: boolean | undefined
                isTraces?: boolean | undefined
                isEnvironment?: boolean | undefined
                type: 'dataset'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                downloads: number
                id: string
                availableInferenceProviders: {
                  provider:
                    | 'baseten'
                    | 'cerebras'
                    | 'cohere'
                    | 'deepinfra'
                    | 'fal-ai'
                    | 'featherless-ai'
                    | 'fireworks-ai'
                    | 'groq'
                    | 'hf-inference'
                    | 'humain-ai'
                    | 'novita'
                    | 'nscale'
                    | 'openai'
                    | 'openrouter'
                    | 'ovhcloud'
                    | 'publicai'
                    | 'replicate'
                    | 'scaleway'
                    | 'together'
                    | 'wavespeed'
                    | 'zai-org'
                  providerStatus: 'live' | 'staging' | 'error'
                  modelStatus: 'live' | 'staging' | 'error'
                  providerId: string
                  task:
                    | 'text-classification'
                    | 'token-classification'
                    | 'table-question-answering'
                    | 'question-answering'
                    | 'zero-shot-classification'
                    | 'translation'
                    | 'summarization'
                    | 'feature-extraction'
                    | 'text-generation'
                    | 'fill-mask'
                    | 'sentence-similarity'
                    | 'text-to-speech'
                    | 'text-to-audio'
                    | 'automatic-speech-recognition'
                    | 'audio-to-audio'
                    | 'audio-classification'
                    | 'audio-text-to-text'
                    | 'voice-activity-detection'
                    | 'depth-estimation'
                    | 'image-classification'
                    | 'object-detection'
                    | 'image-segmentation'
                    | 'text-to-image'
                    | 'image-to-text'
                    | 'image-to-image'
                    | 'image-to-video'
                    | 'unconditional-image-generation'
                    | 'video-classification'
                    | 'reinforcement-learning'
                    | 'robotics'
                    | 'tabular-classification'
                    | 'tabular-regression'
                    | 'tabular-to-text'
                    | 'table-to-text'
                    | 'multiple-choice'
                    | 'text-ranking'
                    | 'text-retrieval'
                    | 'time-series-forecasting'
                    | 'text-to-video'
                    | 'image-text-to-text'
                    | 'image-text-to-image'
                    | 'image-text-to-video'
                    | 'visual-question-answering'
                    | 'document-question-answering'
                    | 'zero-shot-image-classification'
                    | 'graph-ml'
                    | 'mask-generation'
                    | 'zero-shot-object-detection'
                    | 'text-to-3d'
                    | 'image-to-3d'
                    | 'image-feature-extraction'
                    | 'video-text-to-text'
                    | 'keypoint-detection'
                    | 'visual-document-retrieval'
                    | 'any-to-any'
                    | 'video-to-video'
                    | 'other'
                    | 'conversational'
                  adapterType?: 'lora' | undefined
                  adapterWeightsPath?: string | undefined
                  features?: { toolCalling?: boolean | undefined } | undefined
                  isCheapestPricingOutput: boolean
                  isFastestThroughput: boolean
                  isModelAuthor: boolean
                  tokensPerSecond?: number | undefined
                  pricingOutput?: number | undefined
                  freeUntil?: string | undefined
                }[]
                openRouterProviders?: string[] | undefined
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pipeline_tag?: string | undefined
                private: boolean
                repoType: 'model'
                gated: false | 'auto' | 'manual'
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                numParameters?: number | undefined
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                widgetOutputUrls?: string[] | undefined
                isPreRelease?: true | undefined
                type: 'model'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                colorFrom: string
                colorTo: string
                createdAt: string
                emoji: string
                id: string
                isLikedByUser: boolean
                lastModified: string
                likes: number
                pinned: boolean
                private: boolean
                repoType: 'space'
                title: string
                sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                runtime: {
                  stage:
                    | 'NO_APP_FILE'
                    | 'CONFIG_ERROR'
                    | 'BUILDING'
                    | 'BUILD_ERROR'
                    | 'APP_STARTING'
                    | 'RUNNING'
                    | 'RUNNING_BUILDING'
                    | 'RUNNING_APP_STARTING'
                    | 'RUNTIME_ERROR'
                    | 'DELETING'
                    | 'STOPPED'
                    | 'PAUSED'
                    | 'SLEEPING'
                  hardware: {
                    current:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                    requested:
                      | 'cpu-basic'
                      | 'cpu-upgrade'
                      | 'cpu-performance'
                      | 'cpu-xl'
                      | 'sprx8'
                      | 'zero-a10g'
                      | 't4-small'
                      | 't4-medium'
                      | 'l4x1'
                      | 'l4x4'
                      | 'l40sx1'
                      | 'l40sx4'
                      | 'l40sx8'
                      | 'a10g-small'
                      | 'a10g-large'
                      | 'a10g-largex2'
                      | 'a10g-largex4'
                      | 'a100-large'
                      | 'a100x4'
                      | 'a100x8'
                      | 'h200'
                      | 'h200x2'
                      | 'h200x4'
                      | 'h200x8'
                      | 'rtx-pro-6000'
                      | 'rtx-pro-6000x2'
                      | 'rtx-pro-6000x4'
                      | 'rtx-pro-6000x8'
                      | 'inf2x6'
                      | ({ [x: string]: unknown } | null)
                  }
                  errorMessage?: string | undefined
                  gcTimeout?: (number | null) | undefined
                  replicas: { current?: (number | null) | undefined; requested: number | 'auto' }
                  devMode?: boolean | undefined
                  domains?:
                    | {
                        domain: string
                        isCustom?: (boolean | null) | undefined
                        stage:
                          | 'READY'
                          | 'PENDING'
                          | 'PENDING_CHALLENGE'
                          | 'EXPIRED_CHALLENGE'
                          | 'MISCONFIGURED'
                      }[]
                    | undefined
                  sha?: string | undefined
                  hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                }
                disabled: boolean
                originRepo?:
                  | {
                      author:
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'org'
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            isUserFollowing?: boolean | undefined
                          }
                        | {
                            _id: string
                            avatarUrl: string
                            fullname: string
                            name: string
                            isHf: boolean
                            isHfAdmin: boolean
                            isMod: boolean
                            followerCount?: number | undefined
                            type: 'user'
                            isPro: boolean
                            isUserFollowing?: boolean | undefined
                            primaryOrg?:
                              | {
                                  avatarUrl: string
                                  fullname: string
                                  name: string
                                  type: 'org'
                                  isHf: boolean
                                  isFollowing?: boolean | undefined
                                  plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                  details?: string | undefined
                                  hasPrivateMembersList?: boolean | undefined
                                  userRole?:
                                    | 'admin'
                                    | 'write'
                                    | 'contributor'
                                    | 'read'
                                    | 'no_access'
                                    | undefined
                                  numUsers?: number | undefined
                                }
                              | undefined
                          }
                      name: string
                    }
                  | undefined
                ai_short_description?: string | undefined
                ai_category?: string | undefined
                trendingScore?: number | undefined
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                tags: string[]
                authorData?:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                shortDescription?: string | undefined
                semanticRelevancyScore?: number | undefined
                featured: boolean
                visibility: 'public' | 'private' | 'protected'
                type: 'space'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                id: string
                title: string
                upvotes: number
                publishedAt: string
                thumbnailUrl?: string | undefined
                isUpvotedByUser?: boolean | undefined
                type: 'paper'
              }
            | {
                _id: string
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                slug: string
                lastUpdated: string
                description?: string | undefined
                owner:
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'org'
                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                      isUserFollowing?: boolean | undefined
                    }
                  | {
                      _id: string
                      avatarUrl: string
                      fullname: string
                      name: string
                      isHf: boolean
                      isHfAdmin: boolean
                      isMod: boolean
                      followerCount?: number | undefined
                      type: 'user'
                      isPro: boolean
                      isUserFollowing?: boolean | undefined
                      primaryOrg?:
                        | {
                            avatarUrl: string
                            fullname: string
                            name: string
                            type: 'org'
                            isHf: boolean
                            isFollowing?: boolean | undefined
                            plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                            details?: string | undefined
                            hasPrivateMembersList?: boolean | undefined
                            userRole?:
                              | 'admin'
                              | 'write'
                              | 'contributor'
                              | 'read'
                              | 'no_access'
                              | undefined
                            numUsers?: number | undefined
                          }
                        | undefined
                    }
                title: string
                theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                upvotes: number
                isUpvotedByUser: boolean
                shareUrl: string
                id: string
                numberItems: number
                type: 'collection'
              }
            | {
                _id: {}
                note?: { html: string; text: string } | undefined
                gallery?: string[] | undefined
                position: number
                author: string
                id: string
                private?: (boolean | null) | undefined
                description?: (string | null) | undefined
                createdAt: string
                updatedAt: string
                size: number
                totalFiles: number
                repoType: 'bucket' | 'container'
                adminTags?: string[] | undefined
                disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                resourceGroup?:
                  | { id: string; name: string; numUsers?: number | undefined }
                  | undefined
                type: 'bucket'
              }
          )[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/collections': {
      $post:
        | {
            input: {
              json: {
                title: string
                description?: string | undefined
                namespace: string
                item?:
                  | {
                      type: 'paper' | 'collection' | 'space' | 'model' | 'dataset' | 'bucket'
                      id: string
                    }
                  | undefined
                private?: boolean | undefined
                resourceGroupId?: string | undefined
              }
            }
            output: {
              slug: string
              title: string
              description?: string | undefined
              lastUpdated: string
              gating:
                | true
                | false
                | {
                    mode: 'auto'
                    profileSharing?:
                      | { username: true; email: boolean }
                      | { username: false; email: false }
                      | undefined
                  }
                | {
                    mode: 'manual'
                    notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                    profileSharing?:
                      | { username: true; email: boolean }
                      | { username: false; email: false }
                      | undefined
                  }
              owner:
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'org'
                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                    isUserFollowing?: boolean | undefined
                  }
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'user'
                    isPro: boolean
                    isUserFollowing?: boolean | undefined
                    primaryOrg?:
                      | {
                          avatarUrl: string
                          fullname: string
                          name: string
                          type: 'org'
                          isHf: boolean
                          isFollowing?: boolean | undefined
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          details?: string | undefined
                          hasPrivateMembersList?: boolean | undefined
                          userRole?:
                            | 'admin'
                            | 'write'
                            | 'contributor'
                            | 'read'
                            | 'no_access'
                            | undefined
                          numUsers?: number | undefined
                        }
                      | undefined
                  }
              position: number
              theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
              private: boolean
              upvotes: number
              shareUrl: string
              isUpvotedByUser: boolean
              resourceGroup?:
                | { id: string; name: string; numUsers?: number | undefined }
                | undefined
              items: (
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    id: string
                    isLikedByUser: boolean
                    likes: number
                    datasetsServerInfo?:
                      | {
                          viewer: 'preview' | 'viewer-partial' | 'viewer'
                          numRows: number | null
                          libraries: (
                            | 'mlcroissant'
                            | 'webdataset'
                            | 'datasets'
                            | 'pandas'
                            | 'dask'
                            | 'distilabel'
                            | 'fiftyone'
                            | 'lance'
                            | 'argilla'
                            | 'polars'
                            | 'duckdb'
                            | 'datadesigner'
                            | 'harbor'
                            | 'verifiers'
                            | 'openenv'
                            | 'nemo-gym'
                            | 'agentenv'
                            | 'lerobot'
                          )[]
                          formats: (
                            | 'json'
                            | 'csv'
                            | 'parquet'
                            | 'imagefolder'
                            | 'audiofolder'
                            | 'webdataset'
                            | 'text'
                            | 'arrow'
                            | 'optimized-parquet'
                            | 'agent-traces'
                          )[]
                          modalities: (
                            | '3d'
                            | 'audio'
                            | 'document'
                            | 'geospatial'
                            | 'image'
                            | 'tabular'
                            | 'text'
                            | 'timeseries'
                            | 'video'
                          )[]
                        }
                      | undefined
                    private: boolean
                    repoType: 'dataset'
                    downloads: number
                    gated: false | 'auto' | 'manual'
                    lastModified: string
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    isBenchmark?: boolean | undefined
                    isTraces?: boolean | undefined
                    isEnvironment?: boolean | undefined
                    type: 'dataset'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    downloads: number
                    id: string
                    availableInferenceProviders: {
                      provider:
                        | 'baseten'
                        | 'cerebras'
                        | 'cohere'
                        | 'deepinfra'
                        | 'fal-ai'
                        | 'featherless-ai'
                        | 'fireworks-ai'
                        | 'groq'
                        | 'hf-inference'
                        | 'humain-ai'
                        | 'novita'
                        | 'nscale'
                        | 'openai'
                        | 'openrouter'
                        | 'ovhcloud'
                        | 'publicai'
                        | 'replicate'
                        | 'scaleway'
                        | 'together'
                        | 'wavespeed'
                        | 'zai-org'
                      providerStatus: 'live' | 'staging' | 'error'
                      modelStatus: 'live' | 'staging' | 'error'
                      providerId: string
                      task:
                        | 'text-classification'
                        | 'token-classification'
                        | 'table-question-answering'
                        | 'question-answering'
                        | 'zero-shot-classification'
                        | 'translation'
                        | 'summarization'
                        | 'feature-extraction'
                        | 'text-generation'
                        | 'fill-mask'
                        | 'sentence-similarity'
                        | 'text-to-speech'
                        | 'text-to-audio'
                        | 'automatic-speech-recognition'
                        | 'audio-to-audio'
                        | 'audio-classification'
                        | 'audio-text-to-text'
                        | 'voice-activity-detection'
                        | 'depth-estimation'
                        | 'image-classification'
                        | 'object-detection'
                        | 'image-segmentation'
                        | 'text-to-image'
                        | 'image-to-text'
                        | 'image-to-image'
                        | 'image-to-video'
                        | 'unconditional-image-generation'
                        | 'video-classification'
                        | 'reinforcement-learning'
                        | 'robotics'
                        | 'tabular-classification'
                        | 'tabular-regression'
                        | 'tabular-to-text'
                        | 'table-to-text'
                        | 'multiple-choice'
                        | 'text-ranking'
                        | 'text-retrieval'
                        | 'time-series-forecasting'
                        | 'text-to-video'
                        | 'image-text-to-text'
                        | 'image-text-to-image'
                        | 'image-text-to-video'
                        | 'visual-question-answering'
                        | 'document-question-answering'
                        | 'zero-shot-image-classification'
                        | 'graph-ml'
                        | 'mask-generation'
                        | 'zero-shot-object-detection'
                        | 'text-to-3d'
                        | 'image-to-3d'
                        | 'image-feature-extraction'
                        | 'video-text-to-text'
                        | 'keypoint-detection'
                        | 'visual-document-retrieval'
                        | 'any-to-any'
                        | 'video-to-video'
                        | 'other'
                        | 'conversational'
                      adapterType?: 'lora' | undefined
                      adapterWeightsPath?: string | undefined
                      features?: { toolCalling?: boolean | undefined } | undefined
                      isCheapestPricingOutput: boolean
                      isFastestThroughput: boolean
                      isModelAuthor: boolean
                      tokensPerSecond?: number | undefined
                      pricingOutput?: number | undefined
                      freeUntil?: string | undefined
                    }[]
                    openRouterProviders?: string[] | undefined
                    isLikedByUser: boolean
                    lastModified: string
                    likes: number
                    pipeline_tag?: string | undefined
                    private: boolean
                    repoType: 'model'
                    gated: false | 'auto' | 'manual'
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    numParameters?: number | undefined
                    authorData?:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    widgetOutputUrls?: string[] | undefined
                    isPreRelease?: true | undefined
                    type: 'model'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    colorFrom: string
                    colorTo: string
                    createdAt: string
                    emoji: string
                    id: string
                    isLikedByUser: boolean
                    lastModified: string
                    likes: number
                    pinned: boolean
                    private: boolean
                    repoType: 'space'
                    title: string
                    sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                    runtime: {
                      stage:
                        | 'NO_APP_FILE'
                        | 'CONFIG_ERROR'
                        | 'BUILDING'
                        | 'BUILD_ERROR'
                        | 'APP_STARTING'
                        | 'RUNNING'
                        | 'RUNNING_BUILDING'
                        | 'RUNNING_APP_STARTING'
                        | 'RUNTIME_ERROR'
                        | 'DELETING'
                        | 'STOPPED'
                        | 'PAUSED'
                        | 'SLEEPING'
                      hardware: {
                        current:
                          | 'cpu-basic'
                          | 'cpu-upgrade'
                          | 'cpu-performance'
                          | 'cpu-xl'
                          | 'sprx8'
                          | 'zero-a10g'
                          | 't4-small'
                          | 't4-medium'
                          | 'l4x1'
                          | 'l4x4'
                          | 'l40sx1'
                          | 'l40sx4'
                          | 'l40sx8'
                          | 'a10g-small'
                          | 'a10g-large'
                          | 'a10g-largex2'
                          | 'a10g-largex4'
                          | 'a100-large'
                          | 'a100x4'
                          | 'a100x8'
                          | 'h200'
                          | 'h200x2'
                          | 'h200x4'
                          | 'h200x8'
                          | 'rtx-pro-6000'
                          | 'rtx-pro-6000x2'
                          | 'rtx-pro-6000x4'
                          | 'rtx-pro-6000x8'
                          | 'inf2x6'
                          | ({ [x: string]: unknown } | null)
                        requested:
                          | 'cpu-basic'
                          | 'cpu-upgrade'
                          | 'cpu-performance'
                          | 'cpu-xl'
                          | 'sprx8'
                          | 'zero-a10g'
                          | 't4-small'
                          | 't4-medium'
                          | 'l4x1'
                          | 'l4x4'
                          | 'l40sx1'
                          | 'l40sx4'
                          | 'l40sx8'
                          | 'a10g-small'
                          | 'a10g-large'
                          | 'a10g-largex2'
                          | 'a10g-largex4'
                          | 'a100-large'
                          | 'a100x4'
                          | 'a100x8'
                          | 'h200'
                          | 'h200x2'
                          | 'h200x4'
                          | 'h200x8'
                          | 'rtx-pro-6000'
                          | 'rtx-pro-6000x2'
                          | 'rtx-pro-6000x4'
                          | 'rtx-pro-6000x8'
                          | 'inf2x6'
                          | ({ [x: string]: unknown } | null)
                      }
                      errorMessage?: string | undefined
                      gcTimeout?: (number | null) | undefined
                      replicas: {
                        current?: (number | null) | undefined
                        requested: number | 'auto'
                      }
                      devMode?: boolean | undefined
                      domains?:
                        | {
                            domain: string
                            isCustom?: (boolean | null) | undefined
                            stage:
                              | 'READY'
                              | 'PENDING'
                              | 'PENDING_CHALLENGE'
                              | 'EXPIRED_CHALLENGE'
                              | 'MISCONFIGURED'
                          }[]
                        | undefined
                      sha?: string | undefined
                      hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                    }
                    disabled: boolean
                    originRepo?:
                      | {
                          author:
                            | {
                                _id: string
                                avatarUrl: string
                                fullname: string
                                name: string
                                isHf: boolean
                                isHfAdmin: boolean
                                isMod: boolean
                                followerCount?: number | undefined
                                type: 'org'
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                isUserFollowing?: boolean | undefined
                              }
                            | {
                                _id: string
                                avatarUrl: string
                                fullname: string
                                name: string
                                isHf: boolean
                                isHfAdmin: boolean
                                isMod: boolean
                                followerCount?: number | undefined
                                type: 'user'
                                isPro: boolean
                                isUserFollowing?: boolean | undefined
                                primaryOrg?:
                                  | {
                                      avatarUrl: string
                                      fullname: string
                                      name: string
                                      type: 'org'
                                      isHf: boolean
                                      isFollowing?: boolean | undefined
                                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                      details?: string | undefined
                                      hasPrivateMembersList?: boolean | undefined
                                      userRole?:
                                        | 'admin'
                                        | 'write'
                                        | 'contributor'
                                        | 'read'
                                        | 'no_access'
                                        | undefined
                                      numUsers?: number | undefined
                                    }
                                  | undefined
                              }
                          name: string
                        }
                      | undefined
                    ai_short_description?: string | undefined
                    ai_category?: string | undefined
                    trendingScore?: number | undefined
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    tags: string[]
                    authorData?:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    shortDescription?: string | undefined
                    semanticRelevancyScore?: number | undefined
                    featured: boolean
                    visibility: 'public' | 'private' | 'protected'
                    type: 'space'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    id: string
                    title: string
                    upvotes: number
                    publishedAt: string
                    thumbnailUrl?: string | undefined
                    isUpvotedByUser?: boolean | undefined
                    type: 'paper'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    slug: string
                    lastUpdated: string
                    description?: string | undefined
                    owner:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                    title: string
                    theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                    upvotes: number
                    isUpvotedByUser: boolean
                    shareUrl: string
                    id: string
                    numberItems: number
                    type: 'collection'
                  }
                | {
                    _id: {}
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    id: string
                    private?: (boolean | null) | undefined
                    description?: (string | null) | undefined
                    createdAt: string
                    updatedAt: string
                    size: number
                    totalFiles: number
                    repoType: 'bucket' | 'container'
                    adminTags?: string[] | undefined
                    disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                    cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    type: 'bucket'
                  }
              )[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                title: string
                description?: string | undefined
                namespace: string
                item?:
                  | {
                      type: 'paper' | 'collection' | 'space' | 'model' | 'dataset' | 'bucket'
                      id: string
                    }
                  | undefined
                private?: boolean | undefined
                resourceGroupId?: string | undefined
              }
            }
            output: { error: string; slug?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
      $get: {
        input: {
          query: {
            item?: string[] | string | undefined
            owner?: string[] | string | { [x: string]: string } | undefined
            q?: string | undefined
            sort?: 'upvotes' | 'lastModified' | 'trending' | undefined
            cursor?: string | undefined
            expand?: string | undefined
            limit?: number | undefined
          }
        }
        output:
          | {
              slug: string
              title: string
              description?: string | undefined
              lastUpdated: string
              gating:
                | true
                | false
                | {
                    mode: 'auto'
                    profileSharing?:
                      | { username: true; email: boolean }
                      | { username: false; email: false }
                      | undefined
                  }
                | {
                    mode: 'manual'
                    notifications: { mode: 'bulk' | 'real-time'; email?: string | undefined }
                    profileSharing?:
                      | { username: true; email: boolean }
                      | { username: false; email: false }
                      | undefined
                  }
              owner:
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'org'
                    plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                    isUserFollowing?: boolean | undefined
                  }
                | {
                    _id: string
                    avatarUrl: string
                    fullname: string
                    name: string
                    isHf: boolean
                    isHfAdmin: boolean
                    isMod: boolean
                    followerCount?: number | undefined
                    type: 'user'
                    isPro: boolean
                    isUserFollowing?: boolean | undefined
                    primaryOrg?:
                      | {
                          avatarUrl: string
                          fullname: string
                          name: string
                          type: 'org'
                          isHf: boolean
                          isFollowing?: boolean | undefined
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          details?: string | undefined
                          hasPrivateMembersList?: boolean | undefined
                          userRole?:
                            | 'admin'
                            | 'write'
                            | 'contributor'
                            | 'read'
                            | 'no_access'
                            | undefined
                          numUsers?: number | undefined
                        }
                      | undefined
                  }
              theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
              private: boolean
              upvotes: number
              isUpvotedByUser: boolean
              resourceGroup?:
                | { id: string; name: string; numUsers?: number | undefined }
                | undefined
              items: (
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    id: string
                    isLikedByUser: boolean
                    likes: number
                    datasetsServerInfo?:
                      | {
                          viewer: 'preview' | 'viewer-partial' | 'viewer'
                          numRows: number | null
                          libraries: (
                            | 'mlcroissant'
                            | 'webdataset'
                            | 'datasets'
                            | 'pandas'
                            | 'dask'
                            | 'distilabel'
                            | 'fiftyone'
                            | 'lance'
                            | 'argilla'
                            | 'polars'
                            | 'duckdb'
                            | 'datadesigner'
                            | 'harbor'
                            | 'verifiers'
                            | 'openenv'
                            | 'nemo-gym'
                            | 'agentenv'
                            | 'lerobot'
                          )[]
                          formats: (
                            | 'json'
                            | 'csv'
                            | 'parquet'
                            | 'imagefolder'
                            | 'audiofolder'
                            | 'webdataset'
                            | 'text'
                            | 'arrow'
                            | 'optimized-parquet'
                            | 'agent-traces'
                          )[]
                          modalities: (
                            | '3d'
                            | 'audio'
                            | 'document'
                            | 'geospatial'
                            | 'image'
                            | 'tabular'
                            | 'text'
                            | 'timeseries'
                            | 'video'
                          )[]
                        }
                      | undefined
                    private: boolean
                    repoType: 'dataset'
                    downloads: number
                    gated: false | 'auto' | 'manual'
                    lastModified: string
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    isBenchmark?: boolean | undefined
                    isTraces?: boolean | undefined
                    isEnvironment?: boolean | undefined
                    type: 'dataset'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    downloads: number
                    id: string
                    availableInferenceProviders: {
                      provider:
                        | 'baseten'
                        | 'cerebras'
                        | 'cohere'
                        | 'deepinfra'
                        | 'fal-ai'
                        | 'featherless-ai'
                        | 'fireworks-ai'
                        | 'groq'
                        | 'hf-inference'
                        | 'humain-ai'
                        | 'novita'
                        | 'nscale'
                        | 'openai'
                        | 'openrouter'
                        | 'ovhcloud'
                        | 'publicai'
                        | 'replicate'
                        | 'scaleway'
                        | 'together'
                        | 'wavespeed'
                        | 'zai-org'
                      providerStatus: 'live' | 'staging' | 'error'
                      modelStatus: 'live' | 'staging' | 'error'
                      providerId: string
                      task:
                        | 'text-classification'
                        | 'token-classification'
                        | 'table-question-answering'
                        | 'question-answering'
                        | 'zero-shot-classification'
                        | 'translation'
                        | 'summarization'
                        | 'feature-extraction'
                        | 'text-generation'
                        | 'fill-mask'
                        | 'sentence-similarity'
                        | 'text-to-speech'
                        | 'text-to-audio'
                        | 'automatic-speech-recognition'
                        | 'audio-to-audio'
                        | 'audio-classification'
                        | 'audio-text-to-text'
                        | 'voice-activity-detection'
                        | 'depth-estimation'
                        | 'image-classification'
                        | 'object-detection'
                        | 'image-segmentation'
                        | 'text-to-image'
                        | 'image-to-text'
                        | 'image-to-image'
                        | 'image-to-video'
                        | 'unconditional-image-generation'
                        | 'video-classification'
                        | 'reinforcement-learning'
                        | 'robotics'
                        | 'tabular-classification'
                        | 'tabular-regression'
                        | 'tabular-to-text'
                        | 'table-to-text'
                        | 'multiple-choice'
                        | 'text-ranking'
                        | 'text-retrieval'
                        | 'time-series-forecasting'
                        | 'text-to-video'
                        | 'image-text-to-text'
                        | 'image-text-to-image'
                        | 'image-text-to-video'
                        | 'visual-question-answering'
                        | 'document-question-answering'
                        | 'zero-shot-image-classification'
                        | 'graph-ml'
                        | 'mask-generation'
                        | 'zero-shot-object-detection'
                        | 'text-to-3d'
                        | 'image-to-3d'
                        | 'image-feature-extraction'
                        | 'video-text-to-text'
                        | 'keypoint-detection'
                        | 'visual-document-retrieval'
                        | 'any-to-any'
                        | 'video-to-video'
                        | 'other'
                        | 'conversational'
                      adapterType?: 'lora' | undefined
                      adapterWeightsPath?: string | undefined
                      features?: { toolCalling?: boolean | undefined } | undefined
                      isCheapestPricingOutput: boolean
                      isFastestThroughput: boolean
                      isModelAuthor: boolean
                      tokensPerSecond?: number | undefined
                      pricingOutput?: number | undefined
                      freeUntil?: string | undefined
                    }[]
                    openRouterProviders?: string[] | undefined
                    isLikedByUser: boolean
                    lastModified: string
                    likes: number
                    pipeline_tag?: string | undefined
                    private: boolean
                    repoType: 'model'
                    gated: false | 'auto' | 'manual'
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    numParameters?: number | undefined
                    authorData?:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    widgetOutputUrls?: string[] | undefined
                    isPreRelease?: true | undefined
                    type: 'model'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    colorFrom: string
                    colorTo: string
                    createdAt: string
                    emoji: string
                    id: string
                    isLikedByUser: boolean
                    lastModified: string
                    likes: number
                    pinned: boolean
                    private: boolean
                    repoType: 'space'
                    title: string
                    sdk?: 'gradio' | 'docker' | 'static' | 'streamlit' | undefined
                    runtime: {
                      stage:
                        | 'NO_APP_FILE'
                        | 'CONFIG_ERROR'
                        | 'BUILDING'
                        | 'BUILD_ERROR'
                        | 'APP_STARTING'
                        | 'RUNNING'
                        | 'RUNNING_BUILDING'
                        | 'RUNNING_APP_STARTING'
                        | 'RUNTIME_ERROR'
                        | 'DELETING'
                        | 'STOPPED'
                        | 'PAUSED'
                        | 'SLEEPING'
                      hardware: {
                        current:
                          | 'cpu-basic'
                          | 'cpu-upgrade'
                          | 'cpu-performance'
                          | 'cpu-xl'
                          | 'sprx8'
                          | 'zero-a10g'
                          | 't4-small'
                          | 't4-medium'
                          | 'l4x1'
                          | 'l4x4'
                          | 'l40sx1'
                          | 'l40sx4'
                          | 'l40sx8'
                          | 'a10g-small'
                          | 'a10g-large'
                          | 'a10g-largex2'
                          | 'a10g-largex4'
                          | 'a100-large'
                          | 'a100x4'
                          | 'a100x8'
                          | 'h200'
                          | 'h200x2'
                          | 'h200x4'
                          | 'h200x8'
                          | 'rtx-pro-6000'
                          | 'rtx-pro-6000x2'
                          | 'rtx-pro-6000x4'
                          | 'rtx-pro-6000x8'
                          | 'inf2x6'
                          | ({ [x: string]: unknown } | null)
                        requested:
                          | 'cpu-basic'
                          | 'cpu-upgrade'
                          | 'cpu-performance'
                          | 'cpu-xl'
                          | 'sprx8'
                          | 'zero-a10g'
                          | 't4-small'
                          | 't4-medium'
                          | 'l4x1'
                          | 'l4x4'
                          | 'l40sx1'
                          | 'l40sx4'
                          | 'l40sx8'
                          | 'a10g-small'
                          | 'a10g-large'
                          | 'a10g-largex2'
                          | 'a10g-largex4'
                          | 'a100-large'
                          | 'a100x4'
                          | 'a100x8'
                          | 'h200'
                          | 'h200x2'
                          | 'h200x4'
                          | 'h200x8'
                          | 'rtx-pro-6000'
                          | 'rtx-pro-6000x2'
                          | 'rtx-pro-6000x4'
                          | 'rtx-pro-6000x8'
                          | 'inf2x6'
                          | ({ [x: string]: unknown } | null)
                      }
                      errorMessage?: string | undefined
                      gcTimeout?: (number | null) | undefined
                      replicas: {
                        current?: (number | null) | undefined
                        requested: number | 'auto'
                      }
                      devMode?: boolean | undefined
                      domains?:
                        | {
                            domain: string
                            isCustom?: (boolean | null) | undefined
                            stage:
                              | 'READY'
                              | 'PENDING'
                              | 'PENDING_CHALLENGE'
                              | 'EXPIRED_CHALLENGE'
                              | 'MISCONFIGURED'
                          }[]
                        | undefined
                      sha?: string | undefined
                      hotReloading?: { status: string; replicaStatuses: unknown[][] } | undefined
                    }
                    disabled: boolean
                    originRepo?:
                      | {
                          author:
                            | {
                                _id: string
                                avatarUrl: string
                                fullname: string
                                name: string
                                isHf: boolean
                                isHfAdmin: boolean
                                isMod: boolean
                                followerCount?: number | undefined
                                type: 'org'
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                isUserFollowing?: boolean | undefined
                              }
                            | {
                                _id: string
                                avatarUrl: string
                                fullname: string
                                name: string
                                isHf: boolean
                                isHfAdmin: boolean
                                isMod: boolean
                                followerCount?: number | undefined
                                type: 'user'
                                isPro: boolean
                                isUserFollowing?: boolean | undefined
                                primaryOrg?:
                                  | {
                                      avatarUrl: string
                                      fullname: string
                                      name: string
                                      type: 'org'
                                      isHf: boolean
                                      isFollowing?: boolean | undefined
                                      plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                      details?: string | undefined
                                      hasPrivateMembersList?: boolean | undefined
                                      userRole?:
                                        | 'admin'
                                        | 'write'
                                        | 'contributor'
                                        | 'read'
                                        | 'no_access'
                                        | undefined
                                      numUsers?: number | undefined
                                    }
                                  | undefined
                              }
                          name: string
                        }
                      | undefined
                    ai_short_description?: string | undefined
                    ai_category?: string | undefined
                    trendingScore?: number | undefined
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    tags: string[]
                    authorData?:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    shortDescription?: string | undefined
                    semanticRelevancyScore?: number | undefined
                    featured: boolean
                    visibility: 'public' | 'private' | 'protected'
                    type: 'space'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    id: string
                    title: string
                    upvotes: number
                    publishedAt: string
                    thumbnailUrl?: string | undefined
                    isUpvotedByUser?: boolean | undefined
                    type: 'paper'
                  }
                | {
                    _id: string
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    slug: string
                    lastUpdated: string
                    description?: string | undefined
                    owner:
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'org'
                          plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                          isUserFollowing?: boolean | undefined
                        }
                      | {
                          _id: string
                          avatarUrl: string
                          fullname: string
                          name: string
                          isHf: boolean
                          isHfAdmin: boolean
                          isMod: boolean
                          followerCount?: number | undefined
                          type: 'user'
                          isPro: boolean
                          isUserFollowing?: boolean | undefined
                          primaryOrg?:
                            | {
                                avatarUrl: string
                                fullname: string
                                name: string
                                type: 'org'
                                isHf: boolean
                                isFollowing?: boolean | undefined
                                plan?: 'team' | 'enterprise' | 'plus' | 'academia' | undefined
                                details?: string | undefined
                                hasPrivateMembersList?: boolean | undefined
                                userRole?:
                                  | 'admin'
                                  | 'write'
                                  | 'contributor'
                                  | 'read'
                                  | 'no_access'
                                  | undefined
                                numUsers?: number | undefined
                              }
                            | undefined
                        }
                    title: string
                    theme: 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'indigo'
                    upvotes: number
                    isUpvotedByUser: boolean
                    shareUrl: string
                    id: string
                    numberItems: number
                    type: 'collection'
                  }
                | {
                    _id: {}
                    note?: { html: string; text: string } | undefined
                    gallery?: string[] | undefined
                    position: number
                    author: string
                    id: string
                    private?: (boolean | null) | undefined
                    description?: (string | null) | undefined
                    createdAt: string
                    updatedAt: string
                    size: number
                    totalFiles: number
                    repoType: 'bucket' | 'container'
                    adminTags?: string[] | undefined
                    disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
                    cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
                    resourceGroup?:
                      | { id: string; name: string; numUsers?: number | undefined }
                      | undefined
                    type: 'bucket'
                  }
              )[]
            }[]
          | {
              title: string
              private: boolean
              upvotes: number
              resourceGroup?:
                | { id: string; name: string; numUsers?: number | undefined }
                | undefined
              name: string
            }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/collections/:namespace/:slug-:id/resource-group': {
      $get: {
        input: { param: { namespace: string; slug: string; id: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { namespace: string; slug: string; id: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: { id: string; slug: string; title: string; private: boolean; addedBy: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/collections/:namespace/:slug/resource-group': {
      $get: {
        input: { param: { namespace: string; slug: string } }
        output: { id: string; name: string; numUsers?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { namespace: string; slug: string } } & {
          json: { resourceGroupId: string | ({ [x: string]: unknown } | null) }
        }
        output: { id: string; slug: string; title: string; private: boolean; addedBy: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace/:repo': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                private?: (boolean | null) | undefined
                visibility?: 'private' | 'public' | undefined
                resourceGroupId?: string | undefined
                cdn?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
                region?: 'us' | 'eu' | undefined
                description?: string | undefined
              }
            }
            output: { url: string; name: string; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                private?: (boolean | null) | undefined
                visibility?: 'private' | 'public' | undefined
                resourceGroupId?: string | undefined
                cdn?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
                region?: 'us' | 'eu' | undefined
                description?: string | undefined
              }
            }
            output: { error: string; url: string; id: string }
            outputFormat: 'json'
            status: 409
          }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          _id: string
          author: string
          id: string
          private?: (boolean | null) | undefined
          description?: (string | null) | undefined
          createdAt: string
          updatedAt: string
          size: number
          totalFiles: number
          repoType: 'bucket' | 'container'
          adminTags?: string[] | undefined
          disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
          cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                private?: (boolean | null) | undefined
                visibility?: 'private' | 'public' | undefined
                resourceGroupId?: string | undefined
                cdn?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
                region?: 'us' | 'eu' | undefined
                description?: string | undefined
              }
            }
            output: { url: string; name: string; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } } & {
              json: {
                private?: (boolean | null) | undefined
                visibility?: 'private' | 'public' | undefined
                resourceGroupId?: string | undefined
                cdn?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
                region?: 'us' | 'eu' | undefined
                description?: string | undefined
              }
            }
            output: { error: string; url: string; id: string }
            outputFormat: 'json'
            status: 409
          }
      $get: {
        input: { param: { namespace: string; repo: string } }
        output: {
          _id: string
          author: string
          id: string
          private?: (boolean | null) | undefined
          description?: (string | null) | undefined
          createdAt: string
          updatedAt: string
          size: number
          totalFiles: number
          repoType: 'bucket' | 'container'
          adminTags?: string[] | undefined
          disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
          cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace/:repo/settings': {
      $put: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            private?: boolean | string | undefined
            cdnRegions?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
          }
        }
        output: {
          private?: boolean | undefined
          cdnRegions?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo/settings': {
      $put: {
        input: { param: { namespace: string; repo: string } } & {
          json: {
            private?: boolean | string | undefined
            cdnRegions?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
          }
        }
        output: {
          private?: boolean | undefined
          cdnRegions?: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace': {
      $get: {
        input: { param: { namespace: string } } & { query: { search?: string | undefined } }
        output: {
          _id: string
          author: string
          id: string
          private?: (boolean | null) | undefined
          description?: (string | null) | undefined
          createdAt: string
          updatedAt: string
          size: number
          totalFiles: number
          repoType: 'bucket' | 'container'
          adminTags?: string[] | undefined
          disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
          cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace': {
      $get: {
        input: { param: { namespace: string } } & { query: { search?: string | undefined } }
        output: {
          _id: string
          author: string
          id: string
          private?: (boolean | null) | undefined
          description?: (string | null) | undefined
          createdAt: string
          updatedAt: string
          size: number
          totalFiles: number
          repoType: 'bucket' | 'container'
          adminTags?: string[] | undefined
          disabled?: { reason: string; hideReadme?: boolean | undefined } | undefined
          cdnRegions: { provider: 'gcp' | 'aws'; region: 'us' | 'eu' }[]
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/buckets/:namespace/:repo/resolve/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
              contentType?: string | undefined
              uploadedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/containers/:namespace/:repo/resolve/:path': {
      $get:
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: {
              hash: string
              refreshUrl: string
              reconstructionUrl: string
              etag: string
              size: number
              contentType?: string | undefined
              uploadedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 302
          }
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; repo: string; path: string } } & {
              query: { noContentDisposition?: string | undefined; download?: string | undefined }
            } & { header: { Accept?: 'application/vnd.xet-fileinfo+json' | undefined } }
            output: { error: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/buckets/:namespace/:repo/batch': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { path: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { path: string; error: string }[]
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/containers/:namespace/:repo/batch': {
      $post:
        | {
            input: { param: { namespace: string; repo: string } }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { path: string; error: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; repo: string } }
            output: {
              success: boolean
              processed: number
              succeeded: number
              failed: { path: string; error: string }[]
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/buckets/:namespace/:repo/tree/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; path: string } } & {
          query: {
            limit?: number | undefined
            cursor?: string | undefined
            startAfter?: string | undefined
            recursive?: string | undefined
            sort?: 'path' | 'uploadedAt' | undefined
            direction?: 'asc' | 'desc' | undefined
          }
        }
        output: {
          type: 'file' | 'directory'
          path: string
          size?: number | undefined
          xetHash?: string | undefined
          mtime?: string | undefined
          mtimeNanos?: number | undefined
          uploadedAt: string
          contentType?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo/tree/:path': {
      $get: {
        input: { param: { namespace: string; repo: string; path: string } } & {
          query: {
            limit?: number | undefined
            cursor?: string | undefined
            startAfter?: string | undefined
            recursive?: string | undefined
            sort?: 'path' | 'uploadedAt' | undefined
            direction?: 'asc' | 'desc' | undefined
          }
        }
        output: {
          type: 'file' | 'directory'
          path: string
          size?: number | undefined
          xetHash?: string | undefined
          mtime?: string | undefined
          mtimeNanos?: number | undefined
          uploadedAt: string
          contentType?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/buckets/:namespace/:repo/events': {
      $get: {
        input: { param: { namespace: string; repo: string } } & {
          query: { cursor?: string | undefined; since?: string | undefined }
        }
        output: { error: string }
        outputFormat: 'json'
        status: 503
      }
    }
  } & {
    '/api/buckets/:namespace/:repo/paths-info': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { paths: string[] | string }
        }
        output: {
          type: 'file' | 'directory'
          path: string
          size?: number | undefined
          xetHash?: string | undefined
          mtime?: string | undefined
          mtimeNanos?: number | undefined
          uploadedAt: string
          contentType?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/containers/:namespace/:repo/paths-info': {
      $post: {
        input: { param: { namespace: string; repo: string } } & {
          json: { paths: string[] | string }
        }
        output: {
          type: 'file' | 'directory'
          path: string
          size?: number | undefined
          xetHash?: string | undefined
          mtime?: string | undefined
          mtimeNanos?: number | undefined
          uploadedAt: string
          contentType?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/hardware': {
      $get: {
        input: {}
        output: {
          name: string
          prettyName: string
          cpu: string
          ram: string
          ephemeralStorage: string
          accelerator:
            | {
                type: 'gpu' | 'neuron'
                model: string
                quantity: string
                vram: string
                manufacturer: 'Nvidia' | 'AWS'
              }
            | ({ [x: string]: unknown } | null)
          unitCostMicroUSD: number
          unitCostUSD: number
          unitLabel: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace': {
      $get: {
        input: { param: { namespace: string } } & {
          query: {
            label?: string | string[] | undefined
            stage?:
              | 'COMPLETED'
              | 'CANCELED'
              | 'ERROR'
              | 'DELETED'
              | 'RUNNING'
              | 'SCHEDULING'
              | ('COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING')[]
              | undefined
            cursor?: string | undefined
          }
        }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { namespace: string } } & {
          json:
            | {
                spaceId: {}
                dockerImage?: string | undefined
                arguments?: string[] | undefined
                command?: string[] | undefined
                environment?: { [x: string]: string } | undefined
                secrets?: { [x: string]: string } | undefined
                flavor:
                  | 'cpu-basic'
                  | 'cpu-upgrade'
                  | 'cpu-performance'
                  | 'cpu-xl'
                  | 'sprx8'
                  | 'zero-a10g'
                  | 't4-small'
                  | 't4-medium'
                  | 'l4x1'
                  | 'l4x4'
                  | 'l40sx1'
                  | 'l40sx4'
                  | 'l40sx8'
                  | 'a10g-small'
                  | 'a10g-large'
                  | 'a10g-largex2'
                  | 'a10g-largex4'
                  | 'a100-large'
                  | 'a100x4'
                  | 'a100x8'
                  | 'h200'
                  | 'h200x2'
                  | 'h200x4'
                  | 'h200x8'
                  | 'rtx-pro-6000'
                  | 'rtx-pro-6000x2'
                  | 'rtx-pro-6000x4'
                  | 'rtx-pro-6000x8'
                  | 'inf2x6'
                arch?: 'amd64' | 'arm64' | undefined
                timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                attempts?: number | undefined
                labels?: { [x: string]: string } | undefined
                volumes?:
                  | {
                      type: 'bucket' | 'model' | 'dataset' | 'space'
                      source: string
                      mountPath: string
                      revision?: string | undefined
                      readOnly?: boolean | undefined
                      path?: string | undefined
                    }[]
                  | undefined
                expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                ssh?: { enabled?: boolean | undefined } | undefined
                network?: { group: string; aliases?: string[] | undefined } | undefined
                resourceGroupId?: string | undefined
              }
            | {
                spaceId?: string | undefined
                dockerImage: {}
                arguments?: string[] | undefined
                command?: string[] | undefined
                environment?: { [x: string]: string } | undefined
                secrets?: { [x: string]: string } | undefined
                flavor:
                  | 'cpu-basic'
                  | 'cpu-upgrade'
                  | 'cpu-performance'
                  | 'cpu-xl'
                  | 'sprx8'
                  | 'zero-a10g'
                  | 't4-small'
                  | 't4-medium'
                  | 'l4x1'
                  | 'l4x4'
                  | 'l40sx1'
                  | 'l40sx4'
                  | 'l40sx8'
                  | 'a10g-small'
                  | 'a10g-large'
                  | 'a10g-largex2'
                  | 'a10g-largex4'
                  | 'a100-large'
                  | 'a100x4'
                  | 'a100x8'
                  | 'h200'
                  | 'h200x2'
                  | 'h200x4'
                  | 'h200x8'
                  | 'rtx-pro-6000'
                  | 'rtx-pro-6000x2'
                  | 'rtx-pro-6000x4'
                  | 'rtx-pro-6000x8'
                  | 'inf2x6'
                arch?: 'amd64' | 'arm64' | undefined
                timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                attempts?: number | undefined
                labels?: { [x: string]: string } | undefined
                volumes?:
                  | {
                      type: 'bucket' | 'model' | 'dataset' | 'space'
                      source: string
                      mountPath: string
                      revision?: string | undefined
                      readOnly?: boolean | undefined
                      path?: string | undefined
                    }[]
                  | undefined
                expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                ssh?: { enabled?: boolean | undefined } | undefined
                network?: { group: string; aliases?: string[] | undefined } | undefined
                resourceGroupId?: string | undefined
              }
        }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/count': {
      $get: {
        input: { param: { namespace: string } } & {
          query: {
            stage?:
              | 'COMPLETED'
              | 'CANCELED'
              | 'ERROR'
              | 'DELETED'
              | 'RUNNING'
              | 'SCHEDULING'
              | ('COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING')[]
              | undefined
          }
        }
        output: { count: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/:jobId': {
      $get: {
        input: { param: { namespace: string; jobId: string } }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/:jobId/cancel': {
      $post: {
        input: { param: { namespace: string; jobId: string } }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/:jobId/duplicate': {
      $post: {
        input: { param: { namespace: string; jobId: string } }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/:jobId/labels': {
      $put: {
        input: { param: { namespace: string; jobId: string } } & {
          json: { labels: { [x: string]: string } }
        }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:namespace/:jobId/expose': {
      $put: {
        input: { param: { namespace: string; jobId: string } } & {
          json: { ports: number[]; portsPublic?: number[] | undefined }
        }
        output: {
          id: string
          createdAt: string
          spaceId?: string | undefined
          dockerImage?: string | undefined
          timeout?: number | undefined
          environment: { [x: string]: string }
          command?: string[] | undefined
          arguments?: string[] | undefined
          arch?: 'amd64' | 'arm64' | undefined
          flavor:
            | 'cpu-basic'
            | 'cpu-upgrade'
            | 'cpu-performance'
            | 'cpu-xl'
            | 'sprx8'
            | 'zero-a10g'
            | 't4-small'
            | 't4-medium'
            | 'l4x1'
            | 'l4x4'
            | 'l40sx1'
            | 'l40sx4'
            | 'l40sx8'
            | 'a10g-small'
            | 'a10g-large'
            | 'a10g-largex2'
            | 'a10g-largex4'
            | 'a100-large'
            | 'a100x4'
            | 'a100x8'
            | 'h200'
            | 'h200x2'
            | 'h200x4'
            | 'h200x8'
            | 'rtx-pro-6000'
            | 'rtx-pro-6000x2'
            | 'rtx-pro-6000x4'
            | 'rtx-pro-6000x8'
            | 'inf2x6'
          createdBy: { id: string; name: string }
          resourceGroupId?: string | undefined
          retry?: number | undefined
          startedAt?: string | undefined
          finishedAt?: string | undefined
          durations?:
            | {
                schedulingSecs?: number | undefined
                runningSecs?: number | undefined
                totalSecs?: number | undefined
              }
            | undefined
          volumes?:
            | {
                type: string
                source: string
                mountPath: string
                revision?: string | undefined
                readOnly?: boolean | undefined
                path?: string | undefined
              }[]
            | undefined
          expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
          network?: { group: string; aliases: string[] } | undefined
          type: 'job'
          owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
          resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
          initiator?:
            | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
            | { type: 'scheduled-job'; id: string }
            | { type: 'duplicated-job'; id: string }
            | { type: 'webhook'; id: string }
            | undefined
          status: {
            stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
            message: string | null
            cancelReason?:
              | 'NO_CREDITS'
              | 'NO_SUBSCRIPTION'
              | 'RESOURCE_GROUP_LIMIT'
              | 'SPEND_LIMIT'
              | string
              | undefined
            failureCount?: number | undefined
            exposeUrls?: string[] | undefined
            sshUrl?: string | undefined
          }
          secrets?: string[] | undefined
          labels?: { [x: string]: string } | undefined
          hfToken?:
            | {
                ownerName: string
                orgName?: string | undefined
                tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                tokenId?: string | undefined
                settingsUrl?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/scheduled-jobs/:namespace': {
      $post: {
        input: { param: { namespace: string } } & {
          json: {
            jobSpec:
              | {
                  spaceId: {}
                  dockerImage?: string | undefined
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  environment?: { [x: string]: string } | undefined
                  secrets?: { [x: string]: string } | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  arch?: 'amd64' | 'arm64' | undefined
                  timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                  attempts?: number | undefined
                  labels?: { [x: string]: string } | undefined
                  volumes?:
                    | {
                        type: 'bucket' | 'model' | 'dataset' | 'space'
                        source: string
                        mountPath: string
                        revision?: string | undefined
                        readOnly?: boolean | undefined
                        path?: string | undefined
                      }[]
                    | undefined
                  expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                  ssh?: { enabled?: boolean | undefined } | undefined
                  network?: { group: string; aliases?: string[] | undefined } | undefined
                  resourceGroupId?: string | undefined
                }
              | {
                  spaceId?: string | undefined
                  dockerImage: {}
                  arguments?: string[] | undefined
                  command?: string[] | undefined
                  environment?: { [x: string]: string } | undefined
                  secrets?: { [x: string]: string } | undefined
                  flavor:
                    | 'cpu-basic'
                    | 'cpu-upgrade'
                    | 'cpu-performance'
                    | 'cpu-xl'
                    | 'sprx8'
                    | 'zero-a10g'
                    | 't4-small'
                    | 't4-medium'
                    | 'l4x1'
                    | 'l4x4'
                    | 'l40sx1'
                    | 'l40sx4'
                    | 'l40sx8'
                    | 'a10g-small'
                    | 'a10g-large'
                    | 'a10g-largex2'
                    | 'a10g-largex4'
                    | 'a100-large'
                    | 'a100x4'
                    | 'a100x8'
                    | 'h200'
                    | 'h200x2'
                    | 'h200x4'
                    | 'h200x8'
                    | 'rtx-pro-6000'
                    | 'rtx-pro-6000x2'
                    | 'rtx-pro-6000x4'
                    | 'rtx-pro-6000x8'
                    | 'inf2x6'
                  arch?: 'amd64' | 'arm64' | undefined
                  timeoutSeconds?: number | ({ [x: string]: unknown } | null) | undefined
                  attempts?: number | undefined
                  labels?: { [x: string]: string } | undefined
                  volumes?:
                    | {
                        type: 'bucket' | 'model' | 'dataset' | 'space'
                        source: string
                        mountPath: string
                        revision?: string | undefined
                        readOnly?: boolean | undefined
                        path?: string | undefined
                      }[]
                    | undefined
                  expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
                  ssh?: { enabled?: boolean | undefined } | undefined
                  network?: { group: string; aliases?: string[] | undefined } | undefined
                  resourceGroupId?: string | undefined
                }
            schedule: string
            suspend?: boolean | undefined
            concurrency?: boolean | undefined
          }
        }
        output: {
          id: string
          createdAt: string
          schedule: string
          suspend: boolean
          suspendReason?: string | undefined
          concurrency: boolean
          status: {
            lastJob: { id: string; at: string } | ({ [x: string]: unknown } | null)
            nextJobRunAt: string
          }
          type: 'scheduled-job'
          owner: { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
          initiator?:
            | { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
            | undefined
          jobSpec: {
            spaceId?: string | undefined
            dockerImage?: string | undefined
            timeout?: number | undefined
            environment: { [x: string]: string }
            command?: string[] | undefined
            arguments?: string[] | undefined
            arch?: 'amd64' | 'arm64' | undefined
            flavor:
              | 'cpu-basic'
              | 'cpu-upgrade'
              | 'cpu-performance'
              | 'cpu-xl'
              | 'sprx8'
              | 'zero-a10g'
              | 't4-small'
              | 't4-medium'
              | 'l4x1'
              | 'l4x4'
              | 'l40sx1'
              | 'l40sx4'
              | 'l40sx8'
              | 'a10g-small'
              | 'a10g-large'
              | 'a10g-largex2'
              | 'a10g-largex4'
              | 'a100-large'
              | 'a100x4'
              | 'a100x8'
              | 'h200'
              | 'h200x2'
              | 'h200x4'
              | 'h200x8'
              | 'rtx-pro-6000'
              | 'rtx-pro-6000x2'
              | 'rtx-pro-6000x4'
              | 'rtx-pro-6000x8'
              | 'inf2x6'
            resourceGroupId?: string | undefined
            retry?: number | undefined
            startedAt?: string | undefined
            finishedAt?: string | undefined
            durations?:
              | {
                  schedulingSecs?: number | undefined
                  runningSecs?: number | undefined
                  totalSecs?: number | undefined
                }
              | undefined
            volumes?:
              | {
                  type: string
                  source: string
                  mountPath: string
                  revision?: string | undefined
                  readOnly?: boolean | undefined
                  path?: string | undefined
                }[]
              | undefined
            expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
            network?: { group: string; aliases: string[] } | undefined
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            secrets?: string[] | undefined
            labels?: { [x: string]: string } | undefined
            hfToken?:
              | {
                  ownerName: string
                  orgName?: string | undefined
                  tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                  tokenId?: string | undefined
                  settingsUrl?: string | undefined
                }
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { namespace: string } } & { query: { label?: string | undefined } }
        output: {
          id: string
          createdAt: string
          schedule: string
          suspend: boolean
          suspendReason?: string | undefined
          concurrency: boolean
          status: {
            lastJob: { id: string; at: string } | ({ [x: string]: unknown } | null)
            nextJobRunAt: string
          }
          type: 'scheduled-job'
          owner: { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
          initiator?:
            | { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
            | undefined
          jobSpec: {
            spaceId?: string | undefined
            dockerImage?: string | undefined
            timeout?: number | undefined
            environment: { [x: string]: string }
            command?: string[] | undefined
            arguments?: string[] | undefined
            arch?: 'amd64' | 'arm64' | undefined
            flavor:
              | 'cpu-basic'
              | 'cpu-upgrade'
              | 'cpu-performance'
              | 'cpu-xl'
              | 'sprx8'
              | 'zero-a10g'
              | 't4-small'
              | 't4-medium'
              | 'l4x1'
              | 'l4x4'
              | 'l40sx1'
              | 'l40sx4'
              | 'l40sx8'
              | 'a10g-small'
              | 'a10g-large'
              | 'a10g-largex2'
              | 'a10g-largex4'
              | 'a100-large'
              | 'a100x4'
              | 'a100x8'
              | 'h200'
              | 'h200x2'
              | 'h200x4'
              | 'h200x8'
              | 'rtx-pro-6000'
              | 'rtx-pro-6000x2'
              | 'rtx-pro-6000x4'
              | 'rtx-pro-6000x8'
              | 'inf2x6'
            resourceGroupId?: string | undefined
            retry?: number | undefined
            startedAt?: string | undefined
            finishedAt?: string | undefined
            durations?:
              | {
                  schedulingSecs?: number | undefined
                  runningSecs?: number | undefined
                  totalSecs?: number | undefined
                }
              | undefined
            volumes?:
              | {
                  type: string
                  source: string
                  mountPath: string
                  revision?: string | undefined
                  readOnly?: boolean | undefined
                  path?: string | undefined
                }[]
              | undefined
            expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
            network?: { group: string; aliases: string[] } | undefined
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            secrets?: string[] | undefined
            labels?: { [x: string]: string } | undefined
            hfToken?:
              | {
                  ownerName: string
                  orgName?: string | undefined
                  tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                  tokenId?: string | undefined
                  settingsUrl?: string | undefined
                }
              | undefined
          }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/scheduled-jobs/:namespace/:jobId': {
      $get: {
        input: { param: { namespace: string; jobId: string } }
        output: {
          id: string
          createdAt: string
          schedule: string
          suspend: boolean
          suspendReason?: string | undefined
          concurrency: boolean
          status: {
            lastJob: { id: string; at: string } | ({ [x: string]: unknown } | null)
            nextJobRunAt: string
          }
          type: 'scheduled-job'
          owner: { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
          initiator?:
            | { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
            | undefined
          jobSpec: {
            spaceId?: string | undefined
            dockerImage?: string | undefined
            timeout?: number | undefined
            environment: { [x: string]: string }
            command?: string[] | undefined
            arguments?: string[] | undefined
            arch?: 'amd64' | 'arm64' | undefined
            flavor:
              | 'cpu-basic'
              | 'cpu-upgrade'
              | 'cpu-performance'
              | 'cpu-xl'
              | 'sprx8'
              | 'zero-a10g'
              | 't4-small'
              | 't4-medium'
              | 'l4x1'
              | 'l4x4'
              | 'l40sx1'
              | 'l40sx4'
              | 'l40sx8'
              | 'a10g-small'
              | 'a10g-large'
              | 'a10g-largex2'
              | 'a10g-largex4'
              | 'a100-large'
              | 'a100x4'
              | 'a100x8'
              | 'h200'
              | 'h200x2'
              | 'h200x4'
              | 'h200x8'
              | 'rtx-pro-6000'
              | 'rtx-pro-6000x2'
              | 'rtx-pro-6000x4'
              | 'rtx-pro-6000x8'
              | 'inf2x6'
            resourceGroupId?: string | undefined
            retry?: number | undefined
            startedAt?: string | undefined
            finishedAt?: string | undefined
            durations?:
              | {
                  schedulingSecs?: number | undefined
                  runningSecs?: number | undefined
                  totalSecs?: number | undefined
                }
              | undefined
            volumes?:
              | {
                  type: string
                  source: string
                  mountPath: string
                  revision?: string | undefined
                  readOnly?: boolean | undefined
                  path?: string | undefined
                }[]
              | undefined
            expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
            network?: { group: string; aliases: string[] } | undefined
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            secrets?: string[] | undefined
            labels?: { [x: string]: string } | undefined
            hfToken?:
              | {
                  ownerName: string
                  orgName?: string | undefined
                  tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                  tokenId?: string | undefined
                  settingsUrl?: string | undefined
                }
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/scheduled-jobs/:namespace/:jobId/run': {
      $post:
        | {
            input: { param: { namespace: string; jobId: string } }
            output: {
              id: string
              createdAt: string
              spaceId?: string | undefined
              dockerImage?: string | undefined
              timeout?: number | undefined
              environment: { [x: string]: string }
              command?: string[] | undefined
              arguments?: string[] | undefined
              arch?: 'amd64' | 'arm64' | undefined
              flavor:
                | 'cpu-basic'
                | 'cpu-upgrade'
                | 'cpu-performance'
                | 'cpu-xl'
                | 'sprx8'
                | 'zero-a10g'
                | 't4-small'
                | 't4-medium'
                | 'l4x1'
                | 'l4x4'
                | 'l40sx1'
                | 'l40sx4'
                | 'l40sx8'
                | 'a10g-small'
                | 'a10g-large'
                | 'a10g-largex2'
                | 'a10g-largex4'
                | 'a100-large'
                | 'a100x4'
                | 'a100x8'
                | 'h200'
                | 'h200x2'
                | 'h200x4'
                | 'h200x8'
                | 'rtx-pro-6000'
                | 'rtx-pro-6000x2'
                | 'rtx-pro-6000x4'
                | 'rtx-pro-6000x8'
                | 'inf2x6'
              createdBy: { id: string; name: string }
              resourceGroupId?: string | undefined
              retry?: number | undefined
              startedAt?: string | undefined
              finishedAt?: string | undefined
              durations?:
                | {
                    schedulingSecs?: number | undefined
                    runningSecs?: number | undefined
                    totalSecs?: number | undefined
                  }
                | undefined
              volumes?:
                | {
                    type: string
                    source: string
                    mountPath: string
                    revision?: string | undefined
                    readOnly?: boolean | undefined
                    path?: string | undefined
                  }[]
                | undefined
              expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
              network?: { group: string; aliases: string[] } | undefined
              type: 'job'
              owner: { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
              resourceGroup?:
                | { id: string; name: string; numUsers?: number | undefined }
                | undefined
              initiator?:
                | { id: string; name: string; type: 'user' | 'org'; avatarUrl: string }
                | { type: 'scheduled-job'; id: string }
                | { type: 'duplicated-job'; id: string }
                | { type: 'webhook'; id: string }
                | undefined
              status: {
                stage: 'COMPLETED' | 'CANCELED' | 'ERROR' | 'DELETED' | 'RUNNING' | 'SCHEDULING'
                message: string | null
                cancelReason?:
                  | 'NO_CREDITS'
                  | 'NO_SUBSCRIPTION'
                  | 'RESOURCE_GROUP_LIMIT'
                  | 'SPEND_LIMIT'
                  | string
                  | undefined
                failureCount?: number | undefined
                exposeUrls?: string[] | undefined
                sshUrl?: string | undefined
              }
              secrets?: string[] | undefined
              labels?: { [x: string]: string } | undefined
              hfToken?:
                | {
                    ownerName: string
                    orgName?: string | undefined
                    tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                    tokenId?: string | undefined
                    settingsUrl?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } }
            output: {
              error: 'Another job is already running at the same time, set `concurrency` to allow multiple instances of scheduled jobs to run concurrently'
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/scheduled-jobs/:namespace/:jobId/schedule': {
      $post: {
        input: { param: { namespace: string; jobId: string } } & { json: { schedule: string } }
        output: {
          id: string
          createdAt: string
          schedule: string
          suspend: boolean
          suspendReason?: string | undefined
          concurrency: boolean
          status: {
            lastJob: { id: string; at: string } | ({ [x: string]: unknown } | null)
            nextJobRunAt: string
          }
          type: 'scheduled-job'
          owner: { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
          initiator?:
            | { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
            | undefined
          jobSpec: {
            spaceId?: string | undefined
            dockerImage?: string | undefined
            timeout?: number | undefined
            environment: { [x: string]: string }
            command?: string[] | undefined
            arguments?: string[] | undefined
            arch?: 'amd64' | 'arm64' | undefined
            flavor:
              | 'cpu-basic'
              | 'cpu-upgrade'
              | 'cpu-performance'
              | 'cpu-xl'
              | 'sprx8'
              | 'zero-a10g'
              | 't4-small'
              | 't4-medium'
              | 'l4x1'
              | 'l4x4'
              | 'l40sx1'
              | 'l40sx4'
              | 'l40sx8'
              | 'a10g-small'
              | 'a10g-large'
              | 'a10g-largex2'
              | 'a10g-largex4'
              | 'a100-large'
              | 'a100x4'
              | 'a100x8'
              | 'h200'
              | 'h200x2'
              | 'h200x4'
              | 'h200x8'
              | 'rtx-pro-6000'
              | 'rtx-pro-6000x2'
              | 'rtx-pro-6000x4'
              | 'rtx-pro-6000x8'
              | 'inf2x6'
            resourceGroupId?: string | undefined
            retry?: number | undefined
            startedAt?: string | undefined
            finishedAt?: string | undefined
            durations?:
              | {
                  schedulingSecs?: number | undefined
                  runningSecs?: number | undefined
                  totalSecs?: number | undefined
                }
              | undefined
            volumes?:
              | {
                  type: string
                  source: string
                  mountPath: string
                  revision?: string | undefined
                  readOnly?: boolean | undefined
                  path?: string | undefined
                }[]
              | undefined
            expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
            network?: { group: string; aliases: string[] } | undefined
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            secrets?: string[] | undefined
            labels?: { [x: string]: string } | undefined
            hfToken?:
              | {
                  ownerName: string
                  orgName?: string | undefined
                  tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                  tokenId?: string | undefined
                  settingsUrl?: string | undefined
                }
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/scheduled-jobs/:namespace/:jobId/labels': {
      $put: {
        input: { param: { namespace: string; jobId: string } } & {
          json: { labels: { [x: string]: string } }
        }
        output: {
          id: string
          createdAt: string
          schedule: string
          suspend: boolean
          suspendReason?: string | undefined
          concurrency: boolean
          status: {
            lastJob: { id: string; at: string } | ({ [x: string]: unknown } | null)
            nextJobRunAt: string
          }
          type: 'scheduled-job'
          owner: { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
          initiator?:
            | { id: string; name: string; avatarUrl: string; type: 'user' | 'org' }
            | undefined
          jobSpec: {
            spaceId?: string | undefined
            dockerImage?: string | undefined
            timeout?: number | undefined
            environment: { [x: string]: string }
            command?: string[] | undefined
            arguments?: string[] | undefined
            arch?: 'amd64' | 'arm64' | undefined
            flavor:
              | 'cpu-basic'
              | 'cpu-upgrade'
              | 'cpu-performance'
              | 'cpu-xl'
              | 'sprx8'
              | 'zero-a10g'
              | 't4-small'
              | 't4-medium'
              | 'l4x1'
              | 'l4x4'
              | 'l40sx1'
              | 'l40sx4'
              | 'l40sx8'
              | 'a10g-small'
              | 'a10g-large'
              | 'a10g-largex2'
              | 'a10g-largex4'
              | 'a100-large'
              | 'a100x4'
              | 'a100x8'
              | 'h200'
              | 'h200x2'
              | 'h200x4'
              | 'h200x8'
              | 'rtx-pro-6000'
              | 'rtx-pro-6000x2'
              | 'rtx-pro-6000x4'
              | 'rtx-pro-6000x8'
              | 'inf2x6'
            resourceGroupId?: string | undefined
            retry?: number | undefined
            startedAt?: string | undefined
            finishedAt?: string | undefined
            durations?:
              | {
                  schedulingSecs?: number | undefined
                  runningSecs?: number | undefined
                  totalSecs?: number | undefined
                }
              | undefined
            volumes?:
              | {
                  type: string
                  source: string
                  mountPath: string
                  revision?: string | undefined
                  readOnly?: boolean | undefined
                  path?: string | undefined
                }[]
              | undefined
            expose?: { ports: number[]; portsPublic?: number[] | undefined } | undefined
            network?: { group: string; aliases: string[] } | undefined
            resourceGroup?: { id: string; name: string; numUsers?: number | undefined } | undefined
            secrets?: string[] | undefined
            labels?: { [x: string]: string } | undefined
            hfToken?:
              | {
                  ownerName: string
                  orgName?: string | undefined
                  tokenRole?: 'read' | 'write' | 'fineGrained' | undefined
                  tokenId?: string | undefined
                  settingsUrl?: string | undefined
                }
              | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
