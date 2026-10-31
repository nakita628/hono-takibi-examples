import { createRoute, z } from '@hono/zod-openapi'

const ASpecificEntitlementByOrganizationSchema = z
  .any()
  .openapi('ASpecificEntitlementByOrganization')

const ActivateAnIndividualProjectSchema = z.any().openapi('ActivateAnIndividualProject')

const AddMemberBodySchema = z
  .object({
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The role of the user, "admin" or "collaborator".' }),
    userId: z.string().exactOptional().openapi({ description: 'The id of the user.' }),
  })
  .openapi({ required: [] })
  .openapi('AddMemberBody')

const AggregatedProjectSnapshotIssuesSchema = z.any().openapi('AggregatedProjectSnapshotIssues')

const AggregatedProjectIssuesSchema = z.any().openapi('AggregatedProjectIssues')

const AggregatedProjectIssues2Schema = z
  .object({
    issues: z
      .array(
        z
          .object({
            fixInfo: z
              .object({
                fixedIn: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'The set of versions in which this issue has been fixed. If the issue spanned multiple versions (i.e. `1.x` and `2.x`) then there will be multiple `fixedIn` entries',
                  }),
                isFixable: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      "Whether all of the issue's paths are fixable. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading). An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.",
                  }),
                isPartiallyFixable: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      "Whether any of the issue's paths can be fixed. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading).  An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.",
                  }),
                isPatchable: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: "Whether all the of issue's paths are patchable" }),
                isPinnable: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the issue can be fixed by pinning a transitive',
                  }),
                isUpgradable: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: "Whether all of the issue's paths are upgradable" }),
                nearestFixedInVersion: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Nearest version which includes a fix for the issue. This is populated for container projects only.',
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  'Information about fix/upgrade/pinnable options for the issue (Non-IaC projects only)',
                required: [],
              }),
            id: z.string().openapi({ description: 'The identifier of the issue' }),
            ignoreReasons: z
              .array(z.any())
              .exactOptional()
              .openapi({ description: 'The list of reasons why the issue was ignored' }),
            introducedThrough: z
              .array(z.any())
              .exactOptional()
              .openapi({
                description:
                  'The list of what introduced the issue (it is available only for container project with Dockerfile)',
              }),
            isIgnored: z.boolean().openapi({ description: 'Whether the issue has been ignored' }),
            isPatched: z
              .boolean()
              .openapi({
                description: 'Whether the issue has been patched (Non-IaC projects only)',
              }),
            issueData: z
              .object({
                CVSSv3: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The CVSS v3 string that signifies how the CVSS score was calculated (Non-IaC projects only)',
                  }),
                credit: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'The list of people responsible for first uncovering or reporting the issue (Non-IaC projects only)',
                  }),
                cvssScore: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The CVSS score that results from running the CVSSv3 string (Non-IaC projects only)',
                  }),
                description: z.string().exactOptional(),
                disclosureTime: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The date that the vulnerability was first disclosed' }),
                exploitMaturity: z
                  .string()
                  .openapi({ description: 'The exploit maturity of the issue' }),
                id: z.string().openapi({ description: 'The identifier of the issue' }),
                identifiers: z
                  .object({
                    CVE: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Common Vulnerability Enumeration identifiers' }),
                    CWE: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Common Weakness Enumeration identifiers' }),
                    OSVDB: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({
                        description:
                          'Identifiers assigned by the Open Source Vulnerability Database (OSVDB)',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'External identifiers assigned to the issue (Non-IaC projects only)',
                    required: [],
                  }),
                isMaliciousPackage: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the issue is intentional, indicating a malicious package',
                  }),
                language: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The language of the issue (Non-IaC projects only)' }),
                nearestFixedInVersion: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Nearest version which includes a fix for the issue. This is populated for container projects only. (Non-IaC projects only)',
                  }),
                originalSeverity: z
                  .string()
                  .openapi({
                    description:
                      'The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied',
                  }),
                patches: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of patches available for the given issue (Non-IaC projects only)',
                  }),
                path: z
                  .string()
                  .openapi({
                    description:
                      'Path to the resource property violating the policy within the scanned project. (IaC projects only)',
                  }),
                publicationTime: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The date that the vulnerability was first published by Snyk (Non-IaC projects only)',
                  }),
                semver: z
                  .object({
                    unaffected: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The ranges that are unaffected by the issue' }),
                    vulnerable: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({
                        description:
                          'The ranges that are vulnerable to the issue. May be an array or a string.',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'The ranges that are vulnerable and unaffected by the issue (Non-IaC projects only)',
                    required: [],
                  }),
                severity: z
                  .string()
                  .openapi({
                    description: 'The severity status of the issue, after policies are applied',
                  }),
                title: z.string().openapi({ description: 'The issue title' }),
                url: z
                  .string()
                  .openapi({ description: 'URL to a page containing information about the issue' }),
                violatedPolicyPublicId: z
                  .string()
                  .openapi({
                    description: 'The ID of the violated policy in the issue (IaC projects only)',
                  }),
              })
              .openapi({
                description: 'The details of the issue',
                required: [
                  'id',
                  'title',
                  'severity',
                  'originalSeverity',
                  'url',
                  'exploitMaturity',
                  'path',
                  'violatedPolicyPublicId',
                ],
              }),
            issueType: z
              .string()
              .openapi({ description: "type of the issue ('vuln', 'license' or 'configuration')" }),
            links: z
              .object({
                paths: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The URL for the dependency paths that introduce this issue',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Onward links from this record (Non-IaC projects only)',
                required: [],
              }),
            pkgName: z
              .string()
              .openapi({ description: 'The package name (Non-IaC projects only)' }),
            pkgVersions: z
              .array(z.string())
              .openapi({
                description: 'List of affected package versions (Non-IaC projects only)',
              }),
            priority: z
              .object({
                factors: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'The list of factors that contributed to the priority of the issue',
                  }),
                score: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The priority score of the issue' }),
              })
              .exactOptional()
              .openapi({
                description: 'Information about the priority of the issue (Non-IaC projects only)',
                required: [],
              }),
          })
          .openapi({
            required: [
              'id',
              'issueType',
              'pkgName',
              'pkgVersions',
              'issueData',
              'isPatched',
              'isIgnored',
            ],
          }),
      )
      .exactOptional()
      .openapi({ description: 'An array of identified issues' }),
  })
  .openapi({ required: [] })
  .openapi('AggregatedProjectIssues2')

const AggregatedProjectIssuesFiltersSchema = z
  .object({
    filters: z
      .object({
        exploitMaturity: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'The exploit maturity levels of issues to filter the results by (Non-IaC projects only)',
          }),
        ignored: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
          }),
        patched: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched (Non-IaC projects only)',
          }),
        priority: z
          .object({
            score: z
              .object({ max: z.number().exactOptional(), min: z.number().exactOptional() })
              .exactOptional()
              .openapi({
                description: 'Include issues where the priority score is between min and max',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The priority to filter the issues by (Non-IaC projects only)',
            required: [],
          }),
        severities: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The severity levels of issues to filter the results by' }),
        types: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description: 'The type of issues to filter the results by (Non-IaC projects only)',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    includeDescription: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to `true`, Include issue's description, if set to `false` (by default), it won't (Non-IaC projects only)",
      }),
    includeIntroducedThrough: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to `true`, Include issue's introducedThrough, if set to `false` (by default), it won't. It's for container only projects (Non-IaC projects only)",
      }),
  })
  .openapi({ required: [] })
  .openapi('AggregatedProjectIssuesFilters')

const AllIgnoresSchema = z
  .object({
    issueId: z.array(z.any()).openapi({ description: 'The issue ID that should be ignored.' }),
  })
  .openapi({ required: ['issueId'] })
  .openapi('AllIgnores')

const AllJiraIssuesSchema = z
  .object({
    issueId: z.array(z.any()).openapi({ description: 'The issue ID and relating jira issue.' }),
  })
  .openapi({ required: ['issueId'] })
  .openapi('AllJiraIssues')

const AllProjectsSchema = z.any().openapi('AllProjects')

const AssignmentTypeSchema = z.enum(['auto', 'manual']).openapi('AssignmentType')

const AutoRemediationPrsSchema = z
  .object({
    backlogPrsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
      }),
    freshPrsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, allows automatic remediation of prioritized backlog issues',
      }),
    usePatchRemediation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, allows using patched remediation' }),
  })
  .openapi({ required: [] })
  .openapi('AutoRemediationPrs')

const BrokerSettingsSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('BrokerSettings')

const ComposerLockSchema = z
  .object({ contents: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ComposerLock')

const CreateOrganizationSchema = z.any().openapi('CreateOrganization')

const CreateOrganizationsBodySchema = z
  .object({
    groupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The group ID. The `API_KEY` must have access to this group.' }),
    name: z.string().openapi({ description: 'The name of the new organization' }),
    sourceOrgId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of an organization to copy settings from.\n\nIf provided, this organization must be associated with the same group.\n\nThe items that will be copied are: \nSource control integrations (GitHub, GitLab, BitBucket)\n\\+ Container registries integrations (ACR, Docker Hub, ECR, GCR)\n\\+ Container orchestrators integrations (Kubernetes)\n\\+ PaaS and Serverless Integrations (Heroku, AWS Lambda)\n\\+ Notification integrations (Slack, Jira)\n\\+ Policies\n\\+ Ignore settings\n\\+ Language settings\n\\+ Infrastructure as Code settings\n\\+ Snyk Code settings\n\nThe following will not be copied across:\nService accounts\n\\+ Members\n\\+ Projects\n\\+ Notification preferences',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateOrganizationsBody')

const DeactivateAnIndividualProjectSchema = z.any().openapi('DeactivateAnIndividualProject')

const DeleteTagFromGroupSchema = z.any().openapi('DeleteTagFromGroup')

const DeleteTagBodySchema = z
  .object({
    force: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'force delete tag that has entities (default is `false`).' }),
    key: z.string().exactOptional().openapi({ description: 'Valid tag key.' }),
    value: z.string().exactOptional().openapi({ description: 'Valid tag value.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteTagBody')

const DepGraphSchema = z.any().openapi('DepGraph')

const GraphSchema = z
  .object({
    nodes: z.array(z.any()).openapi({ description: 'Array of node objects.' }),
    rootNodeId: z.string().openapi({ description: 'Root node id.' }),
  })
  .openapi({ required: ['rootNodeId', 'nodes'] })
  .openapi('Graph')

const PkgManagerSchema = z
  .object({
    name: z.string().openapi({ description: 'Package manager name.' }),
    repositories: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('PkgManager')

const DepGraphDataSchema = z
  .object({
    graph: GraphSchema,
    pkgManager: PkgManagerSchema,
    pkgs: z.array(z.any()).openapi({ description: 'Array of package dependencies.' }),
    schemaVersion: z.string().openapi({ description: 'Snyk DepGraph library schema version.' }),
  })
  .openapi({ required: ['schemaVersion', 'pkgManager', 'pkgs', 'graph'] })
  .openapi('DepGraphData')

const DepGraph2Schema = z.any().openapi('DepGraph2')

const DependenciesSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            copyright: z
              .array(z.any())
              .exactOptional()
              .openapi({ description: 'The copyright notices for the package' }),
            dependenciesWithIssues: z
              .array(z.any())
              .exactOptional()
              .openapi({
                description:
                  'The identifiers of dependencies with issues that are depended upon as a result of this dependency',
              }),
            deprecatedVersions: z
              .array(z.any())
              .exactOptional()
              .openapi({
                description: 'The numbers for those versions that are marked as deprecated',
              }),
            firstPublishedDate: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The timestamp for when the specified package was first published.',
              }),
            id: z.string().openapi({ description: 'The identifier of the package' }),
            isDeprecated: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'True if the latest version of the package is marked as deprecated; False otherwise.',
              }),
            issuesCritical: z
              .number()
              .exactOptional()
              .openapi({
                description: 'The number of critical severity issues in this dependency',
              }),
            issuesHigh: z
              .number()
              .exactOptional()
              .openapi({ description: 'The number of high severity issues in this dependency' }),
            issuesLow: z
              .number()
              .exactOptional()
              .openapi({ description: 'The number of low severity issues in this dependency' }),
            issuesMedium: z
              .number()
              .exactOptional()
              .openapi({ description: 'The number of medium severity issues in this dependency' }),
            latestVersion: z
              .string()
              .exactOptional()
              .openapi({ description: 'The latest version available for the specified package' }),
            latestVersionPublishedDate: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The timestamp for when the latest version of the specified package was published.',
              }),
            licenses: z
              .array(
                z
                  .object({
                    id: z.string().openapi({ description: 'The identifier of the license' }),
                    license: z.string().openapi({ description: 'The type of the license' }),
                    title: z.string().openapi({ description: 'The title of the license' }),
                  })
                  .openapi({ required: ['id', 'title', 'license'] }),
              )
              .openapi({ description: 'The licenses of the dependency' }),
            name: z.string().openapi({ description: 'The name of the package' }),
            projects: z
              .array(
                z
                  .object({
                    id: z.string().openapi({ description: 'The identifier of the project' }),
                    name: z.string().openapi({ description: 'The name of the project' }),
                  })
                  .openapi({ required: ['id', 'name'] }),
              )
              .openapi({ description: 'The projects which depend on the dependency' }),
            type: z.string().openapi({ description: 'The package type of the dependency' }),
            version: z.string().openapi({ description: 'The version of the package' }),
          })
          .openapi({ required: ['id', 'name', 'version', 'type', 'licenses', 'projects'] }),
      )
      .openapi({ description: 'A list of issues' }),
    total: z.number().exactOptional().openapi({ description: 'The number of results returned' }),
  })
  .openapi({ required: ['results'] })
  .openapi('Dependencies')

const DependenciesByOrganizationSchema = z.any().openapi('DependenciesByOrganization')

const DependenciesFiltersSchema = z
  .object({
    filters: z
      .object({
        depStatus: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Status of the dependency. Requires reporting entitlement. Options: `deprecated` - Include only deprecated packages; `notDeprecated` - Include all packages that are not marked as deprecated; `any` - Include all packages (default)',
          }),
        dependencies: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'The list of dependency IDs to filter the results by (i.e amdefine@1.0.1 or org.javassist:javassist@3.18.1-GA)',
          }),
        languages: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of languages to filter the results by' }),
        licenses: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The list of license IDs to filter the results by' }),
        projects: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The list of project IDs to filter the results by' }),
        severity: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The severities to filter the results by' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DependenciesFilters')

const EntitlementsByOrganizationSchema = z.any().openapi('EntitlementsByOrganization')

const ErrorResponseSchema = z
  .object({
    code: z.number().openapi({ description: 'The error response code' }),
    error: z
      .object({
        innerErrors: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'A list of additional reasons why the error occurred' }),
        name: z.string().openapi({ description: 'A descriptive message of the error' }),
      })
      .openapi({ required: ['name'] }),
    ok: z.boolean(),
  })
  .openapi({ required: ['code', 'ok', 'error'] })
  .openapi('ErrorResponse')

const FunctionIdSchema = z
  .object({
    'className?': z.string().exactOptional().openapi({ description: 'Class name (Java only).' }),
    'filePath?': z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to file (Javascript only).' }),
    functionName: z.string().exactOptional().openapi({ description: 'Function name.' }),
  })
  .openapi({ required: [] })
  .openapi('FunctionId')

const FunctionSchema = z
  .object({
    functionId: FunctionIdSchema.exactOptional(),
    version: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Versions this function relates to.' }),
  })
  .openapi({ required: [] })
  .openapi('Function')

const GoPkgLockSchema = z
  .object({ contents: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GoPkgLock')

const GradleSchema = z.any().openapi('Gradle')

const GradleFileSchema = z
  .object({
    contents: z
      .string()
      .openapi({
        description: 'The contents of the file, encoded according to the `encoding` field.',
      }),
  })
  .openapi({ required: ['contents'] })
  .openapi('GradleFile')

const GradleRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({ target: GradleFileSchema })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('GradleRequestPayload')

const GraphDependencySchema = z
  .object({ nodeId: z.string().openapi({ description: 'Node id unique across the graph.' }) })
  .openapi({ required: ['nodeId'] })
  .openapi('GraphDependency')

const GroupLevelAuditLogsSchema = z.any().openapi('GroupLevelAuditLogs')

const GroupSettingsSchema = z
  .object({
    requestAccess: z
      .object({
        enabled: z
          .boolean()
          .openapi({
            description:
              'Choose whether a user may request access to Snyk orgs in this group that they are not a member of.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Can only be updated if `API_KEY` has edit access to request access settings.',
        required: ['enabled'],
      }),
    sessionLength: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupSettings')

const GroupsAuditLogsFiltersSchema = z
  .object({
    filters: z
      .object({
        email: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "User email address. Will fetch only audit logs originated from this user's actions. Ignored if the userId filter is set.",
          }),
        event: z
          .enum([
            'api.access',
            'group.cloud_config.settings.edit',
            'group.create',
            'group.delete',
            'group.edit',
            'group.feature_flags.edit',
            'group.notification_settings.edit',
            'group.org.add',
            'group.org.remove',
            'group.policy.create',
            'group.policy.delete',
            'group.policy.edit',
            'group.request_access_settings.edit',
            'group.role.create',
            'group.role.edit',
            'group.service_account.create',
            'group.service_account.delete',
            'group.service_account.edit',
            'group.settings.edit',
            'group.settings.feature_flag.edit',
            'group.sso.auth0_connection.create',
            'group.sso.auth0_connection.edit',
            'group.sso.create',
            'group.sso.edit',
            'group.tag.create',
            'group.tag.delete',
            'group.user.add',
            'group.user.provision.accept',
            'group.user.provision.create',
            'group.user.provision.delete',
            'group.user.remove',
            'group.user.role.edit',
          ])
          .exactOptional()
          .openapi({
            description:
              'Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request.',
          }),
        excludeEvent: z
          .enum([
            'api.access',
            'group.cloud_config.settings.edit',
            'group.create',
            'group.delete',
            'group.edit',
            'group.feature_flags.edit',
            'group.notification_settings.edit',
            'group.org.add',
            'group.org.remove',
            'group.policy.create',
            'group.policy.delete',
            'group.policy.edit',
            'group.request_access_settings.edit',
            'group.role.create',
            'group.role.edit',
            'group.service_account.create',
            'group.service_account.delete',
            'group.service_account.edit',
            'group.settings.edit',
            'group.settings.feature_flag.edit',
            'group.sso.auth0_connection.create',
            'group.sso.auth0_connection.edit',
            'group.sso.create',
            'group.sso.edit',
            'group.tag.create',
            'group.tag.delete',
            'group.user.add',
            'group.user.provision.accept',
            'group.user.provision.create',
            'group.user.provision.delete',
            'group.user.remove',
            'group.user.role.edit',
          ])
          .exactOptional()
          .openapi({
            description:
              'Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request.',
          }),
        projectId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Will return only logs for this specific project.' }),
        userId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "User public ID. Will fetch only audit logs originated from this user's actions.",
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('GroupsAuditLogsFilters')

const IgnoreSchema = z
  .object({
    ignorePath: z
      .object({
        created: z
          .string()
          .exactOptional()
          .openapi({ description: 'The timestamp that the issue was ignored.' }),
        disregardIfFixable: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Only ignore the issue if no upgrade or patch is available.' }),
        expires: z
          .string()
          .exactOptional()
          .openapi({ description: 'The timestamp that the issue will no longer be ignored.' }),
        ignoredBy: z
          .object({
            email: z
              .string()
              .openapi({ description: 'The email of the person who ignored the issue.' }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'The user ID of the person who ignored the issue.' }),
            name: z
              .string()
              .openapi({ description: 'The name of the person who ignored the issue.' }),
          })
          .exactOptional()
          .openapi({
            description: 'The person who ignored the issue.',
            required: ['name', 'email'],
          }),
        reason: z
          .string()
          .exactOptional()
          .openapi({ description: 'The reason that the issue was ignored.' }),
        reasonType: z
          .enum(['not-vulnerable', 'wont-fix', 'temporary-ignore'])
          .exactOptional()
          .openapi({ description: 'The classification of the ignore.' }),
      })
      .openapi({
        description: 'The path that should be ignored. Wildcards can be specified with a `*`.',
        required: [],
      }),
  })
  .openapi({ required: ['ignorePath'] })
  .openapi('Ignore')

const IgnoreRuleSchema = z
  .object({
    disregardIfFixable: z
      .boolean()
      .openapi({ description: 'Only ignore the issue if no upgrade or patch is available.' }),
    expires: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp that the issue will no longer be ignored.' }),
    ignorePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to ignore (default is `*` which represents all paths).' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason that the issue was ignored.' }),
    reasonType: z
      .enum(['not-vulnerable', 'wont-fix', 'temporary-ignore'])
      .openapi({ description: 'The classification of the ignore.' }),
  })
  .openapi({ required: ['reasonType', 'disregardIfFixable'] })
  .openapi('IgnoreRule')

const IgnoreRulesSchema = z.array(z.any()).openapi('IgnoreRules')

const IgnoredIssuesSchema = z.any().openapi('IgnoredIssues')

const IgnoresSchema = z.array(z.any()).openapi('Ignores')

const ImportSchema = z.any().openapi('Import')

const ImportJobSchema = z.any().openapi('ImportJob')

const IndividualProjectSchema = z.any().openapi('IndividualProject')

const IntegrationSchema = z.any().openapi('Integration')

const IntegrationCredentialsSchema = z.object({}).openapi('IntegrationCredentials')

const IntegrationTypeSchema = z
  .enum([
    'acr',
    'artifactory-cr',
    'azure-repos',
    'bitbucket-cloud',
    'bitbucket-server',
    'digitalocean-cr',
    'docker-hub',
    'ecr',
    'gcr',
    'github',
    'github-cr',
    'github-enterprise',
    'gitlab',
    'gitlab-cr',
    'google-artifact-cr',
    'harbor-cr',
    'nexus-cr',
    'quay-cr',
  ])
  .openapi('IntegrationType')

const IntegrationAuthenticationSchema = z.any().openapi('IntegrationAuthentication')

const IntegrationBrokerTokenProvisioningSchema = z
  .any()
  .openapi('IntegrationBrokerTokenProvisioning')

const IntegrationBrokerTokenSwitchingSchema = z.any().openapi('IntegrationBrokerTokenSwitching')

const IntegrationByTypeSchema = z.any().openapi('IntegrationByType')

const IntegrationCloningSchema = z.any().openapi('IntegrationCloning')

const PullRequestAssignmentSchema = z
  .object({
    assignees: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          "an array of usernames that have contributed to the organization's project(s).",
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: "if the organization's project(s) will assign Snyk pull requests." }),
    type: AssignmentTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PullRequestAssignment')

const IntegrationSettingsSchema = z
  .object({
    autoDepUpgradeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the functionality is enabled' }),
    autoDepUpgradeIgnoredDependencies: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'A list of strings defining what dependencies should be ignored' }),
    autoDepUpgradeLimit: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'A limit on how many automatic dependency upgrade PRs can be opened simultaneously',
      }),
    autoDepUpgradeMinAge: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The age (in days) that an automatic dependency check is valid for',
      }),
    autoRemediationPrs: z
      .object({
        backlogPrsEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If true, allows automatic remediation of prioritized backlog issues',
          }),
        freshPrsEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
          }),
        usePatchRemediation: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, allows using patched remediation' }),
      })
      .exactOptional()
      .openapi({ description: 'Defines automatic remediation policies', required: [] }),
    dockerfileSCMEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes',
      }),
    manualRemediationPrs: z
      .object({
        usePatchRemediation: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, allows using patched remediation' }),
      })
      .exactOptional()
      .openapi({ description: 'Defines manual remediation policies', required: [] }),
    pullRequestAssignment: PullRequestAssignmentSchema.exactOptional(),
    pullRequestFailOnAnyVulns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If an opened PR should fail to be validated if any vulnerable dependencies have been detected',
      }),
    pullRequestFailOnlyForHighSeverity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If an opened PR only should fail its validation if any dependencies are marked as being of high severity',
      }),
    pullRequestTestEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If opened PRs should be tested' }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationSettings')

const IntegrationsSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'The name of an integration' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alphanumeric UUID including - with a limit of 36 characters' }),
  })
  .openapi({ required: [] })
  .openapi('Integrations')

const IntegrationsBodySchema = z.object({}).openapi('IntegrationsBody')

const IssueCountsSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            count: z.number().openapi({ description: 'The number of issues' }),
            day: z.string().openapi({ description: 'The date in the format `YYYY-MM-DD`' }),
            fixable: z
              .object({
                false: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The number of non-fixable issues' }),
                true: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The number of fixable issues' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            severity: z
              .object({
                critical: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The number of critical severity issues' }),
                high: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The number of high severity issues' }),
                low: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The number of low severity issues' }),
                medium: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The number of medium severity issues' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: ['day', 'count'] }),
      )
      .openapi({ description: 'A list of issue counts by day' }),
  })
  .openapi({ required: ['results'] })
  .openapi('IssueCounts')

const PriorityScoreSchema = z
  .object({ max: z.number().exactOptional(), min: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('PriorityScore')

const IssueCountsFiltersSchema = z
  .object({
    filters: z
      .object({
        fixable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.',
          }),
        ignored: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
          }),
        isPatchable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable',
          }),
        isPinnable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable',
          }),
        isUpgradable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable',
          }),
        languages: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of languages to filter the results by' }),
        orgs: z
          .array(z.any())
          .openapi({ description: 'The list of org IDs to filter the results by' }),
        patched: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched',
          }),
        priorityScore: PriorityScoreSchema.exactOptional(),
        projects: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'The list of project IDs to filter issues by, max projects allowed is 1000',
          }),
        severity: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The severity levels of issues to filter the results by' }),
        types: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of issues to filter the results by' }),
      })
      .exactOptional()
      .openapi({ required: ['orgs'] }),
  })
  .openapi({ required: [] })
  .openapi('IssueCountsFilters')

const IssueCountsOverTimeSchema = z.any().openapi('IssueCountsOverTime')

const IssuePathsSchema = z
  .object({
    links: z
      .object({
        last: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the last page of paths for the issue' }),
        next: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL of the next page of paths for the issue, if not on the last page',
          }),
        prev: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL of the previous page of paths for the issue, if not on the first page',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Onward links from this record', required: [] }),
    paths: z
      .array(
        z.array(
          z
            .object({
              fixVersion: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The version to upgrade the package to in order to resolve the issue. This will only appear on the first element of the path, and only if the issue can be fixed by upgrading packages. Note that if the fix requires upgrading transitive dependencies, `fixVersion` will be the same as `version`.',
                }),
              name: z.string().exactOptional().openapi({ description: 'The package name' }),
              version: z.string().exactOptional().openapi({ description: 'The package version' }),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional()
      .openapi({ description: 'A list of the dependency paths that introduce the issue' }),
    snapshotId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the snapshot for which the paths have been found',
      }),
    total: z.number().exactOptional().openapi({ description: 'The total number of results' }),
  })
  .openapi({ required: [] })
  .openapi('IssuePaths')

const IssuesSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            fixedDate: z
              .string()
              .exactOptional()
              .openapi({ description: 'The date that the issue was fixed' }),
            introducedDate: z
              .string()
              .openapi({ description: 'The date that the issue was introduced into the project' }),
            isFixed: z.boolean().openapi({ description: 'Whether the issue has been fixed' }),
            issue: z
              .object({
                CVSSv3: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The CVSS v3 string that signifies how the CVSS score was calculated (not applicable to licenses)',
                  }),
                credit: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'The list of people responsible for first uncovering or reporting the issue (not applicable to licenses)',
                  }),
                cvssScore: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The CVSS score that results from running the CVSSv3 string (not applicable to licenses)',
                  }),
                disclosureTime: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The date that the vulnerability was first disclosed (not applicable to licenses)',
                  }),
                exploitMaturity: z
                  .string()
                  .openapi({ description: 'The exploit maturity of the issue' }),
                id: z.string().openapi({ description: 'The identifier of the issue' }),
                identifiers: z
                  .object({
                    CVE: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Common Vulnerability Enumeration identifiers' }),
                    CWE: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'Common Weakness Enumeration identifiers' }),
                    OSVDB: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({
                        description:
                          'Identifiers assigned by the Open Source Vulnerability Database (OSVDB)',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'External identifiers assigned to the issue (not applicable to licenses)',
                    required: [],
                  }),
                ignored: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'The list of ignore rules that were applied to the issue (only present if issue was ignored and no `groupBy` in the API request)',
                  }),
                isIgnored: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Whether the issue has been ignored (only present if there is no `groupBy` in the API request)',
                  }),
                isPatchable: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Whether the issue can be patched' }),
                isPatched: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Whether the issue has been patched (not applicable to licenses and only present if there is no `groupBy` in the API request)',
                  }),
                isPinnable: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Whether the issue can be pinned' }),
                isUpgradable: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Whether the issue can be fixed by upgrading to a later version of the dependency',
                  }),
                jiraIssueUrl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The link to the Jira issue attached to the vulnerability',
                  }),
                language: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The language of the issue' }),
                originalSeverity: z
                  .string()
                  .openapi({
                    description:
                      'The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied',
                  }),
                package: z
                  .string()
                  .openapi({ description: 'The name of the package that the issue relates to' }),
                packageManager: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The package manager of the issue' }),
                patches: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of patches available for the given issue (not applicable to licenses)',
                  }),
                priorityScore: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The priority score ranging between 0-1000' }),
                publicationTime: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The date that the vulnerability was first published by Snyk (not applicable to licenses)',
                  }),
                semver: z
                  .object({
                    unaffected: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The ranges that are unaffected by the issue' }),
                    vulnerable: z
                      .array(z.any())
                      .exactOptional()
                      .openapi({ description: 'The ranges that are vulnerable to the issue' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The ranges that are vulnerable and unaffected by the issue',
                    required: [],
                  }),
                severity: z
                  .string()
                  .openapi({
                    description: 'The severity status of the issue, after policies are applied',
                  }),
                title: z.string().openapi({ description: 'The issue title' }),
                type: z
                  .string()
                  .openapi({ description: 'The issue type, can be "vuln", "license"' }),
                uniqueSeveritiesList: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'A list of all severities in issue per projects' }),
                url: z
                  .string()
                  .openapi({ description: 'URL to a page containing information about the issue' }),
                version: z
                  .string()
                  .openapi({ description: 'The version of the package that the issue relates to' }),
              })
              .openapi({
                required: [
                  'url',
                  'id',
                  'title',
                  'type',
                  'package',
                  'version',
                  'severity',
                  'originalSeverity',
                  'exploitMaturity',
                ],
              }),
            patchedDate: z
              .string()
              .exactOptional()
              .openapi({ description: 'The date that the issue was patched' }),
          })
          .openapi({ required: ['issue', 'isFixed', 'introducedDate'] }),
      )
      .openapi({ description: 'A list of issues' }),
    total: z.number().openapi({ description: 'The total number of results found' }),
  })
  .openapi({ required: ['results', 'total'] })
  .openapi('Issues')

const IssuesFiltersSchema = z
  .object({
    filters: z
      .object({
        exploitMaturity: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description: 'The exploit maturity levels of issues to filter the results by',
          }),
        fixable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.',
          }),
        identifier: z
          .string()
          .exactOptional()
          .openapi({ description: 'Search term to filter issue name by, or an exact CVE or CWE' }),
        ignored: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
          }),
        isFixed: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are fixed, if set to `false`, only include issues which are not fixed',
          }),
        isPatchable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable',
          }),
        isPinnable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable',
          }),
        isUpgradable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable',
          }),
        issues: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The list of issue IDs to filter issues by' }),
        languages: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of languages to filter the results by' }),
        orgs: z
          .array(z.any())
          .openapi({ description: 'The list of org IDs to filter the results by' }),
        patched: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched',
          }),
        priorityScore: PriorityScoreSchema.exactOptional(),
        projects: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'The list of project IDs to filter issues by, max projects allowed is 1000',
          }),
        severity: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The severity levels of issues to filter the results by' }),
        types: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of issues to filter the results by' }),
      })
      .exactOptional()
      .openapi({ required: ['orgs'] }),
  })
  .openapi({ required: [] })
  .openapi('IssuesFilters')

const JiraIssueSchema = z
  .object({
    jiraIssue: z
      .object({
        id: z.string().exactOptional().openapi({ description: 'The id of the issue in Jira.' }),
        key: z.string().exactOptional().openapi({ description: 'The key of the issue in Jira.' }),
      })
      .exactOptional()
      .openapi({ description: 'The details about the jira issue.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('JiraIssue')

const JiraIssueRequestSchema = z
  .object({
    fields: z
      .object({
        issuetype: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.',
          }),
        project: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.',
          }),
        summary: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('JiraIssueRequest')

const LatestIssuesSchema = z.any().openapi('LatestIssues')

const LatestIssueCountsSchema = z.any().openapi('LatestIssueCounts')

const LatestProjectCountsSchema = z.any().openapi('LatestProjectCounts')

const LicensesSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            dependencies: z
              .array(
                z
                  .object({
                    id: z.string().openapi({ description: 'The identifier of the package' }),
                    name: z.string().openapi({ description: 'The name of the package' }),
                    packageManager: z
                      .string()
                      .openapi({ description: 'The package manager of the dependency' }),
                    version: z.string().openapi({ description: 'The version of the package' }),
                  })
                  .openapi({ required: ['id', 'name', 'version', 'packageManager'] }),
              )
              .openapi({
                description:
                  'The dependencies of projects in the organization which have the license',
              }),
            id: z.string().openapi({ description: 'The identifier of the license' }),
            instructions: z
              .string()
              .exactOptional()
              .openapi({ description: 'Custom instructions assigned to this license' }),
            projects: z
              .array(
                z
                  .object({
                    id: z.string().openapi({ description: 'The identifier of the project' }),
                    name: z.string().openapi({ description: 'The name of the project' }),
                  })
                  .openapi({ required: ['id', 'name'] }),
              )
              .openapi({ description: 'The projects which contain the license' }),
            severity: z
              .enum(['none', 'high', 'medium', 'low'])
              .exactOptional()
              .openapi({ description: 'The severity assigned to this license' }),
          })
          .openapi({ required: ['id', 'dependencies', 'projects'] }),
      )
      .openapi({ description: 'A list of licenses' }),
    total: z.number().exactOptional().openapi({ description: 'The number of results returned' }),
  })
  .openapi({ required: ['results'] })
  .openapi('Licenses')

const LicensesByOrganizationSchema = z.any().openapi('LicensesByOrganization')

const LicensesFiltersSchema = z
  .object({
    filters: z
      .object({
        dependencies: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The list of dependency IDs to filter the results by' }),
        languages: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of languages to filter the results by' }),
        licenses: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The list of license IDs to filter the results by' }),
        projects: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The list of project IDs to filter the results by' }),
        severity: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The severities to filter the results by' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('LicensesFilters')

const ListAllOrganizationsInAGroupSchema = z.any().openapi('ListAllOrganizationsInAGroup')

const ProjectAttributes2Schema = z
  .object({
    criticality: z.array(z.any()).exactOptional(),
    environment: z.array(z.any()).exactOptional(),
    lifecycle: z.array(z.any()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectAttributes2')

const ProjectWithoutRemediationSchema = z
  .object({
    attributes: ProjectAttributes2Schema.exactOptional(),
    branch: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The monitored branch (if available)' }),
    browseUrl: z.string().exactOptional().openapi({ description: 'URL with project overview' }),
    created: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date that the project was created on' }),
    id: z.string().exactOptional().openapi({ description: 'The project identifier' }),
    imageBaseImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the base image' }),
    imageCluster: z
      .string()
      .exactOptional()
      .openapi({ description: 'For Kubernetes projects shows the origin cluster name' }),
    imageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the ID of the image' }),
    imagePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the platform of the image' }),
    imageTag: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the tag of the image' }),
    importingUser: z
      .object({
        email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
        id: z.string().exactOptional().openapi({ description: 'The ID of the user.' }),
        name: z.string().exactOptional().openapi({ description: 'The name of the user.' }),
        username: z.string().exactOptional().openapi({ description: 'The username of the user.' }),
      })
      .exactOptional()
      .openapi({ description: 'The user who imported the project', required: [] }),
    isMonitored: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Describes if a project is currently monitored or it is de-activated',
      }),
    issueCountsBySeverity: z
      .object({
        critical: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of critical severity vulnerabilities' }),
        high: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of high severity vulnerabilities' }),
        low: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of low severity vulnerabilities' }),
        medium: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of medium severity vulnerabilities' }),
      })
      .exactOptional()
      .openapi({
        description: 'Number of known vulnerabilities in the project, not including ignored issues',
        required: [],
      }),
    lastTestedDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date on which the most recent test was conducted for this project',
      }),
    name: z.string().exactOptional(),
    origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The origin the project was added from' }),
    owner: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The user who owns the project, null if not set\n\n{\n    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",\n    "name": "example-user@snyk.io",\n    "username": "exampleUser",\n    "email": "example-user@snyk.io"\n}',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the project is read-only' }),
    remoteRepoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project remote repository url. Only set for projects imported via the Snyk CLI tool.',
      }),
    tags: z.array(z.any()).exactOptional().openapi({ description: 'List of applied tags' }),
    targetReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image',
      }),
    testFrequency: z
      .string()
      .exactOptional()
      .openapi({
        description: "The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'",
      }),
    totalDependencies: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of dependencies of the project' }),
    type: z.string().exactOptional().openapi({ description: 'The package manager of the project' }),
  })
  .openapi({ required: [] })
  .openapi('ProjectWithoutRemediation')

const ListAllProjectsSchema = z
  .object({
    org: z
      .object({
        id: z.string().exactOptional().openapi({ description: 'The identifier of the org' }),
        name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    projects: z
      .array(ProjectWithoutRemediationSchema)
      .exactOptional()
      .openapi({ description: "A list of org's projects" }),
  })
  .openapi({ required: [] })
  .openapi('ListAllProjects')

const ListAllRolesInAGroupSchema = z.any().openapi('ListAllRolesInAGroup')

const ListAllTagsInAGroupSchema = z.any().openapi('ListAllTagsInAGroup')

const ListMembersInAGroupSchema = z.any().openapi('ListMembersInAGroup')

const ManageOrganizationSchema = z.any().openapi('ManageOrganization')

const ManageRolesInOrganizationSchema = z.any().openapi('ManageRolesInOrganization')

const MavenSchema = z.any().openapi('Maven')

const MavenAdditionalFileSchema = z
  .object({
    contents: z
      .string()
      .openapi({
        description: 'The contents of the file, encoded according to the `encoding` field.',
      }),
  })
  .openapi({ required: ['contents'] })
  .openapi('MavenAdditionalFile')

const MavenFileSchema = z
  .object({
    contents: z
      .string()
      .openapi({
        description: 'The contents of the file, encoded according to the `encoding` field.',
      }),
  })
  .openapi({ required: ['contents'] })
  .openapi('MavenFile')

const MavenRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        additional: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'additional manifest files (if needed), encoded according the the "encoding" field.',
          }),
        target: MavenFileSchema,
      })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('MavenRequestPayload')

const MembersInAnOrganizationOfAGroupSchema = z.any().openapi('MembersInAnOrganizationOfAGroup')

const MembersInOrganizationSchema = z.any().openapi('MembersInOrganization')

const MonitorGraphSchema = z
  .object({
    nodes: z.array(z.any()).openapi({ description: 'Array of node objects.' }),
    rootNodeId: z
      .string()
      .openapi({
        description: 'Root node id. Note the root node name is used as your project name.',
      }),
  })
  .openapi({ required: ['rootNodeId', 'nodes'] })
  .openapi('MonitorGraph')

const MonitorPkgManagerSchema = z
  .object({
    name: z.string().openapi({ description: 'Package manager name.' }),
    repositories: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('MonitorPkgManager')

const MonitorDepGraphDataSchema = z
  .object({
    graph: MonitorGraphSchema,
    pkgManager: MonitorPkgManagerSchema,
    pkgs: z.array(z.any()).openapi({ description: 'Array of package dependencies.' }),
    schemaVersion: z.string().openapi({ description: 'Snyk DepGraph library schema version.' }),
  })
  .openapi({ required: ['schemaVersion', 'pkgManager', 'pkgs', 'graph'] })
  .openapi('MonitorDepGraphData')

const MonitorGraphDependencySchema = z
  .object({ nodeId: z.string().openapi({ description: 'Node id unique across the graph.' }) })
  .openapi({ required: ['nodeId'] })
  .openapi('MonitorGraphDependency')

const MonitorMetaDataSchema = z
  .object({
    targetFramework: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for a NuGet or Paket DepGraph only. Specify the target framework in your project file using Target Framework Monikers (TFMs). For example, netstandard1.0, netcoreapp1.0 or net452. Test each framework separately if you have multiple defined.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MonitorMetaData')

const MonitorNodeSchema = z
  .object({
    deps: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'An array of package ids this package depends on.' }),
    nodeId: z.string().openapi({ description: 'Node id unique across the graph.' }),
    pkgId: z
      .string()
      .openapi({
        description:
          'Package id reference should match id in pkg array and take the format name@version.',
      }),
  })
  .openapi({ required: ['nodeId', 'pkgId'] })
  .openapi('MonitorNode')

const MonitorPackageInfoSchema = z
  .object({
    name: z.string().openapi({ description: 'Package name.' }),
    version: z.string().openapi({ description: 'Package version.' }),
  })
  .openapi({ required: ['name', 'version'] })
  .openapi('MonitorPackageInfo')

const MonitorPackageSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Unique package identifier, should take the format name@version.' }),
    info: MonitorPackageInfoSchema,
  })
  .openapi({ required: ['id', 'info'] })
  .openapi('MonitorPackage')

const MonitorRepositorySchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "deb, apk and rpm package managers should use an alias to indicate the target Operating System, for example 'debian:10'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('MonitorRepository')

const MoveProjectSchema = z.any().openapi('MoveProject')

const MyUserDetailsSchema = z.any().openapi('MyUserDetails')

const NewIssuesNotificationSettingRequestSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether notifications should be sent' }),
    issueSeverity: z
      .enum(['all', 'high'])
      .openapi({
        description:
          'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
      }),
    issueType: z
      .enum(['all', 'vuln', 'license', 'none'])
      .openapi({
        description:
          'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
      }),
  })
  .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] })
  .openapi('NewIssuesNotificationSettingRequest')

const NodeSchema = z
  .object({
    deps: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'An array of package ids this package depends on.' }),
    nodeId: z.string().openapi({ description: 'Node id unique across the graph.' }),
    pkgId: z
      .string()
      .openapi({
        description:
          'Package id reference should match id in pkg array and take the format name@version.',
      }),
  })
  .openapi({ required: ['nodeId', 'pkgId'] })
  .openapi('Node')

const NotificationSettingResponseSchema = NewIssuesNotificationSettingRequestSchema.and(
  z
    .object({
      inherited: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the setting was found on the requested context directly or inherited from a parent',
        }),
    })
    .openapi({ required: [] }),
).openapi('NotificationSettingResponse')

const NotificationSettingsSchema = z.any().openapi('NotificationSettings')

const SimpleNotificationSettingRequestSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Whether notifications should be sent' }) })
  .openapi({ required: ['enabled'] })
  .openapi('SimpleNotificationSettingRequest')

const NotificationSettingsRequestSchema = z
  .object({
    'new-issues-remediations': NewIssuesNotificationSettingRequestSchema.exactOptional(),
    'project-imported': SimpleNotificationSettingRequestSchema.exactOptional(),
    'test-limit': SimpleNotificationSettingRequestSchema.exactOptional(),
    'weekly-report': SimpleNotificationSettingRequestSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationSettingsRequest')

const SimpleNotificationSettingResponseSchema = SimpleNotificationSettingRequestSchema.and(
  z
    .object({
      inherited: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the setting was found on the requested context directly or inherited from a parent',
        }),
    })
    .openapi({ required: [] }),
).openapi('SimpleNotificationSettingResponse')

const NotificationSettingsResponseSchema = z
  .object({
    'new-issues-remediations': NotificationSettingResponseSchema.exactOptional(),
    'project-imported': SimpleNotificationSettingResponseSchema.exactOptional(),
    'test-limit': SimpleNotificationSettingResponseSchema.exactOptional(),
    'weekly-report': SimpleNotificationSettingResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationSettingsResponse')

const OrgAuditLogsFiltersSchema = z
  .object({
    filters: z
      .object({
        email: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "User email address. Will fetch only audit logs originated from this user's actions. Ignored if the userId filter is set.",
          }),
        event: z
          .enum([
            'api.access',
            'org.billing.info.edit',
            'org.billing.subscription.edit',
            'org.cloud_config.settings.edit',
            'org.create',
            'org.delete',
            'org.edit',
            'org.ignore_policy.edit',
            'org.integration.create',
            'org.integration.delete',
            'org.integration.edit',
            'org.integration.settings.edit',
            'org.language_settings.edit',
            'org.license_rule.create',
            'org.license_rule.delete',
            'org.license_rule.edit',
            'org.notification_settings.edit',
            'org.policy.edit',
            'org.project.add',
            'org.project.attributes.edit',
            'org.project.delete',
            'org.project.edit',
            'org.project.fix_pr.auto_open',
            'org.project.fix_pr.manual_open',
            'org.project.ignore.create',
            'org.project.ignore.delete',
            'org.project.ignore.edit',
            'org.project.monitor',
            'org.project.pr_check.edit',
            'org.project.remove',
            'org.project.settings.delete',
            'org.project.settings.edit',
            'org.project.stop_monitor',
            'org.project.tag.add',
            'org.project.tag.remove',
            'org.project.test',
            'org.request_access_settings.edit',
            'org.sast_settings.edit',
            'org.service_account.create',
            'org.service_account.delete',
            'org.service_account.edit',
            'org.service_account.membership.upsert',
            'org.settings.feature_flag.edit',
            'org.target.create',
            'org.target.delete',
            'org.user.add',
            'org.user.invite',
            'org.user.invite.accept',
            'org.user.invite.revoke',
            'org.user.invite_link.accept',
            'org.user.invite_link.create',
            'org.user.invite_link.revoke',
            'org.user.leave',
            'org.user.provision.accept',
            'org.user.provision.create',
            'org.user.provision.delete',
            'org.user.remove',
            'org.user.role.create',
            'org.user.role.delete',
            'org.user.role.details.edit',
            'org.user.role.edit',
            'org.user.role.permissions.edit',
            'org.webhook.add',
            'org.webhook.delete',
          ])
          .exactOptional()
          .openapi({
            description:
              'Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request.',
          }),
        excludeEvent: z
          .enum([
            'api.access',
            'org.billing.info.edit',
            'org.billing.subscription.edit',
            'org.cloud_config.settings.edit',
            'org.create',
            'org.delete',
            'org.edit',
            'org.ignore_policy.edit',
            'org.integration.create',
            'org.integration.delete',
            'org.integration.edit',
            'org.integration.settings.edit',
            'org.language_settings.edit',
            'org.license_rule.create',
            'org.license_rule.delete',
            'org.license_rule.edit',
            'org.notification_settings.edit',
            'org.policy.edit',
            'org.project.add',
            'org.project.attributes.edit',
            'org.project.delete',
            'org.project.edit',
            'org.project.fix_pr.auto_open',
            'org.project.fix_pr.manual_open',
            'org.project.ignore.create',
            'org.project.ignore.delete',
            'org.project.ignore.edit',
            'org.project.monitor',
            'org.project.pr_check.edit',
            'org.project.remove',
            'org.project.settings.delete',
            'org.project.settings.edit',
            'org.project.stop_monitor',
            'org.project.tag.add',
            'org.project.tag.remove',
            'org.project.test',
            'org.request_access_settings.edit',
            'org.sast_settings.edit',
            'org.service_account.create',
            'org.service_account.delete',
            'org.service_account.edit',
            'org.service_account.membership.upsert',
            'org.settings.feature_flag.edit',
            'org.target.create',
            'org.target.delete',
            'org.user.add',
            'org.user.invite',
            'org.user.invite.accept',
            'org.user.invite.revoke',
            'org.user.invite_link.accept',
            'org.user.invite_link.create',
            'org.user.invite_link.revoke',
            'org.user.leave',
            'org.user.provision.accept',
            'org.user.provision.create',
            'org.user.provision.delete',
            'org.user.remove',
            'org.user.role.create',
            'org.user.role.delete',
            'org.user.role.details.edit',
            'org.user.role.edit',
            'org.user.role.permissions.edit',
            'org.webhook.add',
            'org.webhook.delete',
          ])
          .exactOptional()
          .openapi({
            description:
              'Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request.',
          }),
        projectId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Will return only logs for this specific project.' }),
        userId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "User public ID. Will fetch only audit logs originated from this user's actions.",
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('OrgAuditLogsFilters')

const OrgSettingsRequestSchema = z
  .object({
    requestAccess: z
      .object({
        enabled: z
          .boolean()
          .openapi({ description: 'Whether requesting access to the organization is enabled.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Can only be updated if `API_KEY` has edit access to request access settings.',
        required: ['enabled'],
      }),
  })
  .openapi({ required: [] })
  .openapi('OrgSettingsRequest')

const OrgSettingsResponseSchema = z
  .object({
    requestAccess: z
      .object({
        enabled: z
          .boolean()
          .openapi({ description: 'Whether requesting access to the organization is enabled.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Will only be returned if `API_KEY` has read access to request access settings.',
        required: ['enabled'],
      }),
  })
  .openapi({ required: [] })
  .openapi('OrgSettingsResponse')

const OrganizationLevelAuditLogsSchema = z.any().openapi('OrganizationLevelAuditLogs')

const OrganizationSettingsSchema = z.any().openapi('OrganizationSettings')

const OrganizationsInAGroupSchema = z.any().openapi('OrganizationsInAGroup')

const PackageInfoSchema = z
  .object({
    name: z.string().openapi({ description: 'Package name.' }),
    version: z.string().openapi({ description: 'Package version.' }),
  })
  .openapi({ required: ['name', 'version'] })
  .openapi('PackageInfo')

const PackageSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Unique package identifier, should take the format name@version.' }),
    info: PackageInfoSchema,
  })
  .openapi({ required: ['id', 'info'] })
  .openapi('Package')

const PackageLockJsonFileSchema = z
  .object({
    contents: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The contents of the file, encoded according to the `encoding` field.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PackageLockJsonFile')

const PatchSchema = z
  .object({
    comments: z.array(z.any()).exactOptional(),
    id: z.string().exactOptional(),
    modificationTime: z.string().exactOptional(),
    urls: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Links to patch files to fix an issue.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Versions this patch is applicable to, in semver format.' }),
  })
  .openapi({ required: [] })
  .openapi('Patch')

const PingSchema = z.any().openapi('Ping')

const ProjectSchema = z
  .object({
    attributes: ProjectAttributes2Schema.exactOptional(),
    branch: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The monitored branch (if available)' }),
    browseUrl: z.string().exactOptional().openapi({ description: 'URL with project overview' }),
    created: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date that the project was created on' }),
    hostname: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The hostname for a CLI project, null if not set' }),
    id: z.string().exactOptional().openapi({ description: 'The project identifier' }),
    imageBaseImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the base image' }),
    imageCluster: z
      .string()
      .exactOptional()
      .openapi({ description: 'For Kubernetes projects shows the origin cluster name' }),
    imageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the ID of the image' }),
    imagePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the platform of the image' }),
    imageTag: z
      .string()
      .exactOptional()
      .openapi({ description: 'For docker projects shows the tag of the image' }),
    importingUser: z
      .object({
        email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
        id: z.string().exactOptional().openapi({ description: 'The ID of the user.' }),
        name: z.string().exactOptional().openapi({ description: 'The name of the user.' }),
        username: z.string().exactOptional().openapi({ description: 'The username of the user.' }),
      })
      .exactOptional()
      .openapi({ description: 'The user who imported the project', required: [] }),
    isMonitored: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Describes if a project is currently monitored or it is de-activated',
      }),
    issueCountsBySeverity: z
      .object({
        critical: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of critical severity vulnerabilities' }),
        high: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of high severity vulnerabilities' }),
        low: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of low severity vulnerabilities' }),
        medium: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of medium severity vulnerabilities' }),
      })
      .exactOptional()
      .openapi({
        description: 'Number of known vulnerabilities in the project, not including ignored issues',
        required: [],
      }),
    lastTestedDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date on which the most recent test was conducted for this project',
      }),
    name: z.string().exactOptional(),
    origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The origin the project was added from' }),
    owner: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The user who owns the project, null if not set\n\n{\n    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",\n    "name": "example-user@snyk.io",\n    "username": "exampleUser",\n    "email": "example-user@snyk.io"\n}',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the project is read-only' }),
    remediation: z
      .object({
        patch: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Recommended patches to apply to the project\n\n(object)\n   paths (array) - List of paths to the vulnerable dependency that can be patched',
          }),
        pin: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Recommended pins to apply to the project (Python only)\n\n(object)\n    + upgradeTo (string, required) - `package@version` to upgrade to\n    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade\n    + isTransitive (boolean) - Describes if the dependency to be pinned is a transitive dependency',
          }),
        upgrade: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'Recommended upgrades to apply to the project\n\n(object)\n    + upgradeTo (string, required) - `package@version` to upgrade to\n    + upgrades (array[string], required) -  List of `package@version` that will be upgraded as part of this upgrade\n    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Remediation data (if available)', required: [] }),
    remoteRepoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project remote repository url. Only set for projects imported via the Snyk CLI tool.',
      }),
    tags: z.array(z.any()).exactOptional().openapi({ description: 'List of applied tags' }),
    targetReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image',
      }),
    testFrequency: z
      .string()
      .exactOptional()
      .openapi({
        description: "The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'",
      }),
    totalDependencies: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of dependencies of the project' }),
    type: z.string().exactOptional().openapi({ description: 'The package manager of the project' }),
  })
  .openapi({ required: [] })
  .openapi('Project')

const ProjectAttributesSchema = z.any().openapi('ProjectAttributes')

const ProjectCountsSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            count: z.number().openapi({ description: 'The number of projects' }),
            day: z.string().openapi({ description: 'The date in the format `YYYY-MM-DD`' }),
          })
          .openapi({ required: ['day', 'count'] }),
      )
      .openapi({ description: 'A list of project counts by day' }),
  })
  .openapi({ required: ['results'] })
  .openapi('ProjectCounts')

const ProjectCountsFiltersSchema = z
  .object({
    filters: z
      .object({
        languages: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of languages to filter the results by' }),
        orgs: z
          .array(z.any())
          .openapi({ description: 'The list of org IDs to filter the results by' }),
        projects: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'The list of project IDs to filter the results by, max projects allowed is 1000',
          }),
      })
      .exactOptional()
      .openapi({ required: ['orgs'] }),
  })
  .openapi({ required: [] })
  .openapi('ProjectCountsFilters')

const ProjectHistorySchema = z.any().openapi('ProjectHistory')

const ProjectIssuePathsSchema = z.any().openapi('ProjectIssuePaths')

const ProjectSnapshotIssuePathsSchema = z.any().openapi('ProjectSnapshotIssuePaths')

const ProjectCountsOverTimeSchema = z.any().openapi('ProjectCountsOverTime')

const ProjectDependencyGraphSchema = z
  .object({
    depGraph: z
      .object({
        graph: z
          .object({
            nodes: z
              .array(
                z
                  .object({
                    deps: z
                      .array(
                        z
                          .object({
                            nodeId: z.string().openapi({ description: 'The id of the node' }),
                          })
                          .openapi({ required: ['nodeId'] }),
                      )
                      .openapi({ description: 'A list of the direct dependencies of the package' }),
                    nodeId: z.string().openapi({ description: 'The internal id of the node' }),
                    pkgId: z.string().openapi({ description: 'The id of the package' }),
                  })
                  .openapi({ required: ['nodeId', 'pkgId', 'deps'] }),
              )
              .exactOptional()
              .openapi({ description: 'A list of the first-level packages' }),
            rootNodeId: z.string().openapi({ description: 'The internal id of the root node' }),
          })
          .openapi({
            description: 'A directional graph of the packages in the project',
            required: ['rootNodeId'],
          }),
        pkgManager: z
          .object({
            name: z.string().openapi({ description: 'The name of the package manager' }),
            repositories: z
              .array(z.object({ alias: z.string() }).openapi({ required: ['alias'] }))
              .exactOptional(),
            version: z
              .string()
              .exactOptional()
              .openapi({ description: 'The version of the package manager' }),
          })
          .openapi({ description: 'The package manager of the project', required: ['name'] }),
        pkgs: z
          .array(
            z
              .object({
                id: z.string().openapi({ description: 'The internal id of the package' }),
                info: z
                  .object({
                    name: z.string().openapi({ description: 'The name of the package' }),
                    version: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The version of the package' }),
                  })
                  .openapi({ required: ['name'] }),
              })
              .openapi({ required: ['id', 'info'] }),
          )
          .openapi({ description: 'A list of dependencies in the project' }),
        schemaVersion: z
          .string()
          .openapi({ description: 'The scheme version of the depGraph object' }),
      })
      .openapi({
        description: 'The dependency-graph object',
        required: ['schemaVersion', 'pkgManager', 'pkgs', 'graph'],
      }),
  })
  .openapi({ required: ['depGraph'] })
  .openapi('ProjectDependencyGraph')

const ProjectIgnoresSchema = z.any().openapi('ProjectIgnores')

const ProjectIssuesFiltersSchema = z
  .object({
    filters: z
      .object({
        exploitMaturity: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description: 'The exploit maturity levels of issues to filter the results by',
          }),
        ignored: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
          }),
        patched: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched',
          }),
        priorityScore: z
          .object({ max: z.number().exactOptional(), min: z.number().exactOptional() })
          .exactOptional()
          .openapi({
            description: 'Include issues that have a priority score between `min` and `max`',
            required: [],
          }),
        severities: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The severity levels of issues to filter the results by' }),
        types: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'The type of issues to filter the results by' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ProjectIssuesFilters')

const ProjectJiraIssuesSchema = z.any().openapi('ProjectJiraIssues')

const ProjectMoveSchema = z
  .object({
    targetOrgId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the organization that the project should be moved to. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProjectMove')

const ProjectSettingsSchema = z
  .object({
    autoDepUpgradeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If set to `true`, Snyk will raise dependency upgrade PRs automatically.',
      }),
    autoDepUpgradeIgnoredDependencies: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.',
      }),
    autoDepUpgradeLimit: z
      .number()
      .exactOptional()
      .openapi({ description: 'The limit on auto dependency upgrade PRs.' }),
    autoDepUpgradeMinAge: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The age (in days) that an automatic dependency check is valid for',
      }),
    autoRemediationPrs: AutoRemediationPrsSchema.exactOptional(),
    pullRequestAssignment: PullRequestAssignmentSchema.exactOptional(),
    pullRequestFailOnAnyVulns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.',
      }),
    pullRequestFailOnlyForHighSeverity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities',
      }),
    pullRequestTestEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq' }),
  })
  .openapi({ required: [] })
  .openapi('ProjectSettings')

const ProjectSnapshotsSchema = z
  .object({
    snapshots: z
      .array(
        z
          .object({
            created: z.string().openapi({ description: 'The date that the snapshot was taken' }),
            id: z.string().openapi({ description: 'The snapshot identifier' }),
            imageBaseImage: z.string().exactOptional(),
            imageId: z.string().exactOptional(),
            imagePlatform: z.string().exactOptional(),
            imageTag: z.string().exactOptional(),
            issueCounts: z
              .object({
                license: z
                  .object({
                    critical: z
                      .number()
                      .openapi({ description: 'Number of critical severity vulnerabilities' }),
                    high: z
                      .number()
                      .openapi({ description: 'Number of high severity vulnerabilities' }),
                    low: z
                      .number()
                      .openapi({ description: 'Number of low severity vulnerabilities' }),
                    medium: z
                      .number()
                      .openapi({ description: 'Number of medium severity vulnerabilities' }),
                  })
                  .exactOptional()
                  .openapi({ required: ['low', 'medium', 'high', 'critical'] }),
                sast: z
                  .object({
                    critical: z
                      .number()
                      .openapi({ description: 'Number of critical severity vulnerabilities' }),
                    high: z
                      .number()
                      .openapi({ description: 'Number of high severity vulnerabilities' }),
                    low: z
                      .number()
                      .openapi({ description: 'Number of low severity vulnerabilities' }),
                    medium: z
                      .number()
                      .openapi({ description: 'Number of medium severity vulnerabilities' }),
                  })
                  .exactOptional()
                  .openapi({ required: ['low', 'medium', 'high', 'critical'] }),
                vuln: z
                  .object({
                    critical: z
                      .number()
                      .openapi({ description: 'Number of critical severity vulnerabilities' }),
                    high: z
                      .number()
                      .openapi({ description: 'Number of high severity vulnerabilities' }),
                    low: z
                      .number()
                      .openapi({ description: 'Number of low severity vulnerabilities' }),
                    medium: z
                      .number()
                      .openapi({ description: 'Number of medium severity vulnerabilities' }),
                  })
                  .exactOptional()
                  .openapi({ required: ['low', 'medium', 'high', 'critical'] }),
              })
              .openapi({
                description:
                  'Number of known vulnerabilities in the project, not including ignored issues',
                required: [],
              }),
            method: z
              .enum(['api', 'cli', 'recurring', 'web', 'web-test', 'wizard'])
              .exactOptional()
              .openapi({ description: 'The method by which this snapshot was created.' }),
            totalDependencies: z
              .number()
              .openapi({ description: 'Number of dependencies of the project' }),
          })
          .openapi({ required: ['id', 'created', 'totalDependencies', 'issueCounts'] }),
      )
      .exactOptional()
      .openapi({
        description: "A list of the project's snapshots, ordered according to date (latest first).",
      }),
    total: z.number().exactOptional().openapi({ description: 'The total number of results' }),
  })
  .openapi({ required: [] })
  .openapi('ProjectSnapshots')

const ProjectSnapshotsFiltersSchema = z
  .object({
    filters: z
      .object({
        imageId: z
          .string()
          .exactOptional()
          .openapi({ description: 'For container projects, filter by the ID of the image' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ProjectSnapshotsFilters')

const ProjectTagsSchema = z.any().openapi('ProjectTags')

const ProjectsFiltersSchema = z
  .object({
    filters: z
      .object({
        attributes: ProjectAttributes2Schema.exactOptional(),
        isMonitored: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include projects which are monitored, if set to `false`, only include projects which are not monitored',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If supplied, only projects that have a name that **starts with** this value will be returned',
          }),
        origin: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If supplied, only projects that exactly match this origin will be returned',
          }),
        tags: z
          .object({
            includes: z
              .array(z.any())
              .exactOptional()
              .openapi({
                description:
                  'A project must have all provided tags in order to be included in the response. A maximum of 3 tags can be supplied.',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description: 'If supplied, only projects that exactly match this type will be returned',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ProjectsFilters')

const ProvisionUserSchema = z.any().openapi('ProvisionUser')

const RemoveProjectTagSchema = z.any().openapi('RemoveProjectTag')

const RepositorySchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "deb, apk and rpm package managers should use an alias to indicate the target Operating System, for example 'debian:10'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('Repository')

const SBTFileSchema = z
  .object({
    contents: z
      .string()
      .openapi({
        description: 'The contents of the file, encoded according to the `encoding` field.',
      }),
  })
  .openapi({ required: ['contents'] })
  .openapi('SBTFile')

const SemverObjectSchema = z
  .object({
    unaffected: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The (semver) range of versions NOT vulnerable to this issue. *Deprecated* and should not be used.',
      }),
    vulnerable: z
      .string()
      .exactOptional()
      .openapi({ description: 'The (semver) range of versions vulnerable to this issue.' }),
  })
  .openapi({ required: [] })
  .openapi('SemverObject')

const TagSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alphanumeric including - and _ with a limit of 30 characters' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alphanumeric including - and _ with a limit of 50 characters' }),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const TagBodySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Valid tag key.' }),
    value: z.string().exactOptional().openapi({ description: 'Valid tag value.' }),
  })
  .openapi({ required: [] })
  .openapi('TagBody')

const TestCountsSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            count: z.number().openapi({ description: 'The number of tests conducted' }),
            isPrivate: z
              .object({
                false: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The number of tests conducted against public projects',
                  }),
                true: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The number of tests conducted against private projects',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            issuesPrevented: z
              .object({
                false: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The number of tests that did not prevent issues from being introduced',
                  }),
                true: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The number of tests that prevented issues from being introduced',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: ['count'] }),
      )
      .openapi({ description: 'A list of test counts' }),
  })
  .openapi({ required: ['results'] })
  .openapi('TestCounts')

const TestCounts2Schema = z.any().openapi('TestCounts2')

const TestsFiltersSchema = z
  .object({
    filters: z
      .object({
        isPrivate: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include tests which were conducted against private projects, if set to `false` only include tests which were conducted against public projects',
          }),
        issuesPrevented: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `true`, only include tests which prevented issues from being introduced, if set to `false` only include tests which did not prevent issues from being introduced',
          }),
        orgs: z
          .array(z.any())
          .openapi({ description: 'The list of org IDs to filter the results by' }),
        projects: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'The list of project IDs to filter issues by, max projects allowed is 1000',
          }),
      })
      .exactOptional()
      .openapi({ required: ['orgs'] }),
  })
  .openapi({ required: [] })
  .openapi('TestsFilters')

const TheSnykOrganizationForARequestSchema = z.any().openapi('TheSnykOrganizationForARequest')

const UpdateMemberRolesInYourOrganizationSchema = z
  .any()
  .openapi('UpdateMemberRolesInYourOrganization')

const UserDetailsSchema = z.any().openapi('UserDetails')

const UserInvitationToOrganizationSchema = z.any().openapi('UserInvitationToOrganization')

const UserOrganizationNotificationSettingsSchema = z
  .any()
  .openapi('UserOrganizationNotificationSettings')

const UserProjectNotificationSettingsSchema = z.any().openapi('UserProjectNotificationSettings')

const VulnerabilitySchema = z
  .object({
    CVSSv3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Common Vulnerability Scoring System (CVSS) provides a way to capture the principal characteristics of a vulnerability, and produce a numerical score reflecting its severity, as well as a textual representation of that score.',
      }),
    alternativeIds: z.object({}).exactOptional(),
    creationTime: z.string().exactOptional(),
    credit: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The reporter of the vulnerability' }),
    cvssScore: z.number().exactOptional().openapi({ description: 'CVSS Score.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the vulnerability' }),
    disclosureTime: z.string().exactOptional(),
    exploitMaturity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Snyk exploit maturity for this issue. One of: `mature`, `proof-of-concept`, `no-known-exploit` or `no-data`.',
      }),
    from: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Paths from which the vulnerable package is required in the code base.',
      }),
    functions: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'List of vulnerable functions inside the vulnerable packages.' }),
    identifiers: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Additional identifiers for this issue (CVE, CWE, etc).' }),
    isPatchable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is a patch by Snyk available to fix this vulnerability?' }),
    isPinnable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Will pinning this package to a newer version fix the vulnerability?',
      }),
    isUpgradable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will upgrading a top-level dependency fix the vulnerability?' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The programming language for this package.' }),
    modificationTime: z.string().exactOptional(),
    'packageManager `npm`': z.string().exactOptional(),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the vulnerable package.' }),
    patches: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Patches to fix this issue, by Snyk.' }),
    publicationTime: z.string().exactOptional(),
    semver: SemverObjectSchema.exactOptional(),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Snyk severity for this issue. One of: `critical`, `medium`, `high`, `medium` or `low`.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the vulnerability' }),
    upgradePath: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Vulnerability')

const WebhookSchema = z.any().openapi('Webhook')

const WebhookCollectionSchema = z.any().openapi('WebhookCollection')

const YarnLockFileSchema = z
  .object({ contents: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('YarnLockFile')

const ComposerSchema = z.any().openapi('Composer')

const ComposerRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        additional: z
          .array(z.any())
          .openapi({ description: 'a lockfile encoded according the the "encoding" field.' }),
        target: z
          .object({ contents: z.string().exactOptional() })
          .openapi({
            description: 'the `composer.json` file, encoded according the the "encoding" field.',
            required: [],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target', 'additional'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('ComposerRequestPayload')

const DepSchema = z.any().openapi('Dep')

const GolangdepRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        additional: z
          .array(z.any())
          .openapi({ description: 'a lockfile encoded according the the "encoding" field.' }),
        target: z
          .object({ contents: z.string().exactOptional() })
          .openapi({
            description: 'the `Gopkg.toml` file, encoded according the the "encoding" field.',
            required: [],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target', 'additional'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('GolangdepRequestPayload')

const GovendorRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        target: z
          .object({ contents: z.string().exactOptional() })
          .openapi({
            description: 'the `vendor.json` file, encoded according the the "encoding" field.',
            required: [],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('GovendorRequestPayload')

const GraphRequestPayloadSchema = z
  .object({ depGraph: DepGraphDataSchema })
  .openapi({ required: ['depGraph'] })
  .openapi('GraphRequestPayload')

const IgnorePathSchema = z.any().openapi('IgnorePath')

const IssueIdSchema = z.any().openapi('IssueId')

const MonitorGraphPayloadSchema = z
  .object({ depGraph: MonitorDepGraphDataSchema, meta: MonitorMetaDataSchema.exactOptional() })
  .openapi({ required: ['depGraph'] })
  .openapi('MonitorGraphPayload')

const NpmSchema = z.any().openapi('Npm')

const NpmRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        additional: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'a lockfile can be sent (if needed), encoded according the the "encoding" field.',
          }),
        target: z
          .object({
            contents: z
              .string()
              .openapi({ description: 'the contents of `package.json` as a string.' }),
          })
          .openapi({
            description: 'the `package.json` file, encoded according the the "encoding" field.',
            required: ['contents'],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('NpmRequestPayload')

const PipSchema = z.any().openapi('Pip')

const PipRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        target: z
          .object({
            contents: z
              .string()
              .openapi({
                description:
                  'the contents of `requirements.txt` as a string, encoded according to `encoding` above.',
              }),
          })
          .openapi({
            description: 'the `requirements.txt` file, encoded according the the "encoding" field.',
            required: ['contents'],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('PipRequestPayload')

const RubygemsSchema = z.any().openapi('Rubygems')

const RubygemsRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        target: z
          .object({
            contents: z
              .string()
              .openapi({ description: 'the contents of `Gemfile.lock` as a string.' }),
          })
          .openapi({
            description: 'the `Gemfile.lock` file, encoded according the the "encoding" field.',
            required: ['contents'],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('RubygemsRequestPayload')

const SbtSchema = z.any().openapi('Sbt')

const SbtRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({ target: SBTFileSchema })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('SbtRequestPayload')

const VendorSchema = z.any().openapi('Vendor')

const YarnSchema = z.any().openapi('Yarn')

const YarnRequestPayloadSchema = z
  .object({
    encoding: z
      .enum(['plain', 'base64'])
      .exactOptional()
      .openapi({ description: 'the encoding for the manifest files sent.' }),
    files: z
      .object({
        additional: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'a lockfile can be sent (if needed), encoded according the the "encoding" field.',
          }),
        target: z
          .object({
            contents: z
              .string()
              .openapi({ description: 'the contents of `package.json` as a string.' }),
          })
          .openapi({
            description: 'the `package.json` file, encoded according the the "encoding" field.',
            required: ['contents'],
          }),
      })
      .openapi({ description: 'The manifest files:', required: ['target'] }),
  })
  .openapi({ required: ['files'] })
  .openapi('YarnRequestPayload')

const AddATagToAProjectBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          key: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Alphanumeric including - and _ with a limit of 30 characters',
            }),
          value: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Alphanumeric including - and _ with a limit of 50 characters',
            }),
        })
        .openapi({ example: { key: 'example-tag-key', value: 'example-tag-value' }, required: [] }),
    },
  },
}

const GetLatestIssueCountsBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          filters: z
            .object({
              fixable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.',
                }),
              ignored: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
                }),
              isPatchable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable',
                }),
              isPinnable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable',
                }),
              isUpgradable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable',
                }),
              languages: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The type of languages to filter the results by' }),
              orgs: z
                .any()
                .openapi({ description: 'The list of org IDs to filter the results by' }),
              patched: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched',
                }),
              priorityScore: z
                .object({ max: z.number().exactOptional(), min: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'The priority score ranging between 0-1000',
                  required: [],
                }),
              projects: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'The list of project IDs to filter issues by, max projects allowed is 1000',
                }),
              severity: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The severity levels of issues to filter the results by' }),
              types: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The type of issues to filter the results by' }),
            })
            .exactOptional()
            .openapi({ required: ['orgs'] }),
        })
        .openapi({
          example: {
            filters: {
              fixable: false,
              ignored: false,
              isPatchable: false,
              isPinnable: false,
              isUpgradable: false,
              languages: [
                'node',
                'javascript',
                'ruby',
                'java',
                'scala',
                'python',
                'golang',
                'php',
                'dotnet',
                'swift-objective-c',
                'elixir',
                'docker',
                'linux',
                'dockerfile',
                'terraform',
                'kubernetes',
                'helm',
                'cloudformation',
              ],
              orgs: [],
              patched: false,
              priorityScore: { max: 1000, min: 0 },
              projects: [],
              severity: ['critical', 'high', 'medium', 'low'],
              types: ['vuln', 'license', 'configuration'],
            },
          },
          required: [],
        }),
    },
  },
}

const GetLatestProjectCountsBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          filters: z
            .object({
              languages: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The type of languages to filter the results by' }),
              orgs: z
                .any()
                .openapi({ description: 'The list of org IDs to filter the results by' }),
              projects: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'The list of project IDs to filter the results by, max projects allowed is 1000',
                }),
            })
            .exactOptional()
            .openapi({ required: ['orgs'] }),
        })
        .openapi({
          example: {
            filters: {
              languages: [
                'node',
                'javascript',
                'ruby',
                'java',
                'scala',
                'python',
                'golang',
                'php',
                'dotnet',
                'swift-objective-c',
                'elixir',
                'docker',
                'linux',
                'dockerfile',
                'terraform',
                'kubernetes',
                'helm',
                'cloudformation',
              ],
              orgs: [],
              projects: [],
            },
          },
          required: [],
        }),
    },
  },
}

const GetListOfLatestIssuesBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          filters: z
            .object({
              exploitMaturity: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'The exploit maturity levels of issues to filter the results by',
                }),
              fixable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are fixable, if set to `false`, only include issues which are not fixable. An issue is fixable if it is either upgradable, patchable or pinnable. Also see isUpgradable, isPatchable and isPinnable filters.',
                }),
              identifier: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Search term to filter issue name by, or an exact CVE or CWE',
                }),
              ignored: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
                }),
              isFixed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are fixed, if set to `false`, only include issues which are not fixed',
                }),
              isPatchable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are patchable, if set to `false`, only include issues which are not patchable',
                }),
              isPinnable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are pinnable, if set to `false`, only include issues which are not pinnable',
                }),
              isUpgradable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are upgradable, if set to `false`, only include issues which are not upgradable',
                }),
              issues: z
                .any()
                .exactOptional()
                .openapi({ description: 'The list of issue IDs to filter issues by' }),
              languages: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The type of languages to filter the results by' }),
              orgs: z
                .any()
                .openapi({ description: 'The list of org IDs to filter the results by' }),
              patched: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched',
                }),
              priorityScore: z
                .object({ max: z.number().exactOptional(), min: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'The priority score ranging between 0-1000',
                  required: [],
                }),
              projects: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'The list of project IDs to filter issues by, max projects allowed is 1000',
                }),
              severity: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The severity levels of issues to filter the results by' }),
              types: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The type of issues to filter the results by' }),
            })
            .exactOptional()
            .openapi({ required: ['orgs'] }),
        })
        .openapi({
          example: {
            filters: {
              exploitMaturity: ['mature', 'proof-of-concept', 'no-known-exploit', 'no-data'],
              fixable: false,
              identifier: '',
              ignored: false,
              isFixed: false,
              isPatchable: false,
              isPinnable: false,
              isUpgradable: false,
              issues: [],
              languages: [
                'node',
                'javascript',
                'ruby',
                'java',
                'scala',
                'python',
                'golang',
                'php',
                'dotnet',
                'swift-objective-c',
                'elixir',
                'docker',
                'linux',
                'dockerfile',
                'terraform',
                'kubernetes',
                'helm',
                'cloudformation',
                'arm',
              ],
              orgs: [],
              patched: false,
              priorityScore: { max: 1000, min: 0 },
              projects: [],
              severity: ['critical', 'high', 'medium', 'low'],
              types: ['vuln', 'license', 'configuration'],
            },
          },
          required: [],
        }),
    },
  },
}

const ListAllAggregatedIssuesBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          filters: z
            .object({
              exploitMaturity: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'The exploit maturity levels of issues to filter the results by (Non-IaC projects only)',
                }),
              ignored: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are ignored, if set to `false`, only include issues which are not ignored',
                }),
              patched: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, only include issues which are patched, if set to `false`, only include issues which are not patched (Non-IaC projects only)',
                }),
              priority: z
                .object({
                  score: z
                    .object({ max: z.number().exactOptional(), min: z.number().exactOptional() })
                    .exactOptional()
                    .openapi({
                      description: 'Include issues where the priority score is between min and max',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'The priority to filter the issues by (Non-IaC projects only)',
                  required: [],
                }),
              severities: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The severity levels of issues to filter the results by' }),
              types: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'The type of issues to filter the results by (Non-IaC projects only)',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          includeDescription: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                "If set to `true`, Include issue's description, if set to `false` (by default), it won't (Non-IaC projects only)",
            }),
          includeIntroducedThrough: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                "If set to `true`, Include issue's introducedThrough, if set to `false` (by default), it won't. It's for container only projects (Non-IaC projects only)",
            }),
        })
        .openapi({
          example: { includeDescription: false, includeIntroducedThrough: false },
          required: [],
        }),
    },
  },
}

const ModifyOrganizationNotificationSettingsBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          'new-issues-remediations': z
            .object({
              enabled: z.boolean().openapi({ description: 'Whether notifications should be sent' }),
              issueSeverity: z
                .enum(['all', 'high'])
                .openapi({
                  description:
                    'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                }),
              issueType: z
                .enum(['all', 'vuln', 'license', 'none'])
                .openapi({
                  description:
                    'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                }),
            })
            .exactOptional()
            .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
          'project-imported': z
            .object({
              enabled: z.boolean().openapi({ description: 'Whether notifications should be sent' }),
            })
            .exactOptional()
            .openapi({ required: ['enabled'] }),
          'test-limit': z
            .object({
              enabled: z.boolean().openapi({ description: 'Whether notifications should be sent' }),
            })
            .exactOptional()
            .openapi({ required: ['enabled'] }),
          'weekly-report': z
            .object({
              enabled: z.boolean().openapi({ description: 'Whether notifications should be sent' }),
            })
            .exactOptional()
            .openapi({ required: ['enabled'] }),
        })
        .openapi({
          example: {
            'new-issues-remediations': { enabled: true, issueSeverity: 'high', issueType: 'vuln' },
            'project-imported': { enabled: true },
            'test-limit': { enabled: true },
            'weekly-report': { enabled: true },
          },
          required: [],
        }),
    },
  },
}

export const postGroupGroupIdAuditRoute = createRoute({
  method: 'post',
  path: '/group/{groupId}/audit',
  tags: ['Audit logs'],
  summary: 'Get group level audit logs',
  operationId: 'Get group level audit logs',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have access to this group.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbea',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months.',
            example: '2019-07-01',
            in: 'query',
            name: 'from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months.',
            example: '2019-07-07',
            in: 'query',
            name: 'to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page of results to request. Audit logs are returned in page sizes of 100',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
      sortOrder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`.',
            example: 'ASC',
            in: 'query',
            name: 'sortOrder',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "User email address. Will fetch only audit logs originated from this user's actions. Ignored if the userId filter is set.",
                    }),
                  event: z
                    .enum([
                      'api.access',
                      'group.cloud_config.settings.edit',
                      'group.create',
                      'group.delete',
                      'group.edit',
                      'group.feature_flags.edit',
                      'group.notification_settings.edit',
                      'group.org.add',
                      'group.org.remove',
                      'group.policy.create',
                      'group.policy.delete',
                      'group.policy.edit',
                      'group.request_access_settings.edit',
                      'group.role.create',
                      'group.role.edit',
                      'group.service_account.create',
                      'group.service_account.delete',
                      'group.service_account.edit',
                      'group.settings.edit',
                      'group.settings.feature_flag.edit',
                      'group.sso.auth0_connection.create',
                      'group.sso.auth0_connection.edit',
                      'group.sso.create',
                      'group.sso.edit',
                      'group.tag.create',
                      'group.tag.delete',
                      'group.user.add',
                      'group.user.provision.accept',
                      'group.user.provision.create',
                      'group.user.provision.delete',
                      'group.user.remove',
                      'group.user.role.edit',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request.',
                    }),
                  excludeEvent: z
                    .enum([
                      'api.access',
                      'group.cloud_config.settings.edit',
                      'group.create',
                      'group.delete',
                      'group.edit',
                      'group.feature_flags.edit',
                      'group.notification_settings.edit',
                      'group.org.add',
                      'group.org.remove',
                      'group.policy.create',
                      'group.policy.delete',
                      'group.policy.edit',
                      'group.request_access_settings.edit',
                      'group.role.create',
                      'group.role.edit',
                      'group.service_account.create',
                      'group.service_account.delete',
                      'group.service_account.edit',
                      'group.settings.edit',
                      'group.settings.feature_flag.edit',
                      'group.sso.auth0_connection.create',
                      'group.sso.auth0_connection.edit',
                      'group.sso.create',
                      'group.sso.edit',
                      'group.tag.create',
                      'group.tag.delete',
                      'group.user.add',
                      'group.user.provision.accept',
                      'group.user.provision.create',
                      'group.user.provision.delete',
                      'group.user.remove',
                      'group.user.role.edit',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request.',
                    }),
                  projectId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Will return only logs for this specific project.' }),
                  userId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "User public ID. Will fetch only audit logs originated from this user's actions.",
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { filters: { event: 'api.access', excludeEvent: 'api.access' } },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getGroupGroupIdMembersRoute = createRoute({
  method: 'get',
  path: '/group/{groupId}/members',
  tags: ['Groups'],
  summary: 'List all members in a group',
  operationId: 'List all members in a group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have access admin to this group.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.any()),
          examples: {
            response: {
              value: [
                {
                  email: '',
                  groupRole: '',
                  id: '',
                  name: '',
                  orgs: [{ name: '', role: '' }],
                  username: '',
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postGroupGroupIdOrgOrgIdMembersRoute = createRoute({
  method: 'post',
  path: '/group/{groupId}/org/{orgId}/members',
  tags: ['Groups'],
  summary: 'Add a member to an organization within a group',
  operationId: 'Add a member to an organization within a group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have access admin to this group.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID we want to add the member to. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role: z
                .string()
                .exactOptional()
                .openapi({ description: 'The role of the user, "admin" or "collaborator".' }),
              userId: z.string().exactOptional().openapi({ description: 'The id of the user.' }),
            })
            .openapi({ example: { role: '', userId: '' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getGroupGroupIdOrgsRoute = createRoute({
  method: 'get',
  path: '/group/{groupId}/orgs',
  tags: ['Groups'],
  summary: 'List all organizations in a group',
  operationId: 'List all organizations in a group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description:
              'The group ID. The `API_KEY` must have READ access to this group and LIST organizations access in this group.',
            example: 'a060a49f-636e-480f-9e14-38e773b2a97f',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return (maximum is 100).',
            example: '100',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { default: 100, type: 'number' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'For pagination - offset (from which to start returning results).',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only organizations that have a name that **starts with** this value (case insensitive) will be returned.',
            example: 'my',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getGroupGroupIdRolesRoute = createRoute({
  method: 'get',
  path: '/group/{groupId}/roles',
  tags: ['Groups'],
  summary: 'List all roles in a group',
  operationId: 'List all roles in a group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have READ access to this group.',
            example: 'a060a49f-636e-480f-9e14-38e773b2a97f',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getGroupGroupIdSettingsRoute = createRoute({
  method: 'get',
  path: '/group/{groupId}/settings',
  tags: ['Groups'],
  summary: 'View group settings',
  operationId: 'View group settings',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have admin access to this group.',
            example: 'b61bc07c-27c6-42b3-8b04-0f228ed31a67',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .object({
              requestAccess: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description:
                        'Choose whether a user may request access to Snyk orgs in this group that they are not a member of.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Can only be updated if `API_KEY` has edit access to request access settings.',
                  required: ['enabled'],
                }),
              sessionLength: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const putGroupGroupIdSettingsRoute = createRoute({
  method: 'put',
  path: '/group/{groupId}/settings',
  tags: ['Groups'],
  summary: 'Update group settings',
  operationId: 'Update group settings',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .object({
              requestAccess: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description:
                        'Choose whether a user may request access to Snyk orgs in this group that they are not a member of.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Can only be updated if `API_KEY` has edit access to request access settings.',
                  required: ['enabled'],
                }),
              sessionLength: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The new session length for the group in minutes. This must be an integer between 1 and 43200 (30 days). Setting this value to null will result in this group inheriting from the global default of 30 days.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const getGroupGroupIdTagsRoute = createRoute({
  method: 'get',
  path: '/group/{groupId}/tags',
  tags: ['Groups'],
  summary: 'List all tags in a group',
  operationId: 'List all tags in a group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have access admin to this group.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return (the default is 1000).',
            example: '10',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { type: 'number' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The offset from which to start returning results from.',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.object({ tags: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
          examples: {
            response: {
              value: {
                tags: [
                  { key: 'meta', value: 'Alfa' },
                  { key: 'meta', value: 'Bravo' },
                  { key: 'meta', value: 'Charlie' },
                  { key: 'meta', value: 'Delta' },
                  { key: 'meta', value: 'Echo' },
                  { key: 'meta', value: 'Foxtrot' },
                  { key: 'meta', value: 'Golf' },
                  { key: 'meta', value: 'Hotel' },
                  { key: 'meta', value: 'India' },
                  { key: 'meta', value: 'Juliet' },
                ],
              },
            },
          },
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postGroupGroupIdTagsDeleteRoute = createRoute({
  method: 'post',
  path: '/group/{groupId}/tags/delete',
  tags: ['Groups'],
  summary: 'Delete tag from group',
  operationId: 'Delete tag from group',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'The group ID. The `API_KEY` must have access admin to this group.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'force delete tag that has entities (default is `false`).',
                }),
              key: z.string().exactOptional().openapi({ description: 'Valid tag key.' }),
              value: z.string().exactOptional().openapi({ description: 'Valid tag value.' }),
            })
            .openapi({ example: { force: false, key: '', value: '' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              force: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'force delete tag that has entities (default is `false`).',
                }),
              key: z.string().exactOptional().openapi({ description: 'Valid tag key.' }),
              value: z.string().exactOptional().openapi({ description: 'Valid tag value.' }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { force: false, key: '', value: '' } } },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postMonitorDepGraphRoute = createRoute({
  method: 'post',
  path: '/monitor/dep-graph',
  tags: ['Monitor'],
  summary: 'Monitor Dep Graph',
  description:
    'Use this endpoint to monitor a [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata).',
  operationId: 'Monitor Dep Graph',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              depGraph: z
                .object({
                  graph: z
                    .object({
                      nodes: z.array(z.any()).openapi({ description: 'Array of node objects.' }),
                      rootNodeId: z
                        .string()
                        .openapi({
                          description:
                            'Root node id. Note the root node name is used as your project name.',
                        }),
                    })
                    .openapi({
                      description:
                        'Graph object references each pkg and how they depend on each other through the deps property.',
                      required: ['rootNodeId', 'nodes'],
                    }),
                  pkgManager: z
                    .object({
                      name: z.string().openapi({ description: 'Package manager name.' }),
                      repositories: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.',
                        }),
                    })
                    .openapi({ description: 'Package manager information.', required: ['name'] }),
                  pkgs: z.array(z.any()).openapi({ description: 'Array of package dependencies.' }),
                  schemaVersion: z
                    .string()
                    .openapi({ description: 'Snyk DepGraph library schema version.' }),
                })
                .openapi({
                  description:
                    'A [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata) defining all packages and their relationships.',
                  required: ['schemaVersion', 'pkgManager', 'pkgs', 'graph'],
                }),
              meta: z
                .object({
                  targetFramework: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Required for a NuGet or Paket DepGraph only. Specify the target framework in your project file using Target Framework Monikers (TFMs). For example, netstandard1.0, netcoreapp1.0 or net452. Test each framework separately if you have multiple defined.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Project metadata', required: [] }),
            })
            .openapi({
              example: {
                depGraph: {
                  graph: {
                    nodes: [
                      {
                        deps: [{ nodeId: 'ch.qos.logback:logback-core@1.0.13' }],
                        nodeId: 'root-node',
                        pkgId: 'my-maven-app@1.0.0',
                      },
                      {
                        deps: [],
                        nodeId: 'ch.qos.logback:logback-core@1.0.13',
                        pkgId: 'ch.qos.logback:logback-core@1.0.13',
                      },
                    ],
                    rootNodeId: 'root-node',
                  },
                  pkgManager: { name: 'maven' },
                  pkgs: [
                    { id: 'my-maven-app@1.0.0', info: { name: 'my-maven-app', version: '1.0.0' } },
                    {
                      id: 'ch.qos.logback:logback-core@1.0.13',
                      info: { name: 'ch.qos.logback:logback-core', version: '1.0.13' },
                    },
                  ],
                  schemaVersion: '1.2.0',
                },
              },
              required: ['depGraph'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postOrgRoute = createRoute({
  method: 'post',
  path: '/org',
  tags: ['Organizations'],
  summary: 'Create a new organization',
  operationId: 'Create a new organization',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              groupId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The group ID. The `API_KEY` must have access to this group.',
                }),
              name: z.string().openapi({ description: 'The name of the new organization' }),
              sourceOrgId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The id of an organization to copy settings from.\n\nIf provided, this organization must be associated with the same group.\n\nThe items that will be copied are: \nSource control integrations (GitHub, GitLab, BitBucket)\n\\+ Container registries integrations (ACR, Docker Hub, ECR, GCR)\n\\+ Container orchestrators integrations (Kubernetes)\n\\+ PaaS and Serverless Integrations (Heroku, AWS Lambda)\n\\+ Notification integrations (Slack, Jira)\n\\+ Policies\n\\+ Ignore settings\n\\+ Language settings\n\\+ Infrastructure as Code settings\n\\+ Snyk Code settings\n\nThe following will not be copied across:\nService accounts\n\\+ Members\n\\+ Projects\n\\+ Notification preferences',
                }),
            })
            .openapi({
              example: {
                groupId: '4a18d42f-0706-4ad0-b127-24078731fbed',
                name: 'new-org',
                sourceOrgId: '6b4a3261-b68f-43a0-9218-1f082e77f879',
              },
              required: ['name'],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: {}, headers: z.object({}) },
    400: {
      description:
        'A group of errors that happened in the process of creating a new organization and were unexpected',
      content: {
        'application/json, charset=utf-8': {
          schema: z
            .object({
              errorRef: z
                .string()
                .exactOptional()
                .openapi({ description: '[UUID] An error ref to contact Snyk with' }),
              message: z.string().exactOptional().openapi({ description: 'The error message' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                errorRef: '49f168a0-a084-4cd8-93ff-63f3a0f06bc6',
                message: 'Unexpected error whilst deleting org',
              },
            },
          },
        },
        'application/json; charset=utf-8': {
          schema: z
            .object({
              errorRef: z
                .string()
                .exactOptional()
                .openapi({ description: '[UUID] An error ref to contact Snyk with' }),
              message: z.string().exactOptional().openapi({ description: 'The error message' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
    401: {
      description: 'Authorization errors.',
      content: {
        'application/json, charset=utf-8': {
          schema: z
            .object({
              errorRef: z
                .string()
                .exactOptional()
                .openapi({ description: '[UUID] An error ref to contact Snyk with' }),
              message: z.string().exactOptional().openapi({ description: 'The error message' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                errorRef: '49f168a0-a084-4cd8-93ff-63f3a0f06bc6',
                message: 'You must have the required permissions to add an org',
              },
            },
          },
        },
        'application/json; charset=utf-8': {
          schema: z
            .object({
              errorRef: z
                .string()
                .exactOptional()
                .openapi({ description: '[UUID] An error ref to contact Snyk with' }),
              message: z.string().exactOptional().openapi({ description: 'The error message' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
    422: {
      description:
        'A group of errors that show input errors about the parameters provided in the request.',
      content: {
        'application/json, charset=utf-8': {
          schema: z
            .object({
              errorRef: z
                .string()
                .exactOptional()
                .openapi({ description: '[UUID] An error ref to contact Snyk with' }),
              message: z.string().exactOptional().openapi({ description: 'The error message' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                errorRef: '49f168a0-a084-4cd8-93ff-63f3a0f06bc6',
                message: 'Please provide a new organization name in the body of the request',
              },
            },
          },
        },
        'application/json; charset=utf-8': {
          schema: z
            .object({
              errorRef: z
                .string()
                .exactOptional()
                .openapi({ description: '[UUID] An error ref to contact Snyk with' }),
              message: z.string().exactOptional().openapi({ description: 'The error message' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const deleteOrgOrgIdRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}',
  tags: ['Organizations'],
  summary: 'Remove organization',
  operationId: 'Remove organization',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have permission to delete the provided organization. Currently this operation is only supported for organizations without any projects.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
})

export const postOrgOrgIdAuditRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/audit',
  tags: ['Audit logs'],
  summary: 'Get organization level audit logs',
  operationId: 'Get organization level audit logs',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbea',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months.',
            example: '2019-07-01',
            in: 'query',
            name: 'from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months.',
            example: '2019-07-07',
            in: 'query',
            name: 'to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page of results to request. Audit logs are returned in page sizes of 100.',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
      sortOrder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`.',
            example: 'ASC',
            in: 'query',
            name: 'sortOrder',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "User email address. Will fetch only audit logs originated from this user's actions. Ignored if the userId filter is set.",
                    }),
                  event: z
                    .enum([
                      'api.access',
                      'org.billing.info.edit',
                      'org.billing.subscription.edit',
                      'org.cloud_config.settings.edit',
                      'org.create',
                      'org.delete',
                      'org.edit',
                      'org.ignore_policy.edit',
                      'org.integration.create',
                      'org.integration.delete',
                      'org.integration.edit',
                      'org.integration.settings.edit',
                      'org.language_settings.edit',
                      'org.license_rule.create',
                      'org.license_rule.delete',
                      'org.license_rule.edit',
                      'org.notification_settings.edit',
                      'org.policy.edit',
                      'org.project.add',
                      'org.project.attributes.edit',
                      'org.project.delete',
                      'org.project.edit',
                      'org.project.fix_pr.auto_open',
                      'org.project.fix_pr.manual_open',
                      'org.project.ignore.create',
                      'org.project.ignore.delete',
                      'org.project.ignore.edit',
                      'org.project.monitor',
                      'org.project.pr_check.edit',
                      'org.project.remove',
                      'org.project.settings.delete',
                      'org.project.settings.edit',
                      'org.project.stop_monitor',
                      'org.project.tag.add',
                      'org.project.tag.remove',
                      'org.project.test',
                      'org.request_access_settings.edit',
                      'org.sast_settings.edit',
                      'org.service_account.create',
                      'org.service_account.delete',
                      'org.service_account.edit',
                      'org.service_account.membership.upsert',
                      'org.settings.feature_flag.edit',
                      'org.target.create',
                      'org.target.delete',
                      'org.user.add',
                      'org.user.invite',
                      'org.user.invite.accept',
                      'org.user.invite.revoke',
                      'org.user.invite_link.accept',
                      'org.user.invite_link.create',
                      'org.user.invite_link.revoke',
                      'org.user.leave',
                      'org.user.provision.accept',
                      'org.user.provision.create',
                      'org.user.provision.delete',
                      'org.user.remove',
                      'org.user.role.create',
                      'org.user.role.delete',
                      'org.user.role.details.edit',
                      'org.user.role.edit',
                      'org.user.role.permissions.edit',
                      'org.webhook.add',
                      'org.webhook.delete',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request.',
                    }),
                  excludeEvent: z
                    .enum([
                      'api.access',
                      'org.billing.info.edit',
                      'org.billing.subscription.edit',
                      'org.cloud_config.settings.edit',
                      'org.create',
                      'org.delete',
                      'org.edit',
                      'org.ignore_policy.edit',
                      'org.integration.create',
                      'org.integration.delete',
                      'org.integration.edit',
                      'org.integration.settings.edit',
                      'org.language_settings.edit',
                      'org.license_rule.create',
                      'org.license_rule.delete',
                      'org.license_rule.edit',
                      'org.notification_settings.edit',
                      'org.policy.edit',
                      'org.project.add',
                      'org.project.attributes.edit',
                      'org.project.delete',
                      'org.project.edit',
                      'org.project.fix_pr.auto_open',
                      'org.project.fix_pr.manual_open',
                      'org.project.ignore.create',
                      'org.project.ignore.delete',
                      'org.project.ignore.edit',
                      'org.project.monitor',
                      'org.project.pr_check.edit',
                      'org.project.remove',
                      'org.project.settings.delete',
                      'org.project.settings.edit',
                      'org.project.stop_monitor',
                      'org.project.tag.add',
                      'org.project.tag.remove',
                      'org.project.test',
                      'org.request_access_settings.edit',
                      'org.sast_settings.edit',
                      'org.service_account.create',
                      'org.service_account.delete',
                      'org.service_account.edit',
                      'org.service_account.membership.upsert',
                      'org.settings.feature_flag.edit',
                      'org.target.create',
                      'org.target.delete',
                      'org.user.add',
                      'org.user.invite',
                      'org.user.invite.accept',
                      'org.user.invite.revoke',
                      'org.user.invite_link.accept',
                      'org.user.invite_link.create',
                      'org.user.invite_link.revoke',
                      'org.user.leave',
                      'org.user.provision.accept',
                      'org.user.provision.create',
                      'org.user.provision.delete',
                      'org.user.remove',
                      'org.user.role.create',
                      'org.user.role.delete',
                      'org.user.role.details.edit',
                      'org.user.role.edit',
                      'org.user.role.permissions.edit',
                      'org.webhook.add',
                      'org.webhook.delete',
                    ])
                    .exactOptional()
                    .openapi({
                      description:
                        'Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request.',
                    }),
                  projectId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Will return only logs for this specific project.' }),
                  userId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "User public ID. Will fetch only audit logs originated from this user's actions.",
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { filters: { event: 'api.access', excludeEvent: 'api.access' } },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postOrgOrgIdDependenciesRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/dependencies',
  tags: ['Dependencies'],
  summary: 'List all dependencies',
  operationId: 'List all dependencies',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list projects for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sortBy: z
        .enum(['projects', 'dependency', 'severity', 'dependenciesWithIssues'])
        .default('dependency')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to sort results by.',
            example: 'dependency',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'dependency',
              enum: ['projects', 'dependency', 'severity', 'dependenciesWithIssues'],
              type: 'string',
            },
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction to sort results by.',
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to fetch.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to fetch per page (maximum is 1000).',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { default: 20, type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  depStatus: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Status of the dependency. Requires reporting entitlement. Options: `deprecated` - Include only deprecated packages; `notDeprecated` - Include all packages that are not marked as deprecated; `any` - Include all packages (default)',
                    }),
                  dependencies: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'The list of dependency IDs to filter the results by (i.e amdefine@1.0.1 or org.javassist:javassist@3.18.1-GA)',
                    }),
                  languages: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'The type of languages to filter the results by' }),
                  licenses: z
                    .any()
                    .exactOptional()
                    .openapi({ description: 'The list of license IDs to filter the results by' }),
                  projects: z
                    .any()
                    .exactOptional()
                    .openapi({ description: 'The list of project IDs to filter the results by' }),
                  severity: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'The severities to filter the results by' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                filters: {
                  depStatus: '',
                  dependencies: [],
                  languages: [
                    'cpp',
                    'dockerfile',
                    'dotnet',
                    'elixir',
                    'golang',
                    'helm',
                    'java',
                    'javascript',
                    'kubernetes',
                    'linux',
                    'php',
                    'python',
                    'ruby',
                    'scala',
                    'swift',
                    'terraform',
                  ],
                  licenses: [],
                  projects: [],
                  severity: ['critical', 'high', 'medium', 'low'],
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      copyright: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'The copyright notices for the package' }),
                      dependenciesWithIssues: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'The identifiers of dependencies with issues that are depended upon as a result of this dependency',
                        }),
                      deprecatedVersions: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'The numbers for those versions that are marked as deprecated',
                        }),
                      firstPublishedDate: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The timestamp for when the specified package was first published.',
                        }),
                      id: z.string().openapi({ description: 'The identifier of the package' }),
                      isDeprecated: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'True if the latest version of the package is marked as deprecated; False otherwise.',
                        }),
                      issuesCritical: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'The number of critical severity issues in this dependency',
                        }),
                      issuesHigh: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'The number of high severity issues in this dependency',
                        }),
                      issuesLow: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'The number of low severity issues in this dependency',
                        }),
                      issuesMedium: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'The number of medium severity issues in this dependency',
                        }),
                      latestVersion: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The latest version available for the specified package',
                        }),
                      latestVersionPublishedDate: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The timestamp for when the latest version of the specified package was published.',
                        }),
                      licenses: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'The identifier of the license' }),
                              license: z
                                .string()
                                .openapi({ description: 'The type of the license' }),
                              title: z
                                .string()
                                .openapi({ description: 'The title of the license' }),
                            })
                            .openapi({ required: ['id', 'title', 'license'] }),
                        )
                        .openapi({ description: 'The licenses of the dependency' }),
                      name: z.string().openapi({ description: 'The name of the package' }),
                      projects: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'The identifier of the project' }),
                              name: z.string().openapi({ description: 'The name of the project' }),
                            })
                            .openapi({ required: ['id', 'name'] }),
                        )
                        .openapi({ description: 'The projects which depend on the dependency' }),
                      type: z
                        .string()
                        .openapi({ description: 'The package type of the dependency' }),
                      version: z.string().openapi({ description: 'The version of the package' }),
                    })
                    .openapi({
                      required: ['id', 'name', 'version', 'type', 'licenses', 'projects'],
                    }),
                )
                .openapi({ description: 'A list of issues' }),
              total: z
                .number()
                .exactOptional()
                .openapi({ description: 'The number of results returned' }),
            })
            .openapi({ required: ['results'] }),
          examples: {
            response: {
              value: {
                results: [
                  {
                    copyright: [
                      'Copyright (c) 2013-2018 Blaine Bublitz <blaine.bublitz@gmail.com>',
                      'Copyright (c) Eric Schoffstall <yo@contra.io> and other contributors',
                    ],
                    dependenciesWithIssues: ['minimatch@2.0.10', 'minimatch@0.2.14'],
                    deprecatedVersions: ['0.0.1', '0.0.2', '0.0.3'],
                    firstPublishedDate: '2013-07-04T23:27:07.828Z',
                    id: 'gulp@3.9.1',
                    isDeprecated: false,
                    latestVersion: '4.0.0',
                    latestVersionPublishedDate: '2018-01-01T01:29:06.863Z',
                    licenses: [
                      { id: 'snyk:lic:npm:gulp:MIT', license: 'MIT', title: 'MIT license' },
                    ],
                    name: 'gulp',
                    projects: [
                      { id: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545', name: 'atokeneduser/goof' },
                    ],
                    type: 'npm',
                    version: '3.9.1',
                  },
                ],
                total: 1,
              },
            },
          },
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getOrgOrgIdEntitlementEntitlementKeyRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/entitlement/{entitlementKey}',
  tags: ['Entitlements'],
  summary: "Get an organization's entitlement value",
  operationId: "Get an organization's entitlement value",
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to query the entitlement for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entitlementKey: z
        .enum(['licenses', 'reports', 'fullVulnDB'])
        .openapi({
          param: {
            description: 'The entitlement to query.',
            example: 'reports',
            in: 'path',
            name: 'entitlementKey',
            required: true,
            schema: { enum: ['licenses', 'reports', 'fullVulnDB'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getOrgOrgIdEntitlementsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/entitlements',
  tags: ['Entitlements'],
  summary: 'List all entitlements',
  operationId: 'List all entitlements',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list entitlements for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getOrgOrgIdIntegrationsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/integrations',
  tags: ['Integrations'],
  summary: 'List',
  operationId: 'List',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization public ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                'bitbucket-cloud': '6jje4c92-e7rn-t59a-f456-8n5675432fe9',
                github: '9a3e5d90-b782-468a-a042-9a2073736f0b',
                gitlab: '1b3e3d90-c678-347a-n232-6a3453738h1e',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdIntegrationsRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/integrations',
  tags: ['Integrations'],
  summary: 'Add new integration',
  description: 'Add new integration for given organization.',
  operationId: 'Add new integration',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                credentials: z
                  .xor([
                    z
                      .object({
                        AcrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `name.azurecr.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        ArtifactoryCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `name.jfrog.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        AzureReposCredentials: z
                          .object({ url: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        BitbucketCloudCredentials: z
                          .object({ password: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'password'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        BitbucketServerCredentials: z
                          .object({ password: z.string(), url: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        DigitalOceanCrCredentials: z
                          .object({
                            token: z.string().openapi({ description: 'Personal Access Token' }),
                          })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        DockerHubCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'Access Token' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        EcrCredentials: z
                          .object({
                            region: z.string().openapi({ description: 'e.g.: `eu-west-3`' }),
                            roleArn: z
                              .string()
                              .openapi({
                                description: 'e.g.: `arn:aws:iam::<account-id>:role/<newRole>`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['region', 'roleArn'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GcrCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'JSON key file' }),
                            registryBase: z
                              .string()
                              .openapi({
                                description:
                                  'e.g.: `gcr.io`, `us.gcr.io`, `eu.gcr.io`, `asia.gcr.io`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubCredentials: z
                          .object({ token: z.string() })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z.string().openapi({ description: 'e.g.: `ghcr.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubEnterpriseCredentials: z
                          .object({ token: z.string(), url: z.string() })
                          .exactOptional()
                          .openapi({ required: ['token', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitLabCredentials: z
                          .object({
                            token: z.string(),
                            url: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'for self-hosted GitLab only' }),
                          })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitLabCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.gitlab.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GoogleArtifactCrCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'JSON key file' }),
                            registryBase: z
                              .string()
                              .openapi({
                                description:
                                  'e.g.: `us-east1-docker.pkg.dev`, `europe-west1-docker.pkg.dev`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        HarborCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.harbor.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        NexusCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.nexus.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        QuayCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `quay.io`, `your.quay.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                  ])
                  .openapi({ description: 'credentials for given integration' }),
                type: z
                  .enum([
                    'acr',
                    'artifactory-cr',
                    'azure-repos',
                    'bitbucket-cloud',
                    'bitbucket-server',
                    'digitalocean-cr',
                    'docker-hub',
                    'ecr',
                    'gcr',
                    'github',
                    'github-cr',
                    'github-enterprise',
                    'gitlab',
                    'gitlab-cr',
                    'google-artifact-cr',
                    'harbor-cr',
                    'nexus-cr',
                    'quay-cr',
                  ])
                  .openapi({ description: 'integration type' }),
              })
              .openapi({
                example: { credentials: { token: 'GITHUB_TOKEN' }, type: 'github' },
                required: ['type', 'credentials'],
              }),
            z
              .object({
                broker: z
                  .object({ enabled: z.boolean().exactOptional() })
                  .openapi({ description: 'brokered integration settings', required: [] }),
                type: z
                  .enum([
                    'acr',
                    'artifactory-cr',
                    'azure-repos',
                    'bitbucket-cloud',
                    'bitbucket-server',
                    'digitalocean-cr',
                    'docker-hub',
                    'ecr',
                    'gcr',
                    'github',
                    'github-cr',
                    'github-enterprise',
                    'gitlab',
                    'gitlab-cr',
                    'google-artifact-cr',
                    'harbor-cr',
                    'nexus-cr',
                    'quay-cr',
                  ])
                  .openapi({ description: 'integration type' }),
              })
              .openapi({
                example: { broker: { enabled: true }, type: 'bitbucket-server' },
                required: ['type', 'broker'],
              }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putOrgOrgIdIntegrationsIntegrationIdRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/integrations/{integrationId}',
  tags: ['Integrations'],
  summary: 'Update existing integration',
  description:
    "+ Update integration's credentials for given organization. Integration must be **not brokered**\n\n+ Enable or disable brokered integration for given organization. *Credentials required for disabling brokered integration*\n\nExamples in right section:\n\n1. Set up a broker for an existing integration\n\n2. Update credentials for an existing non-brokered integration\n\n3. Disable broker for an existing integration",
  operationId: 'Update existing integration',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.',
            example: '9a3e5d90-b782-468a-a042-9a2073736f0b',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                broker: z
                  .object({ enabled: z.boolean().exactOptional() })
                  .openapi({ description: 'brokered integration settings', required: [] }),
                type: z
                  .enum([
                    'acr',
                    'artifactory-cr',
                    'azure-repos',
                    'bitbucket-cloud',
                    'bitbucket-server',
                    'digitalocean-cr',
                    'docker-hub',
                    'ecr',
                    'gcr',
                    'github',
                    'github-cr',
                    'github-enterprise',
                    'gitlab',
                    'gitlab-cr',
                    'google-artifact-cr',
                    'harbor-cr',
                    'nexus-cr',
                    'quay-cr',
                  ])
                  .openapi({ description: 'integration type' }),
              })
              .openapi({
                example: { broker: { enabled: true }, type: 'github' },
                required: ['type', 'broker'],
              }),
            z
              .object({
                credentials: z
                  .xor([
                    z
                      .object({
                        AcrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `name.azurecr.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        ArtifactoryCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `name.jfrog.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        AzureReposCredentials: z
                          .object({ url: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        BitbucketCloudCredentials: z
                          .object({ password: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'password'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        BitbucketServerCredentials: z
                          .object({ password: z.string(), url: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        DigitalOceanCrCredentials: z
                          .object({
                            token: z.string().openapi({ description: 'Personal Access Token' }),
                          })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        DockerHubCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'Access Token' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        EcrCredentials: z
                          .object({
                            region: z.string().openapi({ description: 'e.g.: `eu-west-3`' }),
                            roleArn: z
                              .string()
                              .openapi({
                                description: 'e.g.: `arn:aws:iam::<account-id>:role/<newRole>`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['region', 'roleArn'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GcrCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'JSON key file' }),
                            registryBase: z
                              .string()
                              .openapi({
                                description:
                                  'e.g.: `gcr.io`, `us.gcr.io`, `eu.gcr.io`, `asia.gcr.io`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubCredentials: z
                          .object({ token: z.string() })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z.string().openapi({ description: 'e.g.: `ghcr.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubEnterpriseCredentials: z
                          .object({ token: z.string(), url: z.string() })
                          .exactOptional()
                          .openapi({ required: ['token', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitLabCredentials: z
                          .object({
                            token: z.string(),
                            url: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'for self-hosted GitLab only' }),
                          })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitLabCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.gitlab.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GoogleArtifactCrCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'JSON key file' }),
                            registryBase: z
                              .string()
                              .openapi({
                                description:
                                  'e.g.: `us-east1-docker.pkg.dev`, `europe-west1-docker.pkg.dev`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        HarborCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.harbor.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        NexusCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.nexus.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        QuayCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `quay.io`, `your.quay.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                  ])
                  .openapi({ description: 'credentials for given integration' }),
                type: z
                  .enum([
                    'acr',
                    'artifactory-cr',
                    'azure-repos',
                    'bitbucket-cloud',
                    'bitbucket-server',
                    'digitalocean-cr',
                    'docker-hub',
                    'ecr',
                    'gcr',
                    'github',
                    'github-cr',
                    'github-enterprise',
                    'gitlab',
                    'gitlab-cr',
                    'google-artifact-cr',
                    'harbor-cr',
                    'nexus-cr',
                    'quay-cr',
                  ])
                  .openapi({ description: 'integration type' }),
              })
              .openapi({
                example: { credentials: { token: 'GITLAB_TOKEN' }, type: 'gitlab' },
                required: ['type', 'credentials'],
              }),
            z
              .object({
                broker: z
                  .object({ enabled: z.boolean().exactOptional() })
                  .openapi({ description: 'brokered integration settings', required: [] }),
                credentials: z
                  .xor([
                    z
                      .object({
                        AcrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `name.azurecr.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        ArtifactoryCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `name.jfrog.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        AzureReposCredentials: z
                          .object({ url: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        BitbucketCloudCredentials: z
                          .object({ password: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'password'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        BitbucketServerCredentials: z
                          .object({ password: z.string(), url: z.string(), username: z.string() })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        DigitalOceanCrCredentials: z
                          .object({
                            token: z.string().openapi({ description: 'Personal Access Token' }),
                          })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        DockerHubCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'Access Token' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        EcrCredentials: z
                          .object({
                            region: z.string().openapi({ description: 'e.g.: `eu-west-3`' }),
                            roleArn: z
                              .string()
                              .openapi({
                                description: 'e.g.: `arn:aws:iam::<account-id>:role/<newRole>`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['region', 'roleArn'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GcrCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'JSON key file' }),
                            registryBase: z
                              .string()
                              .openapi({
                                description:
                                  'e.g.: `gcr.io`, `us.gcr.io`, `eu.gcr.io`, `asia.gcr.io`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubCredentials: z
                          .object({ token: z.string() })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z.string().openapi({ description: 'e.g.: `ghcr.io`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitHubEnterpriseCredentials: z
                          .object({ token: z.string(), url: z.string() })
                          .exactOptional()
                          .openapi({ required: ['token', 'url'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitLabCredentials: z
                          .object({
                            token: z.string(),
                            url: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'for self-hosted GitLab only' }),
                          })
                          .exactOptional()
                          .openapi({ required: ['token'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GitLabCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.gitlab.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        GoogleArtifactCrCredentials: z
                          .object({
                            password: z.string().openapi({ description: 'JSON key file' }),
                            registryBase: z
                              .string()
                              .openapi({
                                description:
                                  'e.g.: `us-east1-docker.pkg.dev`, `europe-west1-docker.pkg.dev`',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: ['password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        HarborCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.harbor.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        NexusCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `your.nexus.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                    z
                      .object({
                        QuayCrCredentials: z
                          .object({
                            password: z.string(),
                            registryBase: z
                              .string()
                              .openapi({ description: 'e.g.: `quay.io`, `your.quay.host`' }),
                            username: z.string(),
                          })
                          .exactOptional()
                          .openapi({ required: ['username', 'password', 'registryBase'] }),
                      })
                      .openapi({ required: [] }),
                  ])
                  .openapi({ description: 'credentials for given integration' }),
                type: z
                  .enum([
                    'acr',
                    'artifactory-cr',
                    'azure-repos',
                    'bitbucket-cloud',
                    'bitbucket-server',
                    'digitalocean-cr',
                    'docker-hub',
                    'ecr',
                    'gcr',
                    'github',
                    'github-cr',
                    'github-enterprise',
                    'gitlab',
                    'gitlab-cr',
                    'google-artifact-cr',
                    'harbor-cr',
                    'nexus-cr',
                    'quay-cr',
                  ])
                  .openapi({ description: 'integration type' }),
              })
              .openapi({
                example: {
                  broker: { enabled: false },
                  credentials: { token: 'GITHUB_TOKEN' },
                  type: 'github',
                },
                required: ['type', 'broker', 'credentials'],
              }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteOrgOrgIdIntegrationsIntegrationIdAuthenticationRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/integrations/{integrationId}/authentication',
  tags: ['Integrations'],
  summary: 'Delete credentials',
  description:
    'Removes any credentials set for this integration. If this is a brokered connection the operation will have no effect.',
  operationId: 'Delete credentials',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description: 'The integration ID.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/integrations/{integrationId}/authentication/provision-token',
  tags: ['Integrations'],
  summary: 'Provision new broker token',
  description:
    'Issue a new and unique provisional broker token for the brokered integration.\n\nUsed for zero down-time token rotation with the Snyk Broker. Once provisioned, the token can be used to initialize a new broker client before using the switch API to update the token in use by the integration.\n\nThe new provisional token will fail to be created if the integration, or any other integration in the same group, already has one provisioned.',
  operationId: 'Provision new broker token',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description: '',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/integrations/{integrationId}/authentication/switch-token',
  tags: ['Integrations'],
  summary: 'Switch between broker tokens',
  description:
    'Switch the existing broker token with the provisioned token for this integration and any other in the same group.\nOnly perform this action when you have a Broker client running with the provisioned token.\nThis action will fail if there is no token provisioned for this integration or any integration in the same group.',
  operationId: 'Switch between broker tokens',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description: '',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdIntegrationsIntegrationIdCloneRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/integrations/{integrationId}/clone',
  tags: ['Integrations'],
  summary: 'Clone an integration (with settings and credentials)',
  description:
    'Clone an integration, including all of its settings and credentials from one organization to another organization in the same group.\nThis API supports both brokered and non-brokered integrations.\n\nUse this API for when you want to share a Broker token between several Snyk organizations (integrations).',
  operationId: 'Clone an integration (with settings and credentials)',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'Source organization public ID to clone integration settings from. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description: 'Source integration public ID to clone.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destinationOrgPublicId: z
                .string()
                .openapi({
                  description:
                    'The organization public ID. The `API_KEY` must have access to this organization.',
                }),
            })
            .openapi({
              example: { destinationOrgPublicId: '9a3e5d90-b782-468a-a042-9a2073736f0b1' },
              required: ['destinationOrgPublicId'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postOrgOrgIdIntegrationsIntegrationIdImportRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/integrations/{integrationId}/import',
  tags: ['Import Projects'],
  summary: 'Import targets',
  operationId: 'Import targets',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.',
            example: '9a3e5d90-b782-468a-a042-9a2073736f0b',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                exclusionGlobs: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'a comma-separated list of up to 10 folder names to exclude from scanning (each folder name must not exceed 100 characters). If not specified, it will default to "fixtures, tests, \\_\\_tests\\_\\_, node_modules". If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets.',
                  }),
                files: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'an array of file objects' }),
                target: z
                  .object({
                    branch: z
                      .string()
                      .openapi({
                        description:
                          'default branch of the repo (Please contact support if you want to import a non default repo branch)',
                      }),
                    name: z.string().openapi({ description: 'name of the repo' }),
                    owner: z
                      .string()
                      .openapi({
                        description:
                          'for Github: account owner of the repository; for Azure Repos, this is `Project ID`; for Bitbucket Cloud, this is the `Workspace ID`',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: ['owner', 'name', 'branch'] }),
              })
              .openapi({
                example: {
                  files: [{ path: 'example/package.json' }],
                  target: { branch: 'main', name: 'goof', owner: 'org-security' },
                },
                required: [],
              }),
            z
              .object({
                exclusionGlobs: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'a comma-separated list of up to 10 folder names to exclude from scanning. If not specified, it will default to "fixtures, tests, \\_\\_tests\\_\\_, node_modules". If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets.',
                  }),
                files: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'an array of file objects' }),
                target: z
                  .object({
                    branch: z.string().openapi({ description: 'repo branch' }),
                    id: z.number().openapi({ description: 'id of the repo' }),
                  })
                  .exactOptional()
                  .openapi({ required: ['id', 'branch'] }),
              })
              .openapi({
                example: {
                  files: [{ path: 'example/package.json' }],
                  target: { branch: 'develop', id: 11 },
                },
                required: [],
              }),
            z
              .object({
                exclusionGlobs: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'a comma-separated list of up to 10 folder names to exclude from scanning. If not specified, it will default to "fixtures, tests, \\_\\_tests\\_\\_, node_modules". If an empty string is provided - no folders will be excluded. This attribute is only respected with Open Source and Container scan targets.',
                  }),
                files: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'an array of file objects' }),
                target: z
                  .object({
                    branch: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'target branch name' }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'custom name for the project' }),
                    projectKey: z.string().openapi({ description: 'project key' }),
                    repoSlug: z.string().openapi({ description: 'slug of the repo' }),
                  })
                  .exactOptional()
                  .openapi({ required: ['projectKey', 'repoSlug'] }),
              })
              .openapi({
                example: {
                  files: [{ path: 'example/package.json' }],
                  target: { projectKey: 'SNYK_REPOS', repoSlug: 'test' },
                },
                required: [],
              }),
            z
              .object({
                files: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'an array of file objects' }),
                target: z
                  .object({
                    appId: z.string().openapi({ description: 'ID of the app' }),
                    slugId: z.string().openapi({ description: 'ID of the slug' }),
                  })
                  .exactOptional()
                  .openapi({ required: ['appId', 'slugId'] }),
              })
              .openapi({
                example: { files: [{ path: '' }], target: { appId: '', slugId: '' } },
                required: [],
              }),
            z
              .object({
                files: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'an array of file objects' }),
                target: z
                  .object({ functionId: z.string().openapi({ description: 'ID of the app' }) })
                  .exactOptional()
                  .openapi({ required: ['functionId'] }),
              })
              .openapi({
                example: { files: [{ path: '' }], target: { functionId: '' } },
                required: [],
              }),
            z
              .object({
                files: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'an array of file objects' }),
                target: z
                  .object({ appId: z.string().openapi({ description: 'ID of the app' }) })
                  .exactOptional()
                  .openapi({ required: ['appId'] }),
              })
              .openapi({ example: { files: [{ path: '' }], target: { appId: '' } }, required: [] }),
            z
              .object({
                target: z
                  .object({
                    name: z
                      .string()
                      .openapi({
                        description: 'image name including tag prefixed by organization name',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: ['name'] }),
              })
              .openapi({
                example: { target: { name: 'organization/repository:tag' } },
                required: [],
              }),
            z
              .object({
                target: z
                  .object({ name: z.string().openapi({ description: 'image name including tag' }) })
                  .exactOptional()
                  .openapi({ required: ['name'] }),
              })
              .openapi({ example: { target: { name: 'repository:tag' } }, required: [] }),
            z
              .object({
                target: z
                  .object({
                    name: z
                      .string()
                      .openapi({
                        description:
                          'image name including tag prefixed by project id or project name',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: ['name'] }),
              })
              .openapi({ example: { target: { name: 'project/repository:tag' } }, required: [] }),
          ]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getOrgOrgIdIntegrationsIntegrationIdImportJobIdRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/integrations/{integrationId}/import/{jobId}',
  tags: ['Import Projects'],
  summary: 'Get import job details',
  operationId: 'Get import job details',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.',
            example: '9a3e5d90-b782-468a-a042-9a2073736f0b',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the job. This can be found in the Location response header from the corresponding POST request that triggered the import job.',
            example: '1a325d9d-b782-468a-a242-9a2073734f0b',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              created: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'the time when an import job was created represented as a [UTC (ISO-8601)](https://tools.ietf.org/html/rfc3339) string',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: "A uuid representing the job's id" }),
              logs: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'all organizations imported by the job' }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'a string representing the status of a job.\n\nOne of: pending, failed, aborted or complete.',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                created: '2018-07-23T15:21:10.611Z',
                id: 'dce061f7-ce0f-4ccf-b49b-4335d1205bd9',
                logs: [
                  {
                    created: '2018-07-23T15:21:10.643Z',
                    name: 'org1/repo1',
                    projects: [],
                    status: 'failed',
                  },
                  {
                    created: '2018-07-23T15:21:10.644Z',
                    name: 'org2/repo2',
                    projects: [
                      {
                        projectUrl:
                          'https://snyk.io/org/org-name/project/7eeaee25-5f9b-4d05-8818-4cca2c9d9adc',
                        success: true,
                        targetFile: 'package.json',
                      },
                    ],
                    status: 'complete',
                  },
                  {
                    created: '2018-07-23T15:21:10.643Z',
                    name: 'org3/repo3',
                    projects: [
                      {
                        projectUrl:
                          'https://snyk.io/org/org-name/project/0382897c-0617-4429-86df-51187dfd42f6',
                        success: true,
                        targetFile: 'package.json',
                      },
                    ],
                    status: 'pending',
                  },
                ],
                status: 'pending',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdIntegrationsIntegrationIdSettingsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/integrations/{integrationId}/settings',
  tags: ['Integrations'],
  summary: 'Retrieve',
  operationId: 'Retrieve',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.',
            example: '9a3e5d90-b782-468a-a042-9a2073736f0b',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .object({
              autoDepUpgradeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the functionality is enabled' }),
              autoDepUpgradeIgnoredDependencies: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'A list of strings defining what dependencies should be ignored',
                }),
              autoDepUpgradeLimit: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'A limit on how many automatic dependency upgrade PRs can be opened simultaneously',
                }),
              autoDepUpgradeMinAge: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The age (in days) that an automatic dependency check is valid for',
                }),
              autoRemediationPrs: z
                .object({
                  backlogPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of prioritized backlog issues',
                    }),
                  freshPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
                    }),
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines automatic remediation policies', required: [] }),
              dockerfileSCMEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes',
                }),
              manualRemediationPrs: z
                .object({
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines manual remediation policies', required: [] }),
              pullRequestAssignment: z
                .object({
                  assignees: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "an array of usernames that have contributed to the organization's project(s).",
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "if the organization's project(s) will assign Snyk pull requests.",
                    }),
                  type: z
                    .enum(['auto', 'manual'])
                    .exactOptional()
                    .openapi({
                      description:
                        'a string representing the type of assignment your projects require.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'assign Snyk pull requests', required: [] }),
              pullRequestFailOnAnyVulns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If an opened PR should fail to be validated if any vulnerable dependencies have been detected',
                }),
              pullRequestFailOnlyForHighSeverity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If an opened PR only should fail its validation if any dependencies are marked as being of high severity',
                }),
              pullRequestTestEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If opened PRs should be tested' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdIntegrationsIntegrationIdSettingsRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/integrations/{integrationId}/settings',
  tags: ['Integrations'],
  summary: 'Update',
  operationId: 'Update',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.',
            example: '9a3e5d90-b782-468a-a042-9a2073736f0b',
            in: 'path',
            name: 'integrationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              autoDepUpgradeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the functionality is enabled' }),
              autoDepUpgradeIgnoredDependencies: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'A list of strings defining what dependencies should be ignored',
                }),
              autoDepUpgradeLimit: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'A limit on how many automatic dependency upgrade PRs can be opened simultaneously',
                }),
              autoDepUpgradeMinAge: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The age (in days) that an automatic dependency check is valid for',
                }),
              autoRemediationPrs: z
                .object({
                  backlogPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of prioritized backlog issues',
                    }),
                  freshPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
                    }),
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines automatic remediation policies', required: [] }),
              dockerfileSCMEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes',
                }),
              manualRemediationPrs: z
                .object({
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines manual remediation policies', required: [] }),
              pullRequestAssignment: z
                .object({
                  assignees: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "an array of usernames that have contributed to the organization's project(s).",
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "if the organization's project(s) will assign Snyk pull requests.",
                    }),
                  type: z
                    .enum(['auto', 'manual'])
                    .exactOptional()
                    .openapi({
                      description:
                        'a string representing the type of assignment your projects require.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'assign Snyk pull requests', required: [] }),
              pullRequestFailOnAnyVulns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If an opened PR should fail to be validated if any vulnerable dependencies have been detected',
                }),
              pullRequestFailOnlyForHighSeverity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If an opened PR only should fail its validation if any dependencies are marked as being of high severity',
                }),
              pullRequestTestEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If opened PRs should be tested' }),
            })
            .openapi({
              example: {
                autoDepUpgradeEnabled: false,
                autoDepUpgradeIgnoredDependencies: [],
                autoDepUpgradeLimit: 2,
                autoDepUpgradeMinAge: 21,
                autoRemediationPrs: {
                  backlogPrsEnabled: false,
                  freshPrsEnabled: true,
                  usePatchRemediation: false,
                },
                dockerfileSCMEnabled: true,
                manualRemediationPrs: { useManualPatchRemediation: false },
                pullRequestAssignment: { assignees: ['username'], enabled: true, type: 'manual' },
                pullRequestFailOnAnyVulns: false,
                pullRequestFailOnlyForHighSeverity: true,
                pullRequestTestEnabled: true,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              autoDepUpgradeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the functionality is enabled' }),
              autoDepUpgradeIgnoredDependencies: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'A list of strings defining what dependencies should be ignored',
                }),
              autoDepUpgradeLimit: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'A limit on how many automatic dependency upgrade PRs can be opened simultaneously',
                }),
              autoDepUpgradeMinAge: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The age (in days) that an automatic dependency check is valid for',
                }),
              autoRemediationPrs: z
                .object({
                  backlogPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of prioritized backlog issues',
                    }),
                  freshPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
                    }),
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines automatic remediation policies', required: [] }),
              dockerfileSCMEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes',
                }),
              manualRemediationPrs: z
                .object({
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines manual remediation policies', required: [] }),
              pullRequestAssignment: z
                .object({
                  assignees: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "an array of usernames that have contributed to the organization's project(s).",
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "if the organization's project(s) will assign Snyk pull requests.",
                    }),
                  type: z
                    .enum(['auto', 'manual'])
                    .exactOptional()
                    .openapi({
                      description:
                        'a string representing the type of assignment your projects require.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'assign Snyk pull requests', required: [] }),
              pullRequestFailOnAnyVulns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If an opened PR should fail to be validated if any vulnerable dependencies have been detected',
                }),
              pullRequestFailOnlyForHighSeverity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If an opened PR only should fail its validation if any dependencies are marked as being of high severity',
                }),
              pullRequestTestEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If opened PRs should be tested' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                autoDepUpgradeEnabled: false,
                autoDepUpgradeIgnoredDependencies: [],
                autoDepUpgradeLimit: 2,
                autoDepUpgradeMinAge: 21,
                autoRemediationPrs: {
                  backlogPrsEnabled: false,
                  freshPrsEnabled: true,
                  usePatchRemediation: false,
                },
                dockerfileSCMEnabled: true,
                manualRemediationPrs: { useManualPatchRemediation: false },
                pullRequestAssignment: { assignees: ['username'], enabled: true, type: 'manual' },
                pullRequestFailOnAnyVulns: false,
                pullRequestFailOnlyForHighSeverity: true,
                pullRequestTestEnabled: true,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdIntegrationsTypeRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/integrations/{type}',
  tags: ['Integrations'],
  summary: 'Get existing integration by type',
  operationId: 'Get existing integration by type',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Integration type.',
            example: 'github',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Alphanumeric UUID including - with a limit of 36 characters',
                }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { id: '9a3e5d90-b782-468a-a042-9a2073736f0b' } } },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdInviteRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/invite',
  tags: ['Organizations'],
  summary: 'Invite users',
  operationId: 'Invite users',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
              isAdmin: z
                .boolean()
                .exactOptional()
                .openapi({ description: '(optional) Set the role as admin.' }),
            })
            .openapi({ example: { email: '' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdLicensesRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/licenses',
  tags: ['Licenses'],
  summary: 'List all licenses',
  operationId: 'List all licenses',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list projects for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sortBy: z
        .enum(['license', 'dependencies', 'projects', 'severity'])
        .default('license')
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to sort results by.',
            example: 'license',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'license',
              enum: ['license', 'dependencies', 'projects', 'severity'],
              type: 'string',
            },
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction to sort results by.',
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  dependencies: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description: 'The list of dependency IDs to filter the results by',
                    }),
                  languages: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'The type of languages to filter the results by' }),
                  licenses: z
                    .any()
                    .exactOptional()
                    .openapi({ description: 'The list of license IDs to filter the results by' }),
                  projects: z
                    .any()
                    .exactOptional()
                    .openapi({ description: 'The list of project IDs to filter the results by' }),
                  severity: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'The severities to filter the results by' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                filters: {
                  dependencies: [],
                  languages: ['node', 'ruby', 'java'],
                  licenses: [],
                  projects: [],
                  severity: ['none', 'high', 'medium', 'low'],
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      dependencies: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'The identifier of the package' }),
                              name: z.string().openapi({ description: 'The name of the package' }),
                              packageManager: z
                                .string()
                                .openapi({ description: 'The package manager of the dependency' }),
                              version: z
                                .string()
                                .openapi({ description: 'The version of the package' }),
                            })
                            .openapi({ required: ['id', 'name', 'version', 'packageManager'] }),
                        )
                        .openapi({
                          description:
                            'The dependencies of projects in the organization which have the license',
                        }),
                      id: z.string().openapi({ description: 'The identifier of the license' }),
                      instructions: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Custom instructions assigned to this license' }),
                      projects: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'The identifier of the project' }),
                              name: z.string().openapi({ description: 'The name of the project' }),
                            })
                            .openapi({ required: ['id', 'name'] }),
                        )
                        .openapi({ description: 'The projects which contain the license' }),
                      severity: z
                        .enum(['none', 'high', 'medium', 'low'])
                        .exactOptional()
                        .openapi({ description: 'The severity assigned to this license' }),
                    })
                    .openapi({ required: ['id', 'dependencies', 'projects'] }),
                )
                .openapi({ description: 'A list of licenses' }),
              total: z
                .number()
                .exactOptional()
                .openapi({ description: 'The number of results returned' }),
            })
            .openapi({ required: ['results'] }),
          examples: {
            response: {
              value: {
                results: [
                  {
                    dependencies: [
                      {
                        id: 'accepts@1.0.0',
                        name: 'accepts',
                        packageManager: 'npm',
                        version: '1.0.0',
                      },
                    ],
                    id: 'MIT',
                    instructions: '',
                    projects: [
                      { id: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545', name: 'atokeneduser/goof' },
                    ],
                    severity: 'none',
                  },
                ],
                total: 1,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdMembersRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/members',
  tags: ['Organizations'],
  summary: 'List Members',
  operationId: 'List Members',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeGroupAdmins: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include group administrators who also have access to this organization.',
            example: 'true',
            in: 'query',
            name: 'includeGroupAdmins',
            required: false,
            schema: { default: 'false', type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.any()),
          examples: {
            response: { value: [{ email: '', id: '', name: '', role: '', username: '' }] },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdMembersUpdateUserIdRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/members/update/{userId}',
  tags: ['Organizations'],
  summary: "Update a member's role in the organization",
  operationId: "Update a member's role in the organization",
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The user ID.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rolePublicId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The new role public ID to update the user to.' }),
            })
            .openapi({ example: { rolePublicId: '' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putOrgOrgIdMembersUserIdRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/members/{userId}',
  tags: ['Organizations'],
  summary: 'Update a member in the organization',
  operationId: 'Update a member in the organization',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The user ID.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role: z
                .string()
                .exactOptional()
                .openapi({ description: 'The new role of the user, "admin" or "collaborator".' }),
            })
            .openapi({ example: { role: '' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteOrgOrgIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/members/{userId}',
  tags: ['Organizations'],
  summary: 'Remove a member from the organization',
  operationId: 'Remove a member from the organization',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must admin have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The user ID we want to remove.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getOrgOrgIdNotificationSettingsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/notification-settings',
  tags: ['Organizations'],
  summary: 'Get organization notification settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              'new-issues-remediations': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                  issueSeverity: z
                    .enum(['all', 'high'])
                    .openapi({
                      description:
                        'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                  issueType: z
                    .enum(['all', 'vuln', 'license', 'none'])
                    .openapi({
                      description:
                        'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
              'project-imported': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'test-limit': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'weekly-report': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                'new-issues-remediations': {
                  enabled: true,
                  inherited: false,
                  issueSeverity: 'high',
                  issueType: 'vuln',
                },
                'project-imported': { enabled: true, inherited: false },
                'test-limit': { enabled: true, inherited: false },
                'weekly-report': { enabled: true, inherited: false },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdNotificationSettingsRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/notification-settings',
  tags: ['Organizations'],
  summary: 'Set notification settings',
  operationId: 'Set notification settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ModifyOrganizationNotificationSettingsBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              'new-issues-remediations': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                  issueSeverity: z
                    .enum(['all', 'high'])
                    .openapi({
                      description:
                        'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                  issueType: z
                    .enum(['all', 'vuln', 'license', 'none'])
                    .openapi({
                      description:
                        'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
              'project-imported': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'test-limit': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'weekly-report': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                'new-issues-remediations': {
                  enabled: true,
                  inherited: false,
                  issueSeverity: 'high',
                  issueType: 'vuln',
                },
                'project-imported': { enabled: true, inherited: false },
                'test-limit': { enabled: true, inherited: false },
                'weekly-report': { enabled: true, inherited: false },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdProjectProjectIdRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}',
  tags: ['Projects'],
  summary: 'Retrieve a single project',
  operationId: 'Retrieve a single project',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID the project belongs to. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              attributes: z
                .object({
                  criticality: z.array(z.any()).exactOptional(),
                  environment: z.array(z.any()).exactOptional(),
                  lifecycle: z.array(z.any()).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Applied project attributes', required: [] }),
              branch: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The monitored branch (if available)' }),
              browseUrl: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL with project overview' }),
              created: z
                .string()
                .exactOptional()
                .openapi({ description: 'The date that the project was created on' }),
              hostname: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The hostname for a CLI project, null if not set' }),
              id: z.string().exactOptional().openapi({ description: 'The project identifier' }),
              imageBaseImage: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the base image' }),
              imageCluster: z
                .string()
                .exactOptional()
                .openapi({ description: 'For Kubernetes projects shows the origin cluster name' }),
              imageId: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the ID of the image' }),
              imagePlatform: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the platform of the image' }),
              imageTag: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the tag of the image' }),
              importingUser: z
                .object({
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The email of the user.' }),
                  id: z.string().exactOptional().openapi({ description: 'The ID of the user.' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the user.' }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The username of the user.' }),
                })
                .exactOptional()
                .openapi({ description: 'The user who imported the project', required: [] }),
              isMonitored: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Describes if a project is currently monitored or it is de-activated',
                }),
              issueCountsBySeverity: z
                .object({
                  critical: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of critical severity vulnerabilities' }),
                  high: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of high severity vulnerabilities' }),
                  low: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of low severity vulnerabilities' }),
                  medium: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of medium severity vulnerabilities' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Number of known vulnerabilities in the project, not including ignored issues',
                  required: [],
                }),
              lastTestedDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The date on which the most recent test was conducted for this project',
                }),
              name: z.string().exactOptional(),
              origin: z
                .string()
                .exactOptional()
                .openapi({ description: 'The origin the project was added from' }),
              owner: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The user who owns the project, null if not set\n\n{\n    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",\n    "name": "example-user@snyk.io",\n    "username": "exampleUser",\n    "email": "example-user@snyk.io"\n}',
                }),
              readOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the project is read-only' }),
              remediation: z
                .object({
                  patch: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Recommended patches to apply to the project\n\n(object)\n   paths (array) - List of paths to the vulnerable dependency that can be patched',
                    }),
                  pin: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Recommended pins to apply to the project (Python only)\n\n(object)\n    + upgradeTo (string, required) - `package@version` to upgrade to\n    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade\n    + isTransitive (boolean) - Describes if the dependency to be pinned is a transitive dependency',
                    }),
                  upgrade: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Recommended upgrades to apply to the project\n\n(object)\n    + upgradeTo (string, required) - `package@version` to upgrade to\n    + upgrades (array[string], required) -  List of `package@version` that will be upgraded as part of this upgrade\n    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Remediation data (if available)', required: [] }),
              remoteRepoUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The project remote repository url. Only set for projects imported via the Snyk CLI tool.',
                }),
              tags: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'List of applied tags' }),
              targetReference: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image',
                }),
              testFrequency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'",
                }),
              totalDependencies: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of dependencies of the project' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'The package manager of the project' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                attributes: {
                  criticality: ['high'],
                  environment: ['backend'],
                  lifecycle: ['development'],
                },
                branch: null,
                browseUrl:
                  'https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9',
                created: '2018-10-29T09:50:54.014Z',
                hostname: null,
                id: 'af137b96-6966-46c1-826b-2e79ac49bbd9',
                imageBaseImage: 'alpine:3',
                imageCluster: 'Production',
                imageId: 'sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019',
                imagePlatform: 'linux/arm64',
                imageTag: 'latest',
                importingUser: {
                  email: 'example-user@snyk.io',
                  id: 'e713cf94-bb02-4ea0-89d9-613cce0caed2',
                  name: 'example-user@snyk.io',
                  username: 'exampleUser',
                },
                isMonitored: false,
                issueCountsBySeverity: { critical: 3, high: 1, low: 13, medium: 8 },
                lastTestedDate: '2019-02-05T08:54:07.704Z',
                name: 'snyk/goof',
                origin: 'github',
                owner: null,
                readOnly: false,
                remediation: { patch: {}, pin: {}, upgrade: {} },
                remoteRepoUrl: 'https://github.com/snyk/goof.git',
                tags: [{ key: 'example-tag-key', value: 'example-tag-value' }],
                targetReference: null,
                testFrequency: 'daily',
                totalDependencies: 42,
                type: 'maven',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdProjectProjectIdRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/project/{projectId}',
  tags: ['Projects'],
  summary: 'Update a project',
  operationId: 'Update a project',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              branch: z
                .string()
                .exactOptional()
                .openapi({ description: 'The branch that this project should be monitoring' }),
              owner: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'A user to assign as the project owner.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Set to `null` to remove all ownership. User must be a member of the same organization as the project.',
                  required: [],
                }),
            })
            .openapi({
              example: { branch: 'main', owner: { id: '1acd4d09-5602-4d04-9640-045fe928aaea' } },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              attributes: z
                .object({
                  criticality: z.array(z.any()).exactOptional(),
                  environment: z.array(z.any()).exactOptional(),
                  lifecycle: z.array(z.any()).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Applied project attributes', required: [] }),
              branch: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The monitored branch (if available)' }),
              browseUrl: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL with project overview' }),
              created: z
                .string()
                .exactOptional()
                .openapi({ description: 'The date that the project was created on' }),
              hostname: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The hostname for a CLI project, null if not set' }),
              id: z.string().exactOptional().openapi({ description: 'The project identifier' }),
              imageBaseImage: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the base image' }),
              imageCluster: z
                .string()
                .exactOptional()
                .openapi({ description: 'For Kubernetes projects shows the origin cluster name' }),
              imageId: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the ID of the image' }),
              imagePlatform: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the platform of the image' }),
              imageTag: z
                .string()
                .exactOptional()
                .openapi({ description: 'For docker projects shows the tag of the image' }),
              importingUser: z
                .object({
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The email of the user.' }),
                  id: z.string().exactOptional().openapi({ description: 'The ID of the user.' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the user.' }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The username of the user.' }),
                })
                .exactOptional()
                .openapi({ description: 'The user who imported the project', required: [] }),
              isMonitored: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Describes if a project is currently monitored or it is de-activated',
                }),
              issueCountsBySeverity: z
                .object({
                  critical: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of critical severity vulnerabilities' }),
                  high: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of high severity vulnerabilities' }),
                  low: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of low severity vulnerabilities' }),
                  medium: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Number of medium severity vulnerabilities' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Number of known vulnerabilities in the project, not including ignored issues',
                  required: [],
                }),
              lastTestedDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The date on which the most recent test was conducted for this project',
                }),
              name: z.string().exactOptional(),
              origin: z
                .string()
                .exactOptional()
                .openapi({ description: 'The origin the project was added from' }),
              owner: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The user who owns the project, null if not set\n\n{\n    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",\n    "name": "example-user@snyk.io",\n    "username": "exampleUser",\n    "email": "example-user@snyk.io"\n}',
                }),
              readOnly: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the project is read-only' }),
              remediation: z
                .object({
                  patch: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Recommended patches to apply to the project\n\n(object)\n   paths (array) - List of paths to the vulnerable dependency that can be patched',
                    }),
                  pin: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Recommended pins to apply to the project (Python only)\n\n(object)\n    + upgradeTo (string, required) - `package@version` to upgrade to\n    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade\n    + isTransitive (boolean) - Describes if the dependency to be pinned is a transitive dependency',
                    }),
                  upgrade: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Recommended upgrades to apply to the project\n\n(object)\n    + upgradeTo (string, required) - `package@version` to upgrade to\n    + upgrades (array[string], required) -  List of `package@version` that will be upgraded as part of this upgrade\n    + vulns (array[string], required) - List of vulnerability ids that will be fixed as part of this upgrade',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Remediation data (if available)', required: [] }),
              remoteRepoUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The project remote repository url. Only set for projects imported via the Snyk CLI tool.',
                }),
              tags: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'List of applied tags' }),
              targetReference: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image',
                }),
              testFrequency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'",
                }),
              totalDependencies: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of dependencies of the project' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'The package manager of the project' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                attributes: {
                  criticality: ['high'],
                  environment: ['backend'],
                  lifecycle: ['development'],
                },
                branch: null,
                browseUrl:
                  'https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9',
                created: '2018-10-29T09:50:54.014Z',
                hostname: null,
                id: 'af137b96-6966-46c1-826b-2e79ac49bbd9',
                imageBaseImage: 'alpine:3',
                imageCluster: 'Production',
                imageId: 'sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019',
                imagePlatform: 'linux/arm64',
                imageTag: 'latest',
                importingUser: {
                  email: 'example-user@snyk.io',
                  id: 'e713cf94-bb02-4ea0-89d9-613cce0caed2',
                  name: 'example-user@snyk.io',
                  username: 'exampleUser',
                },
                isMonitored: false,
                issueCountsBySeverity: { critical: 3, high: 1, low: 13, medium: 8 },
                lastTestedDate: '2019-02-05T08:54:07.704Z',
                name: 'snyk/goof',
                origin: 'github',
                owner: null,
                readOnly: false,
                remediation: { patch: {}, pin: {}, upgrade: {} },
                remoteRepoUrl: 'https://github.com/snyk/goof.git',
                tags: [{ key: 'example-tag-key', value: 'example-tag-value' }],
                targetReference: null,
                testFrequency: 'daily',
                totalDependencies: 42,
                type: 'maven',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const deleteOrgOrgIdProjectProjectIdRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/project/{projectId}',
  tags: ['Projects'],
  summary: 'Delete a project',
  operationId: 'Delete a project',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdProjectProjectIdActivateRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/activate',
  tags: ['Projects'],
  summary: 'Activate',
  description:
    'Activating a project will:\n\n- Add a repository webhook for supported integrations.\n\n- Enable pull request tests for new vulnerabilities.\n\n- Open Fix pull request for newly disclosed vulnerabilities.\n\n- Enable recurring tests, sending email alerts about newly disclosed vulnerabilities.',
  operationId: 'Activate',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID the project belongs to. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdProjectProjectIdAggregatedIssuesRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/aggregated-issues',
  tags: ['Projects'],
  summary: 'List all Aggregated issues',
  operationId: 'List all Aggregated issues',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to return issues for.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListAllAggregatedIssuesBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              issues: z
                .array(
                  z
                    .object({
                      fixInfo: z
                        .object({
                          fixedIn: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description:
                                'The set of versions in which this issue has been fixed. If the issue spanned multiple versions (i.e. `1.x` and `2.x`) then there will be multiple `fixedIn` entries',
                            }),
                          isFixable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                "Whether all of the issue's paths are fixable. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading). An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.",
                            }),
                          isPartiallyFixable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                "Whether any of the issue's paths can be fixed. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading).  An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.",
                            }),
                          isPatchable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: "Whether all the of issue's paths are patchable",
                            }),
                          isPinnable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Whether the issue can be fixed by pinning a transitive',
                            }),
                          isUpgradable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: "Whether all of the issue's paths are upgradable",
                            }),
                          nearestFixedInVersion: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Nearest version which includes a fix for the issue. This is populated for container projects only.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Information about fix/upgrade/pinnable options for the issue (Non-IaC projects only)',
                          required: [],
                        }),
                      id: z.string().openapi({ description: 'The identifier of the issue' }),
                      ignoreReasons: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'The list of reasons why the issue was ignored' }),
                      introducedThrough: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'The list of what introduced the issue (it is available only for container project with Dockerfile)',
                        }),
                      isIgnored: z
                        .boolean()
                        .openapi({ description: 'Whether the issue has been ignored' }),
                      isPatched: z
                        .boolean()
                        .openapi({
                          description: 'Whether the issue has been patched (Non-IaC projects only)',
                        }),
                      issueData: z
                        .strictObject({
                          CVSSv3: z
                            .string()
                            .openapi({
                              description:
                                'The CVSS v3 string that signifies how the CVSS score was calculated (Non-IaC projects only)',
                            }),
                          credit: z
                            .array(z.any())
                            .openapi({
                              description:
                                'The list of people responsible for first uncovering or reporting the issue (Non-IaC projects only)',
                            }),
                          cvssScore: z
                            .number()
                            .openapi({
                              description:
                                'The CVSS score that results from running the CVSSv3 string (Non-IaC projects only)',
                            }),
                          description: z.string(),
                          disclosureTime: z
                            .string()
                            .openapi({
                              description: 'The date that the vulnerability was first disclosed',
                            }),
                          exploitMaturity: z
                            .string()
                            .openapi({ description: 'The exploit maturity of the issue' }),
                          id: z.string().openapi({ description: 'The identifier of the issue' }),
                          identifiers: z
                            .object({
                              CVE: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description: 'Common Vulnerability Enumeration identifiers',
                                }),
                              CWE: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description: 'Common Weakness Enumeration identifiers',
                                }),
                              OSVDB: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Identifiers assigned by the Open Source Vulnerability Database (OSVDB)',
                                }),
                            })
                            .openapi({
                              description:
                                'External identifiers assigned to the issue (Non-IaC projects only)',
                              required: [],
                            }),
                          isMaliciousPackage: z
                            .boolean()
                            .openapi({
                              description:
                                'Whether the issue is intentional, indicating a malicious package',
                            }),
                          language: z
                            .string()
                            .openapi({
                              description: 'The language of the issue (Non-IaC projects only)',
                            }),
                          nearestFixedInVersion: z
                            .string()
                            .openapi({
                              description:
                                'Nearest version which includes a fix for the issue. This is populated for container projects only. (Non-IaC projects only)',
                            }),
                          originalSeverity: z
                            .string()
                            .openapi({
                              description:
                                'The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied',
                            }),
                          patches: z
                            .array(z.any())
                            .openapi({
                              description:
                                'A list of patches available for the given issue (Non-IaC projects only)',
                            }),
                          path: z
                            .string()
                            .openapi({
                              description:
                                'Path to the resource property violating the policy within the scanned project. (IaC projects only)',
                            }),
                          publicationTime: z
                            .string()
                            .openapi({
                              description:
                                'The date that the vulnerability was first published by Snyk (Non-IaC projects only)',
                            }),
                          semver: z
                            .object({
                              unaffected: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The ranges that are unaffected by the issue',
                                }),
                              vulnerable: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The ranges that are vulnerable to the issue. May be an array or a string.',
                                }),
                            })
                            .openapi({
                              description:
                                'The ranges that are vulnerable and unaffected by the issue (Non-IaC projects only)',
                              required: [],
                            }),
                          severity: z
                            .string()
                            .openapi({
                              description:
                                'The severity status of the issue, after policies are applied',
                            }),
                          title: z.string().openapi({ description: 'The issue title' }),
                          url: z
                            .string()
                            .openapi({
                              description: 'URL to a page containing information about the issue',
                            }),
                          violatedPolicyPublicId: z
                            .string()
                            .openapi({
                              description:
                                'The ID of the violated policy in the issue (IaC projects only)',
                            }),
                        })
                        .openapi({
                          description: 'The details of the issue',
                          required: [
                            'id',
                            'title',
                            'severity',
                            'originalSeverity',
                            'url',
                            'description',
                            'identifiers',
                            'credit',
                            'exploitMaturity',
                            'semver',
                            'publicationTime',
                            'disclosureTime',
                            'CVSSv3',
                            'cvssScore',
                            'language',
                            'patches',
                            'nearestFixedInVersion',
                            'path',
                            'violatedPolicyPublicId',
                            'isMaliciousPackage',
                          ],
                        }),
                      issueType: z
                        .string()
                        .openapi({
                          description: "type of the issue ('vuln', 'license' or 'configuration')",
                        }),
                      links: z
                        .object({
                          paths: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL for the dependency paths that introduce this issue',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Onward links from this record (Non-IaC projects only)',
                          required: [],
                        }),
                      pkgName: z
                        .string()
                        .openapi({ description: 'The package name (Non-IaC projects only)' }),
                      pkgVersions: z
                        .array(z.string())
                        .openapi({
                          description: 'List of affected package versions (Non-IaC projects only)',
                        }),
                      priority: z
                        .object({
                          factors: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description:
                                'The list of factors that contributed to the priority of the issue',
                            }),
                          score: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The priority score of the issue' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Information about the priority of the issue (Non-IaC projects only)',
                          required: [],
                        }),
                    })
                    .openapi({
                      required: [
                        'id',
                        'issueType',
                        'pkgName',
                        'pkgVersions',
                        'issueData',
                        'isPatched',
                        'isIgnored',
                      ],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'An array of identified issues' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                issues: [
                  {
                    fixInfo: {
                      fixedIn: ['2.0.0'],
                      isFixable: false,
                      isPartiallyFixable: false,
                      isPatchable: false,
                      isPinnable: false,
                      isUpgradable: false,
                      nearestFixedInVersion: '2.0.0',
                    },
                    id: 'npm:ms:20170412',
                    ignoreReasons: [{ expires: '', reason: '', source: 'cli' }],
                    introducedThrough: [{ data: {}, kind: 'imageLayer' }],
                    isIgnored: false,
                    isPatched: false,
                    issueData: {
                      CVSSv3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L',
                      credit: ['Snyk Security Research Team'],
                      cvssScore: 3.7,
                      description:
                        '`## Overview\\r\\n[`ms`](https://www.npmjs.com/package/ms) is a tiny millisecond conversion utility.\\r\\n\\r\\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to `ms',
                      disclosureTime: '2017-04-11T21:00:00Z',
                      exploitMaturity: 'no-known-exploit',
                      id: 'npm:ms:20170412',
                      identifiers: { CVE: [], CWE: ['CWE-400'], OSVDB: [] },
                      isMaliciousPackage: true,
                      language: 'js',
                      nearestFixedInVersion: '2.0.0',
                      originalSeverity: 'high',
                      patches: [
                        {
                          comments: [],
                          id: 'patch:npm:ms:20170412:0',
                          modificationTime: '2019-12-03T11:40:45.863964Z',
                          urls: [
                            'https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_100.patch',
                          ],
                          version: '=1.0.0',
                        },
                      ],
                      path: '[DocId: 1].input.spec.template.spec.containers[snyk2].securityContext.privileged',
                      publicationTime: '2017-05-15T06:02:45Z',
                      semver: { unaffected: '', vulnerable: ['>=0.7.1 <2.0.0'] },
                      severity: 'low',
                      title: 'Regular Expression Denial of Service (ReDoS)',
                      url: 'https://snyk.io/vuln/npm:ms:20170412',
                      violatedPolicyPublicId: 'SNYK-CC-K8S-1',
                    },
                    issueType: 'vuln',
                    links: { paths: '' },
                    pkgName: 'ms',
                    pkgVersions: ['1.0.0'],
                    priority: {
                      factors: ['name: `isFixable`', 'description: `Has a fix available`'],
                      score: 399,
                    },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectProjectIdAttributesRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/attributes',
  tags: ['Projects'],
  summary: 'Applying attributes',
  description:
    'Applies an attribute to the provided project.\nIt is possible to assign multiple values to each attribute, but you can only assign values to one of the predefined attribute categories, using the predefined options for this category.\nAssigning an attribute requires the caller to be either an Organization Administrator or a Group Administrator.\nAssigning an attribute will override any existing values that the specific attribute already has set.\nIn order to clear out an attribute value, an empty array can be set.',
  operationId: 'Applying attributes',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to remove a tag from',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              criticality: z.array(z.any()).exactOptional(),
              environment: z.array(z.any()).exactOptional(),
              lifecycle: z.array(z.any()).exactOptional(),
            })
            .openapi({
              example: {
                criticality: ['high'],
                environment: ['backend'],
                lifecycle: ['development'],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              attributes: z
                .object({
                  criticality: z.array(z.any()).exactOptional(),
                  environment: z.array(z.any()).exactOptional(),
                  lifecycle: z.array(z.any()).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Attributes now applied to the project', required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                attributes: {
                  criticality: ['high'],
                  environment: ['backend'],
                  lifecycle: ['development'],
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectProjectIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/deactivate',
  tags: ['Projects'],
  summary: 'Deactivate',
  description:
    'Deactivating a project will:\n\n- Disable pull request tests for new vulnerabilities.\n\n- Disable Fix pull request from being opened for newly disclosed vulnerabilities.\n\n- Disable recurring tests - email alerts about newly disclosed vulnerabilities will be turned off.\n\n- If the repository has no other active projects, then remove any webhooks related to the project.',
  operationId: 'Deactivate',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID the project belongs to. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getOrgOrgIdProjectProjectIdDepGraphRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/dep-graph',
  tags: ['Projects'],
  summary: 'Get Project dependency graph',
  operationId: 'Get Project dependency graph',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to return issues for.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        '* A reference implementation of the graph, as well as conversion functions to/from legacy tree format, can be found at: https://github.com/snyk/dep-graph.\n\n* The object might contain additional fields in the future, in a backward-compatible way (`schemaVersion` will change accordingly).',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              depGraph: z
                .object({
                  graph: z
                    .object({
                      nodes: z
                        .array(
                          z
                            .object({
                              deps: z
                                .array(
                                  z
                                    .object({
                                      nodeId: z
                                        .string()
                                        .openapi({ description: 'The id of the node' }),
                                    })
                                    .openapi({ required: ['nodeId'] }),
                                )
                                .openapi({
                                  description: 'A list of the direct dependencies of the package',
                                }),
                              nodeId: z
                                .string()
                                .openapi({ description: 'The internal id of the node' }),
                              pkgId: z.string().openapi({ description: 'The id of the package' }),
                            })
                            .openapi({ required: ['nodeId', 'pkgId', 'deps'] }),
                        )
                        .exactOptional()
                        .openapi({ description: 'A list of the first-level packages' }),
                      rootNodeId: z
                        .string()
                        .openapi({ description: 'The internal id of the root node' }),
                    })
                    .openapi({
                      description: 'A directional graph of the packages in the project',
                      required: ['rootNodeId'],
                    }),
                  pkgManager: z
                    .object({
                      name: z.string().openapi({ description: 'The name of the package manager' }),
                      repositories: z
                        .array(z.object({ alias: z.string() }).openapi({ required: ['alias'] }))
                        .exactOptional(),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The version of the package manager' }),
                    })
                    .openapi({
                      description: 'The package manager of the project',
                      required: ['name'],
                    }),
                  pkgs: z
                    .array(
                      z
                        .object({
                          id: z.string().openapi({ description: 'The internal id of the package' }),
                          info: z
                            .object({
                              name: z.string().openapi({ description: 'The name of the package' }),
                              version: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'The version of the package' }),
                            })
                            .openapi({ required: ['name'] }),
                        })
                        .openapi({ required: ['id', 'info'] }),
                    )
                    .openapi({ description: 'A list of dependencies in the project' }),
                  schemaVersion: z
                    .string()
                    .openapi({ description: 'The scheme version of the depGraph object' }),
                })
                .openapi({
                  description: 'The dependency-graph object',
                  required: ['schemaVersion', 'pkgManager', 'pkgs', 'graph'],
                }),
            })
            .openapi({ required: ['depGraph'] }),
          examples: {
            response: {
              value: {
                depGraph: {
                  graph: {
                    nodes: [
                      {
                        deps: [{ nodeId: 'express@4.4.0' }, { nodeId: 'ws@1.0.0' }],
                        nodeId: 'root-node',
                        pkgId: 'demo-app-for-test@1.1.1',
                      },
                      { deps: [], nodeId: 'express@4.4.0', pkgId: 'express@4.4.0' },
                      { deps: [], nodeId: 'ws@1.0.0', pkgId: 'ws@1.0.0' },
                    ],
                    rootNodeId: 'root-node',
                  },
                  pkgManager: { name: 'npm' },
                  pkgs: [
                    {
                      id: 'demo-app-for-test@1.1.1',
                      info: { name: 'demo-app-for-test', version: '1.1.1' },
                    },
                    { id: 'express@4.4.0', info: { name: 'express', version: '4.4.0' } },
                    { id: 'ws@1.0.0', info: { name: 'ws', version: '1.0.0' } },
                  ],
                  schemaVersion: '1.1.0',
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectProjectIdHistoryRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/history',
  tags: ['Projects'],
  summary: 'List all project snapshots',
  operationId: 'List all project snapshots',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to return snapshots for.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return (the default is 10, the maximum is 100).',
            example: '10',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { type: 'number' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The offset from which to start returning results from.',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  imageId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'For container projects, filter by the ID of the image',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                filters: {
                  imageId:
                    'sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67',
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              snapshots: z
                .array(
                  z
                    .object({
                      created: z
                        .string()
                        .openapi({ description: 'The date that the snapshot was taken' }),
                      id: z.string().openapi({ description: 'The snapshot identifier' }),
                      imageBaseImage: z.string().exactOptional(),
                      imageId: z.string().exactOptional(),
                      imagePlatform: z.string().exactOptional(),
                      imageTag: z.string().exactOptional(),
                      issueCounts: z
                        .object({
                          license: z
                            .object({
                              critical: z
                                .number()
                                .openapi({
                                  description: 'Number of critical severity vulnerabilities',
                                }),
                              high: z
                                .number()
                                .openapi({
                                  description: 'Number of high severity vulnerabilities',
                                }),
                              low: z
                                .number()
                                .openapi({ description: 'Number of low severity vulnerabilities' }),
                              medium: z
                                .number()
                                .openapi({
                                  description: 'Number of medium severity vulnerabilities',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: ['low', 'medium', 'high', 'critical'] }),
                          sast: z
                            .object({
                              critical: z
                                .number()
                                .openapi({
                                  description: 'Number of critical severity vulnerabilities',
                                }),
                              high: z
                                .number()
                                .openapi({
                                  description: 'Number of high severity vulnerabilities',
                                }),
                              low: z
                                .number()
                                .openapi({ description: 'Number of low severity vulnerabilities' }),
                              medium: z
                                .number()
                                .openapi({
                                  description: 'Number of medium severity vulnerabilities',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: ['low', 'medium', 'high', 'critical'] }),
                          vuln: z
                            .object({
                              critical: z
                                .number()
                                .openapi({
                                  description: 'Number of critical severity vulnerabilities',
                                }),
                              high: z
                                .number()
                                .openapi({
                                  description: 'Number of high severity vulnerabilities',
                                }),
                              low: z
                                .number()
                                .openapi({ description: 'Number of low severity vulnerabilities' }),
                              medium: z
                                .number()
                                .openapi({
                                  description: 'Number of medium severity vulnerabilities',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: ['low', 'medium', 'high', 'critical'] }),
                        })
                        .openapi({
                          description:
                            'Number of known vulnerabilities in the project, not including ignored issues',
                          required: [],
                        }),
                      method: z
                        .enum(['api', 'cli', 'recurring', 'web', 'web-test', 'wizard'])
                        .exactOptional()
                        .openapi({ description: 'The method by which this snapshot was created.' }),
                      totalDependencies: z
                        .number()
                        .openapi({ description: 'Number of dependencies of the project' }),
                    })
                    .openapi({ required: ['id', 'created', 'totalDependencies', 'issueCounts'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "A list of the project's snapshots, ordered according to date (latest first).",
                }),
              total: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total number of results' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                snapshots: [
                  {
                    baseImageName: 'fedora:32',
                    created: '2019-02-05T06:21:00.000Z',
                    id: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
                    imageId:
                      'sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67',
                    imagePlatform: 'linux/amd64',
                    imageTag: 'latest',
                    issueCounts: {
                      license: { critical: 0, high: 13, low: 8, medium: 15 },
                      vuln: { critical: 0, high: 13, low: 8, medium: 15 },
                    },
                    method: 'web-test',
                    totalDependencies: 438,
                  },
                  {
                    baseImageName: 'fedora:32',
                    created: '2019-02-04T06:19:00.000Z',
                    id: '6d5813be-7e6d-4ab8-80c2-1e3e2a454553',
                    imageId:
                      'sha256:a368cbcfa6789bc347345f6d78902afe138b62ff5373d2aa5f37120277c90a67',
                    imagePlatform: 'linux/amd64',
                    imageTag: 'latest',
                    issueCounts: {
                      license: { critical: 0, high: 13, low: 8, medium: 15 },
                      vuln: { critical: 0, high: 13, low: 8, medium: 15 },
                    },
                    method: 'web-test',
                    totalDependencies: 438,
                  },
                ],
                total: 2,
              },
            },
          },
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/history/{snapshotId}/aggregated-issues',
  tags: ['Projects'],
  summary: 'List all project snapshot aggregated issues',
  operationId: 'List all project snapshot aggregated issues',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '2d5c4d0c-c6d6-4658-a703-c2721c135b26',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotId: z
        .string()
        .openapi({
          param: {
            description:
              'The snapshot ID. If set to latest, the most recent snapshot will be used.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454553',
            in: 'path',
            name: 'snapshotId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListAllAggregatedIssuesBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              issues: z
                .array(
                  z
                    .object({
                      fixInfo: z
                        .object({
                          fixedIn: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description:
                                'The set of versions in which this issue has been fixed. If the issue spanned multiple versions (i.e. `1.x` and `2.x`) then there will be multiple `fixedIn` entries',
                            }),
                          isFixable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                "Whether all of the issue's paths are fixable. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading). An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.",
                            }),
                          isPartiallyFixable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                "Whether any of the issue's paths can be fixed. Paths that are already patched are not considered fixable unless they have an alternative remediation (e.g. pinning or upgrading).  An upgrade path where the only changes are in transitive dependencies is only considered fixable if the package manager supports it.",
                            }),
                          isPatchable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: "Whether all the of issue's paths are patchable",
                            }),
                          isPinnable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Whether the issue can be fixed by pinning a transitive',
                            }),
                          isUpgradable: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: "Whether all of the issue's paths are upgradable",
                            }),
                          nearestFixedInVersion: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Nearest version which includes a fix for the issue. This is populated for container projects only.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Information about fix/upgrade/pinnable options for the issue (Non-IaC projects only)',
                          required: [],
                        }),
                      id: z.string().openapi({ description: 'The identifier of the issue' }),
                      ignoreReasons: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'The list of reasons why the issue was ignored' }),
                      introducedThrough: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'The list of what introduced the issue (it is available only for container project with Dockerfile)',
                        }),
                      isIgnored: z
                        .boolean()
                        .openapi({ description: 'Whether the issue has been ignored' }),
                      isPatched: z
                        .boolean()
                        .openapi({
                          description: 'Whether the issue has been patched (Non-IaC projects only)',
                        }),
                      issueData: z
                        .strictObject({
                          CVSSv3: z
                            .string()
                            .openapi({
                              description:
                                'The CVSS v3 string that signifies how the CVSS score was calculated (Non-IaC projects only)',
                            }),
                          credit: z
                            .array(z.any())
                            .openapi({
                              description:
                                'The list of people responsible for first uncovering or reporting the issue (Non-IaC projects only)',
                            }),
                          cvssScore: z
                            .number()
                            .openapi({
                              description:
                                'The CVSS score that results from running the CVSSv3 string (Non-IaC projects only)',
                            }),
                          description: z.string(),
                          disclosureTime: z
                            .string()
                            .openapi({
                              description: 'The date that the vulnerability was first disclosed',
                            }),
                          exploitMaturity: z
                            .string()
                            .openapi({ description: 'The exploit maturity of the issue' }),
                          id: z.string().openapi({ description: 'The identifier of the issue' }),
                          identifiers: z
                            .object({
                              CVE: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description: 'Common Vulnerability Enumeration identifiers',
                                }),
                              CWE: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description: 'Common Weakness Enumeration identifiers',
                                }),
                              OSVDB: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Identifiers assigned by the Open Source Vulnerability Database (OSVDB)',
                                }),
                            })
                            .openapi({
                              description:
                                'External identifiers assigned to the issue (Non-IaC projects only)',
                              required: [],
                            }),
                          isMaliciousPackage: z
                            .boolean()
                            .openapi({
                              description:
                                'Whether the issue is intentional, indicating a malicious package',
                            }),
                          language: z
                            .string()
                            .openapi({
                              description: 'The language of the issue (Non-IaC projects only)',
                            }),
                          nearestFixedInVersion: z
                            .string()
                            .openapi({
                              description:
                                'Nearest version which includes a fix for the issue. This is populated for container projects only. (Non-IaC projects only)',
                            }),
                          originalSeverity: z
                            .string()
                            .openapi({
                              description:
                                'The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied',
                            }),
                          patches: z
                            .array(z.any())
                            .openapi({
                              description:
                                'A list of patches available for the given issue (Non-IaC projects only)',
                            }),
                          path: z
                            .string()
                            .openapi({
                              description:
                                'Path to the resource property violating the policy within the scanned project. (IaC projects only)',
                            }),
                          publicationTime: z
                            .string()
                            .openapi({
                              description:
                                'The date that the vulnerability was first published by Snyk (Non-IaC projects only)',
                            }),
                          semver: z
                            .object({
                              unaffected: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'The ranges that are unaffected by the issue',
                                }),
                              vulnerable: z
                                .array(z.any())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The ranges that are vulnerable to the issue. May be an array or a string.',
                                }),
                            })
                            .openapi({
                              description:
                                'The ranges that are vulnerable and unaffected by the issue (Non-IaC projects only)',
                              required: [],
                            }),
                          severity: z
                            .string()
                            .openapi({
                              description:
                                'The severity status of the issue, after policies are applied',
                            }),
                          title: z.string().openapi({ description: 'The issue title' }),
                          url: z
                            .string()
                            .openapi({
                              description: 'URL to a page containing information about the issue',
                            }),
                          violatedPolicyPublicId: z
                            .string()
                            .openapi({
                              description:
                                'The ID of the violated policy in the issue (IaC projects only)',
                            }),
                        })
                        .openapi({
                          description: 'The details of the issue',
                          required: [
                            'id',
                            'title',
                            'severity',
                            'originalSeverity',
                            'url',
                            'description',
                            'identifiers',
                            'credit',
                            'exploitMaturity',
                            'semver',
                            'publicationTime',
                            'disclosureTime',
                            'CVSSv3',
                            'cvssScore',
                            'language',
                            'patches',
                            'nearestFixedInVersion',
                            'path',
                            'violatedPolicyPublicId',
                            'isMaliciousPackage',
                          ],
                        }),
                      issueType: z
                        .string()
                        .openapi({
                          description: "type of the issue ('vuln', 'license' or 'configuration')",
                        }),
                      links: z
                        .object({
                          paths: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The URL for the dependency paths that introduce this issue',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Onward links from this record (Non-IaC projects only)',
                          required: [],
                        }),
                      pkgName: z
                        .string()
                        .openapi({ description: 'The package name (Non-IaC projects only)' }),
                      pkgVersions: z
                        .array(z.string())
                        .openapi({
                          description: 'List of affected package versions (Non-IaC projects only)',
                        }),
                      priority: z
                        .object({
                          factors: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description:
                                'The list of factors that contributed to the priority of the issue',
                            }),
                          score: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The priority score of the issue' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Information about the priority of the issue (Non-IaC projects only)',
                          required: [],
                        }),
                    })
                    .openapi({
                      required: [
                        'id',
                        'issueType',
                        'pkgName',
                        'pkgVersions',
                        'issueData',
                        'isPatched',
                        'isIgnored',
                      ],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'An array of identified issues' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                issues: [
                  {
                    fixInfo: {
                      fixedIn: ['2.0.0'],
                      isFixable: false,
                      isPartiallyFixable: false,
                      isPatchable: false,
                      isPinnable: false,
                      isUpgradable: false,
                      nearestFixedInVersion: '2.0.0',
                    },
                    id: 'npm:ms:20170412',
                    ignoreReasons: [{ expires: '', reason: '', source: 'cli' }],
                    introducedThrough: [{ data: {}, kind: 'imageLayer' }],
                    isIgnored: false,
                    isPatched: false,
                    issueData: {
                      CVSSv3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L',
                      credit: ['Snyk Security Research Team'],
                      cvssScore: 3.7,
                      description:
                        '`## Overview\\r\\n[`ms`](https://www.npmjs.com/package/ms) is a tiny millisecond conversion utility.\\r\\n\\r\\nAffected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to `ms',
                      disclosureTime: '2017-04-11T21:00:00Z',
                      exploitMaturity: 'no-known-exploit',
                      id: 'npm:ms:20170412',
                      identifiers: { CVE: [], CWE: ['CWE-400'], OSVDB: [] },
                      isMaliciousPackage: true,
                      language: 'js',
                      nearestFixedInVersion: '2.0.0',
                      originalSeverity: 'high',
                      patches: [
                        {
                          comments: [],
                          id: 'patch:npm:ms:20170412:0',
                          modificationTime: '2019-12-03T11:40:45.863964Z',
                          urls: [
                            'https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_100.patch',
                          ],
                          version: '=1.0.0',
                        },
                      ],
                      path: '[DocId: 1].input.spec.template.spec.containers[snyk2].securityContext.privileged',
                      publicationTime: '2017-05-15T06:02:45Z',
                      semver: { unaffected: '', vulnerable: ['>=0.7.1 <2.0.0'] },
                      severity: 'low',
                      title: 'Regular Expression Denial of Service (ReDoS)',
                      url: 'https://snyk.io/vuln/npm:ms:20170412',
                      violatedPolicyPublicId: 'SNYK-CC-K8S-1',
                    },
                    issueType: 'vuln',
                    links: { paths: '' },
                    pkgName: 'ms',
                    pkgVersions: ['1.0.0'],
                    priority: {
                      factors: ['name: `isFixable`', 'description: `Has a fix available`'],
                      score: 399,
                    },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/history/{snapshotId}/issue/{issueId}/paths',
  tags: ['Projects'],
  summary: 'List all project snapshot issue paths',
  operationId: 'List all project snapshot issue paths',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for which to return issue paths.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotId: z
        .string()
        .openapi({
          param: {
            description:
              'The project snapshot ID for which to return issue paths. If set to `latest`, the most recent snapshot will be used. Use the "List all project snapshots" endpoint to find suitable values for this.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454553',
            in: 'path',
            name: 'snapshotId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issueId: z
        .string()
        .openapi({
          param: {
            description: 'The issue ID for which to return issue paths.',
            example: 'SNYK-JS-LODASH-590103',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per page (1 - 1000, inclusive).',
            example: '3',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { default: 100, type: 'number' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to return.',
            example: '2',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .object({
              links: z
                .object({
                  last: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The URL of the last page of paths for the issue' }),
                  next: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL of the next page of paths for the issue, if not on the last page',
                    }),
                  prev: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL of the previous page of paths for the issue, if not on the first page',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Onward links from this record', required: [] }),
              paths: z
                .array(
                  z.array(
                    z
                      .object({
                        fixVersion: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The version to upgrade the package to in order to resolve the issue. This will only appear on the first element of the path, and only if the issue can be fixed by upgrading packages. Note that if the fix requires upgrading transitive dependencies, `fixVersion` will be the same as `version`.',
                          }),
                        name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The package name' }),
                        version: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The package version' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'A list of the dependency paths that introduce the issue',
                }),
              snapshotId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The identifier of the snapshot for which the paths have been found',
                }),
              total: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total number of results' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getOrgOrgIdProjectProjectIdIgnoreIssueIdRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/ignore/{issueId}',
  tags: ['Projects'],
  summary: 'Retrieve ignore',
  operationId: 'Retrieve ignore',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to modify ignores for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to modify ignores for.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issueId: z
        .string()
        .openapi({
          param: {
            description:
              'The issue ID to modify ignores for. Can be a vulnerability or a license Issue.',
            example: 'npm:qs:20140806-1',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: IgnorePathSchema,
          examples: {
            response: {
              value: [
                {
                  '*': {
                    created: '2017-10-31T11:24:00.932Z',
                    disregardIfFixable: true,
                    ignoredBy: {
                      email: 'jbloggs@gmail.com',
                      id: 'a3952187-0d8e-45d8-9aa2-036642857b4f',
                      name: 'Joe Bloggs',
                    },
                    reason: 'No fix available',
                    reasonType: 'temporary-ignore',
                  },
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdProjectProjectIdIgnoreIssueIdRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/project/{projectId}/ignore/{issueId}',
  tags: ['Projects'],
  summary: 'Replace ignores',
  operationId: 'Replace ignores',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issueId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.any()),
          examples: {
            response: {
              value: [
                {
                  '*': {
                    created: '2017-10-31T11:24:00.932Z',
                    disregardIfFixable: true,
                    ignoredBy: {
                      email: 'jbloggs@gmail.com',
                      id: 'a3952187-0d8e-45d8-9aa2-036642857b4f',
                      name: 'Joe Bloggs',
                    },
                    reason: 'No fix available',
                    reasonType: 'temporary-ignore',
                  },
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectProjectIdIgnoreIssueIdRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/ignore/{issueId}',
  tags: ['Projects'],
  summary: 'Add ignore',
  operationId: 'Add ignore',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issueId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              disregardIfFixable: z
                .boolean()
                .openapi({
                  description: 'Only ignore the issue if no upgrade or patch is available.',
                }),
              expires: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The timestamp that the issue will no longer be ignored.',
                }),
              ignorePath: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The path to ignore (default is `*` which represents all paths).',
                }),
              reason: z
                .string()
                .exactOptional()
                .openapi({ description: 'The reason that the issue was ignored.' }),
              reasonType: z
                .enum(['not-vulnerable', 'wont-fix', 'temporary-ignore'])
                .openapi({ description: 'The classification of the ignore.' }),
            })
            .openapi({
              example: {
                disregardIfFixable: false,
                expires: '',
                ignorePath: '',
                reason: '',
                reasonType: 'not-vulnerable',
              },
              required: ['reasonType', 'disregardIfFixable'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: IgnorePathSchema,
          examples: {
            response: {
              value: {
                '*': {
                  created: '2017-10-31T11:24:00.932Z',
                  disregardIfFixable: true,
                  ignoredBy: {
                    email: 'jbloggs@gmail.com',
                    id: 'a3952187-0d8e-45d8-9aa2-036642857b4f',
                    name: 'Joe Bloggs',
                  },
                  reason: 'No fix available',
                  reasonType: 'temporary-ignore',
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/project/{projectId}/ignore/{issueId}',
  tags: ['Projects'],
  summary: 'Delete ignores',
  operationId: 'Delete ignores',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issueId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getOrgOrgIdProjectProjectIdIgnoresRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/ignores',
  tags: ['Projects'],
  summary: 'List all ignores',
  description: 'Temporary ignores include an `expires` attribute, while permanent ignores do not.',
  operationId: 'List all ignores',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list ignores for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to list ignores for.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: IssueIdSchema,
          examples: {
            response: {
              value: {
                'npm:electron:20170426': [
                  {
                    '*': {
                      created: '2017-10-31T11:25:17.138Z',
                      disregardIfFixable: false,
                      ignoredBy: {
                        email: 'jbloggs@gmail.com',
                        id: 'a3952187-0d8e-45d8-9aa2-036642857b4f',
                        name: 'Joe Bloggs',
                      },
                      reason: 'Low impact',
                      reasonType: 'wont-fix',
                    },
                  },
                ],
                'npm:negotiator:20160616': [
                  {
                    '*': {
                      created: '2017-10-31T11:24:45.365Z',
                      disregardIfFixable: false,
                      ignoredBy: {
                        email: 'jbloggs@gmail.com',
                        id: 'a3952187-0d8e-45d8-9aa2-036642857b4f',
                        name: 'Joe Bloggs',
                      },
                      reason: 'Not vulnerable via this path',
                      reasonType: 'not-vulnerable',
                    },
                  },
                ],
                'npm:qs:20140806-1': [
                  {
                    '*': {
                      created: '2017-10-31T11:24:00.932Z',
                      disregardIfFixable: true,
                      expires: '2017-12-10T15:39:38.099Z',
                      ignoredBy: {
                        email: 'jbloggs@gmail.com',
                        id: 'a3952187-0d8e-45d8-9aa2-036642857b4f',
                        name: 'Joe Bloggs',
                      },
                      reason: 'No fix available',
                      reasonType: 'temporary-ignore',
                    },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/issue/{issueId}/jira-issue',
  tags: ['Projects'],
  summary: 'Create jira issue',
  operationId: 'Create jira issue',
  request: {
    params: z.object({
      issueId: z
        .string()
        .openapi({
          param: {
            description: 'The issue ID to create Jira issue for.',
            example: 'npm:qs:20140806-1',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z
                .object({
                  issuetype: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.',
                    }),
                  project: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.',
                    }),
                  summary: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'See https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post for details of what to send as fields.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: { fields: { issuetype: {}, project: {}, summary: '' } },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .object({
              jiraIssue: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The id of the issue in Jira.' }),
                  key: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The key of the issue in Jira.' }),
                })
                .exactOptional()
                .openapi({ description: 'The details about the jira issue.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdProjectProjectIdIssueIssueIdPathsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/issue/{issueId}/paths',
  tags: ['Projects'],
  summary: 'List all project issue paths',
  operationId: 'List all project issue paths',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID for which to return issue paths.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      issueId: z
        .string()
        .openapi({
          param: {
            description: 'The issue ID for which to return issue paths.',
            example: 'SNYK-JS-LODASH-590103',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      snapshotId: z
        .string()
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The project snapshot ID for which to return issue paths. If set to `latest`, the most recent snapshot will be used. Use the "List all project snapshots" endpoint to find suitable values for this.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454553',
            in: 'query',
            name: 'snapshotId',
            required: false,
            schema: { default: 'latest', type: 'string' },
          },
        }),
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per page (1 - 1000, inclusive).',
            example: '3',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { default: 100, type: 'number' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to return.',
            example: '2',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .object({
              links: z
                .object({
                  last: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The URL of the last page of paths for the issue' }),
                  next: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL of the next page of paths for the issue, if not on the last page',
                    }),
                  prev: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The URL of the previous page of paths for the issue, if not on the first page',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Onward links from this record', required: [] }),
              paths: z
                .array(
                  z.array(
                    z
                      .object({
                        fixVersion: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The version to upgrade the package to in order to resolve the issue. This will only appear on the first element of the path, and only if the issue can be fixed by upgrading packages. Note that if the fix requires upgrading transitive dependencies, `fixVersion` will be the same as `version`.',
                          }),
                        name: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The package name' }),
                        version: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The package version' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'A list of the dependency paths that introduce the issue',
                }),
              snapshotId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The identifier of the snapshot for which the paths have been found',
                }),
              total: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total number of results' }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getOrgOrgIdProjectProjectIdJiraIssuesRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/jira-issues',
  tags: ['Projects'],
  summary: 'List all jira issues',
  operationId: 'List all jira issues',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list Jira issues for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to list Jira issues for.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: IssueIdSchema } },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdProjectProjectIdMoveRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/project/{projectId}/move',
  tags: ['Projects'],
  summary: 'Move project to a different organization',
  description:
    'Note: when moving a project to a new organization, the historical data used for reporting does not move with it.',
  operationId: 'Move project to a different organization',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to which the project belongs. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              targetOrgId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the organization that the project should be moved to. The API_KEY must have group admin permissions. If the project is moved to a new group, a personal level API key is needed.',
                }),
            })
            .openapi({
              example: { targetOrgId: '4a18d42f-0706-4ad0-b127-24078731fbed' },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getOrgOrgIdProjectProjectIdSettingsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/project/{projectId}/settings',
  tags: ['Projects'],
  summary: 'List project settings',
  operationId: 'List project settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to which the project belongs. The API_KEY must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The response will contain only attributes that can be updated (see `ATTRIBUTES` section in `Update project settings`) and that have been previously set.',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              autoDepUpgradeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, Snyk will raise dependency upgrade PRs automatically.',
                }),
              autoDepUpgradeIgnoredDependencies: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.',
                }),
              autoDepUpgradeLimit: z
                .number()
                .exactOptional()
                .openapi({ description: 'The limit on auto dependency upgrade PRs.' }),
              autoDepUpgradeMinAge: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The age (in days) that an automatic dependency check is valid for',
                }),
              autoRemediationPrs: z
                .object({
                  backlogPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
                    }),
                  freshPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of prioritized backlog issues',
                    }),
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines automatic remediation policies', required: [] }),
              pullRequestAssignment: z
                .object({
                  assignees: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "an array of usernames that have contributed to the organization's project(s).",
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "if the organization's project(s) will assign Snyk pull requests.",
                    }),
                  type: z
                    .enum(['auto', 'manual'])
                    .exactOptional()
                    .openapi({
                      description:
                        'a string representing the type of assignment your projects require.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'assign Snyk pull requests', required: [] }),
              pullRequestFailOnAnyVulns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.',
                }),
              pullRequestFailOnlyForHighSeverity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities',
                }),
              pullRequestTestEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                autoDepUpgradeEnabled: false,
                autoDepUpgradeIgnoredDependencies: ['tap', 'ava'],
                autoDepUpgradeLimit: 2,
                autoDepUpgradeMinAge: 21,
                autoRemediationPrs: {
                  backlogPrsEnabled: false,
                  freshPrsEnabled: true,
                  usePatchRemediation: true,
                },
                pullRequestAssignment: { assignees: ['username'], enabled: true, type: 'manual' },
                pullRequestFailOnAnyVulns: false,
                pullRequestFailOnlyForHighSeverity: true,
                pullRequestTestEnabled: true,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdProjectProjectIdSettingsRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/project/{projectId}/settings',
  tags: ['Projects'],
  summary: 'Update project settings',
  operationId: 'Update project settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              autoDepUpgradeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, Snyk will raise dependency upgrade PRs automatically.',
                }),
              autoDepUpgradeIgnoredDependencies: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.',
                }),
              autoDepUpgradeLimit: z
                .number()
                .exactOptional()
                .openapi({ description: 'The limit on auto dependency upgrade PRs.' }),
              autoDepUpgradeMinAge: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The age (in days) that an automatic dependency check is valid for',
                }),
              autoRemediationPrs: z
                .object({
                  backlogPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
                    }),
                  freshPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of prioritized backlog issues',
                    }),
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines automatic remediation policies', required: [] }),
              pullRequestAssignment: z
                .object({
                  assignees: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "an array of usernames that have contributed to the organization's project(s).",
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "if the organization's project(s) will assign Snyk pull requests.",
                    }),
                  type: z
                    .enum(['auto', 'manual'])
                    .exactOptional()
                    .openapi({
                      description:
                        'a string representing the type of assignment your projects require.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'assign Snyk pull requests', required: [] }),
              pullRequestFailOnAnyVulns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.',
                }),
              pullRequestFailOnlyForHighSeverity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities',
                }),
              pullRequestTestEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq',
                }),
            })
            .openapi({
              example: {
                autoDepUpgradeEnabled: false,
                autoDepUpgradeIgnoredDependencies: ['tap', 'ava'],
                autoDepUpgradeLimit: 2,
                autoDepUpgradeMinAge: 21,
                autoRemediationPrs: {
                  backlogPrsEnabled: false,
                  freshPrsEnabled: true,
                  usePatchRemediation: false,
                },
                pullRequestAssignment: { assignees: ['username'], enabled: true, type: 'manual' },
                pullRequestFailOnAnyVulns: false,
                pullRequestFailOnlyForHighSeverity: true,
                pullRequestTestEnabled: true,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'The response will contain the attributes and values that have been sent in the request and successfully updated.',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              autoDepUpgradeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, Snyk will raise dependency upgrade PRs automatically.',
                }),
              autoDepUpgradeIgnoredDependencies: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade.',
                }),
              autoDepUpgradeLimit: z
                .number()
                .exactOptional()
                .openapi({ description: 'The limit on auto dependency upgrade PRs.' }),
              autoDepUpgradeMinAge: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The age (in days) that an automatic dependency check is valid for',
                }),
              autoRemediationPrs: z
                .object({
                  backlogPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified',
                    }),
                  freshPrsEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, allows automatic remediation of prioritized backlog issues',
                    }),
                  usePatchRemediation: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'If true, allows using patched remediation' }),
                })
                .exactOptional()
                .openapi({ description: 'Defines automatic remediation policies', required: [] }),
              pullRequestAssignment: z
                .object({
                  assignees: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        "an array of usernames that have contributed to the organization's project(s).",
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "if the organization's project(s) will assign Snyk pull requests.",
                    }),
                  type: z
                    .enum(['auto', 'manual'])
                    .exactOptional()
                    .openapi({
                      description:
                        'a string representing the type of assignment your projects require.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'assign Snyk pull requests', required: [] }),
              pullRequestFailOnAnyVulns: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency.',
                }),
              pullRequestFailOnlyForHighSeverity: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, fail Snyk Test only for high and critical severity vulnerabilities',
                }),
              pullRequestTestEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set to `true`, Snyk Test checks PRs for vulnerabilities.:cq',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                autoDepUpgradeEnabled: false,
                autoDepUpgradeIgnoredDependencies: ['tap', 'ava'],
                autoDepUpgradeLimit: 2,
                autoDepUpgradeMinAge: 21,
                autoRemediationPrs: {
                  backlogPrsEnabled: false,
                  freshPrsEnabled: true,
                  usePatchRemediation: false,
                },
                pullRequestAssignment: { assignees: ['username'], enabled: true, type: 'manual' },
                pullRequestFailOnAnyVulns: false,
                pullRequestFailOnlyForHighSeverity: true,
                pullRequestTestEnabled: true,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const deleteOrgOrgIdProjectProjectIdSettingsRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/project/{projectId}/settings',
  tags: ['Projects'],
  summary: 'Delete project settings',
  description:
    'Deleting project settings will set the project to inherit default settings from its integration.',
  operationId: 'Delete project settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
})

export const postOrgOrgIdProjectProjectIdTagsRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/tags',
  tags: ['Projects'],
  summary: 'Add a tag to a project',
  description: '​',
  operationId: 'Add a tag to a project',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to apply the tag to',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AddATagToAProjectBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              tags: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Tags now applied to the project' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: { value: { tags: [{ key: 'example-tag-key', value: 'example-tag-value' }] } },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectProjectIdTagsRemoveRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/project/{projectId}/tags/remove',
  tags: ['Projects'],
  summary: 'Remove a tag from a project',
  operationId: 'Remove a tag from a project',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to remove a tag from',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AddATagToAProjectBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              tags: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Tags now applied to the project' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: { value: { tags: [{ key: 'example-tag-key', value: 'example-tag-value' }] } },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProjectsRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/projects',
  tags: ['Projects'],
  summary: 'List all projects',
  operationId: 'List all projects',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list projects for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  attributes: z
                    .object({
                      criticality: z.array(z.any()).exactOptional(),
                      environment: z.array(z.any()).exactOptional(),
                      lifecycle: z.array(z.any()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'When you filter by multiple values on a single attribute, you will return projects that have been assigned one or more of the values in the filter.\n\nWhen you filter by multiple attributes, you will return projects which have been assigned values of both attributes in the filter.',
                      required: [],
                    }),
                  isMonitored: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If set to `true`, only include projects which are monitored, if set to `false`, only include projects which are not monitored',
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'If supplied, only projects that have a name that **starts with** this value will be returned',
                    }),
                  origin: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'If supplied, only projects that exactly match this origin will be returned',
                    }),
                  tags: z
                    .object({
                      includes: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'A project must have all provided tags in order to be included in the response. A maximum of 3 tags can be supplied.',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'If supplied, only projects that exactly match this type will be returned',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                filters: {
                  attributes: {
                    criticality: ['high'],
                    environment: ['backend'],
                    lifecycle: ['development'],
                  },
                  name: 'snyk/goof',
                  origin: 'github',
                  tags: { includes: [{ key: 'example-tag-key', value: 'example-tag-value' }] },
                  type: 'maven',
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              org: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The identifier of the org' }),
                  name: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              projects: z
                .array(
                  z
                    .object({
                      attributes: z
                        .object({
                          criticality: z.array(z.any()).exactOptional(),
                          environment: z.array(z.any()).exactOptional(),
                          lifecycle: z.array(z.any()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ description: 'Applied project attributes', required: [] }),
                      branch: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'The monitored branch (if available)' }),
                      browseUrl: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'URL with project overview' }),
                      created: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The date that the project was created on' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The project identifier' }),
                      imageBaseImage: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'For docker projects shows the base image' }),
                      imageCluster: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'For Kubernetes projects shows the origin cluster name',
                        }),
                      imageId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'For docker projects shows the ID of the image' }),
                      imagePlatform: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'For docker projects shows the platform of the image',
                        }),
                      imageTag: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'For docker projects shows the tag of the image' }),
                      importingUser: z
                        .object({
                          email: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The email of the user.' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The ID of the user.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the user.' }),
                          username: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The username of the user.' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'The user who imported the project',
                          required: [],
                        }),
                      isMonitored: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Describes if a project is currently monitored or it is de-activated',
                        }),
                      issueCountsBySeverity: z
                        .object({
                          critical: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'Number of critical severity vulnerabilities',
                            }),
                          high: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Number of high severity vulnerabilities' }),
                          low: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Number of low severity vulnerabilities' }),
                          medium: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Number of medium severity vulnerabilities' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of known vulnerabilities in the project, not including ignored issues',
                          required: [],
                        }),
                      lastTestedDate: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The date on which the most recent test was conducted for this project',
                        }),
                      name: z.string().exactOptional(),
                      origin: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The origin the project was added from' }),
                      owner: z
                        .object({})
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'The user who owns the project, null if not set\n\n{\n    "id": "e713cf94-bb02-4ea0-89d9-613cce0caed2",\n    "name": "example-user@snyk.io",\n    "username": "exampleUser",\n    "email": "example-user@snyk.io"\n}',
                        }),
                      readOnly: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the project is read-only' }),
                      remoteRepoUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The project remote repository url. Only set for projects imported via the Snyk CLI tool.',
                        }),
                      tags: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ description: 'List of applied tags' }),
                      targetReference: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'The identifier for which revision of the resource is scanned by Snyk. For example this may be a branch for SCM project, or a tag for a container image',
                        }),
                      testFrequency: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The frequency of automated Snyk re-test. Can be 'daily', 'weekly or 'never'",
                        }),
                      totalDependencies: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Number of dependencies of the project' }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The package manager of the project' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: "A list of org's projects" }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                org: { id: '689ce7f9-7943-4a71-b704-2ba575f01089', name: 'defaultOrg' },
                projects: [
                  {
                    branch: 'master',
                    created: '2018-10-29T09:50:54.014Z',
                    id: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
                    importingUser: {
                      email: 'example-user@snyk.io',
                      id: 'e713cf94-bb02-4ea0-89d9-613cce0caed2',
                      name: 'example-user@snyk.io',
                      username: 'exampleUser',
                    },
                    isMonitored: true,
                    issueCountsBySeverity: { critical: 3, high: 10, low: 8, medium: 15 },
                    lastTestedDate: '2019-02-05T06:21:00.000Z',
                    name: 'atokeneduser/goof',
                    origin: 'cli',
                    owner: {
                      email: 'example-user@snyk.io',
                      id: 'e713cf94-bb02-4ea0-89d9-613cce0caed2',
                      name: 'example-user@snyk.io',
                      username: 'exampleUser',
                    },
                    readOnly: false,
                    remoteRepoUrl: 'https://github.com/snyk/goof.git',
                    tags: [{ key: 'example-tag-key', value: 'example-tag-value' }],
                    targetReference: 'master',
                    testFrequency: 'daily',
                    totalDependencies: 438,
                    type: 'npm',
                  },
                  {
                    branch: 'master',
                    created: '2018-10-29T09:50:54.014Z',
                    id: 'af127b96-6966-46c1-826b-2e79ac49bbd9',
                    importingUser: {
                      email: 'example-user@snyk.io',
                      id: 'e713cf94-bb02-4ea0-89d9-613cce0caed2',
                      name: 'example-user@snyk.io',
                      username: 'exampleUser',
                    },
                    isMonitored: false,
                    issueCountsBySeverity: { critical: 10, high: 3, low: 8, medium: 21 },
                    lastTestedDate: '2019-02-05T07:01:00.000Z',
                    name: 'atokeneduser/clojure',
                    origin: 'github',
                    owner: {
                      email: 'example-user2@snyk.io',
                      id: '42ce0e0f-6288-4874-9266-ef799e7f31bb',
                      name: 'example-user2@snyk.io',
                      username: 'exampleUser2',
                    },
                    readOnly: false,
                    remoteRepoUrl: 'https://github.com/clojure/clojure.git',
                    tags: [{ key: 'example-tag-key', value: 'example-tag-value' }],
                    targetReference: 'master',
                    testFrequency: 'daily',
                    totalDependencies: 42,
                    type: 'maven',
                  },
                  {
                    branch: 'master',
                    created: '2019-02-04T08:54:07.704Z',
                    id: 'f6c8339d-57e1-4d64-90c1-81af0e811f7e',
                    imageId:
                      'sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019',
                    imageTag: 'latest',
                    importingUser: null,
                    isMonitored: false,
                    issueCountsBySeverity: { critical: 0, high: 0, low: 0, medium: 0 },
                    lastTestedDate: '2019-02-05T08:54:07.704Z',
                    name: 'docker-image|alpine',
                    origin: 'cli',
                    owner: null,
                    readOnly: false,
                    tags: [{ key: 'example-tag-key', value: 'example-tag-value' }],
                    targetReference: 'master',
                    testFrequency: 'daily',
                    totalDependencies: 14,
                    type: 'apk',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdProvisionRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/provision',
  tags: ['Organizations'],
  summary: 'List pending user provisions',
  operationId: 'List pending user provisions',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            example: '25065eb1-109c-4c3e-9503-68fc56ef6f44',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.any()),
          examples: {
            response: { value: [{ created: '', email: '', role: '', rolePublicId: '' }] },
          },
        },
      },
      headers: z.object({}),
    },
    403: {
      description:
        'Provided `API_KEY` has no user provision permission or does not have permissions in role being provisioned.',
      headers: z.object({}),
    },
  },
})

export const postOrgOrgIdProvisionRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/provision',
  tags: ['Organizations'],
  summary: 'Provision a user to the organization',
  operationId: 'Provision a user to the organization',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must not exceed the permissions being granted to the provisioned user.',
            example: '25065eb1-109c-4c3e-9503-68fc56ef6f44',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().openapi({ description: 'The email of the user.' }),
              role: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Deprecated. Name of the role to grant this user. Must be one of `ADMIN`, `COLLABORATOR`, or `RESTRICTED_COLLABORATOR`. This field is invalid if `rolePublicId` is supplied with the request.',
                }),
              rolePublicId: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of the role to grant this user.' }),
            })
            .openapi({ example: { email: '', role: '', rolePublicId: '' }, required: ['email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              created: z
                .string()
                .exactOptional()
                .openapi({ description: 'Timestamp of when this provision record was created.' }),
              email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
              role: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the role granted for this user.' }),
              rolePublicId: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of the role to granted for this user.' }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { created: '', email: '', role: '', rolePublicId: '' } } },
        },
      },
      headers: z.object({}),
    },
    403: {
      description:
        'Provided `API_KEY` has no user provision permission or does not have permissions in role being provisioned.',
      headers: z.object({}),
    },
  },
})

export const deleteOrgOrgIdProvisionRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/provision',
  tags: ['Organizations'],
  summary: 'Delete pending user provision',
  operationId: 'Delete pending user provision',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'The organization ID.',
            example: '25065eb1-109c-4c3e-9503-68fc56ef6f44',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              ok: z.boolean().exactOptional().openapi({ description: 'Deletion succeeded.' }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { ok: false } } },
        },
      },
      headers: z.object({}),
    },
    403: {
      description:
        'Provided `API_KEY` has no user provision permission or does not have permissions in role being provisioned.',
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdSettingsRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/settings',
  tags: ['Organizations'],
  summary: 'View organization settings',
  operationId: 'View organization settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '25065eb1-109c-4c3e-9503-68fc56ef6f44',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              requestAccess: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description: 'Whether requesting access to the organization is enabled.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Will only be returned if `API_KEY` has read access to request access settings.',
                  required: ['enabled'],
                }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { requestAccess: { enabled: true } } } },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putOrgOrgIdSettingsRoute = createRoute({
  method: 'put',
  path: '/org/{orgId}/settings',
  tags: ['Organizations'],
  summary: 'Update organization settings',
  description: 'Settings that are not provided will not be modified.',
  operationId: 'Update organization settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have admin access to this organization.',
            example: '25065eb1-109c-4c3e-9503-68fc56ef6f44',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              requestAccess: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description: 'Whether requesting access to the organization is enabled.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Can only be updated if `API_KEY` has edit access to request access settings.',
                  required: ['enabled'],
                }),
            })
            .openapi({ example: { requestAccess: { enabled: true } }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              requestAccess: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description: 'Whether requesting access to the organization is enabled.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Will only be returned if `API_KEY` has read access to request access settings.',
                  required: ['enabled'],
                }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { requestAccess: { enabled: true } } } },
        },
      },
      headers: z.object({}),
    },
    403: {
      description: 'If provided a setting that the `API_KEY` has no edit permission for.',
      headers: z.object({}),
    },
  },
})

export const getOrgOrgIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhooks',
  operationId: 'List webhooks',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list projects for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  operationId: 'Create a webhook',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID to list projects for. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is a password you create, that Snyk uses to sign our transports to you, so you be sure the notification is authentic. Your `secret` should: Be a random string with high entropy; Not be used for anything else; Only known to Snyk and your webhook transport consuming code;',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Webhooks can only be configured for URLs using the `https` protocol. `http` is not allowed.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getOrgOrgIdWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/org/{orgId}/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Retrieve a webhook',
  operationId: 'Retrieve a webhook',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID the project belongs to. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'The webhook ID.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteOrgOrgIdWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/org/{orgId}/webhooks/{webhookId}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  operationId: 'Delete a webhook',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOrgOrgIdWebhooksWebhookIdPingRoute = createRoute({
  method: 'post',
  path: '/org/{orgId}/webhooks/{webhookId}/ping',
  tags: ['Webhooks'],
  summary: 'Ping a webhook',
  operationId: 'Ping a webhook',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID the project belongs to. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'The webhook ID.',
            example: '463c1ee5-31bc-428c-b451-b79a3270db08',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getOrgsRoute = createRoute({
  method: 'get',
  path: '/orgs',
  tags: ['Organizations'],
  summary: 'List all the organizations a user belongs to',
  operationId: 'List all the organizations a user belongs to',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postReportingCountsIssuesRoute = createRoute({
  method: 'post',
  path: '/reporting/counts/issues',
  tags: ['Reporting API'],
  summary: 'Get issue counts',
  operationId: 'Get issue counts',
  request: {
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to fetch results from, in the format `YYYY-MM-DD`',
            example: '2017-07-01',
            in: 'query',
            name: 'from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to fetch results until, in the format `YYYY-MM-DD`',
            example: '2017-07-03',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .enum(['severity', 'fixable', 'project,[severity|fixable]'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to group results by',
            example: 'severity',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['severity', 'fixable', 'project,[severity|fixable]'], type: 'string' },
          },
        }),
    }),
    body: GetLatestIssueCountsBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      count: z.number().openapi({ description: 'The number of issues' }),
                      day: z
                        .string()
                        .openapi({ description: 'The date in the format `YYYY-MM-DD`' }),
                      fixable: z
                        .object({
                          false: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of non-fixable issues' }),
                          true: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of fixable issues' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      severity: z
                        .object({
                          critical: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of critical severity issues' }),
                          high: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of high severity issues' }),
                          low: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of low severity issues' }),
                          medium: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of medium severity issues' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: ['day', 'count'] }),
                )
                .openapi({ description: 'A list of issue counts by day' }),
            })
            .openapi({ required: ['results'] }),
          examples: {
            response: {
              value: {
                results: [
                  {
                    count: 0,
                    day: '2017-07-01',
                    severity: { critical: 0, high: 0, low: 0, medium: 0 },
                  },
                  {
                    count: 0,
                    day: '2017-07-02',
                    severity: { critical: 0, high: 0, low: 0, medium: 0 },
                  },
                  {
                    count: 0,
                    day: '2017-07-03',
                    severity: { critical: 0, high: 0, low: 0, medium: 0 },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: ['invalid type filters.types is an invalid type unsupported-type'],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postReportingCountsIssuesLatestRoute = createRoute({
  method: 'post',
  path: '/reporting/counts/issues/latest',
  tags: ['Reporting API'],
  summary: 'Get latest issue counts',
  operationId: 'Get latest issue counts',
  request: {
    query: z.object({
      groupBy: z
        .enum(['severity', 'fixable', 'project,[severity|fixable]'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to group results by',
            example: 'severity',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['severity', 'fixable', 'project,[severity|fixable]'], type: 'string' },
          },
        }),
    }),
    body: GetLatestIssueCountsBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      count: z.number().openapi({ description: 'The number of issues' }),
                      day: z
                        .string()
                        .openapi({ description: 'The date in the format `YYYY-MM-DD`' }),
                      fixable: z
                        .object({
                          false: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of non-fixable issues' }),
                          true: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of fixable issues' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      severity: z
                        .object({
                          critical: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of critical severity issues' }),
                          high: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of high severity issues' }),
                          low: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of low severity issues' }),
                          medium: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'The number of medium severity issues' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: ['day', 'count'] }),
                )
                .openapi({ description: 'A list of issue counts by day' }),
            })
            .openapi({ required: ['results'] }),
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: ['invalid type filters.types is an invalid type unsupported-type'],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postReportingCountsProjectsRoute = createRoute({
  method: 'post',
  path: '/reporting/counts/projects',
  tags: ['Reporting API'],
  summary: 'Get project counts',
  operationId: 'Get project counts',
  request: {
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to fetch results from, in the format `YYYY-MM-DD`',
            example: '2017-07-01',
            in: 'query',
            name: 'from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to fetch results until, in the format `YYYY-MM-DD`',
            example: '2017-07-03',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: GetLatestProjectCountsBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      count: z.number().openapi({ description: 'The number of projects' }),
                      day: z
                        .string()
                        .openapi({ description: 'The date in the format `YYYY-MM-DD`' }),
                    })
                    .openapi({ required: ['day', 'count'] }),
                )
                .openapi({ description: 'A list of project counts by day' }),
            })
            .openapi({ required: ['results'] }),
          examples: {
            response: {
              value: {
                results: [
                  { count: 0, day: '2017-07-01' },
                  { count: 0, day: '2017-07-02' },
                  { count: 0, day: '2017-07-03' },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: [
                    'invalid type filters.projects is an invalid project unsupported-project',
                  ],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postReportingCountsProjectsLatestRoute = createRoute({
  method: 'post',
  path: '/reporting/counts/projects/latest',
  tags: ['Reporting API'],
  summary: 'Get latest project counts',
  operationId: 'Get latest project counts',
  request: { body: GetLatestProjectCountsBodyRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      count: z.number().openapi({ description: 'The number of projects' }),
                      day: z
                        .string()
                        .openapi({ description: 'The date in the format `YYYY-MM-DD`' }),
                    })
                    .openapi({ required: ['day', 'count'] }),
                )
                .openapi({ description: 'A list of project counts by day' }),
            })
            .openapi({ required: ['results'] }),
          examples: { response: { value: { results: [{ count: 0, day: '2017-07-01' }] } } },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: [
                    'invalid type filters.projects is an invalid project unsupported-project',
                  ],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postReportingCountsTestsRoute = createRoute({
  method: 'post',
  path: '/reporting/counts/tests',
  tags: ['Reporting API'],
  summary: 'Get test counts',
  operationId: 'Get test counts',
  request: {
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to count tests from, in the format `YYYY-MM-DD`',
            example: '2017-07-01',
            in: 'query',
            name: 'from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to count tests until, in the format `YYYY-MM-DD`',
            example: '2017-07-03',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .enum(['isPrivate', 'issuesPrevented'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to group results by',
            example: 'isPrivate',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['isPrivate', 'issuesPrevented'], type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .object({
                  isPrivate: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If set to `true`, only include tests which were conducted against private projects, if set to `false` only include tests which were conducted against public projects',
                    }),
                  issuesPrevented: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If set to `true`, only include tests which prevented issues from being introduced, if set to `false` only include tests which did not prevent issues from being introduced',
                    }),
                  orgs: z
                    .any()
                    .openapi({ description: 'The list of org IDs to filter the results by' }),
                  projects: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'The list of project IDs to filter issues by, max projects allowed is 1000',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['orgs'] }),
            })
            .openapi({
              example: {
                filters: { isPrivate: false, issuesPrevented: false, orgs: [], projects: [] },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      count: z.number().openapi({ description: 'The number of tests conducted' }),
                      isPrivate: z
                        .object({
                          false: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'The number of tests conducted against public projects',
                            }),
                          true: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'The number of tests conducted against private projects',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      issuesPrevented: z
                        .object({
                          false: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'The number of tests that did not prevent issues from being introduced',
                            }),
                          true: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'The number of tests that prevented issues from being introduced',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: ['count'] }),
                )
                .openapi({ description: 'A list of test counts' }),
            })
            .openapi({ required: ['results'] }),
          examples: {
            response: { value: { results: [{ count: 0, isPrivate: { false: 0, true: 0 } }] } },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: ['invalid type filters.isPrivate is not a Boolean'],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postReportingIssuesIndexRoute = createRoute({
  method: 'post',
  path: '/reporting/issues/',
  tags: ['Reporting API'],
  summary: 'Get list of issues',
  operationId: 'Get list of issues',
  request: {
    query: z.object({
      from: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to fetch results from, in the format `YYYY-MM-DD`',
            example: '2017-07-01',
            in: 'query',
            name: 'from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'The date you wish to fetch results until, in the format `YYYY-MM-DD`',
            example: '2017-07-07',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to request',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per page (Maximum: 1000)',
            example: '100',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { type: 'number' },
          },
        }),
      sortBy: z
        .enum([
          'severity',
          'issueTitle',
          'projectName',
          'isFixed',
          'isPatched',
          'isIgnored',
          'introducedDate',
          'isUpgradable',
          'isPatchable',
          'priorityScore',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The key to sort results by',
            example: 'issueTitle',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              enum: [
                'severity',
                'issueTitle',
                'projectName',
                'isFixed',
                'isPatched',
                'isIgnored',
                'introducedDate',
                'isUpgradable',
                'isPatchable',
                'priorityScore',
              ],
              type: 'string',
            },
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction to sort results.',
            example: 'asc',
            in: 'query',
            name: 'order',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .literal('issue')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to issue to group the same issue in multiple projects',
            example: 'issue',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['issue'], type: 'string' },
          },
        }),
    }),
    body: GetListOfLatestIssuesBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .xor([
                      z
                        .object({
                          projects: z
                            .array(z.any())
                            .openapi({
                              description:
                                'When `groupBy` is used, multiple projects may be returned per issue',
                            }),
                        })
                        .openapi({ required: ['projects'] }),
                      z
                        .object({
                          project: z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'The identifier of the project' }),
                              name: z.string().openapi({ description: 'The name of the project' }),
                              packageManager: z
                                .string()
                                .openapi({
                                  description:
                                    'The package manager for the project (e.g. npm, rubygems etc)',
                                }),
                              source: z
                                .string()
                                .openapi({
                                  description:
                                    'The source of the project (e.g. github, heroku etc)',
                                }),
                              targetFile: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The file path to the dependency manifest or lock file (e.g. package.json, Gemfile.lock etc)',
                                }),
                              url: z
                                .string()
                                .openapi({
                                  description:
                                    'URL to a page containing information about the project',
                                }),
                            })
                            .openapi({
                              description:
                                'When no `groupBy` is used, a single project is returned per issue',
                              required: ['url', 'id', 'name', 'source', 'packageManager'],
                            }),
                        })
                        .openapi({ required: ['project'] }),
                    ])
                    .openapi({ required: ['issue', 'isFixed', 'introducedDate'] }),
                )
                .openapi({ description: 'A list of issues' }),
              total: z.number().openapi({ description: 'The total number of results found' }),
            })
            .openapi({ required: ['results', 'total'] }),
          examples: {
            response: {
              value: {
                results: [
                  {
                    fixedDate: '',
                    introducedDate: '',
                    isFixed: false,
                    issue: {
                      CVSSv3: '',
                      credit: [],
                      cvssScore: 0,
                      disclosureTime: '',
                      exploitMaturity: '',
                      id: '',
                      identifiers: { CVE: [], CWE: [], OSVDB: [] },
                      ignored: [{ expires: '', reason: '', source: 'cli' }],
                      isIgnored: false,
                      isPatchable: false,
                      isPatched: false,
                      isPinnable: false,
                      isUpgradable: false,
                      jiraIssueUrl: '',
                      language: '',
                      originalSeverity: '',
                      package: '',
                      packageManager: '',
                      patches: [
                        { comments: [], id: '', modificationTime: '', urls: [], version: '' },
                      ],
                      priorityScore: 0,
                      publicationTime: '',
                      semver: { unaffected: '', vulnerable: [] },
                      severity: '',
                      title: '',
                      type: '',
                      uniqueSeveritiesList: [],
                      url: '',
                      version: '',
                    },
                    patchedDate: '',
                    projects: [
                      { id: '', name: '', packageManager: '', source: '', targetFile: '', url: '' },
                    ],
                  },
                ],
                total: 0,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: ['invalid type filters.types is an invalid type unsupported-type'],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postReportingIssuesLatestRoute = createRoute({
  method: 'post',
  path: '/reporting/issues/latest',
  tags: ['Reporting API'],
  summary: 'Get list of latest issues',
  operationId: 'Get list of latest issues',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to request',
            example: '1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'number' },
          },
        }),
      perPage: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per page (Maximum: 1000)',
            example: '100',
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { type: 'number' },
          },
        }),
      sortBy: z
        .enum([
          'severity',
          'issueTitle',
          'projectName',
          'isFixed',
          'isPatched',
          'isIgnored',
          'introducedDate',
          'isUpgradable',
          'isPatchable',
          'priorityScore',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'The key to sort results by',
            example: 'issueTitle',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              enum: [
                'severity',
                'issueTitle',
                'projectName',
                'isFixed',
                'isPatched',
                'isIgnored',
                'introducedDate',
                'isUpgradable',
                'isPatchable',
                'priorityScore',
              ],
              type: 'string',
            },
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction to sort results.',
            example: 'asc',
            in: 'query',
            name: 'order',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .literal('issue')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to issue to group the same issue in multiple projects',
            example: 'issue',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['issue'], type: 'string' },
          },
        }),
    }),
    body: GetListOfLatestIssuesBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .xor([
                      z
                        .object({
                          projects: z
                            .array(z.any())
                            .openapi({
                              description:
                                'When `groupBy` is used, multiple projects may be returned per issue',
                            }),
                        })
                        .openapi({ required: ['projects'] }),
                      z
                        .object({
                          project: z
                            .object({
                              id: z
                                .string()
                                .openapi({ description: 'The identifier of the project' }),
                              name: z.string().openapi({ description: 'The name of the project' }),
                              packageManager: z
                                .string()
                                .openapi({
                                  description:
                                    'The package manager for the project (e.g. npm, rubygems etc)',
                                }),
                              source: z
                                .string()
                                .openapi({
                                  description:
                                    'The source of the project (e.g. github, heroku etc)',
                                }),
                              targetFile: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The file path to the dependency manifest or lock file (e.g. package.json, Gemfile.lock etc)',
                                }),
                              url: z
                                .string()
                                .openapi({
                                  description:
                                    'URL to a page containing information about the project',
                                }),
                            })
                            .openapi({
                              description:
                                'When no `groupBy` is used, a single project is returned per issue',
                              required: ['url', 'id', 'name', 'source', 'packageManager'],
                            }),
                        })
                        .openapi({ required: ['project'] }),
                    ])
                    .openapi({ required: ['issue', 'isFixed', 'introducedDate'] }),
                )
                .openapi({ description: 'A list of issues' }),
              total: z.number().openapi({ description: 'The total number of results found' }),
            })
            .openapi({ required: ['results', 'total'] }),
          examples: {
            response: {
              value: {
                results: [
                  {
                    fixedDate: '',
                    introducedDate: '',
                    isFixed: false,
                    issue: {
                      CVSSv3: '',
                      credit: [],
                      cvssScore: 0,
                      disclosureTime: '',
                      exploitMaturity: '',
                      id: '',
                      identifiers: { CVE: [], CWE: [], OSVDB: [] },
                      ignored: [{ expires: '', reason: '', source: 'cli' }],
                      isIgnored: false,
                      isPatchable: false,
                      isPatched: false,
                      isPinnable: false,
                      isUpgradable: false,
                      jiraIssueUrl: '',
                      language: '',
                      originalSeverity: '',
                      package: '',
                      packageManager: '',
                      patches: [
                        { comments: [], id: '', modificationTime: '', urls: [], version: '' },
                      ],
                      priorityScore: 0,
                      publicationTime: '',
                      semver: { unaffected: '', vulnerable: [] },
                      severity: '',
                      title: '',
                      type: '',
                      uniqueSeveritiesList: [],
                      url: '',
                      version: '',
                    },
                    patchedDate: '',
                    projects: [
                      { id: '', name: '', packageManager: '', source: '', targetFile: '', url: '' },
                    ],
                  },
                ],
                total: 0,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              code: z.number().openapi({ description: 'The error response code' }),
              error: z
                .object({
                  innerErrors: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional reasons why the error occurred',
                    }),
                  name: z.string().openapi({ description: 'A descriptive message of the error' }),
                })
                .openapi({ required: ['name'] }),
              ok: z.boolean(),
            })
            .openapi({ required: ['code', 'ok', 'error'] }),
          examples: {
            response: {
              value: {
                code: 400,
                error: {
                  innerErrors: ['invalid type filters.types is an invalid type unsupported-type'],
                  name: 'ValidationError',
                },
                ok: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postTestComposerRoute = createRoute({
  method: 'post',
  path: '/test/composer',
  tags: ['Test'],
  summary: 'Test composer.json & composer.lock file',
  description:
    'You can test your Composer packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a "target" `composer.json` and a `composer.lock`.',
  operationId: 'Test composer.json & composer.lock file',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  additional: z
                    .array(z.any())
                    .openapi({
                      description: 'a lockfile encoded according the the "encoding" field.',
                    }),
                  target: z
                    .object({ contents: z.string().exactOptional() })
                    .openapi({
                      description:
                        'the `composer.json` file, encoded according the the "encoding" field.',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'The manifest files:',
                  required: ['target', 'additional'],
                }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  additional: [
                    {
                      contents:
                        '{"_readme":["This file locks the dependencies of your project to a known state","Read more about it at https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file","This file is @generated automatically"],"content-hash":"3a3771e545494c4c098e639bd68602ba","packages":[{"name":"aws/aws-sdk-php","version":"3.0.0","source":{"type":"git","url":"https://github.com/aws/aws-sdk-php.git","reference":"4018c8f14a9e53003bb0417fa859c6a7ad57b53b"},"dist":{"type":"zip","url":"https://api.github.com/repos/aws/aws-sdk-php/zipball/4018c8f14a9e53003bb0417fa859c6a7ad57b53b","reference":"4018c8f14a9e53003bb0417fa859c6a7ad57b53b","shasum":""},"require":{"guzzlehttp/guzzle":"^5.3 || ^6.0.1","guzzlehttp/promises":"^1.0.0","guzzlehttp/psr7":"^1.0.0","mtdowling/jmespath.php":"^2.2","php":">=5.5"},"require-dev":{"ext-dom":"*","ext-json":"*","ext-openssl":"*","ext-pcre":"*","ext-simplexml":"*","ext-spl":"*","phpunit/phpunit":"^4.0"},"suggest":{"ext-curl":"To send requests using cURL","ext-openssl":"Allows working with CloudFront private distributions and verifying received SNS messages"},"type":"library","extra":{"branch-alias":{"dev-master":"3.0-dev"}},"autoload":{"psr-4":{"Aws\\":"src/"},"files":["src/functions.php"]},"notification-url":"https://packagist.org/downloads/","license":["Apache-2.0"],"authors":[{"name":"Amazon Web Services","homepage":"http://aws.amazon.com"}],"description":"AWS SDK for PHP - Use Amazon Web Services in your PHP project","homepage":"http://aws.amazon.com/sdkforphp","keywords":["amazon","aws","cloud","dynamodb","ec2","glacier","s3","sdk"],"time":"2015-05-27T20:07:42+00:00"},{"name":"doctrine/annotations","version":"v1.5.0","source":{"type":"git","url":"https://github.com/doctrine/annotations.git","reference":"5beebb01b025c94e93686b7a0ed3edae81fe3e7f"},"dist":{"type":"zip","url":"https://api.github.com/repos/doctrine/annotations/zipball/5beebb01b025c94e93686b7a0ed3edae81fe3e7f","reference":"5beebb01b025c94e93686b7a0ed3edae81fe3e7f","shasum":""},"require":{"doctrine/lexer":"1.*","php":"^7.1"},"require-dev":{"doctrine/cache":"1.*","phpunit/phpunit":"^5.7"},"type":"library","extra":{"branch-alias":{"dev-master":"1.5.x-dev"}},"autoload":{"psr-4":{"Doctrine\\Common\\Annotations\\":"lib/Doctrine/Common/Annotations"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Roman Borschel","email":"roman@code-factory.org"},{"name":"Benjamin Eberlei","email":"kontakt@beberlei.de"},{"name":"Guilherme Blanco","email":"guilhermeblanco@gmail.com"},{"name":"Jonathan Wage","email":"jonwage@gmail.com"},{"name":"Johannes Schmitt","email":"schmittjoh@gmail.com"}],"description":"Docblock Annotations Parser","homepage":"http://www.doctrine-project.org","keywords":["annotations","docblock","parser"],"time":"2017-07-22T10:58:02+00:00"},{"name":"doctrine/cache","version":"v1.7.1","source":{"type":"git","url":"https://github.com/doctrine/cache.git","reference":"b3217d58609e9c8e661cd41357a54d926c4a2a1a"},"dist":{"type":"zip","url":"https://api.github.com/repos/doctrine/cache/zipball/b3217d58609e9c8e661cd41357a54d926c4a2a1a","reference":"b3217d58609e9c8e661cd41357a54d926c4a2a1a","shasum":""},"require":{"php":"~7.1"},"conflict":{"doctrine/common":">2.2,<2.4"},"require-dev":{"alcaeus/mongo-php-adapter":"^1.1","mongodb/mongodb":"^1.1","phpunit/phpunit":"^5.7","predis/predis":"~1.0"},"suggest":{"alcaeus/mongo-php-adapter":"Required to use legacy MongoDB driver"},"type":"library","extra":{"branch-alias":{"dev-master":"1.7.x-dev"}},"autoload":{"psr-4":{"Doctrine\\Common\\Cache\\":"lib/Doctrine/Common/Cache"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Roman Borschel","email":"roman@code-factory.org"},{"name":"Benjamin Eberlei","email":"kontakt@beberlei.de"},{"name":"Guilherme Blanco","email":"guilhermeblanco@gmail.com"},{"name":"Jonathan Wage","email":"jonwage@gmail.com"},{"name":"Johannes Schmitt","email":"schmittjoh@gmail.com"}],"description":"Caching library offering an object-oriented API for many cache backends","homepage":"http://www.doctrine-project.org","keywords":["cache","caching"],"time":"2017-08-25T07:02:50+00:00"},{"name":"doctrine/collections","version":"v1.5.0","source":{"type":"git","url":"https://github.com/doctrine/collections.git","reference":"a01ee38fcd999f34d9bfbcee59dbda5105449cbf"},"dist":{"type":"zip","url":"https://api.github.com/repos/doctrine/collections/zipball/a01ee38fcd999f34d9bfbcee59dbda5105449cbf","reference":"a01ee38fcd999f34d9bfbcee59dbda5105449cbf","shasum":""},"require":{"php":"^7.1"},"require-dev":{"doctrine/coding-standard":"~0.1@dev","phpunit/phpunit":"^5.7"},"type":"library","extra":{"branch-alias":{"dev-master":"1.3.x-dev"}},"autoload":{"psr-0":{"Doctrine\\Common\\Collections\\":"lib/"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Roman Borschel","email":"roman@code-factory.org"},{"name":"Benjamin Eberlei","email":"kontakt@beberlei.de"},{"name":"Guilherme Blanco","email":"guilhermeblanco@gmail.com"},{"name":"Jonathan Wage","email":"jonwage@gmail.com"},{"name":"Johannes Schmitt","email":"schmittjoh@gmail.com"}],"description":"Collections Abstraction library","homepage":"http://www.doctrine-project.org","keywords":["array","collections","iterator"],"time":"2017-07-22T10:37:32+00:00"},{"name":"doctrine/common","version":"v2.5.0","source":{"type":"git","url":"https://github.com/doctrine/common.git","reference":"cd8daf2501e10c63dced7b8b9b905844316ae9d3"},"dist":{"type":"zip","url":"https://api.github.com/repos/doctrine/common/zipball/cd8daf2501e10c63dced7b8b9b905844316ae9d3","reference":"cd8daf2501e10c63dced7b8b9b905844316ae9d3","shasum":""},"require":{"doctrine/annotations":"1.*","doctrine/cache":"1.*","doctrine/collections":"1.*","doctrine/inflector":"1.*","doctrine/lexer":"1.*","php":">=5.3.2"},"require-dev":{"phpunit/phpunit":"~3.7"},"type":"library","extra":{"branch-alias":{"dev-master":"2.6.x-dev"}},"autoload":{"psr-0":{"Doctrine\\Common\\":"lib/"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Roman Borschel","email":"roman@code-factory.org"},{"name":"Benjamin Eberlei","email":"kontakt@beberlei.de"},{"name":"Guilherme Blanco","email":"guilhermeblanco@gmail.com"},{"name":"Jonathan Wage","email":"jonwage@gmail.com"},{"name":"Johannes Schmitt","email":"schmittjoh@gmail.com"}],"description":"Common Library for Doctrine projects","homepage":"http://www.doctrine-project.org","keywords":["annotations","collections","eventmanager","persistence","spl"],"time":"2015-04-02T19:55:44+00:00"},{"name":"doctrine/inflector","version":"v1.2.0","source":{"type":"git","url":"https://github.com/doctrine/inflector.git","reference":"e11d84c6e018beedd929cff5220969a3c6d1d462"},"dist":{"type":"zip","url":"https://api.github.com/repos/doctrine/inflector/zipball/e11d84c6e018beedd929cff5220969a3c6d1d462","reference":"e11d84c6e018beedd929cff5220969a3c6d1d462","shasum":""},"require":{"php":"^7.0"},"require-dev":{"phpunit/phpunit":"^6.2"},"type":"library","extra":{"branch-alias":{"dev-master":"1.2.x-dev"}},"autoload":{"psr-4":{"Doctrine\\Common\\Inflector\\":"lib/Doctrine/Common/Inflector"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Roman Borschel","email":"roman@code-factory.org"},{"name":"Benjamin Eberlei","email":"kontakt@beberlei.de"},{"name":"Guilherme Blanco","email":"guilhermeblanco@gmail.com"},{"name":"Jonathan Wage","email":"jonwage@gmail.com"},{"name":"Johannes Schmitt","email":"schmittjoh@gmail.com"}],"description":"Common String Manipulations with regard to casing and singular/plural rules.","homepage":"http://www.doctrine-project.org","keywords":["inflection","pluralize","singularize","string"],"time":"2017-07-22T12:18:28+00:00"},{"name":"doctrine/lexer","version":"v1.0.1","source":{"type":"git","url":"https://github.com/doctrine/lexer.git","reference":"83893c552fd2045dd78aef794c31e694c37c0b8c"},"dist":{"type":"zip","url":"https://api.github.com/repos/doctrine/lexer/zipball/83893c552fd2045dd78aef794c31e694c37c0b8c","reference":"83893c552fd2045dd78aef794c31e694c37c0b8c","shasum":""},"require":{"php":">=5.3.2"},"type":"library","extra":{"branch-alias":{"dev-master":"1.0.x-dev"}},"autoload":{"psr-0":{"Doctrine\\Common\\Lexer\\":"lib/"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Roman Borschel","email":"roman@code-factory.org"},{"name":"Guilherme Blanco","email":"guilhermeblanco@gmail.com"},{"name":"Johannes Schmitt","email":"schmittjoh@gmail.com"}],"description":"Base library for a lexer that can be used in Top-Down, Recursive Descent Parsers.","homepage":"http://www.doctrine-project.org","keywords":["lexer","parser"],"time":"2014-09-09T13:34:57+00:00"},{"name":"guzzlehttp/guzzle","version":"6.3.0","source":{"type":"git","url":"https://github.com/guzzle/guzzle.git","reference":"f4db5a78a5ea468d4831de7f0bf9d9415e348699"},"dist":{"type":"zip","url":"https://api.github.com/repos/guzzle/guzzle/zipball/f4db5a78a5ea468d4831de7f0bf9d9415e348699","reference":"f4db5a78a5ea468d4831de7f0bf9d9415e348699","shasum":""},"require":{"guzzlehttp/promises":"^1.0","guzzlehttp/psr7":"^1.4","php":">=5.5"},"require-dev":{"ext-curl":"*","phpunit/phpunit":"^4.0 || ^5.0","psr/log":"^1.0"},"suggest":{"psr/log":"Required for using the Log middleware"},"type":"library","extra":{"branch-alias":{"dev-master":"6.2-dev"}},"autoload":{"files":["src/functions_include.php"],"psr-4":{"GuzzleHttp\\":"src/"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Michael Dowling","email":"mtdowling@gmail.com","homepage":"https://github.com/mtdowling"}],"description":"Guzzle is a PHP HTTP client library","homepage":"http://guzzlephp.org/","keywords":["client","curl","framework","http","http client","rest","web service"],"time":"2017-06-22T18:50:49+00:00"},{"name":"guzzlehttp/promises","version":"v1.3.1","source":{"type":"git","url":"https://github.com/guzzle/promises.git","reference":"a59da6cf61d80060647ff4d3eb2c03a2bc694646"},"dist":{"type":"zip","url":"https://api.github.com/repos/guzzle/promises/zipball/a59da6cf61d80060647ff4d3eb2c03a2bc694646","reference":"a59da6cf61d80060647ff4d3eb2c03a2bc694646","shasum":""},"require":{"php":">=5.5.0"},"require-dev":{"phpunit/phpunit":"^4.0"},"type":"library","extra":{"branch-alias":{"dev-master":"1.4-dev"}},"autoload":{"psr-4":{"GuzzleHttp\\Promise\\":"src/"},"files":["src/functions_include.php"]},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Michael Dowling","email":"mtdowling@gmail.com","homepage":"https://github.com/mtdowling"}],"description":"Guzzle promises library","keywords":["promise"],"time":"2016-12-20T10:07:11+00:00"},{"name":"guzzlehttp/psr7","version":"1.4.2","source":{"type":"git","url":"https://github.com/guzzle/psr7.git","reference":"f5b8a8512e2b58b0071a7280e39f14f72e05d87c"},"dist":{"type":"zip","url":"https://api.github.com/repos/guzzle/psr7/zipball/f5b8a8512e2b58b0071a7280e39f14f72e05d87c","reference":"f5b8a8512e2b58b0071a7280e39f14f72e05d87c","shasum":""},"require":{"php":">=5.4.0","psr/http-message":"~1.0"},"provide":{"psr/http-message-implementation":"1.0"},"require-dev":{"phpunit/phpunit":"~4.0"},"type":"library","extra":{"branch-alias":{"dev-master":"1.4-dev"}},"autoload":{"psr-4":{"GuzzleHttp\\Psr7\\":"src/"},"files":["src/functions_include.php"]},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Michael Dowling","email":"mtdowling@gmail.com","homepage":"https://github.com/mtdowling"},{"name":"Tobias Schultze","homepage":"https://github.com/Tobion"}],"description":"PSR-7 message implementation that also provides common utility methods","keywords":["http","message","request","response","stream","uri","url"],"time":"2017-03-20T17:10:46+00:00"},{"name":"mtdowling/jmespath.php","version":"2.4.0","source":{"type":"git","url":"https://github.com/jmespath/jmespath.php.git","reference":"adcc9531682cf87dfda21e1fd5d0e7a41d292fac"},"dist":{"type":"zip","url":"https://api.github.com/repos/jmespath/jmespath.php/zipball/adcc9531682cf87dfda21e1fd5d0e7a41d292fac","reference":"adcc9531682cf87dfda21e1fd5d0e7a41d292fac","shasum":""},"require":{"php":">=5.4.0"},"require-dev":{"phpunit/phpunit":"~4.0"},"bin":["bin/jp.php"],"type":"library","extra":{"branch-alias":{"dev-master":"2.0-dev"}},"autoload":{"psr-4":{"JmesPath\\":"src/"},"files":["src/JmesPath.php"]},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Michael Dowling","email":"mtdowling@gmail.com","homepage":"https://github.com/mtdowling"}],"description":"Declaratively specify how to extract elements from a JSON document","keywords":["json","jsonpath"],"time":"2016-12-03T22:08:25+00:00"},{"name":"psr/http-message","version":"1.0.1","source":{"type":"git","url":"https://github.com/php-fig/http-message.git","reference":"f6561bf28d520154e4b0ec72be95418abe6d9363"},"dist":{"type":"zip","url":"https://api.github.com/repos/php-fig/http-message/zipball/f6561bf28d520154e4b0ec72be95418abe6d9363","reference":"f6561bf28d520154e4b0ec72be95418abe6d9363","shasum":""},"require":{"php":">=5.3.0"},"type":"library","extra":{"branch-alias":{"dev-master":"1.0.x-dev"}},"autoload":{"psr-4":{"Psr\\Http\\Message\\":"src/"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"PHP-FIG","homepage":"http://www.php-fig.org/"}],"description":"Common interface for HTTP messages","homepage":"https://github.com/php-fig/http-message","keywords":["http","http-message","psr","psr-7","request","response"],"time":"2016-08-06T14:39:51+00:00"},{"name":"psr/log","version":"1.0.2","source":{"type":"git","url":"https://github.com/php-fig/log.git","reference":"4ebe3a8bf773a19edfe0a84b6585ba3d401b724d"},"dist":{"type":"zip","url":"https://api.github.com/repos/php-fig/log/zipball/4ebe3a8bf773a19edfe0a84b6585ba3d401b724d","reference":"4ebe3a8bf773a19edfe0a84b6585ba3d401b724d","shasum":""},"require":{"php":">=5.3.0"},"type":"library","extra":{"branch-alias":{"dev-master":"1.0.x-dev"}},"autoload":{"psr-4":{"Psr\\Log\\":"Psr/Log/"}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"PHP-FIG","homepage":"http://www.php-fig.org/"}],"description":"Common interface for logging libraries","homepage":"https://github.com/php-fig/log","keywords":["log","psr","psr-3"],"time":"2016-10-10T12:19:37+00:00"},{"name":"symfony/icu","version":"v1.2.2","target-dir":"Symfony/Component/Icu","source":{"type":"git","url":"https://github.com/symfony/icu.git","reference":"d4d85d6055b87f394d941b45ddd3a9173e1e3d2a"},"dist":{"type":"zip","url":"https://api.github.com/repos/symfony/icu/zipball/d4d85d6055b87f394d941b45ddd3a9173e1e3d2a","reference":"d4d85d6055b87f394d941b45ddd3a9173e1e3d2a","shasum":""},"require":{"ext-intl":"*","lib-icu":">=4.4","php":">=5.3.3","symfony/intl":"~2.3"},"type":"library","autoload":{"psr-0":{"Symfony\\Component\\Icu\\":""}},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Symfony Community","homepage":"http://symfony.com/contributors"},{"name":"Bernhard Schussek","email":"bschussek@gmail.com"}],"description":"Contains an excerpt of the ICU data and classes to load it.","homepage":"http://symfony.com","keywords":["icu","intl"],"abandoned":"symfony/intl","time":"2014-07-25T09:58:17+00:00"},{"name":"symfony/symfony","version":"v2.3.1","source":{"type":"git","url":"https://github.com/symfony/symfony.git","reference":"0902c606b4df1161f5b786ae89f37b71380b1f23"},"dist":{"type":"zip","url":"https://api.github.com/repos/symfony/symfony/zipball/0902c606b4df1161f5b786ae89f37b71380b1f23","reference":"0902c606b4df1161f5b786ae89f37b71380b1f23","shasum":""},"require":{"doctrine/common":"~2.2","php":">=5.3.3","psr/log":"~1.0","symfony/icu":"~1.0","twig/twig":"~1.11"},"replace":{"symfony/browser-kit":"self.version","symfony/class-loader":"self.version","symfony/config":"self.version","symfony/console":"self.version","symfony/css-selector":"self.version","symfony/debug":"self.version","symfony/dependency-injection":"self.version","symfony/doctrine-bridge":"self.version","symfony/dom-crawler":"self.version","symfony/event-dispatcher":"self.version","symfony/filesystem":"self.version","symfony/finder":"self.version","symfony/form":"self.version","symfony/framework-bundle":"self.version","symfony/http-foundation":"self.version","symfony/http-kernel":"self.version","symfony/intl":"self.version","symfony/locale":"self.version","symfony/monolog-bridge":"self.version","symfony/options-resolver":"self.version","symfony/process":"self.version","symfony/propel1-bridge":"self.version","symfony/property-access":"self.version","symfony/proxy-manager-bridge":"self.version","symfony/routing":"self.version","symfony/security":"self.version","symfony/security-bundle":"self.version","symfony/serializer":"self.version","symfony/stopwatch":"self.version","symfony/swiftmailer-bridge":"self.version","symfony/templating":"self.version","symfony/translation":"self.version","symfony/twig-bridge":"self.version","symfony/twig-bundle":"self.version","symfony/validator":"self.version","symfony/web-profiler-bundle":"self.version","symfony/yaml":"self.version"},"require-dev":{"doctrine/data-fixtures":"1.0.*","doctrine/dbal":"~2.2","doctrine/orm":"~2.2,>=2.2.3","ircmaxell/password-compat":"1.0.*","monolog/monolog":"~1.3","ocramius/proxy-manager":">=0.3.1,<0.4-dev","propel/propel1":"1.6.*"},"type":"library","extra":{"branch-alias":{"dev-master":"2.3-dev"}},"autoload":{"psr-0":{"Symfony\\":"src/"},"classmap":["src/Symfony/Component/HttpFoundation/Resources/stubs","src/Symfony/Component/Intl/Resources/stubs"],"files":["src/Symfony/Component/Intl/Resources/stubs/functions.php"]},"notification-url":"https://packagist.org/downloads/","license":["MIT"],"authors":[{"name":"Symfony Community","homepage":"http://symfony.com/contributors"},{"name":"Fabien Potencier","email":"fabien@symfony.com"}],"description":"The Symfony PHP framework","homepage":"http://symfony.com","keywords":["framework"],"time":"2013-06-11T11:46:38+00:00"},{"name":"twig/twig","version":"v1.35.0","source":{"type":"git","url":"https://github.com/twigphp/Twig.git","reference":"daa657073e55b0a78cce8fdd22682fddecc6385f"},"dist":{"type":"zip","url":"https://api.github.com/repos/twigphp/Twig/zipball/daa657073e55b0a78cce8fdd22682fddecc6385f","reference":"daa657073e55b0a78cce8fdd22682fddecc6385f","shasum":""},"require":{"php":">=5.3.3"},"require-dev":{"psr/container":"^1.0","symfony/debug":"~2.7","symfony/phpunit-bridge":"~3.3@dev"},"type":"library","extra":{"branch-alias":{"dev-master":"1.35-dev"}},"autoload":{"psr-0":{"Twig_":"lib/"},"psr-4":{"Twig\\":"src/"}},"notification-url":"https://packagist.org/downloads/","license":["BSD-3-Clause"],"authors":[{"name":"Fabien Potencier","email":"fabien@symfony.com","homepage":"http://fabien.potencier.org","role":"Lead Developer"},{"name":"Armin Ronacher","email":"armin.ronacher@active-4.com","role":"Project Founder"},{"name":"Twig Team","homepage":"http://twig.sensiolabs.org/contributors","role":"Contributors"}],"description":"Twig, the flexible, fast, and secure template language for PHP","homepage":"http://twig.sensiolabs.org","keywords":["templating"],"time":"2017-09-27T18:06:46+00:00"},{"name":"yiisoft/yii","version":"1.1.14","source":{"type":"git","url":"https://github.com/yiisoft/yii.git","reference":"f0fee98ee84f70f1f3652f65562c9670e919cb4e"},"dist":{"type":"zip","url":"https://api.github.com/repos/yiisoft/yii/zipball/f0fee98ee84f70f1f3652f65562c9670e919cb4e","reference":"f0fee98ee84f70f1f3652f65562c9670e919cb4e","shasum":""},"require":{"php":">=5.1.0"},"bin":["framework/yiic"],"type":"library","notification-url":"https://packagist.org/downloads/","license":["BSD-3-Clause"],"authors":[{"name":"Qiang Xue","email":"qiang.xue@gmail.com","homepage":"http://www.yiiframework.com/","role":"Founder and project lead"},{"name":"Alexander Makarov","email":"sam@rmcreative.ru","homepage":"http://rmcreative.ru/","role":"Core framework development"},{"name":"Maurizio Domba","homepage":"http://mdomba.info/","role":"Core framework development"},{"name":"Carsten Brandt","email":"mail@cebe.cc","homepage":"http://cebe.cc/","role":"Core framework development"},{"name":"Wei Zhuo","email":"weizhuo@gmail.com","role":"Project site maintenance and development"},{"name":"Sebastián Thierer","email":"sebas@artfos.com","role":"Component development"},{"name":"Jeffrey Winesett","email":"jefftulsa@gmail.com","role":"Documentation and marketing"},{"name":"Timur Ruziev","email":"resurtm@gmail.com","homepage":"http://resurtm.com/","role":"Core framework development"},{"name":"Paul Klimov","email":"klimov.paul@gmail.com","role":"Core framework development"}],"description":"Yii Web Programming Framework","homepage":"http://www.yiiframework.com/","keywords":["framework","yii"],"time":"2013-08-12T00:12:08+00:00"},{"name":"zendframework/zendframework","version":"2.1.0","source":{"type":"git","url":"https://github.com/zendframework/zendframework.git","reference":"345a8cbedbe8de8a25bf18579fe54d169ac5075a"},"dist":{"type":"zip","url":"https://api.github.com/repos/zendframework/zendframework/zipball/345a8cbedbe8de8a25bf18579fe54d169ac5075a","reference":"345a8cbedbe8de8a25bf18579fe54d169ac5075a","shasum":""},"require":{"php":">=5.3.3"},"replace":{"zendframework/zend-authentication":"self.version","zendframework/zend-barcode":"self.version","zendframework/zend-cache":"self.version","zendframework/zend-captcha":"self.version","zendframework/zend-code":"self.version","zendframework/zend-config":"self.version","zendframework/zend-console":"self.version","zendframework/zend-crypt":"self.version","zendframework/zend-db":"self.version","zendframework/zend-debug":"self.version","zendframework/zend-di":"self.version","zendframework/zend-dom":"self.version","zendframework/zend-escaper":"self.version","zendframework/zend-eventmanager":"self.version","zendframework/zend-feed":"self.version","zendframework/zend-file":"self.version","zendframework/zend-filter":"self.version","zendframework/zend-form":"self.version","zendframework/zend-http":"self.version","zendframework/zend-i18n":"self.version","zendframework/zend-inputfilter":"self.version","zendframework/zend-json":"self.version","zendframework/zend-ldap":"self.version","zendframework/zend-loader":"self.version","zendframework/zend-log":"self.version","zendframework/zend-mail":"self.version","zendframework/zend-math":"self.version","zendframework/zend-memory":"self.version","zendframework/zend-mime":"self.version","zendframework/zend-modulemanager":"self.version","zendframework/zend-mvc":"self.version","zendframework/zend-navigation":"self.version","zendframework/zend-paginator":"self.version","zendframework/zend-permissions-acl":"self.version","zendframework/zend-permissions-rbac":"self.version","zendframework/zend-progressbar":"self.version","zendframework/zend-serializer":"self.version","zendframework/zend-server":"self.version","zendframework/zend-servicemanager":"self.version","zendframework/zend-session":"self.version","zendframework/zend-soap":"self.version","zendframework/zend-stdlib":"self.version","zendframework/zend-tag":"self.version","zendframework/zend-test":"self.version","zendframework/zend-text":"self.version","zendframework/zend-uri":"self.version","zendframework/zend-validator":"self.version","zendframework/zend-version":"self.version","zendframework/zend-view":"self.version","zendframework/zend-xmlrpc":"self.version"},"require-dev":{"doctrine/common":">=2.1","phpunit/phpunit":"3.7.*"},"suggest":{"doctrine/common":"Doctrine\\Common >=2.1 for annotation features","ext-intl":"ext/intl for i18n features","pecl-weakref":"Implementation of weak references for Zend\\Stdlib\\CallbackHandler","zendframework/zendpdf":"ZendPdf for creating PDF representations of barcodes","zendframework/zendservice-recaptcha":"ZendService\\ReCaptcha for rendering ReCaptchas in Zend\\Captcha and/or Zend\\Form"},"bin":["bin/classmap_generator.php"],"type":"library","extra":{"branch-alias":{"dev-master":"2.1-dev","dev-develop":"2.2-dev"}},"autoload":{"psr-0":{"Zend\\":"library/","ZendTest\\":"tests/"}},"notification-url":"https://packagist.org/downloads/","license":["BSD-3-Clause"],"description":"Zend Framework 2","homepage":"http://framework.zend.com/","keywords":["framework","zf2"],"time":"2013-01-30T16:46:21+00:00"}],"packages-dev":[],"aliases":[],"minimum-stability":"stable","stability-flags":[],"prefer-stable":false,"prefer-lowest":false,"platform":{"php":">=5.3.2"},"platform-dev":[]}',
                    },
                  ],
                  target: {
                    contents:
                      '{"name": "vulnerable/project","description": "A sample vulnerable project","require": {"php": ">=5.3.2","symfony/symfony": "v2.3.1","yiisoft/yii": "1.1.14","zendframework/zendframework": "2.1.0","aws/aws-sdk-php": "3.0.0","doctrine/common": "2.5.0"}}',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestDepGraphRoute = createRoute({
  method: 'post',
  path: '/test/dep-graph',
  tags: ['Test'],
  summary: 'Test Dep Graph',
  description:
    'Use this endpoint to find issues in a [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata).',
  operationId: 'Test Dep Graph',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              depGraph: z
                .object({
                  graph: z
                    .object({
                      nodes: z.array(z.any()).openapi({ description: 'Array of node objects.' }),
                      rootNodeId: z.string().openapi({ description: 'Root node id.' }),
                    })
                    .openapi({
                      description:
                        'Graph object references each pkg and how they depend on each other through the deps property.',
                      required: ['rootNodeId', 'nodes'],
                    }),
                  pkgManager: z
                    .object({
                      name: z.string().openapi({ description: 'Package manager name.' }),
                      repositories: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description:
                            'A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager.',
                        }),
                    })
                    .openapi({ description: 'Package manager information.', required: ['name'] }),
                  pkgs: z.array(z.any()).openapi({ description: 'Array of package dependencies.' }),
                  schemaVersion: z
                    .string()
                    .openapi({ description: 'Snyk DepGraph library schema version.' }),
                })
                .openapi({
                  description:
                    'A [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata) defining all packages and their relationships.',
                  required: ['schemaVersion', 'pkgManager', 'pkgs', 'graph'],
                }),
            })
            .openapi({
              example: {
                depGraph: {
                  graph: {
                    nodes: [
                      {
                        deps: [{ nodeId: 'ch.qos.logback:logback-core@1.0.13' }],
                        nodeId: 'root-node',
                        pkgId: 'app@1.0.0',
                      },
                      {
                        deps: [],
                        nodeId: 'ch.qos.logback:logback-core@1.0.13',
                        pkgId: 'ch.qos.logback:logback-core@1.0.13',
                      },
                    ],
                    rootNodeId: 'root-node',
                  },
                  pkgManager: { name: 'maven' },
                  pkgs: [
                    { id: 'app@1.0.0', info: { name: 'app', version: '1.0.0' } },
                    {
                      id: 'ch.qos.logback:logback-core@1.0.13',
                      info: { name: 'ch.qos.logback:logback-core', version: '1.0.13' },
                    },
                  ],
                  schemaVersion: '1.2.0',
                },
              },
              required: ['depGraph'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestGolangdepRoute = createRoute({
  method: 'post',
  path: '/test/golangdep',
  tags: ['Test'],
  summary: 'Test Gopkg.toml & Gopkg.lock File',
  description:
    'You can test your Go dep packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a "target" `Gopkg.toml` and a `Gopkg.lock`.',
  operationId: 'Test Gopkg.toml & Gopkg.lock File',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  additional: z
                    .array(z.any())
                    .openapi({
                      description: 'a lockfile encoded according the the "encoding" field.',
                    }),
                  target: z
                    .object({ contents: z.string().exactOptional() })
                    .openapi({
                      description:
                        'the `Gopkg.toml` file, encoded according the the "encoding" field.',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'The manifest files:',
                  required: ['target', 'additional'],
                }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  additional: [
                    {
                      contents:
                        '"# This file is autogenerated, do not edit; changes may be undone by the next \'dep ensure\'.\\r\\n\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:e2a1ff1174d564ed4b75a62757f4a9081ed3b8c99ed17e47eb252b048b4ff018\\"\\r\\n  name = \\"github.com/asaskevich/EventBus\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"d46933a94f05c6657d7b923fcf5ac563ee37ec79\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:b95c3763b72359370262246870366418c1d17446195e3c73921135c2537b9655\\"\\r\\n  name = \\"github.com/cloudevents/sdk-go\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"v02\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"3a3d34a7231e937edfa20964dc25c29081c3ebea\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:abeb38ade3f32a92943e5be54f55ed6d6e3b6602761d74b4aab4c9dd45c18abd\\"\\r\\n  name = \\"github.com/fsnotify/fsnotify\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c2828203cd70a50dcccfb2761f8b1f8ceef9a8e9\\"\\r\\n  version = \\"v1.4.7\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:36fe9527deed01d2a317617e59304eb2c4ce9f8a24115bcc5c2e37b3aee5bae4\\"\\r\\n  name = \\"github.com/gin-contrib/sse\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"22d885f9ecc78bf4ee5d72b937e4bbcdc58e8cae\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:d5083934eb25e45d17f72ffa86cae3814f4a9d6c073c4f16b64147169b245606\\"\\r\\n  name = \\"github.com/gin-gonic/gin\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"binding\\",\\r\\n    \\"json\\",\\r\\n    \\"render\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"b869fe1415e4b9eb52f247441830d502aece2d4d\\"\\r\\n  version = \\"v1.3.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:4c0989ca0bcd10799064318923b9bc2db6b4d6338dd75f3f2d86c3511aaaf5cf\\"\\r\\n  name = \\"github.com/golang/protobuf\\"\\r\\n  packages = [\\r\\n    \\"proto\\",\\r\\n    \\"ptypes\\",\\r\\n    \\"ptypes/any\\",\\r\\n    \\"ptypes/duration\\",\\r\\n    \\"ptypes/timestamp\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"aa810b61a9c79d51363740d207bb46cf8e620ed5\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:4e0e5d786c35c402574cda1906195d9fbd76a35d2c921eb10199741faf4f0256\\"\\r\\n  name = \\"github.com/goph/emperror\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"b1b4a9b847ebc56299eb729faa942b89e9d8a562\\"\\r\\n  version = \\"v0.14.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:dd95856542089c3e0487299d6ac92f5f2941e97625b5a5754a483c7730e8dc89\\"\\r\\n  name = \\"github.com/goph/logur\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"111a952ccfacab0a90b9e4496da21d9f15187769\\"\\r\\n  version = \\"v0.5.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c0d19ab64b32ce9fe5cf4ddceba78d5bc9807f0016db6b1183599da3dcc24d10\\"\\r\\n  name = \\"github.com/hashicorp/hcl\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"hcl/ast\\",\\r\\n    \\"hcl/parser\\",\\r\\n    \\"hcl/printer\\",\\r\\n    \\"hcl/scanner\\",\\r\\n    \\"hcl/strconv\\",\\r\\n    \\"hcl/token\\",\\r\\n    \\"json/parser\\",\\r\\n    \\"json/scanner\\",\\r\\n    \\"json/token\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"8cb6e5b959231cc1119e43259c4a608f9c51a241\\"\\r\\n  version = \\"v1.0.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:be97e109f627d3ba8edfef50c9c74f0d0c17cbe3a2e924a8985e4804a894f282\\"\\r\\n  name = \\"github.com/json-iterator/go\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"36b14963da70d11297d313183d7e6388c8510e1e\\"\\r\\n  version = \\"1.0.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:0a69a1c0db3591fcefb47f115b224592c8dfa4368b7ba9fae509d5e16cdc95c8\\"\\r\\n  name = \\"github.com/konsorten/go-windows-terminal-sequences\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"5c8c8bd35d3832f5d134ae1e1e375b69a4d25242\\"\\r\\n  version = \\"v1.0.1\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c568d7727aa262c32bdf8a3f7db83614f7af0ed661474b24588de635c20024c7\\"\\r\\n  name = \\"github.com/magiconair/properties\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c2353362d570a7bfa228149c62842019201cfb71\\"\\r\\n  version = \\"v1.8.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:fa610f9fe6a93f4a75e64c83673dfff9bf1a34bbb21e6102021b6bc7850834a3\\"\\r\\n  name = \\"github.com/mattn/go-isatty\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"57fdcb988a5c543893cc61bce354a6e24ab70022\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:53bc4cd4914cd7cd52139990d5170d6dc99067ae31c56530621b18b35fc30318\\"\\r\\n  name = \\"github.com/mitchellh/mapstructure\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"3536a929edddb9a5b34bd6861dc4a9647cb459fe\\"\\r\\n  version = \\"v1.1.2\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:808cdddf087fb64baeae67b8dfaee2069034d9704923a3cb8bd96a995421a625\\"\\r\\n  name = \\"github.com/patrickmn/go-cache\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"a3647f8e31d79543b2d0f0ae2fe5c379d72cedc0\\"\\r\\n  version = \\"v2.1.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:95741de3af260a92cc5c7f3f3061e85273f5a81b5db20d4bd68da74bd521675e\\"\\r\\n  name = \\"github.com/pelletier/go-toml\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c01d1270ff3e442a8a57cddc1c92dc1138598194\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:40e195917a951a8bf867cd05de2a46aaf1806c50cf92eebf4c16f78cd196f747\\"\\r\\n  name = \\"github.com/pkg/errors\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"645ef00459ed84a119197bfb8d8205042c6df63d\\"\\r\\n  version = \\"v0.8.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:274f67cb6fed9588ea2521ecdac05a6d62a8c51c074c1fccc6a49a40ba80e925\\"\\r\\n  name = \\"github.com/satori/go.uuid\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"f58768cc1a7a7e77a3bd49e98cdd21419399b6a3\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:69b1cc331fca23d702bd72f860c6a647afd0aa9fcbc1d0659b1365e26546dd70\\"\\r\\n  name = \\"github.com/sirupsen/logrus\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"bcd833dfe83d3cebad139e4a29ed79cb2318bf95\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:d707dbc1330c0ed177d4642d6ae102d5e2c847ebd0eb84562d0dc4f024531cfc\\"\\r\\n  name = \\"github.com/spf13/afero\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"mem\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"a5d6946387efe7d64d09dcba68cdd523dc1273a3\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:08d65904057412fc0270fc4812a1c90c594186819243160dc779a402d4b6d0bc\\"\\r\\n  name = \\"github.com/spf13/cast\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"8c9545af88b134710ab1cd196795e7f2388358d7\\"\\r\\n  version = \\"v1.3.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:68ea4e23713989dc20b1bded5d9da2c5f9be14ff9885beef481848edd18c26cb\\"\\r\\n  name = \\"github.com/spf13/jwalterweatherman\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"4a4406e478ca629068e7768fc33f3f044173c0a6\\"\\r\\n  version = \\"v1.0.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c1b1102241e7f645bc8e0c22ae352e8f0dc6484b6cb4d132fa9f24174e0119e2\\"\\r\\n  name = \\"github.com/spf13/pflag\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"298182f68c66c05229eb03ac171abe6e309ee79a\\"\\r\\n  version = \\"v1.0.3\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:de37e343c64582d7026bf8ab6ac5b22a72eac54f3a57020db31524affed9f423\\"\\r\\n  name = \\"github.com/spf13/viper\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"6d33b5a963d922d182c91e8a1c88d81fd150cfd4\\"\\r\\n  version = \\"v1.3.1\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c268acaa4a4d94a467980e5e91452eb61c460145765293dc0aed48e5e9919cc6\\"\\r\\n  name = \\"github.com/ugorji/go\\"\\r\\n  packages = [\\"codec\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c88ee250d0221a57af388746f5cf03768c21d6e2\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:38f553aff0273ad6f367cb0a0f8b6eecbaef8dc6cb8b50e57b6a81c1d5b1e332\\"\\r\\n  name = \\"golang.org/x/crypto\\"\\r\\n  packages = [\\"ssh/terminal\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"505ab145d0a99da450461ae2c1a9f6cd10d1f447\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:89a0cb976397aa9157a45bb2b896d0bcd07ee095ac975e0f03c53250c402265e\\"\\r\\n  name = \\"golang.org/x/net\\"\\r\\n  packages = [\\r\\n    \\"context\\",\\r\\n    \\"http/httpguts\\",\\r\\n    \\"http2\\",\\r\\n    \\"http2/hpack\\",\\r\\n    \\"idna\\",\\r\\n    \\"internal/timeseries\\",\\r\\n    \\"trace\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"e147a9138326bc0e9d4e179541ffd8af41cff8a9\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:ba8cbf57cfd92d5f8592b4aca1a35d92c162363d32aeabd5b12555f8896635e7\\"\\r\\n  name = \\"golang.org/x/sys\\"\\r\\n  packages = [\\r\\n    \\"unix\\",\\r\\n    \\"windows\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"4d1cda033e0619309c606fc686de3adcf599539e\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:a2ab62866c75542dd18d2b069fec854577a20211d7c0ea6ae746072a1dccdd18\\"\\r\\n  name = \\"golang.org/x/text\\"\\r\\n  packages = [\\r\\n    \\"collate\\",\\r\\n    \\"collate/build\\",\\r\\n    \\"internal/colltab\\",\\r\\n    \\"internal/gen\\",\\r\\n    \\"internal/tag\\",\\r\\n    \\"internal/triegen\\",\\r\\n    \\"internal/ucd\\",\\r\\n    \\"language\\",\\r\\n    \\"secure/bidirule\\",\\r\\n    \\"transform\\",\\r\\n    \\"unicode/bidi\\",\\r\\n    \\"unicode/cldr\\",\\r\\n    \\"unicode/norm\\",\\r\\n    \\"unicode/rangetable\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"f21a4dfb5e38f5895301dc265a8def02365cc3d0\\"\\r\\n  version = \\"v0.3.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:077c1c599507b3b3e9156d17d36e1e61928ee9b53a5b420f10f28ebd4a0b275c\\"\\r\\n  name = \\"google.golang.org/genproto\\"\\r\\n  packages = [\\"googleapis/rpc/status\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"bd91e49a0898e27abb88c339b432fa53d7497ac0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:9edd250a3c46675d0679d87540b30c9ed253b19bd1fd1af08f4f5fb3c79fc487\\"\\r\\n  name = \\"google.golang.org/grpc\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"balancer\\",\\r\\n    \\"balancer/base\\",\\r\\n    \\"balancer/roundrobin\\",\\r\\n    \\"binarylog/grpc_binarylog_v1\\",\\r\\n    \\"codes\\",\\r\\n    \\"connectivity\\",\\r\\n    \\"credentials\\",\\r\\n    \\"credentials/internal\\",\\r\\n    \\"encoding\\",\\r\\n    \\"encoding/proto\\",\\r\\n    \\"grpclog\\",\\r\\n    \\"internal\\",\\r\\n    \\"internal/backoff\\",\\r\\n    \\"internal/binarylog\\",\\r\\n    \\"internal/channelz\\",\\r\\n    \\"internal/envconfig\\",\\r\\n    \\"internal/grpcrand\\",\\r\\n    \\"internal/grpcsync\\",\\r\\n    \\"internal/syscall\\",\\r\\n    \\"internal/transport\\",\\r\\n    \\"keepalive\\",\\r\\n    \\"metadata\\",\\r\\n    \\"naming\\",\\r\\n    \\"peer\\",\\r\\n    \\"resolver\\",\\r\\n    \\"resolver/dns\\",\\r\\n    \\"resolver/passthrough\\",\\r\\n    \\"stats\\",\\r\\n    \\"status\\",\\r\\n    \\"tap\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"df014850f6dee74ba2fc94874043a9f3f75fbfd8\\"\\r\\n  version = \\"v1.17.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:cbc72c4c4886a918d6ab4b95e347ffe259846260f99ebdd8a198c2331cf2b2e9\\"\\r\\n  name = \\"gopkg.in/go-playground/validator.v8\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"5f1438d3fca68893a817e4a66806cea46a9e4ebf\\"\\r\\n  version = \\"v8.18.2\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:4d2e5a73dc1500038e504a8d78b986630e3626dc027bc030ba5c75da257cdb96\\"\\r\\n  name = \\"gopkg.in/yaml.v2\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"51d6538a90f86fe93ac480b35f37b2be17fef232\\"\\r\\n  version = \\"v2.2.2\\"\\r\\n\\r\\n[solve-meta]\\r\\n  analyzer-name = \\"dep\\"\\r\\n  analyzer-version = 1\\r\\n  input-imports = [\\r\\n    \\"github.com/asaskevich/EventBus\\",\\r\\n    \\"github.com/cloudevents/sdk-go/v02\\",\\r\\n    \\"github.com/gin-gonic/gin\\",\\r\\n    \\"github.com/golang/protobuf/proto\\",\\r\\n    \\"github.com/goph/emperror\\",\\r\\n    \\"github.com/goph/logur\\",\\r\\n    \\"github.com/karlseguin/ccache\\",\\r\\n    \\"github.com/patrickmn/go-cache\\",\\r\\n    \\"github.com/pkg/errors\\",\\r\\n    \\"github.com/satori/go.uuid\\",\\r\\n    \\"github.com/sirupsen/logrus\\",\\r\\n    \\"github.com/spf13/cast\\",\\r\\n    \\"github.com/spf13/pflag\\",\\r\\n    \\"github.com/spf13/viper\\",\\r\\n    \\"golang.org/x/net/context\\",\\r\\n    \\"google.golang.org/grpc\\",\\r\\n    \\"gopkg.in/go-playground/validator.v8\\",\\r\\n    \\"gopkg.in/yaml.v2\\",\\r\\n  ]\\r\\n  solver-name = \\"gps-cdcl\\"\\r\\n  solver-version = 1"',
                    },
                  ],
                  target: {
                    contents:
                      '"# Gopkg.toml example\\r\\n#\\r\\n# Refer to https://golang.github.io/dep/docs/Gopkg.toml.html\\r\\n# for detailed Gopkg.toml documentation.\\r\\n#\\r\\n# required = [\\"github.com/user/thing/cmd/thing\\"]\\r\\n# ignored = [\\"github.com/user/project/pkgX\\", \\"bitbucket.org/user/project/pkgA/pkgY\\"]\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\"github.com/user/project\\"\\r\\n#   version = \\"1.0.0\\"\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\"github.com/user/project2\\"\\r\\n#   branch = \\"dev\\"\\r\\n#   source = \\"github.com/myfork/project2\\"\\r\\n#\\r\\n# [[override]]\\r\\n#   name = \\"github.com/x/y\\"\\r\\n#   version = \\"2.4.0\\"\\r\\n#\\r\\n# [prune]\\r\\n#   non-go = false\\r\\n#   go-tests = true\\r\\n#   unused-packages = true\\r\\n\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\"master\\"\\r\\n  name = \\"github.com/asaskevich/EventBus\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\"master\\"\\r\\n  name = \\"github.com/cloudevents/sdk-go\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/gin-gonic/gin\\"\\r\\n  version = \\"1.3.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/golang/protobuf\\"\\r\\n  version = \\"1.2.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/goph/emperror\\"\\r\\n  version = \\"0.14.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/goph/logur\\"\\r\\n  version = \\"0.5.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/patrickmn/go-cache\\"\\r\\n  version = \\"2.1.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/pkg/errors\\"\\r\\n  version = \\"0.8.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/satori/go.uuid\\"\\r\\n  version = \\"1.2.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/sirupsen/logrus\\"\\r\\n  version = \\"1.2.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/spf13/cast\\"\\r\\n  version = \\"1.3.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/spf13/pflag\\"\\r\\n  version = \\"1.0.3\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/spf13/viper\\"\\r\\n  version = \\"1.3.1\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\"master\\"\\r\\n  name = \\"golang.org/x/net\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"google.golang.org/grpc\\"\\r\\n  version = \\"1.17.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"gopkg.in/go-playground/validator.v8\\"\\r\\n  version = \\"8.18.2\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"gopkg.in/yaml.v2\\"\\r\\n  version = \\"2.2.2\\"\\r\\n\\r\\n[prune]\\r\\n  go-tests = true\\r\\n  unused-packages = true"',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestGovendorRoute = createRoute({
  method: 'post',
  path: '/test/govendor',
  tags: ['Test'],
  summary: 'Test vendor.json File',
  description:
    'You can test your Go vendor packages for issues according to their manifest file using this action. It takes a JSON object containing a "target" `vendor.json`.',
  operationId: 'Test vendor.json File',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  target: z
                    .object({ contents: z.string().exactOptional() })
                    .openapi({
                      description:
                        'the `vendor.json` file, encoded according the the "encoding" field.',
                      required: [],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  target: {
                    contents:
                      '{\\"comment\\":\\"\\",\\"ignore\\":\\"test\\",\\"package\\":[{\\"checksumSHA1\\":\\"o/3cn04KAiwC7NqNVvmfVTD+hgA=\\",\\"path\\":\\"github.com/Microsoft/go-winio\\",\\"revision\\":\\"78439966b38d69bf38227fbf57ac8a6fee70f69a\\",\\"revisionTime\\":\\"2017-08-04T20:09:54Z\\"},{\\"checksumSHA1\\":\\"GqIrOttKaO7k6HIaHQLPr3cY7rY=\\",\\"path\\":\\"github.com/containerd/continuity/pathdriver\\",\\"revision\\":\\"617902de2ab5e18974efd88a58eeef67ac82d127\\",\\"revisionTime\\":\\"2017-09-25T16:43:31Z\\"},{\\"checksumSHA1\\":\\"ndnAFCfsGC3upNQ6jAEwzxcurww=\\",\\"path\\":\\"github.com/docker/docker/pkg/longpath\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"IVWozKA/coqhti24Ss2b1nLrTSg=\\",\\"path\\":\\"github.com/docker/docker/pkg/mount\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"YdUAOhhc/C0zu+eYrJOJjDwr1/4=\\",\\"path\\":\\"github.com/docker/docker/pkg/symlink\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"UEMAKQqAyL9hs6RWxesQuYMQ3+I=\\",\\"path\\":\\"github.com/docker/docker/pkg/system\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"UmXGieuTJQOzJPspPJTVKKKMiUA=\\",\\"path\\":\\"github.com/docker/go-units\\",\\"revision\\":\\"0dadbb0345b35ec7ef35e228dabb8de89a65bf52\\",\\"revisionTime\\":\\"2017-01-27T09:51:30Z\\"},{\\"checksumSHA1\\":\\"RCARG9BoOH6jwbqnuix2Ne3K26w=\\",\\"path\\":\\"github.com/docker/libcontainer\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"OVGl5SGmF1HZmaG6JRmkyWiycYA=\\",\\"path\\":\\"github.com/docker/libcontainer/cgroups\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"q56oWh80PeIBiE/8nQ/Emz18ZZ8=\\",\\"path\\":\\"github.com/docker/libcontainer/cgroups/fs\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"3NQtWwKOT4BlnSWn0tTsy/N+XhU=\\",\\"path\\":\\"github.com/docker/libcontainer/console\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"WPIuCuWS1RkrGCHBRZuOJku7ZBc=\\",\\"path\\":\\"github.com/docker/libcontainer/devices\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"HLo2E8AWKNCwE2p7ndEkKc4SPnM=\\",\\"path\\":\\"github.com/docker/libcontainer/label\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"KYcr4bHkervvLS5wuH9w1+EhflY=\\",\\"path\\":\\"github.com/docker/libcontainer/mount\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"tvHnvhbm17pLR/fA2WXWYlY9aDs=\\",\\"path\\":\\"github.com/docker/libcontainer/mount/nodes\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"k9+kwIouq8vqmodLrGFp+9I7Jxs=\\",\\"path\\":\\"github.com/docker/libcontainer/netlink\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"ndpCrSi/XKZNCCrkjpQ2cgMIxKA=\\",\\"path\\":\\"github.com/docker/libcontainer/network\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"cfgnX7wKfSHOJ4mbhKyjAWizl+s=\\",\\"path\\":\\"github.com/docker/libcontainer/selinux\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"M7/2WUk1uzgdqc5Ce/k9UcSyv1M=\\",\\"path\\":\\"github.com/docker/libcontainer/system\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"2ZMmNaPI3TM4WyMjCw+h1jErSr0=\\",\\"path\\":\\"github.com/docker/libcontainer/utils\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"rJab1YdNhQooDiBWNnt7TLWPyBU=\\",\\"path\\":\\"github.com/pkg/errors\\",\\"revision\\":\\"2b3a18b5f0fb6b4f9190549597d3f962c02bc5eb\\",\\"revisionTime\\":\\"2017-09-10T13:46:14Z\\"},{\\"checksumSHA1\\":\\"BYvROBsiyAXK4sq6yhDe8RgT4LM=\\",\\"path\\":\\"github.com/sirupsen/logrus\\",\\"revision\\":\\"89742aefa4b206dcf400792f3bd35b542998eb3b\\",\\"revisionTime\\":\\"2017-08-22T13:27:46Z\\"},{\\"checksumSHA1\\":\\"nqWNlnMmVpt628zzvyo6Yv2CX5Q=\\",\\"path\\":\\"golang.org/x/crypto/ssh/terminal\\",\\"revision\\":\\"847319b7fc94cab682988f93da778204da164588\\",\\"revisionTime\\":\\"2017-08-18T09:57:21Z\\"},{\\"checksumSHA1\\":\\"uggjqMBFNJd11oNco2kbkAT641w=\\",\\"path\\":\\"golang.org/x/sys/unix\\",\\"revision\\":\\"429f518978ab01db8bb6f44b66785088e7fba58b\\",\\"revisionTime\\":\\"2017-09-20T21:38:28Z\\"},{\\"checksumSHA1\\":\\"pBPFzDGt3AVSRffB7ffiUnruFUk=\\",\\"path\\":\\"golang.org/x/sys/windows\\",\\"revision\\":\\"429f518978ab01db8bb6f44b66785088e7fba58b\\",\\"revisionTime\\":\\"2017-09-20T21:38:28Z\\"},{\\"checksumSHA1\\":\\"o5NrWoSkC+ugoK9D6ragLSrXHw0=\\",\\"path\\":\\"gopkg.in/square/go-jose.v2\\",\\"revision\\":\\"296c7f1463ec9b712176dc804dea0173d06dc728\\",\\"revisionTime\\":\\"2016-11-17T00:42:38Z\\",\\"version\\":\\"v2.0\\",\\"versionExact\\":\\"v2.0.1\\"},{\\"checksumSHA1\\":\\"j94zYNLTvPSnfnqVKJ4LUf++uX4=\\",\\"path\\":\\"gopkg.in/square/go-jose.v2/cipher\\",\\"revision\\":\\"296c7f1463ec9b712176dc804dea0173d06dc728\\",\\"revisionTime\\":\\"2016-11-17T00:42:38Z\\",\\"version\\":\\"v2.0\\",\\"versionExact\\":\\"v2.0.1\\"},{\\"checksumSHA1\\":\\"JFun0lWY9eqd80Js2iWsehu1gc4=\\",\\"path\\":\\"gopkg.in/square/go-jose.v2/json\\",\\"revision\\":\\"296c7f1463ec9b712176dc804dea0173d06dc728\\",\\"revisionTime\\":\\"2016-11-17T00:42:38Z\\",\\"version\\":\\"v2.0\\",\\"versionExact\\":\\"v2.0.1\\"}],\\"rootPath\\":\\"with-vuln\\"}',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestGradleRoute = createRoute({
  method: 'post',
  path: '/test/gradle',
  tags: ['Test'],
  summary: 'Test gradle file',
  description:
    'You can test your Gradle packages for issues according to their manifest file using this action. It takes a JSON object containing the "target" `build.gradle`.',
  operationId: 'Test gradle file',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({
                          description:
                            'The contents of the file, encoded according to the `encoding` field.',
                        }),
                    })
                    .openapi({
                      description: 'the manifest file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: { target: { contents: "dependencies { compile 'axis:axis:1.4' }" } },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTestGradleGroupNameVersionRoute = createRoute({
  method: 'get',
  path: '/test/gradle/{group}/{name}/{version}',
  tags: ['Test'],
  summary: 'Test for issues in a public package by group, name and version',
  description:
    'You can test `gradle` packages for issues according to their group, name and version. This is done via the maven endpoint (for Java), since the packages are hosted on maven central or a compatible repository. See "Maven" above for details.',
  operationId: 'Test for issues in a public package by group, name and version',
  request: {
    params: z.object({
      group: z
        .string()
        .openapi({
          param: {
            description: "The package's group ID.",
            example: 'org.apache.flex.blazeds',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: "The package's artifact ID.",
            example: 'blazeds',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The package version to test.',
            example: '4.7.2',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
      repository: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The repository hosting this package. The default value is Maven Central. More than one value is supported, in order.',
            example: 'https://repo1.maven.org/maven2',
            in: 'query',
            name: 'repository',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestMavenRoute = createRoute({
  method: 'post',
  path: '/test/maven',
  tags: ['Test'],
  summary: 'Test maven file',
  description:
    'You can test your Maven packages for issues according to their manifest file using this action. It takes a JSON object containing a the "target" `pom.xml`.\n\nAdditional manifest files, if they are needed, like parent `pom.xml` files, child poms, etc., according the the definitions in the target `pom.xml` file, should be supplied in the `additional` body parameter.',
  operationId: 'Test maven file',
  request: {
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
      repository: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order.',
            example: 'https://repo1.maven.org/maven2',
            in: 'query',
            name: 'repository',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  additional: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        'additional manifest files (if needed), encoded according the the "encoding" field.',
                    }),
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({
                          description:
                            'The contents of the file, encoded according to the `encoding` field.',
                        }),
                    })
                    .openapi({
                      description:
                        'the main/root manifest file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  additional: [
                    {
                      contents:
                        '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"> <modelVersion>4.0.0</modelVersion> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> <dependencies> <dependency> <groupId>org.apache.zookeeper</groupId> <artifactId>zookeeper</artifactId> <version>3.5</version> </dependency> <dependency> <groupId>org.aspectj</groupId> <artifactId>aspectjweaver</artifactId> <version>1.8.2</version> </dependency> </dependencies> </project>\\n',
                    },
                  ],
                  target: {
                    contents:
                      '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"> <modelVersion>4.0.0</modelVersion> <parent> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> </parent> <artifactId>my-project</artifactId> <dependencies> <dependency> <groupId>axis</groupId> <artifactId>axis</artifactId> <version>1.4</version> </dependency> </dependencies> </project>\\n',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTestMavenGroupIdArtifactIdVersionRoute = createRoute({
  method: 'get',
  path: '/test/maven/{groupId}/{artifactId}/{version}',
  tags: ['Test'],
  summary: 'Test for issues in a public package by group id, artifact id and version',
  description:
    'You can test `maven` packages for issues according to their [coordinates](https://maven.apache.org/pom.html#Maven_Coordinates): group ID, artifact ID and version. The repository hosting the package may also be customized (see the `repository` query parameter).',
  operationId: 'Test for issues in a public package by group id, artifact id and version',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: "The package's group ID.",
            example: 'org.apache.flex.blazeds',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      artifactId: z
        .string()
        .openapi({
          param: {
            description: "The package's artifact ID.",
            example: 'blazeds',
            in: 'path',
            name: 'artifactId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The package version to test.',
            example: '4.7.2',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
      repository: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order.',
            example: 'https://repo1.maven.org/maven2',
            in: 'query',
            name: 'repository',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestNpmRoute = createRoute({
  method: 'post',
  path: '/test/npm',
  tags: ['Test'],
  summary: 'Test package.json & package-lock.json File',
  description:
    'You can test your npm packages for issues according to their manifest file & optional lockfile using this action. It takes a JSON object containing a "target" `package.json` and optionally a `package-lock.json`.',
  operationId: 'Test package.json & package-lock.json File',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  additional: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        'a lockfile can be sent (if needed), encoded according the the "encoding" field.',
                    }),
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({ description: 'the contents of `package.json` as a string.' }),
                    })
                    .openapi({
                      description:
                        'the `package.json` file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  additional: [
                    {
                      contents:
                        'eyAibmFtZSI6ICJzaGFsbG93LWdvb2YiLCAidmVyc2lvbiI6ICIwLjAuMSIsICJsb2NrZmlsZVZlcnNpb24iOiAxLCAicmVxdWlyZXMiOiB0cnVlLCAiZGVwZW5kZW5jaWVzIjogeyAibm9kZS11dWlkIjogeyAidmVyc2lvbiI6ICIxLjQuMCIsICJyZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9ub2RlLXV1aWQvLS9ub2RlLXV1aWQtMS40LjAudGd6IiwgImludGVncml0eSI6ICJzaGExLUIvbXlNM1Z5LzJKMXgzWGgxSVVUODZSZGVtVT0iIH0sICJxcyI6IHsgInZlcnNpb24iOiAiMC4wLjYiLCAicmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvcXMvLS9xcy0wLjAuNi50Z3oiLCAiaW50ZWdyaXR5IjogInNoYTEtU0JaWnQrVy9hbDZvbUFFTjVhN1RYclJwNFNRPSIgfSB9IH0K',
                    },
                  ],
                  target: {
                    contents:
                      'eyAibmFtZSI6ICJzaGFsbG93LWdvb2YiLCAidmVyc2lvbiI6ICIwLjAuMSIsICJkZXNjcmlwdGlvbiI6ICJBIHZ1bG5lcmFibGUgZGVtbyBhcHBsaWNhdGlvbiIsICJob21lcGFnZSI6ICJodHRwczovL3NueWsuaW8vIiwgInJlcG9zaXRvcnkiOiB7ICJ0eXBlIjogImdpdCIsICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL1NueWsvc2hhbGxvdy1nb29mIiB9LCAiZGVwZW5kZW5jaWVzIjogeyAibm9kZS11dWlkIjogIjEuNC4wIiwgInFzIjogIjAuMC42IiB9IH0K',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTestNpmPackageNameVersionRoute = createRoute({
  method: 'get',
  path: '/test/npm/{packageName}/{version}',
  tags: ['Test'],
  summary: 'Test for issues in a public package by name and version',
  description: 'You can test `npm` packages for issues according to their name and version.',
  operationId: 'Test for issues in a public package by name and version',
  request: {
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description:
              'The package name. For scoped packages, **must** be url-encoded, so to test "@angular/core" version 4.3.2, one should `GET /test/npm/%40angular%2Fcore/4.3.2`.',
            example: 'ms',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The Package version to test.',
            example: '0.7.0',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestPipRoute = createRoute({
  method: 'post',
  path: '/test/pip',
  tags: ['Test'],
  summary: 'Test requirements.txt file',
  description:
    'You can test your pip packages for issues according to their manifest file using this action. It takes a JSON object containing a the "target" `requirements.txt`.',
  operationId: 'Test requirements.txt file',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({
                          description:
                            'the contents of `requirements.txt` as a string, encoded according to `encoding` above.',
                        }),
                    })
                    .openapi({
                      description:
                        'the `requirements.txt` file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: { target: { contents: 'supervisor==3.1\\noauth2==1.5.211' } },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTestPipPackageNameVersionRoute = createRoute({
  method: 'get',
  path: '/test/pip/{packageName}/{version}',
  tags: ['Test'],
  summary: 'Test for issues in a public package by name and version',
  description: 'You can test `pip` packages for issues according to their name and version.',
  request: {
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'The package name.',
            example: 'rsa',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The Package version to test.',
            example: '3.3',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestRubygemsRoute = createRoute({
  method: 'post',
  path: '/test/rubygems',
  tags: ['Test'],
  summary: 'Test gemfile.lock file',
  description:
    'You can test your rubygems applications for issues according to their lockfile using this action. It takes a JSON object containing a the "target" `Gemfile.lock`.',
  operationId: 'Test gemfile.lock file',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({ description: 'the contents of `Gemfile.lock` as a string.' }),
                    })
                    .openapi({
                      description:
                        'the `Gemfile.lock` file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  target: {
                    contents:
                      'GEM\\n remote: http://rubygems.org/\\n specs:\\n actionpack (4.2.5)\\n actionview (= 4.2.5)\\n activesupport (= 4.2.5)\\n rack (~> 1.6)\\n rack-test (~> 0.6.2)\\n rails-dom-testing (~> 1.0, >= 1.0.5)\\n rails-html-sanitizer (~> 1.0, >= 1.0.2)\\n actionview (4.2.5)\\n activesupport (= 4.2.5)\\n builder (~> 3.1)\\n erubis (~> 2.7.0)\\n rails-dom-testing (~> 1.0, >= 1.0.5)\\n rails-html-sanitizer (~> 1.0, >= 1.0.2)\\n activesupport (4.2.5)\\n i18n (~> 0.7)\\n json (~> 1.7, >= 1.7.7)\\n minitest (~> 5.1)\\n thread_safe (~> 0.3, >= 0.3.4)\\n tzinfo (~> 1.1)\\n builder (3.2.2)\\n erubis (2.7.0)\\n haml (3.1.4)\\n httparty (0.8.1)\\n multi_json\\n multi_xml\\n i18n (0.7.0)\\n json (1.8.3)\\n loofah (2.0.3)\\n nokogiri (>= 1.5.9)\\n mini_portile2 (2.1.0)\\n minitest (5.9.1)\\n multi_json (1.12.1)\\n multi_xml (0.5.5)\\n nokogiri (1.6.8.1)\\n mini_portile2 (~> 2.1.0)\\n rack (1.6.4)\\n rack-protection (1.5.3)\\n rack\\n rack-test (0.6.3)\\n rack (>= 1.0)\\n rails-deprecated_sanitizer (1.0.3)\\n activesupport (>= 4.2.0.alpha)\\n rails-dom-testing (1.0.7)\\n activesupport (>= 4.2.0.beta, < 5.0)\\n nokogiri (~> 1.6.0)\\n rails-deprecated_sanitizer (>= 1.0.1)\\n rails-html-sanitizer (1.0.3)\\n loofah (~> 2.0)\\n sinatra (1.3.2)\\n rack (~> 1.3, >= 1.3.6)\\n rack-protection (~> 1.2)\\n tilt (~> 1.3, >= 1.3.3)\\n thread_safe (0.3.5)\\n tilt (1.4.1)\\n tzinfo (1.2.2)\\n thread_safe (~> 0.1)\\n \\n PLATFORMS\\n ruby\\n \\n DEPENDENCIES\\n actionpack\\n haml\\n httparty\\n sinatra\\n \\n BUNDLED WITH\\n 1.13.2',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTestRubygemsGemNameVersionRoute = createRoute({
  method: 'get',
  path: '/test/rubygems/{gemName}/{version}',
  tags: ['Test'],
  summary: 'Test for issues in a public gem by name and version',
  description: 'You can test `rubygems` packages for issues according to their name and version.',
  operationId: 'Test for issues in a public gem by name and version',
  request: {
    params: z.object({
      gemName: z
        .string()
        .openapi({
          param: {
            description: 'The gem name.',
            example: 'rails-html-sanitizer',
            in: 'path',
            name: 'gemName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The gem version to test.',
            example: '1.0.3',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestSbtRoute = createRoute({
  method: 'post',
  path: '/test/sbt',
  tags: ['Test'],
  summary: 'Test sbt file',
  description:
    'You can test your `sbt` packages for issues according to their manifest file using this action. It takes a JSON object containing a the "target" `build.sbt`.',
  operationId: 'Test sbt file',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('base64')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({
                          description:
                            'The contents of the file, encoded according to the `encoding` field.',
                        }),
                    })
                    .openapi({
                      description: 'the manifest file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'base64',
                files: {
                  target: {
                    contents:
                      '\\nname := \\"subsearch\\"\\n\\nassemblyJarName in assembly := s\\"subsearch-0.2.0.jar\\"\\n\\nscalaVersion := \\"2.11.8\\"\\n\\nscalacOptions ++= Seq(\\"-unchecked\\", \\"-deprecation\\")\\n\\nresolvers += Resolver.sonatypeRepo(\\"public\\")\\n\\nlibraryDependencies += \\"org.scalatest\\" % \\"scalatest_2.11\\" % \\"2.2.1\\" % \\"test\\"\\nlibraryDependencies += \\"org.scalamock\\" %% \\"scalamock-scalatest-support\\" % \\"3.2.2\\" % \\"test\\"\\nlibraryDependencies += \\"net.databinder.dispatch\\" %% \\"dispatch-core\\" % \\"0.11.2\\"\\nlibraryDependencies += \\"org.slf4j\\" % \\"slf4j-simple\\" % \\"1.6.6\\"\\nlibraryDependencies += \\"com.github.scopt\\" %% \\"scopt\\" % \\"3.4.0\\"\\nlibraryDependencies += \\"pl.project13.scala\\" %% \\"rainbow\\" % \\"0.2\\"\\nlibraryDependencies += \\"dnsjava\\" % \\"dnsjava\\" % \\"2.1.7\\"\\nlibraryDependencies += \\"com.typesafe.akka\\" %% \\"akka-actor\\" % \\"2.4.1\\"\\nlibraryDependencies += \\"org.scala-lang.modules\\" % \\"scala-jline\\" % \\"2.12.1\\"\\nlibraryDependencies += \\"net.ruippeixotog\\" %% \\"scala-scraper\\" % \\"1.0.0\\"',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTestSbtGroupIdArtifactIdVersionRoute = createRoute({
  method: 'get',
  path: '/test/sbt/{groupId}/{artifactId}/{version}',
  tags: ['Test'],
  summary: 'Test for issues in a public package by group id, artifact id and version',
  description:
    'You can test `sbt` packages for issues according to their group ID, artifact ID and version. This is done via the maven endpoint (for Java), since the packages are hosted on maven central or a compatible repository. See "Maven" above for details.',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: "The package's group ID.",
            example: 'org.apache.flex.blazeds',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      artifactId: z
        .string()
        .openapi({
          param: {
            description: "The package's artifact ID.",
            example: 'blazeds',
            in: 'path',
            name: 'artifactId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The package version to test.',
            example: '4.7.2',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The organization to test the package with. See "The Snyk organization for a request" above.',
            example: '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7',
            in: 'query',
            name: 'org',
            required: false,
            schema: { type: 'string' },
          },
        }),
      repository: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The repository hosting this package. The default value is Maven Central. More than one value is supported, in order.',
            example: 'https://repo1.maven.org/maven2',
            in: 'query',
            name: 'repository',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postTestYarnRoute = createRoute({
  method: 'post',
  path: '/test/yarn',
  tags: ['Test'],
  summary: 'Test package.json & yarn.lock File',
  description:
    'You can test your yarn packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a "target" `package.json` and a `yarn.lock`.',
  operationId: 'Test package.json & yarn.lock File',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encoding: z
                .enum(['plain', 'base64'])
                .default('plain')
                .exactOptional()
                .openapi({ description: 'the encoding for the manifest files sent.' }),
              files: z
                .object({
                  additional: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        'a lockfile can be sent (if needed), encoded according the the "encoding" field.',
                    }),
                  target: z
                    .object({
                      contents: z
                        .string()
                        .openapi({ description: 'the contents of `package.json` as a string.' }),
                    })
                    .openapi({
                      description:
                        'the `package.json` file, encoded according the the "encoding" field.',
                      required: ['contents'],
                    }),
                })
                .openapi({ description: 'The manifest files:', required: ['target'] }),
            })
            .openapi({
              example: {
                encoding: 'plain',
                files: {
                  additional: [
                    {
                      contents:
                        '# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\\r\\n# yarn lockfile v1\\r\\n\\r\\n\\r\\nnode-uuid@1.4.0:\\r\\n  version \\"1.4.0\\"\\r\\n  resolved \\"https:\\/\\/registry.yarnpkg.com\\/node-uuid\\/-\\/node-uuid-1.4.0.tgz#07f9b2337572ff6275c775e1d48513f3a45d7a65\\"\\r\\n  integrity sha1-B\\/myM3Vy\\/2J1x3Xh1IUT86RdemU=\\r\\n\\r\\nqs@0.0.6:\\r\\n  version \\"0.0.6\\"\\r\\n  resolved \\"https:\\/\\/registry.yarnpkg.com\\/qs\\/-\\/qs-0.0.6.tgz#481659b7e5bf6a5ea898010de5aed35eb469e124\\"\\r\\n  integrity sha1-SBZZt+W\\/al6omAEN5a7TXrRp4SQ=\\r\\n',
                    },
                  ],
                  target: {
                    contents:
                      '{ "name": "shallow-goof", "version": "0.0.1", "description": "A vulnerable demo application", "homepage": "https://snyk.io/", "repository": { "type": "git", "url": "https://github.com/Snyk/shallow-goof" }, "dependencies": { "node-uuid": "1.4.0", "qs": "0.0.6" } }',
                  },
                },
              },
              required: ['files'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getUserMeRoute = createRoute({
  method: 'get',
  path: '/user/me',
  tags: ['Users'],
  summary: 'Get My Details',
  operationId: 'Get My Details',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
              id: z.string().exactOptional().openapi({ description: 'The id of the user.' }),
              orgs: z
                .any()
                .exactOptional()
                .openapi({ description: 'The organizations that the user belongs to.' }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'The username of the user.' }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { email: '', id: '', orgs: [], username: '' } } },
        },
      },
      headers: z.object({}),
    },
    401: { description: '`API_KEY` is invalid.', content: {}, headers: z.object({}) },
  },
})

export const getUserMeNotificationSettingsOrgOrgIdRoute = createRoute({
  method: 'get',
  path: '/user/me/notification-settings/org/{orgId}',
  tags: ['Users'],
  summary: 'Get organization notification settings',
  operationId: 'Get organization notification settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              'new-issues-remediations': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                  issueSeverity: z
                    .enum(['all', 'high'])
                    .openapi({
                      description:
                        'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                  issueType: z
                    .enum(['all', 'vuln', 'license', 'none'])
                    .openapi({
                      description:
                        'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
              'project-imported': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'test-limit': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'weekly-report': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                'new-issues-remediations': {
                  enabled: true,
                  inherited: false,
                  issueSeverity: 'high',
                  issueType: 'vuln',
                },
                'project-imported': { enabled: true, inherited: false },
                'test-limit': { enabled: true, inherited: false },
                'weekly-report': { enabled: true, inherited: false },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putUserMeNotificationSettingsOrgOrgIdRoute = createRoute({
  method: 'put',
  path: '/user/me/notification-settings/org/{orgId}',
  tags: ['Users'],
  summary: 'Modify organization notification settings',
  operationId: 'Modify organization notification settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ModifyOrganizationNotificationSettingsBodyRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              'new-issues-remediations': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                  issueSeverity: z
                    .enum(['all', 'high'])
                    .openapi({
                      description:
                        'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                  issueType: z
                    .enum(['all', 'vuln', 'license', 'none'])
                    .openapi({
                      description:
                        'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
              'project-imported': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'test-limit': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'weekly-report': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                'new-issues-remediations': {
                  enabled: true,
                  inherited: false,
                  issueSeverity: 'high',
                  issueType: 'vuln',
                },
                'project-imported': { enabled: true, inherited: false },
                'test-limit': { enabled: true, inherited: false },
                'weekly-report': { enabled: true, inherited: false },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute = createRoute({
  method: 'get',
  path: '/user/me/notification-settings/org/{orgId}/project/{projectId}',
  tags: ['Users'],
  summary: 'Get project notification settings',
  operationId: 'Get project notification settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description:
              'The organization ID. The `API_KEY` must have access to this organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to return notification settings for.',
            example: '6d5813be-7e6d-4ab8-80c2-1e3e2a454545',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              'new-issues-remediations': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                  issueSeverity: z
                    .enum(['all', 'high'])
                    .openapi({
                      description:
                        'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                  issueType: z
                    .enum(['all', 'vuln', 'license', 'none'])
                    .openapi({
                      description:
                        'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
              'project-imported': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'test-limit': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
              'weekly-report': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  inherited: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the setting was found on the requested context directly or inherited from a parent',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                'new-issues-remediations': {
                  enabled: true,
                  inherited: false,
                  issueSeverity: 'high',
                  issueType: 'vuln',
                },
                'project-imported': { enabled: true, inherited: false },
                'test-limit': { enabled: true, inherited: false },
                'weekly-report': { enabled: true, inherited: false },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute = createRoute({
  method: 'put',
  path: '/user/me/notification-settings/org/{orgId}/project/{projectId}',
  tags: ['Users'],
  summary: 'Modify project notification settings',
  operationId: 'Modify project notification settings',
  request: {
    params: z.object({
      orgId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'orgId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'new-issues-remediations': z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({ description: 'Whether notifications should be sent' }),
                  issueSeverity: z
                    .enum(['all', 'high'])
                    .openapi({
                      description:
                        'The severity levels of issues to send notifications for (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                  issueType: z
                    .enum(['all', 'vuln', 'license', 'none'])
                    .openapi({
                      description:
                        'Filter the types of issue to include in notifications (only applicable for `new-remediations-vulnerabilities` notificationType)',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['enabled', 'issueSeverity', 'issueType'] }),
            })
            .openapi({
              example: {
                'new-issues-remediations': {
                  enabled: true,
                  issueSeverity: 'high',
                  issueType: 'vuln',
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getUserUserIdRoute = createRoute({
  method: 'get',
  path: '/user/{userId}',
  tags: ['Users'],
  summary: 'Get User Details',
  operationId: 'Get User Details',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'The users ID. The `API_KEY` must have admin access to at least one group or organization where the requested user is a member and must have the `api` entitlement on their preferred organization.',
            example: '4a18d42f-0706-4ad0-b127-24078731fbed',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ description: 'The email of the user.' }),
              id: z.string().exactOptional().openapi({ description: 'The id of the user.' }),
              name: z.string().exactOptional().openapi({ description: 'The name of the user.' }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'The username of the user.' }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { email: '', id: '', name: '', username: '' } } },
        },
      },
      headers: z.object({}),
    },
    400: {
      description: 'The provided `id` is not in a valid format.',
      content: {},
      headers: z.object({}),
    },
    401: { description: '`API_KEY` is invalid.', content: {}, headers: z.object({}) },
    404: {
      description:
        'The requested user could not be found or caller does not have sufficient permissions.',
      content: {},
      headers: z.object({}),
    },
  },
})
