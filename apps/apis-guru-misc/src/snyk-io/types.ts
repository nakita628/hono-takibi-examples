type IgnorePath = { [x: string]: unknown }
type IssueId = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/group/:groupId/audit': {
      $post: {
        input: { param: { groupId: string } } & {
          query: {
            from?: string | undefined
            to?: string | undefined
            page?: number | undefined
            sortOrder?: string | undefined
          }
        } & {
          json: {
            filters?:
              | {
                  email?: string | undefined
                  event?:
                    | 'api.access'
                    | 'group.cloud_config.settings.edit'
                    | 'group.create'
                    | 'group.delete'
                    | 'group.edit'
                    | 'group.feature_flags.edit'
                    | 'group.notification_settings.edit'
                    | 'group.org.add'
                    | 'group.org.remove'
                    | 'group.policy.create'
                    | 'group.policy.delete'
                    | 'group.policy.edit'
                    | 'group.request_access_settings.edit'
                    | 'group.role.create'
                    | 'group.role.edit'
                    | 'group.service_account.create'
                    | 'group.service_account.delete'
                    | 'group.service_account.edit'
                    | 'group.settings.edit'
                    | 'group.settings.feature_flag.edit'
                    | 'group.sso.auth0_connection.create'
                    | 'group.sso.auth0_connection.edit'
                    | 'group.sso.create'
                    | 'group.sso.edit'
                    | 'group.tag.create'
                    | 'group.tag.delete'
                    | 'group.user.add'
                    | 'group.user.provision.accept'
                    | 'group.user.provision.create'
                    | 'group.user.provision.delete'
                    | 'group.user.remove'
                    | 'group.user.role.edit'
                    | undefined
                  excludeEvent?:
                    | 'api.access'
                    | 'group.cloud_config.settings.edit'
                    | 'group.create'
                    | 'group.delete'
                    | 'group.edit'
                    | 'group.feature_flags.edit'
                    | 'group.notification_settings.edit'
                    | 'group.org.add'
                    | 'group.org.remove'
                    | 'group.policy.create'
                    | 'group.policy.delete'
                    | 'group.policy.edit'
                    | 'group.request_access_settings.edit'
                    | 'group.role.create'
                    | 'group.role.edit'
                    | 'group.service_account.create'
                    | 'group.service_account.delete'
                    | 'group.service_account.edit'
                    | 'group.settings.edit'
                    | 'group.settings.feature_flag.edit'
                    | 'group.sso.auth0_connection.create'
                    | 'group.sso.auth0_connection.edit'
                    | 'group.sso.create'
                    | 'group.sso.edit'
                    | 'group.tag.create'
                    | 'group.tag.delete'
                    | 'group.user.add'
                    | 'group.user.provision.accept'
                    | 'group.user.provision.create'
                    | 'group.user.provision.delete'
                    | 'group.user.remove'
                    | 'group.user.role.edit'
                    | undefined
                  projectId?: string | undefined
                  userId?: string | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/group/:groupId/members': {
      $get: {
        input: { param: { groupId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/group/:groupId/org/:orgId/members': {
      $post: {
        input: { param: { groupId: string; orgId: string } } & {
          json: { role?: string | undefined; userId?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/group/:groupId/orgs': {
      $get: {
        input: { param: { groupId: string } } & {
          query: {
            perPage?: number | undefined
            page?: number | undefined
            name?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/group/:groupId/roles': {
      $get: { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/group/:groupId/settings': {
      $get: {
        input: { param: { groupId: string } }
        output: {
          requestAccess?: { enabled: boolean } | undefined
          sessionLength?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { groupId: string } }
        output: {
          requestAccess?: { enabled: boolean } | undefined
          sessionLength?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/group/:groupId/tags': {
      $get: {
        input: { param: { groupId: string } } & {
          query: { perPage?: number | undefined; page?: number | undefined }
        }
        output: { tags?: { [x: string]: unknown }[] | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/group/:groupId/tags/delete': {
      $post: {
        input: { param: { groupId: string } } & {
          json: {
            force?: boolean | undefined
            key?: string | undefined
            value?: string | undefined
          }
        }
        output: {
          force?: boolean | undefined
          key?: string | undefined
          value?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/monitor/dep-graph': {
      $post: {
        input: { query: { org?: string | undefined } } & {
          json: {
            depGraph: {
              graph: { nodes: { [x: string]: unknown }[]; rootNodeId: string }
              pkgManager: { name: string; repositories?: { [x: string]: unknown }[] | undefined }
              pkgs: { [x: string]: unknown }[]
              schemaVersion: string
            }
            meta?: { targetFramework?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org': {
      $post:
        | {
            input: {
              json: { groupId?: string | undefined; name: string; sourceOrgId?: string | undefined }
            }
            output: { errorRef?: string | undefined; message?: string | undefined }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: { groupId?: string | undefined; name: string; sourceOrgId?: string | undefined }
            }
            output: { errorRef?: string | undefined; message?: string | undefined }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              json: { groupId?: string | undefined; name: string; sourceOrgId?: string | undefined }
            }
            output: { errorRef?: string | undefined; message?: string | undefined }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: { groupId?: string | undefined; name: string; sourceOrgId?: string | undefined }
            }
            output: { errorRef?: string | undefined; message?: string | undefined }
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: { groupId?: string | undefined; name: string; sourceOrgId?: string | undefined }
            }
            output: { errorRef?: string | undefined; message?: string | undefined }
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              json: { groupId?: string | undefined; name: string; sourceOrgId?: string | undefined }
            }
            output: { errorRef?: string | undefined; message?: string | undefined }
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/org/:orgId': {
      $delete: {
        input: { param: { orgId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/org/:orgId/audit': {
      $post: {
        input: { param: { orgId: string } } & {
          query: {
            from?: string | undefined
            to?: string | undefined
            page?: number | undefined
            sortOrder?: string | undefined
          }
        } & {
          json: {
            filters?:
              | {
                  email?: string | undefined
                  event?:
                    | 'api.access'
                    | 'org.billing.info.edit'
                    | 'org.billing.subscription.edit'
                    | 'org.cloud_config.settings.edit'
                    | 'org.create'
                    | 'org.delete'
                    | 'org.edit'
                    | 'org.ignore_policy.edit'
                    | 'org.integration.create'
                    | 'org.integration.delete'
                    | 'org.integration.edit'
                    | 'org.integration.settings.edit'
                    | 'org.language_settings.edit'
                    | 'org.license_rule.create'
                    | 'org.license_rule.delete'
                    | 'org.license_rule.edit'
                    | 'org.notification_settings.edit'
                    | 'org.policy.edit'
                    | 'org.project.add'
                    | 'org.project.attributes.edit'
                    | 'org.project.delete'
                    | 'org.project.edit'
                    | 'org.project.fix_pr.auto_open'
                    | 'org.project.fix_pr.manual_open'
                    | 'org.project.ignore.create'
                    | 'org.project.ignore.delete'
                    | 'org.project.ignore.edit'
                    | 'org.project.monitor'
                    | 'org.project.pr_check.edit'
                    | 'org.project.remove'
                    | 'org.project.settings.delete'
                    | 'org.project.settings.edit'
                    | 'org.project.stop_monitor'
                    | 'org.project.tag.add'
                    | 'org.project.tag.remove'
                    | 'org.project.test'
                    | 'org.request_access_settings.edit'
                    | 'org.sast_settings.edit'
                    | 'org.service_account.create'
                    | 'org.service_account.delete'
                    | 'org.service_account.edit'
                    | 'org.service_account.membership.upsert'
                    | 'org.settings.feature_flag.edit'
                    | 'org.target.create'
                    | 'org.target.delete'
                    | 'org.user.add'
                    | 'org.user.invite'
                    | 'org.user.invite.accept'
                    | 'org.user.invite.revoke'
                    | 'org.user.invite_link.accept'
                    | 'org.user.invite_link.create'
                    | 'org.user.invite_link.revoke'
                    | 'org.user.leave'
                    | 'org.user.provision.accept'
                    | 'org.user.provision.create'
                    | 'org.user.provision.delete'
                    | 'org.user.remove'
                    | 'org.user.role.create'
                    | 'org.user.role.delete'
                    | 'org.user.role.details.edit'
                    | 'org.user.role.edit'
                    | 'org.user.role.permissions.edit'
                    | 'org.webhook.add'
                    | 'org.webhook.delete'
                    | undefined
                  excludeEvent?:
                    | 'api.access'
                    | 'org.billing.info.edit'
                    | 'org.billing.subscription.edit'
                    | 'org.cloud_config.settings.edit'
                    | 'org.create'
                    | 'org.delete'
                    | 'org.edit'
                    | 'org.ignore_policy.edit'
                    | 'org.integration.create'
                    | 'org.integration.delete'
                    | 'org.integration.edit'
                    | 'org.integration.settings.edit'
                    | 'org.language_settings.edit'
                    | 'org.license_rule.create'
                    | 'org.license_rule.delete'
                    | 'org.license_rule.edit'
                    | 'org.notification_settings.edit'
                    | 'org.policy.edit'
                    | 'org.project.add'
                    | 'org.project.attributes.edit'
                    | 'org.project.delete'
                    | 'org.project.edit'
                    | 'org.project.fix_pr.auto_open'
                    | 'org.project.fix_pr.manual_open'
                    | 'org.project.ignore.create'
                    | 'org.project.ignore.delete'
                    | 'org.project.ignore.edit'
                    | 'org.project.monitor'
                    | 'org.project.pr_check.edit'
                    | 'org.project.remove'
                    | 'org.project.settings.delete'
                    | 'org.project.settings.edit'
                    | 'org.project.stop_monitor'
                    | 'org.project.tag.add'
                    | 'org.project.tag.remove'
                    | 'org.project.test'
                    | 'org.request_access_settings.edit'
                    | 'org.sast_settings.edit'
                    | 'org.service_account.create'
                    | 'org.service_account.delete'
                    | 'org.service_account.edit'
                    | 'org.service_account.membership.upsert'
                    | 'org.settings.feature_flag.edit'
                    | 'org.target.create'
                    | 'org.target.delete'
                    | 'org.user.add'
                    | 'org.user.invite'
                    | 'org.user.invite.accept'
                    | 'org.user.invite.revoke'
                    | 'org.user.invite_link.accept'
                    | 'org.user.invite_link.create'
                    | 'org.user.invite_link.revoke'
                    | 'org.user.leave'
                    | 'org.user.provision.accept'
                    | 'org.user.provision.create'
                    | 'org.user.provision.delete'
                    | 'org.user.remove'
                    | 'org.user.role.create'
                    | 'org.user.role.delete'
                    | 'org.user.role.details.edit'
                    | 'org.user.role.edit'
                    | 'org.user.role.permissions.edit'
                    | 'org.webhook.add'
                    | 'org.webhook.delete'
                    | undefined
                  projectId?: string | undefined
                  userId?: string | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/dependencies': {
      $post: {
        input: { param: { orgId: string } } & {
          query: {
            sortBy?: 'projects' | 'dependency' | 'severity' | 'dependenciesWithIssues' | undefined
            order?: 'asc' | 'desc' | undefined
            page?: number | undefined
            perPage?: number | undefined
          }
        } & {
          json: {
            filters?:
              | {
                  depStatus?: string | undefined
                  dependencies?: { [x: string]: unknown } | undefined
                  languages?: { [x: string]: unknown }[] | undefined
                  licenses?: { [x: string]: unknown } | undefined
                  projects?: { [x: string]: unknown } | undefined
                  severity?: { [x: string]: unknown }[] | undefined
                }
              | undefined
          }
        }
        output: {
          results: {
            copyright?: { [x: string]: unknown }[] | undefined
            dependenciesWithIssues?: { [x: string]: unknown }[] | undefined
            deprecatedVersions?: { [x: string]: unknown }[] | undefined
            firstPublishedDate?: string | undefined
            id: string
            isDeprecated?: boolean | undefined
            issuesCritical?: number | undefined
            issuesHigh?: number | undefined
            issuesLow?: number | undefined
            issuesMedium?: number | undefined
            latestVersion?: string | undefined
            latestVersionPublishedDate?: string | undefined
            licenses: { id: string; license: string; title: string }[]
            name: string
            projects: { id: string; name: string }[]
            type: string
            version: string
          }[]
          total?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/entitlement/:entitlementKey': {
      $get: {
        input: { param: { orgId: string; entitlementKey: 'licenses' | 'reports' | 'fullVulnDB' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/entitlements': {
      $get: { input: { param: { orgId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/org/:orgId/integrations': {
      $get: {
        input: { param: { orgId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { orgId: string } } & {
          json:
            | {
                credentials:
                  | {
                      AcrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      ArtifactoryCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | { AzureReposCredentials?: { url: string; username: string } | undefined }
                  | {
                      BitbucketCloudCredentials?: { password: string; username: string } | undefined
                    }
                  | {
                      BitbucketServerCredentials?:
                        | { password: string; url: string; username: string }
                        | undefined
                    }
                  | { DigitalOceanCrCredentials?: { token: string } | undefined }
                  | { DockerHubCredentials?: { password: string; username: string } | undefined }
                  | { EcrCredentials?: { region: string; roleArn: string } | undefined }
                  | { GcrCredentials?: { password: string; registryBase: string } | undefined }
                  | { GitHubCredentials?: { token: string } | undefined }
                  | {
                      GitHubCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | { GitHubEnterpriseCredentials?: { token: string; url: string } | undefined }
                  | { GitLabCredentials?: { token: string; url?: string | undefined } | undefined }
                  | {
                      GitLabCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      GoogleArtifactCrCredentials?:
                        | { password: string; registryBase: string }
                        | undefined
                    }
                  | {
                      HarborCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      NexusCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      QuayCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                type:
                  | 'acr'
                  | 'artifactory-cr'
                  | 'azure-repos'
                  | 'bitbucket-cloud'
                  | 'bitbucket-server'
                  | 'digitalocean-cr'
                  | 'docker-hub'
                  | 'ecr'
                  | 'gcr'
                  | 'github'
                  | 'github-cr'
                  | 'github-enterprise'
                  | 'gitlab'
                  | 'gitlab-cr'
                  | 'google-artifact-cr'
                  | 'harbor-cr'
                  | 'nexus-cr'
                  | 'quay-cr'
              }
            | {
                broker: { enabled?: boolean | undefined }
                type:
                  | 'acr'
                  | 'artifactory-cr'
                  | 'azure-repos'
                  | 'bitbucket-cloud'
                  | 'bitbucket-server'
                  | 'digitalocean-cr'
                  | 'docker-hub'
                  | 'ecr'
                  | 'gcr'
                  | 'github'
                  | 'github-cr'
                  | 'github-enterprise'
                  | 'gitlab'
                  | 'gitlab-cr'
                  | 'google-artifact-cr'
                  | 'harbor-cr'
                  | 'nexus-cr'
                  | 'quay-cr'
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId': {
      $put: {
        input: { param: { orgId: string; integrationId: string } } & {
          json:
            | {
                broker: { enabled?: boolean | undefined }
                type:
                  | 'acr'
                  | 'artifactory-cr'
                  | 'azure-repos'
                  | 'bitbucket-cloud'
                  | 'bitbucket-server'
                  | 'digitalocean-cr'
                  | 'docker-hub'
                  | 'ecr'
                  | 'gcr'
                  | 'github'
                  | 'github-cr'
                  | 'github-enterprise'
                  | 'gitlab'
                  | 'gitlab-cr'
                  | 'google-artifact-cr'
                  | 'harbor-cr'
                  | 'nexus-cr'
                  | 'quay-cr'
              }
            | {
                credentials:
                  | {
                      AcrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      ArtifactoryCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | { AzureReposCredentials?: { url: string; username: string } | undefined }
                  | {
                      BitbucketCloudCredentials?: { password: string; username: string } | undefined
                    }
                  | {
                      BitbucketServerCredentials?:
                        | { password: string; url: string; username: string }
                        | undefined
                    }
                  | { DigitalOceanCrCredentials?: { token: string } | undefined }
                  | { DockerHubCredentials?: { password: string; username: string } | undefined }
                  | { EcrCredentials?: { region: string; roleArn: string } | undefined }
                  | { GcrCredentials?: { password: string; registryBase: string } | undefined }
                  | { GitHubCredentials?: { token: string } | undefined }
                  | {
                      GitHubCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | { GitHubEnterpriseCredentials?: { token: string; url: string } | undefined }
                  | { GitLabCredentials?: { token: string; url?: string | undefined } | undefined }
                  | {
                      GitLabCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      GoogleArtifactCrCredentials?:
                        | { password: string; registryBase: string }
                        | undefined
                    }
                  | {
                      HarborCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      NexusCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      QuayCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                type:
                  | 'acr'
                  | 'artifactory-cr'
                  | 'azure-repos'
                  | 'bitbucket-cloud'
                  | 'bitbucket-server'
                  | 'digitalocean-cr'
                  | 'docker-hub'
                  | 'ecr'
                  | 'gcr'
                  | 'github'
                  | 'github-cr'
                  | 'github-enterprise'
                  | 'gitlab'
                  | 'gitlab-cr'
                  | 'google-artifact-cr'
                  | 'harbor-cr'
                  | 'nexus-cr'
                  | 'quay-cr'
              }
            | {
                broker: { enabled?: boolean | undefined }
                credentials:
                  | {
                      AcrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      ArtifactoryCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | { AzureReposCredentials?: { url: string; username: string } | undefined }
                  | {
                      BitbucketCloudCredentials?: { password: string; username: string } | undefined
                    }
                  | {
                      BitbucketServerCredentials?:
                        | { password: string; url: string; username: string }
                        | undefined
                    }
                  | { DigitalOceanCrCredentials?: { token: string } | undefined }
                  | { DockerHubCredentials?: { password: string; username: string } | undefined }
                  | { EcrCredentials?: { region: string; roleArn: string } | undefined }
                  | { GcrCredentials?: { password: string; registryBase: string } | undefined }
                  | { GitHubCredentials?: { token: string } | undefined }
                  | {
                      GitHubCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | { GitHubEnterpriseCredentials?: { token: string; url: string } | undefined }
                  | { GitLabCredentials?: { token: string; url?: string | undefined } | undefined }
                  | {
                      GitLabCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      GoogleArtifactCrCredentials?:
                        | { password: string; registryBase: string }
                        | undefined
                    }
                  | {
                      HarborCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      NexusCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                  | {
                      QuayCrCredentials?:
                        | { password: string; registryBase: string; username: string }
                        | undefined
                    }
                type:
                  | 'acr'
                  | 'artifactory-cr'
                  | 'azure-repos'
                  | 'bitbucket-cloud'
                  | 'bitbucket-server'
                  | 'digitalocean-cr'
                  | 'docker-hub'
                  | 'ecr'
                  | 'gcr'
                  | 'github'
                  | 'github-cr'
                  | 'github-enterprise'
                  | 'gitlab'
                  | 'gitlab-cr'
                  | 'google-artifact-cr'
                  | 'harbor-cr'
                  | 'nexus-cr'
                  | 'quay-cr'
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/authentication': {
      $delete: {
        input: { param: { orgId: string; integrationId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/authentication/provision-token': {
      $post: {
        input: { param: { orgId: string; integrationId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/authentication/switch-token': {
      $post: {
        input: { param: { orgId: string; integrationId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/clone': {
      $post: {
        input: { param: { orgId: string; integrationId: string } } & {
          json: { destinationOrgPublicId: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/import': {
      $post: {
        input: { param: { orgId: string; integrationId: string } } & {
          json:
            | {
                exclusionGlobs?: string | undefined
                files?: { [x: string]: unknown }[] | undefined
                target?: { branch: string; name: string; owner: string } | undefined
              }
            | {
                exclusionGlobs?: string | undefined
                files?: { [x: string]: unknown }[] | undefined
                target?: { branch: string; id: number } | undefined
              }
            | {
                exclusionGlobs?: string | undefined
                files?: { [x: string]: unknown }[] | undefined
                target?:
                  | {
                      branch?: string | undefined
                      name?: string | undefined
                      projectKey: string
                      repoSlug: string
                    }
                  | undefined
              }
            | {
                files?: { [x: string]: unknown }[] | undefined
                target?: { appId: string; slugId: string } | undefined
              }
            | {
                files?: { [x: string]: unknown }[] | undefined
                target?: { functionId: string } | undefined
              }
            | {
                files?: { [x: string]: unknown }[] | undefined
                target?: { appId: string } | undefined
              }
            | { target?: { name: string } | undefined }
            | { target?: { name: string } | undefined }
            | { target?: { name: string } | undefined }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/import/:jobId': {
      $get: {
        input: { param: { orgId: string; integrationId: string; jobId: string } }
        output: {
          created?: string | undefined
          id?: string | undefined
          logs?: { [x: string]: unknown }[] | undefined
          status?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:integrationId/settings': {
      $get: {
        input: { param: { orgId: string; integrationId: string } }
        output: {
          autoDepUpgradeEnabled?: boolean | undefined
          autoDepUpgradeIgnoredDependencies?: { [x: string]: unknown }[] | undefined
          autoDepUpgradeLimit?: number | undefined
          autoDepUpgradeMinAge?: number | undefined
          autoRemediationPrs?:
            | {
                backlogPrsEnabled?: boolean | undefined
                freshPrsEnabled?: boolean | undefined
                usePatchRemediation?: boolean | undefined
              }
            | undefined
          dockerfileSCMEnabled?: boolean | undefined
          manualRemediationPrs?: { usePatchRemediation?: boolean | undefined } | undefined
          pullRequestAssignment?:
            | {
                assignees?: { [x: string]: unknown }[] | undefined
                enabled?: boolean | undefined
                type?: 'auto' | 'manual' | undefined
              }
            | undefined
          pullRequestFailOnAnyVulns?: boolean | undefined
          pullRequestFailOnlyForHighSeverity?: boolean | undefined
          pullRequestTestEnabled?: boolean | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string; integrationId: string } } & {
          json: {
            autoDepUpgradeEnabled?: boolean | undefined
            autoDepUpgradeIgnoredDependencies?: { [x: string]: unknown }[] | undefined
            autoDepUpgradeLimit?: number | undefined
            autoDepUpgradeMinAge?: number | undefined
            autoRemediationPrs?:
              | {
                  backlogPrsEnabled?: boolean | undefined
                  freshPrsEnabled?: boolean | undefined
                  usePatchRemediation?: boolean | undefined
                }
              | undefined
            dockerfileSCMEnabled?: boolean | undefined
            manualRemediationPrs?: { usePatchRemediation?: boolean | undefined } | undefined
            pullRequestAssignment?:
              | {
                  assignees?: { [x: string]: unknown }[] | undefined
                  enabled?: boolean | undefined
                  type?: 'auto' | 'manual' | undefined
                }
              | undefined
            pullRequestFailOnAnyVulns?: boolean | undefined
            pullRequestFailOnlyForHighSeverity?: boolean | undefined
            pullRequestTestEnabled?: boolean | undefined
          }
        }
        output: {
          autoDepUpgradeEnabled?: boolean | undefined
          autoDepUpgradeIgnoredDependencies?: { [x: string]: unknown }[] | undefined
          autoDepUpgradeLimit?: number | undefined
          autoDepUpgradeMinAge?: number | undefined
          autoRemediationPrs?:
            | {
                backlogPrsEnabled?: boolean | undefined
                freshPrsEnabled?: boolean | undefined
                usePatchRemediation?: boolean | undefined
              }
            | undefined
          dockerfileSCMEnabled?: boolean | undefined
          manualRemediationPrs?: { usePatchRemediation?: boolean | undefined } | undefined
          pullRequestAssignment?:
            | {
                assignees?: { [x: string]: unknown }[] | undefined
                enabled?: boolean | undefined
                type?: 'auto' | 'manual' | undefined
              }
            | undefined
          pullRequestFailOnAnyVulns?: boolean | undefined
          pullRequestFailOnlyForHighSeverity?: boolean | undefined
          pullRequestTestEnabled?: boolean | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/integrations/:type': {
      $get: {
        input: { param: { orgId: string; type: string } }
        output: { id?: string | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/invite': {
      $post: {
        input: { param: { orgId: string } } & {
          json: { email?: string | undefined; isAdmin?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/licenses': {
      $post: {
        input: { param: { orgId: string } } & {
          query: {
            sortBy?: 'license' | 'dependencies' | 'projects' | 'severity' | undefined
            order?: 'asc' | 'desc' | undefined
          }
        } & {
          json: {
            filters?:
              | {
                  dependencies?: { [x: string]: unknown } | undefined
                  languages?: { [x: string]: unknown }[] | undefined
                  licenses?: { [x: string]: unknown } | undefined
                  projects?: { [x: string]: unknown } | undefined
                  severity?: { [x: string]: unknown }[] | undefined
                }
              | undefined
          }
        }
        output: {
          results: {
            dependencies: { id: string; name: string; packageManager: string; version: string }[]
            id: string
            instructions?: string | undefined
            projects: { id: string; name: string }[]
            severity?: 'none' | 'high' | 'medium' | 'low' | undefined
          }[]
          total?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/members': {
      $get: {
        input: { param: { orgId: string } } & {
          query: { includeGroupAdmins?: boolean | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/members/update/:userId': {
      $put: {
        input: { param: { orgId: string; userId: string } } & {
          json: { rolePublicId?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/members/:userId': {
      $delete: {
        input: { param: { orgId: string; userId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { orgId: string; userId: string } } & {
          json: { role?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/notification-settings': {
      $get: {
        input: { param: { orgId: string } }
        output: {
          'new-issues-remediations'?:
            | {
                enabled: boolean
                inherited?: boolean | undefined
                issueSeverity: 'all' | 'high'
                issueType: 'all' | 'vuln' | 'license' | 'none'
              }
            | undefined
          'project-imported'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'test-limit'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'weekly-report'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string } } & {
          json: {
            'new-issues-remediations'?:
              | {
                  enabled: boolean
                  issueSeverity: 'all' | 'high'
                  issueType: 'all' | 'vuln' | 'license' | 'none'
                }
              | undefined
            'project-imported'?: { enabled: boolean } | undefined
            'test-limit'?: { enabled: boolean } | undefined
            'weekly-report'?: { enabled: boolean } | undefined
          }
        }
        output: {
          'new-issues-remediations'?:
            | {
                enabled: boolean
                inherited?: boolean | undefined
                issueSeverity: 'all' | 'high'
                issueType: 'all' | 'vuln' | 'license' | 'none'
              }
            | undefined
          'project-imported'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'test-limit'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'weekly-report'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId': {
      $delete: {
        input: { param: { orgId: string; projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { orgId: string; projectId: string } }
        output: {
          attributes?:
            | {
                criticality?: { [x: string]: unknown }[] | undefined
                environment?: { [x: string]: unknown }[] | undefined
                lifecycle?: { [x: string]: unknown }[] | undefined
              }
            | undefined
          branch?: (string | null) | undefined
          browseUrl?: string | undefined
          created?: string | undefined
          hostname?: (string | null) | undefined
          id?: string | undefined
          imageBaseImage?: string | undefined
          imageCluster?: string | undefined
          imageId?: string | undefined
          imagePlatform?: string | undefined
          imageTag?: string | undefined
          importingUser?:
            | {
                email?: string | undefined
                id?: string | undefined
                name?: string | undefined
                username?: string | undefined
              }
            | undefined
          isMonitored?: boolean | undefined
          issueCountsBySeverity?:
            | {
                critical?: number | undefined
                high?: number | undefined
                low?: number | undefined
                medium?: number | undefined
              }
            | undefined
          lastTestedDate?: string | undefined
          name?: string | undefined
          origin?: string | undefined
          owner?: ({ [x: string]: unknown } | null) | undefined
          readOnly?: boolean | undefined
          remediation?:
            | {
                patch?: { [x: string]: unknown } | undefined
                pin?: { [x: string]: unknown } | undefined
                upgrade?: { [x: string]: unknown } | undefined
              }
            | undefined
          remoteRepoUrl?: string | undefined
          tags?: { [x: string]: unknown }[] | undefined
          targetReference?: (string | null) | undefined
          testFrequency?: string | undefined
          totalDependencies?: number | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string; projectId: string } } & {
          json: { branch?: string | undefined; owner?: { id?: string | undefined } | undefined }
        }
        output: {
          attributes?:
            | {
                criticality?: { [x: string]: unknown }[] | undefined
                environment?: { [x: string]: unknown }[] | undefined
                lifecycle?: { [x: string]: unknown }[] | undefined
              }
            | undefined
          branch?: (string | null) | undefined
          browseUrl?: string | undefined
          created?: string | undefined
          hostname?: (string | null) | undefined
          id?: string | undefined
          imageBaseImage?: string | undefined
          imageCluster?: string | undefined
          imageId?: string | undefined
          imagePlatform?: string | undefined
          imageTag?: string | undefined
          importingUser?:
            | {
                email?: string | undefined
                id?: string | undefined
                name?: string | undefined
                username?: string | undefined
              }
            | undefined
          isMonitored?: boolean | undefined
          issueCountsBySeverity?:
            | {
                critical?: number | undefined
                high?: number | undefined
                low?: number | undefined
                medium?: number | undefined
              }
            | undefined
          lastTestedDate?: string | undefined
          name?: string | undefined
          origin?: string | undefined
          owner?: ({ [x: string]: unknown } | null) | undefined
          readOnly?: boolean | undefined
          remediation?:
            | {
                patch?: { [x: string]: unknown } | undefined
                pin?: { [x: string]: unknown } | undefined
                upgrade?: { [x: string]: unknown } | undefined
              }
            | undefined
          remoteRepoUrl?: string | undefined
          tags?: { [x: string]: unknown }[] | undefined
          targetReference?: (string | null) | undefined
          testFrequency?: string | undefined
          totalDependencies?: number | undefined
          type?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/activate': {
      $post: {
        input: { param: { orgId: string; projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/aggregated-issues': {
      $post: {
        input: { param: { orgId: string; projectId: string } } & {
          json: {
            filters?:
              | {
                  exploitMaturity?: { [x: string]: unknown }[] | undefined
                  ignored?: boolean | undefined
                  patched?: boolean | undefined
                  priority?:
                    | { score?: { max?: number | undefined; min?: number | undefined } | undefined }
                    | undefined
                  severities?: { [x: string]: unknown }[] | undefined
                  types?: { [x: string]: unknown }[] | undefined
                }
              | undefined
            includeDescription?: boolean | undefined
            includeIntroducedThrough?: boolean | undefined
          }
        }
        output: {
          issues?:
            | {
                fixInfo?:
                  | {
                      fixedIn?: { [x: string]: unknown }[] | undefined
                      isFixable?: boolean | undefined
                      isPartiallyFixable?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      nearestFixedInVersion?: string | undefined
                    }
                  | undefined
                id: string
                ignoreReasons?: { [x: string]: unknown }[] | undefined
                introducedThrough?: { [x: string]: unknown }[] | undefined
                isIgnored: boolean
                isPatched: boolean
                issueData: {
                  CVSSv3: string
                  credit: { [x: string]: unknown }[]
                  cvssScore: number
                  description: string
                  disclosureTime: string
                  exploitMaturity: string
                  id: string
                  identifiers: {
                    CVE?: { [x: string]: unknown }[] | undefined
                    CWE?: { [x: string]: unknown }[] | undefined
                    OSVDB?: { [x: string]: unknown }[] | undefined
                  }
                  isMaliciousPackage: boolean
                  language: string
                  nearestFixedInVersion: string
                  originalSeverity: string
                  patches: { [x: string]: unknown }[]
                  path: string
                  publicationTime: string
                  semver: {
                    unaffected?: string | undefined
                    vulnerable?: { [x: string]: unknown }[] | undefined
                  }
                  severity: string
                  title: string
                  url: string
                  violatedPolicyPublicId: string
                }
                issueType: string
                links?: { paths?: string | undefined } | undefined
                pkgName: string
                pkgVersions: string[]
                priority?:
                  | { factors?: { [x: string]: unknown }[] | undefined; score?: number | undefined }
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/attributes': {
      $post: {
        input: { param: { orgId: string; projectId: string } } & {
          json: {
            criticality?: { [x: string]: unknown }[] | undefined
            environment?: { [x: string]: unknown }[] | undefined
            lifecycle?: { [x: string]: unknown }[] | undefined
          }
        }
        output: {
          attributes?:
            | {
                criticality?: { [x: string]: unknown }[] | undefined
                environment?: { [x: string]: unknown }[] | undefined
                lifecycle?: { [x: string]: unknown }[] | undefined
              }
            | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/deactivate': {
      $post: {
        input: { param: { orgId: string; projectId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/dep-graph': {
      $get: {
        input: { param: { orgId: string; projectId: string } }
        output: {
          depGraph: {
            graph: {
              nodes?: { deps: { nodeId: string }[]; nodeId: string; pkgId: string }[] | undefined
              rootNodeId: string
            }
            pkgManager: {
              name: string
              repositories?: { alias: string }[] | undefined
              version?: string | undefined
            }
            pkgs: { id: string; info: { name: string; version?: string | undefined } }[]
            schemaVersion: string
          }
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/history': {
      $post: {
        input: { param: { orgId: string; projectId: string } } & {
          query: { perPage?: number | undefined; page?: number | undefined }
        } & { json: { filters?: { imageId?: string | undefined } | undefined } }
        output: {
          snapshots?:
            | {
                created: string
                id: string
                imageBaseImage?: string | undefined
                imageId?: string | undefined
                imagePlatform?: string | undefined
                imageTag?: string | undefined
                issueCounts: {
                  license?:
                    | { critical: number; high: number; low: number; medium: number }
                    | undefined
                  sast?: { critical: number; high: number; low: number; medium: number } | undefined
                  vuln?: { critical: number; high: number; low: number; medium: number } | undefined
                }
                method?: 'api' | 'cli' | 'recurring' | 'web' | 'web-test' | 'wizard' | undefined
                totalDependencies: number
              }[]
            | undefined
          total?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/history/:snapshotId/aggregated-issues': {
      $post: {
        input: { param: { orgId: string; projectId: string; snapshotId: string } } & {
          json: {
            filters?:
              | {
                  exploitMaturity?: { [x: string]: unknown }[] | undefined
                  ignored?: boolean | undefined
                  patched?: boolean | undefined
                  priority?:
                    | { score?: { max?: number | undefined; min?: number | undefined } | undefined }
                    | undefined
                  severities?: { [x: string]: unknown }[] | undefined
                  types?: { [x: string]: unknown }[] | undefined
                }
              | undefined
            includeDescription?: boolean | undefined
            includeIntroducedThrough?: boolean | undefined
          }
        }
        output: {
          issues?:
            | {
                fixInfo?:
                  | {
                      fixedIn?: { [x: string]: unknown }[] | undefined
                      isFixable?: boolean | undefined
                      isPartiallyFixable?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      nearestFixedInVersion?: string | undefined
                    }
                  | undefined
                id: string
                ignoreReasons?: { [x: string]: unknown }[] | undefined
                introducedThrough?: { [x: string]: unknown }[] | undefined
                isIgnored: boolean
                isPatched: boolean
                issueData: {
                  CVSSv3: string
                  credit: { [x: string]: unknown }[]
                  cvssScore: number
                  description: string
                  disclosureTime: string
                  exploitMaturity: string
                  id: string
                  identifiers: {
                    CVE?: { [x: string]: unknown }[] | undefined
                    CWE?: { [x: string]: unknown }[] | undefined
                    OSVDB?: { [x: string]: unknown }[] | undefined
                  }
                  isMaliciousPackage: boolean
                  language: string
                  nearestFixedInVersion: string
                  originalSeverity: string
                  patches: { [x: string]: unknown }[]
                  path: string
                  publicationTime: string
                  semver: {
                    unaffected?: string | undefined
                    vulnerable?: { [x: string]: unknown }[] | undefined
                  }
                  severity: string
                  title: string
                  url: string
                  violatedPolicyPublicId: string
                }
                issueType: string
                links?: { paths?: string | undefined } | undefined
                pkgName: string
                pkgVersions: string[]
                priority?:
                  | { factors?: { [x: string]: unknown }[] | undefined; score?: number | undefined }
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/history/:snapshotId/issue/:issueId/paths': {
      $get: {
        input: {
          param: { orgId: string; projectId: string; snapshotId: string; issueId: string }
        } & { query: { perPage?: number | undefined; page?: number | undefined } }
        output: {
          links?:
            | { last?: string | undefined; next?: string | undefined; prev?: string | undefined }
            | undefined
          paths?:
            | {
                fixVersion?: string | undefined
                name?: string | undefined
                version?: string | undefined
              }[][]
            | undefined
          snapshotId?: string | undefined
          total?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/ignore/:issueId': {
      $delete: {
        input: { param: { orgId: string; projectId: string; issueId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { orgId: string; projectId: string; issueId: string } }
        output: IgnorePath
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { orgId: string; projectId: string; issueId: string } } & {
          json: {
            disregardIfFixable: boolean
            expires?: string | undefined
            ignorePath?: string | undefined
            reason?: string | undefined
            reasonType: 'not-vulnerable' | 'wont-fix' | 'temporary-ignore'
          }
        }
        output: IgnorePath
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string; projectId: string; issueId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/ignores': {
      $get: {
        input: { param: { orgId: string; projectId: string } }
        output: IssueId
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/issue/:issueId/jira-issue': {
      $post: {
        input: { param: { issueId: string; orgId: string; projectId: string } } & {
          json: {
            fields?:
              | {
                  issuetype?: { [x: string]: unknown } | undefined
                  project?: { [x: string]: unknown } | undefined
                  summary?: string | undefined
                }
              | undefined
          }
        }
        output: { jiraIssue?: { id?: string | undefined; key?: string | undefined } | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/issue/:issueId/paths': {
      $get: {
        input: { param: { orgId: string; projectId: string; issueId: string } } & {
          query: {
            snapshotId?: string | undefined
            perPage?: number | undefined
            page?: number | undefined
          }
        }
        output: {
          links?:
            | { last?: string | undefined; next?: string | undefined; prev?: string | undefined }
            | undefined
          paths?:
            | {
                fixVersion?: string | undefined
                name?: string | undefined
                version?: string | undefined
              }[][]
            | undefined
          snapshotId?: string | undefined
          total?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/jira-issues': {
      $get: {
        input: { param: { orgId: string; projectId: string } }
        output: IssueId
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/move': {
      $put: {
        input: { param: { orgId: string; projectId: string } } & {
          json: { targetOrgId?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/settings': {
      $delete: {
        input: { param: { orgId: string; projectId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { orgId: string; projectId: string } }
        output: {
          autoDepUpgradeEnabled?: boolean | undefined
          autoDepUpgradeIgnoredDependencies?: { [x: string]: unknown }[] | undefined
          autoDepUpgradeLimit?: number | undefined
          autoDepUpgradeMinAge?: number | undefined
          autoRemediationPrs?:
            | {
                backlogPrsEnabled?: boolean | undefined
                freshPrsEnabled?: boolean | undefined
                usePatchRemediation?: boolean | undefined
              }
            | undefined
          pullRequestAssignment?:
            | {
                assignees?: { [x: string]: unknown }[] | undefined
                enabled?: boolean | undefined
                type?: 'auto' | 'manual' | undefined
              }
            | undefined
          pullRequestFailOnAnyVulns?: boolean | undefined
          pullRequestFailOnlyForHighSeverity?: boolean | undefined
          pullRequestTestEnabled?: boolean | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string; projectId: string } } & {
          json: {
            autoDepUpgradeEnabled?: boolean | undefined
            autoDepUpgradeIgnoredDependencies?: { [x: string]: unknown }[] | undefined
            autoDepUpgradeLimit?: number | undefined
            autoDepUpgradeMinAge?: number | undefined
            autoRemediationPrs?:
              | {
                  backlogPrsEnabled?: boolean | undefined
                  freshPrsEnabled?: boolean | undefined
                  usePatchRemediation?: boolean | undefined
                }
              | undefined
            pullRequestAssignment?:
              | {
                  assignees?: { [x: string]: unknown }[] | undefined
                  enabled?: boolean | undefined
                  type?: 'auto' | 'manual' | undefined
                }
              | undefined
            pullRequestFailOnAnyVulns?: boolean | undefined
            pullRequestFailOnlyForHighSeverity?: boolean | undefined
            pullRequestTestEnabled?: boolean | undefined
          }
        }
        output: {
          autoDepUpgradeEnabled?: boolean | undefined
          autoDepUpgradeIgnoredDependencies?: { [x: string]: unknown }[] | undefined
          autoDepUpgradeLimit?: number | undefined
          autoDepUpgradeMinAge?: number | undefined
          autoRemediationPrs?:
            | {
                backlogPrsEnabled?: boolean | undefined
                freshPrsEnabled?: boolean | undefined
                usePatchRemediation?: boolean | undefined
              }
            | undefined
          pullRequestAssignment?:
            | {
                assignees?: { [x: string]: unknown }[] | undefined
                enabled?: boolean | undefined
                type?: 'auto' | 'manual' | undefined
              }
            | undefined
          pullRequestFailOnAnyVulns?: boolean | undefined
          pullRequestFailOnlyForHighSeverity?: boolean | undefined
          pullRequestTestEnabled?: boolean | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/tags': {
      $post: {
        input: { param: { orgId: string; projectId: string } } & {
          json: { key?: string | undefined; value?: string | undefined }
        }
        output: { tags?: { [x: string]: unknown }[] | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/project/:projectId/tags/remove': {
      $post: {
        input: { param: { orgId: string; projectId: string } } & {
          json: { key?: string | undefined; value?: string | undefined }
        }
        output: { tags?: { [x: string]: unknown }[] | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/projects': {
      $post: {
        input: { param: { orgId: string } } & {
          json: {
            filters?:
              | {
                  attributes?:
                    | {
                        criticality?: { [x: string]: unknown }[] | undefined
                        environment?: { [x: string]: unknown }[] | undefined
                        lifecycle?: { [x: string]: unknown }[] | undefined
                      }
                    | undefined
                  isMonitored?: boolean | undefined
                  name?: string | undefined
                  origin?: string | undefined
                  tags?: { includes?: { [x: string]: unknown }[] | undefined } | undefined
                  type?: string | undefined
                }
              | undefined
          }
        }
        output: {
          org?: { id?: string | undefined; name?: string | undefined } | undefined
          projects?:
            | {
                attributes?:
                  | {
                      criticality?: { [x: string]: unknown }[] | undefined
                      environment?: { [x: string]: unknown }[] | undefined
                      lifecycle?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
                branch?: (string | null) | undefined
                browseUrl?: string | undefined
                created?: string | undefined
                id?: string | undefined
                imageBaseImage?: string | undefined
                imageCluster?: string | undefined
                imageId?: string | undefined
                imagePlatform?: string | undefined
                imageTag?: string | undefined
                importingUser?:
                  | {
                      email?: string | undefined
                      id?: string | undefined
                      name?: string | undefined
                      username?: string | undefined
                    }
                  | undefined
                isMonitored?: boolean | undefined
                issueCountsBySeverity?:
                  | {
                      critical?: number | undefined
                      high?: number | undefined
                      low?: number | undefined
                      medium?: number | undefined
                    }
                  | undefined
                lastTestedDate?: string | undefined
                name?: string | undefined
                origin?: string | undefined
                owner?: ({ [x: string]: unknown } | null) | undefined
                readOnly?: boolean | undefined
                remoteRepoUrl?: string | undefined
                tags?: { [x: string]: unknown }[] | undefined
                targetReference?: (string | null) | undefined
                testFrequency?: string | undefined
                totalDependencies?: number | undefined
                type?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/org/:orgId/provision': {
      $delete:
        | {
            input: { param: { orgId: string } }
            output: { ok?: boolean | undefined }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { orgId: string } }; output: {}; outputFormat: string; status: 403 }
      $get:
        | {
            input: { param: { orgId: string } }
            output: { [x: string]: unknown }[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { orgId: string } }; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { param: { orgId: string } } & {
              json: { email: string; role?: string | undefined; rolePublicId?: string | undefined }
            }
            output: {
              created?: string | undefined
              email?: string | undefined
              role?: string | undefined
              rolePublicId?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orgId: string } } & {
              json: { email: string; role?: string | undefined; rolePublicId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/org/:orgId/settings': {
      $get: {
        input: { param: { orgId: string } }
        output: { requestAccess?: { enabled: boolean } | undefined }
        outputFormat: 'text'
        status: 200
      }
      $put:
        | {
            input: { param: { orgId: string } } & {
              json: { requestAccess?: { enabled: boolean } | undefined }
            }
            output: { requestAccess?: { enabled: boolean } | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { orgId: string } } & {
              json: { requestAccess?: { enabled: boolean } | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/org/:orgId/webhooks': {
      $get: { input: { param: { orgId: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { orgId: string } } & {
          json: { secret?: string | undefined; url?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/webhooks/:webhookId': {
      $delete: {
        input: { param: { orgId: string; webhookId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { orgId: string; webhookId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/org/:orgId/webhooks/:webhookId/ping': {
      $post: {
        input: { param: { orgId: string; webhookId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/orgs': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/reporting/counts/issues': {
      $post:
        | {
            input: {
              query: {
                from: string
                to: string
                groupBy?: 'severity' | 'fixable' | 'project,[severity|fixable]' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      fixable?: boolean | undefined
                      ignored?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              results: {
                count: number
                day: string
                fixable?: { false?: number | undefined; true?: number | undefined } | undefined
                severity?:
                  | {
                      critical?: number | undefined
                      high?: number | undefined
                      low?: number | undefined
                      medium?: number | undefined
                    }
                  | undefined
              }[]
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                from: string
                to: string
                groupBy?: 'severity' | 'fixable' | 'project,[severity|fixable]' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      fixable?: boolean | undefined
                      ignored?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/reporting/counts/issues/latest': {
      $post:
        | {
            input: {
              query: { groupBy?: 'severity' | 'fixable' | 'project,[severity|fixable]' | undefined }
            } & {
              json: {
                filters?:
                  | {
                      fixable?: boolean | undefined
                      ignored?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              results: {
                count: number
                day: string
                fixable?: { false?: number | undefined; true?: number | undefined } | undefined
                severity?:
                  | {
                      critical?: number | undefined
                      high?: number | undefined
                      low?: number | undefined
                      medium?: number | undefined
                    }
                  | undefined
              }[]
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { groupBy?: 'severity' | 'fixable' | 'project,[severity|fixable]' | undefined }
            } & {
              json: {
                filters?:
                  | {
                      fixable?: boolean | undefined
                      ignored?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/reporting/counts/projects': {
      $post:
        | {
            input: { query: { from: string; to: string } } & {
              json: {
                filters?:
                  | {
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      projects?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: { results: { count: number; day: string }[] }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } } & {
              json: {
                filters?:
                  | {
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      projects?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/reporting/counts/projects/latest': {
      $post:
        | {
            input: {
              json: {
                filters?:
                  | {
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      projects?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: { results: { count: number; day: string }[] }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                filters?:
                  | {
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      projects?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/reporting/counts/tests': {
      $post:
        | {
            input: {
              query: {
                from: string
                to: string
                groupBy?: 'isPrivate' | 'issuesPrevented' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      isPrivate?: boolean | undefined
                      issuesPrevented?: boolean | undefined
                      orgs: { [x: string]: unknown }
                      projects?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: {
              results: {
                count: number
                isPrivate?: { false?: number | undefined; true?: number | undefined } | undefined
                issuesPrevented?:
                  | { false?: number | undefined; true?: number | undefined }
                  | undefined
              }[]
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                from: string
                to: string
                groupBy?: 'isPrivate' | 'issuesPrevented' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      isPrivate?: boolean | undefined
                      issuesPrevented?: boolean | undefined
                      orgs: { [x: string]: unknown }
                      projects?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/reporting/issues/': {
      $post:
        | {
            input: {
              query: {
                from: string
                to: string
                page?: number | undefined
                perPage?: number | undefined
                sortBy?:
                  | 'severity'
                  | 'issueTitle'
                  | 'projectName'
                  | 'isFixed'
                  | 'isPatched'
                  | 'isIgnored'
                  | 'introducedDate'
                  | 'isUpgradable'
                  | 'isPatchable'
                  | 'priorityScore'
                  | undefined
                order?: string | undefined
                groupBy?: 'issue' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      exploitMaturity?: { [x: string]: unknown }[] | undefined
                      fixable?: boolean | undefined
                      identifier?: string | undefined
                      ignored?: boolean | undefined
                      isFixed?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      issues?: { [x: string]: unknown } | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              results: (
                | { projects: { [x: string]: unknown }[] }
                | {
                    project: {
                      id: string
                      name: string
                      packageManager: string
                      source: string
                      targetFile?: string | undefined
                      url: string
                    }
                  }
              )[]
              total: number
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                from: string
                to: string
                page?: number | undefined
                perPage?: number | undefined
                sortBy?:
                  | 'severity'
                  | 'issueTitle'
                  | 'projectName'
                  | 'isFixed'
                  | 'isPatched'
                  | 'isIgnored'
                  | 'introducedDate'
                  | 'isUpgradable'
                  | 'isPatchable'
                  | 'priorityScore'
                  | undefined
                order?: string | undefined
                groupBy?: 'issue' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      exploitMaturity?: { [x: string]: unknown }[] | undefined
                      fixable?: boolean | undefined
                      identifier?: string | undefined
                      ignored?: boolean | undefined
                      isFixed?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      issues?: { [x: string]: unknown } | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/reporting/issues/latest': {
      $post:
        | {
            input: {
              query: {
                page?: number | undefined
                perPage?: number | undefined
                sortBy?:
                  | 'severity'
                  | 'issueTitle'
                  | 'projectName'
                  | 'isFixed'
                  | 'isPatched'
                  | 'isIgnored'
                  | 'introducedDate'
                  | 'isUpgradable'
                  | 'isPatchable'
                  | 'priorityScore'
                  | undefined
                order?: string | undefined
                groupBy?: 'issue' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      exploitMaturity?: { [x: string]: unknown }[] | undefined
                      fixable?: boolean | undefined
                      identifier?: string | undefined
                      ignored?: boolean | undefined
                      isFixed?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      issues?: { [x: string]: unknown } | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              results: (
                | { projects: { [x: string]: unknown }[] }
                | {
                    project: {
                      id: string
                      name: string
                      packageManager: string
                      source: string
                      targetFile?: string | undefined
                      url: string
                    }
                  }
              )[]
              total: number
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                perPage?: number | undefined
                sortBy?:
                  | 'severity'
                  | 'issueTitle'
                  | 'projectName'
                  | 'isFixed'
                  | 'isPatched'
                  | 'isIgnored'
                  | 'introducedDate'
                  | 'isUpgradable'
                  | 'isPatchable'
                  | 'priorityScore'
                  | undefined
                order?: string | undefined
                groupBy?: 'issue' | undefined
              }
            } & {
              json: {
                filters?:
                  | {
                      exploitMaturity?: { [x: string]: unknown }[] | undefined
                      fixable?: boolean | undefined
                      identifier?: string | undefined
                      ignored?: boolean | undefined
                      isFixed?: boolean | undefined
                      isPatchable?: boolean | undefined
                      isPinnable?: boolean | undefined
                      isUpgradable?: boolean | undefined
                      issues?: { [x: string]: unknown } | undefined
                      languages?: { [x: string]: unknown }[] | undefined
                      orgs: { [x: string]: unknown }
                      patched?: boolean | undefined
                      priorityScore?:
                        | { max?: number | undefined; min?: number | undefined }
                        | undefined
                      projects?: { [x: string]: unknown } | undefined
                      severity?: { [x: string]: unknown }[] | undefined
                      types?: { [x: string]: unknown }[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              code: number
              error: { innerErrors?: { [x: string]: unknown }[] | undefined; name: string }
              ok: boolean
            }
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/test/composer': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: {
              additional: { [x: string]: unknown }[]
              target: { contents?: string | undefined }
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/dep-graph': {
      $post: {
        input: { query: { org?: string | undefined } } & {
          json: {
            depGraph: {
              graph: { nodes: { [x: string]: unknown }[]; rootNodeId: string }
              pkgManager: { name: string; repositories?: { [x: string]: unknown }[] | undefined }
              pkgs: { [x: string]: unknown }[]
              schemaVersion: string
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/golangdep': {
      $post: {
        input: { query: { org?: string | undefined } } & {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: {
              additional: { [x: string]: unknown }[]
              target: { contents?: string | undefined }
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/govendor': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: { target: { contents?: string | undefined } }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/gradle': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: { target: { contents: string } }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/gradle/:group/:name/:version': {
      $get: {
        input: { param: { group: string; name: string; version: string } } & {
          query: { org?: string | undefined; repository?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/maven': {
      $post: {
        input: { query: { org?: string | undefined; repository?: string | undefined } } & {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: {
              additional?: { [x: string]: unknown }[] | undefined
              target: { contents: string }
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/maven/:groupId/:artifactId/:version': {
      $get: {
        input: { param: { groupId: string; artifactId: string; version: string } } & {
          query: { org?: string | undefined; repository?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/npm': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: {
              additional?: { [x: string]: unknown }[] | undefined
              target: { contents: string }
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/npm/:packageName/:version': {
      $get: {
        input: { param: { packageName: string; version: string } } & {
          query: { org?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/pip': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: { target: { contents: string } }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/pip/:packageName/:version': {
      $get: {
        input: { param: { packageName: string; version: string } } & {
          query: { org?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/rubygems': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: { target: { contents: string } }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/rubygems/:gemName/:version': {
      $get: {
        input: { param: { gemName: string; version: string } } & {
          query: { org?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/sbt': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: { target: { contents: string } }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/sbt/:groupId/:artifactId/:version': {
      $get: {
        input: { param: { groupId: string; artifactId: string; version: string } } & {
          query: { org?: string | undefined; repository?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/test/yarn': {
      $post: {
        input: {
          json: {
            encoding?: 'plain' | 'base64' | undefined
            files: {
              additional?: { [x: string]: unknown }[] | undefined
              target: { contents: string }
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/user/me': {
      $get: {
        input: {}
        output: {
          email?: string | undefined
          id?: string | undefined
          orgs?: { [x: string]: unknown } | undefined
          username?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/user/me/notification-settings/org/:orgId': {
      $get: {
        input: { param: { orgId: string } }
        output: {
          'new-issues-remediations'?:
            | {
                enabled: boolean
                inherited?: boolean | undefined
                issueSeverity: 'all' | 'high'
                issueType: 'all' | 'vuln' | 'license' | 'none'
              }
            | undefined
          'project-imported'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'test-limit'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'weekly-report'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string } } & {
          json: {
            'new-issues-remediations'?:
              | {
                  enabled: boolean
                  issueSeverity: 'all' | 'high'
                  issueType: 'all' | 'vuln' | 'license' | 'none'
                }
              | undefined
            'project-imported'?: { enabled: boolean } | undefined
            'test-limit'?: { enabled: boolean } | undefined
            'weekly-report'?: { enabled: boolean } | undefined
          }
        }
        output: {
          'new-issues-remediations'?:
            | {
                enabled: boolean
                inherited?: boolean | undefined
                issueSeverity: 'all' | 'high'
                issueType: 'all' | 'vuln' | 'license' | 'none'
              }
            | undefined
          'project-imported'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'test-limit'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'weekly-report'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/user/me/notification-settings/org/:orgId/project/:projectId': {
      $get: {
        input: { param: { orgId: string; projectId: string } }
        output: {
          'new-issues-remediations'?:
            | {
                enabled: boolean
                inherited?: boolean | undefined
                issueSeverity: 'all' | 'high'
                issueType: 'all' | 'vuln' | 'license' | 'none'
              }
            | undefined
          'project-imported'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'test-limit'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
          'weekly-report'?: { enabled: boolean; inherited?: boolean | undefined } | undefined
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { orgId: string; projectId: string } } & {
          json: {
            'new-issues-remediations'?:
              | {
                  enabled: boolean
                  issueSeverity: 'all' | 'high'
                  issueType: 'all' | 'vuln' | 'license' | 'none'
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/user/:userId': {
      $get: {
        input: { param: { userId: string } }
        output: {
          email?: string | undefined
          id?: string | undefined
          name?: string | undefined
          username?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
