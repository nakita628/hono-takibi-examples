import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminActionsJobs(
  args: InferRequestType<typeof client.admin.actions.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.actions.jobs.$get(args, options))
}

export async function getAdminActionsRunners(
  args: InferRequestType<typeof client.admin.actions.runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.actions.runners.$get(args, options))
}

export async function postAdminActionsRunnersRegistrationToken(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.actions.runners['registration-token'].$post(undefined, options),
  )
}

export async function getAdminActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.admin.actions.runners)[':runner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.actions.runners[':runner_id'].$get(args, options))
}

export async function deleteAdminActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.admin.actions.runners)[':runner_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.actions.runners[':runner_id'].$delete(args, options))
}

export async function patchAdminActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.admin.actions.runners)[':runner_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.actions.runners[':runner_id'].$patch(args, options))
}

export async function getAdminActionsRuns(
  args: InferRequestType<typeof client.admin.actions.runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.actions.runs.$get(args, options))
}

export async function getAdminCron(
  args: InferRequestType<typeof client.admin.cron.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.cron.$get(args, options))
}

export async function postAdminCronTask(
  args: InferRequestType<(typeof client.admin.cron)[':task']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.cron[':task'].$post(args, options))
}

export async function getAdminEmails(
  args: InferRequestType<typeof client.admin.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.emails.$get(args, options))
}

export async function getAdminEmailsSearch(
  args: InferRequestType<typeof client.admin.emails.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.emails.search.$get(args, options))
}

export async function getAdminHooks(
  args: InferRequestType<typeof client.admin.hooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.hooks.$get(args, options))
}

export async function postAdminHooks(
  args: InferRequestType<typeof client.admin.hooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.hooks.$post(args, options))
}

export async function getAdminHooksId(
  args: InferRequestType<(typeof client.admin.hooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.hooks[':id'].$get(args, options))
}

export async function deleteAdminHooksId(
  args: InferRequestType<(typeof client.admin.hooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.hooks[':id'].$delete(args, options))
}

export async function patchAdminHooksId(
  args: InferRequestType<(typeof client.admin.hooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.hooks[':id'].$patch(args, options))
}

export async function getAdminOrgs(
  args: InferRequestType<typeof client.admin.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.orgs.$get(args, options))
}

export async function getAdminPackages(
  args: InferRequestType<typeof client.admin.packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.packages.$get(args, options))
}

export async function getAdminUsers(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$get(args, options))
}

export async function postAdminUsers(
  args: InferRequestType<typeof client.admin.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$post(args, options))
}

export async function deleteAdminUsersUsername(
  args: InferRequestType<(typeof client.admin.users)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].$delete(args, options))
}

export async function patchAdminUsersUsername(
  args: InferRequestType<(typeof client.admin.users)[':username']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].$patch(args, options))
}

export async function getAdminUsersUsernameBadges(
  args: InferRequestType<(typeof client.admin.users)[':username']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].badges.$get(args, options))
}

export async function postAdminUsersUsernameBadges(
  args: InferRequestType<(typeof client.admin.users)[':username']['badges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].badges.$post(args, options))
}

export async function deleteAdminUsersUsernameBadges(
  args: InferRequestType<(typeof client.admin.users)[':username']['badges']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].badges.$delete(args, options))
}

export async function postAdminUsersUsernameKeys(
  args: InferRequestType<(typeof client.admin.users)[':username']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].keys.$post(args, options))
}

export async function deleteAdminUsersUsernameKeysId(
  args: InferRequestType<(typeof client.admin.users)[':username']['keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].keys[':id'].$delete(args, options))
}

export async function postAdminUsersUsernameOrgs(
  args: InferRequestType<(typeof client.admin.users)[':username']['orgs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].orgs.$post(args, options))
}

export async function postAdminUsersUsernameRename(
  args: InferRequestType<(typeof client.admin.users)[':username']['rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].rename.$post(args, options))
}

export async function postAdminUsersUsernameRepos(
  args: InferRequestType<(typeof client.admin.users)[':username']['repos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users[':username'].repos.$post(args, options))
}

export async function getGitignoreTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.gitignore.templates.$get(undefined, options))
}

export async function getGitignoreTemplatesName(
  args: InferRequestType<(typeof client.gitignore.templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitignore.templates[':name'].$get(args, options))
}

export async function getLabelTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.label.templates.$get(undefined, options))
}

export async function getLabelTemplatesName(
  args: InferRequestType<(typeof client.label.templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.label.templates[':name'].$get(args, options))
}

export async function getLicenses(options?: ClientRequestOptions) {
  return await parseResponse(client.licenses.$get(undefined, options))
}

export async function getLicensesName(
  args: InferRequestType<(typeof client.licenses)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses[':name'].$get(args, options))
}

export async function postMarkdown(
  args: InferRequestType<typeof client.markdown.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.markdown.$post(args, options))
}

export async function postMarkdownRaw(
  args: InferRequestType<typeof client.markdown.raw.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.markdown.raw.$post(args, options))
}

export async function postMarkup(
  args: InferRequestType<typeof client.markup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.markup.$post(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function putNotifications(
  args: InferRequestType<typeof client.notifications.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$put(args, options))
}

export async function getNotificationsNew(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.new.$get(undefined, options))
}

export async function getNotificationsThreadsId(
  args: InferRequestType<(typeof client.notifications.threads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.threads[':id'].$get(args, options))
}

export async function patchNotificationsThreadsId(
  args: InferRequestType<(typeof client.notifications.threads)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.threads[':id'].$patch(args, options))
}

export async function postOrgOrgRepos(
  args: InferRequestType<(typeof client.org)[':org']['repos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org[':org'].repos.$post(args, options))
}

export async function getOrgs(
  args: InferRequestType<typeof client.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.$get(args, options))
}

export async function postOrgs(
  args: InferRequestType<typeof client.orgs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.$post(args, options))
}

export async function getOrgsOrg(
  args: InferRequestType<(typeof client.orgs)[':org']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].$get(args, options))
}

export async function deleteOrgsOrg(
  args: InferRequestType<(typeof client.orgs)[':org']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].$delete(args, options))
}

export async function patchOrgsOrg(
  args: InferRequestType<(typeof client.orgs)[':org']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].$patch(args, options))
}

export async function getOrgsOrgActionsJobs(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.jobs.$get(args, options))
}

export async function getOrgsOrgActionsRunners(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.runners.$get(args, options))
}

export async function postOrgsOrgActionsRunnersRegistrationToken(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners']['registration-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners['registration-token'].$post(args, options),
  )
}

export async function getOrgsOrgActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runners'][':runner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.runners[':runner_id'].$get(args, options))
}

export async function deleteOrgsOrgActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['runners'][':runner_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.runners[':runner_id'].$patch(args, options),
  )
}

export async function getOrgsOrgActionsRuns(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.runs.$get(args, options))
}

export async function getOrgsOrgActionsSecrets(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.secrets.$get(args, options))
}

export async function putOrgsOrgActionsSecretsSecretname(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['secrets'][':secretname']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.secrets[':secretname'].$put(args, options))
}

export async function deleteOrgsOrgActionsSecretsSecretname(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['secrets'][':secretname']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.secrets[':secretname'].$delete(args, options),
  )
}

export async function getOrgsOrgActionsVariables(
  args: InferRequestType<(typeof client.orgs)[':org']['actions']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].actions.variables.$get(args, options))
}

export async function getOrgsOrgActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':variablename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':variablename'].$get(args, options),
  )
}

export async function putOrgsOrgActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':variablename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':variablename'].$put(args, options),
  )
}

export async function postOrgsOrgActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':variablename']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':variablename'].$post(args, options),
  )
}

export async function deleteOrgsOrgActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.orgs)[':org']['actions']['variables'][':variablename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].actions.variables[':variablename'].$delete(args, options),
  )
}

export async function getOrgsOrgActivitiesFeeds(
  args: InferRequestType<(typeof client.orgs)[':org']['activities']['feeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].activities.feeds.$get(args, options))
}

export async function postOrgsOrgAvatar(
  args: InferRequestType<(typeof client.orgs)[':org']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].avatar.$post(args, options))
}

export async function deleteOrgsOrgAvatar(
  args: InferRequestType<(typeof client.orgs)[':org']['avatar']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].avatar.$delete(args, options))
}

export async function getOrgsOrgBlocks(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks.$get(args, options))
}

export async function getOrgsOrgBlocksUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks[':username'].$get(args, options))
}

export async function putOrgsOrgBlocksUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks[':username'].$put(args, options))
}

export async function deleteOrgsOrgBlocksUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['blocks'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].blocks[':username'].$delete(args, options))
}

export async function getOrgsOrgHooks(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks.$get(args, options))
}

export async function postOrgsOrgHooks(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks.$post(args, options))
}

export async function getOrgsOrgHooksId(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':id'].$get(args, options))
}

export async function deleteOrgsOrgHooksId(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':id'].$delete(args, options))
}

export async function patchOrgsOrgHooksId(
  args: InferRequestType<(typeof client.orgs)[':org']['hooks'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].hooks[':id'].$patch(args, options))
}

export async function getOrgsOrgLabels(
  args: InferRequestType<(typeof client.orgs)[':org']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].labels.$get(args, options))
}

export async function postOrgsOrgLabels(
  args: InferRequestType<(typeof client.orgs)[':org']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].labels.$post(args, options))
}

export async function getOrgsOrgLabelsId(
  args: InferRequestType<(typeof client.orgs)[':org']['labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].labels[':id'].$get(args, options))
}

export async function deleteOrgsOrgLabelsId(
  args: InferRequestType<(typeof client.orgs)[':org']['labels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].labels[':id'].$delete(args, options))
}

export async function patchOrgsOrgLabelsId(
  args: InferRequestType<(typeof client.orgs)[':org']['labels'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].labels[':id'].$patch(args, options))
}

export async function getOrgsOrgMembers(
  args: InferRequestType<(typeof client.orgs)[':org']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members.$get(args, options))
}

export async function getOrgsOrgMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['members'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members[':username'].$get(args, options))
}

export async function deleteOrgsOrgMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['members'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].members[':username'].$delete(args, options))
}

export async function getOrgsOrgProjects(
  args: InferRequestType<(typeof client.orgs)[':org']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects.$get(args, options))
}

export async function postOrgsOrgProjects(
  args: InferRequestType<(typeof client.orgs)[':org']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects.$post(args, options))
}

export async function getOrgsOrgProjectsId(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].$get(args, options))
}

export async function deleteOrgsOrgProjectsId(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].$delete(args, options))
}

export async function patchOrgsOrgProjectsId(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].$patch(args, options))
}

export async function getOrgsOrgProjectsIdColumns(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].columns.$get(args, options))
}

export async function postOrgsOrgProjectsIdColumns(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['columns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].columns.$post(args, options))
}

export async function postOrgsOrgProjectsIdColumnsMove(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].columns.move.$post(args, options))
}

export async function getOrgsOrgProjectsIdColumnsColumnId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].$get(args, options),
  )
}

export async function deleteOrgsOrgProjectsIdColumnsColumnId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgProjectsIdColumnsColumnId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].$patch(args, options),
  )
}

export async function postOrgsOrgProjectsIdColumnsColumnIdDefault(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].default.$post(args, options),
  )
}

export async function getOrgsOrgProjectsIdColumnsColumnIdIssues(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].issues.$get(args, options),
  )
}

export async function postOrgsOrgProjectsIdColumnsColumnIdIssuesIssueId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['issues'][':issue_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].issues[':issue_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteOrgsOrgProjectsIdColumnsColumnIdIssuesIssueId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['columns'][':column_id']['issues'][':issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].columns[':column_id'].issues[':issue_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postOrgsOrgProjectsIdIssuesIssueIdMove(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['issues'][':issue_id']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].issues[':issue_id'].move.$post(args, options),
  )
}

export async function getOrgsOrgProjectsIdWorkflows(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].workflows.$get(args, options))
}

export async function postOrgsOrgProjectsIdWorkflows(
  args: InferRequestType<(typeof client.orgs)[':org']['projects'][':id']['workflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].projects[':id'].workflows.$post(args, options))
}

export async function getOrgsOrgProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['workflows'][':workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].workflows[':workflow_id'].$get(args, options),
  )
}

export async function deleteOrgsOrgProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['workflows'][':workflow_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].workflows[':workflow_id'].$delete(args, options),
  )
}

export async function patchOrgsOrgProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.orgs)[':org']['projects'][':id']['workflows'][':workflow_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orgs[':org'].projects[':id'].workflows[':workflow_id'].$patch(args, options),
  )
}

export async function getOrgsOrgPublicMembers(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members.$get(args, options))
}

export async function getOrgsOrgPublicMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members[':username'].$get(args, options))
}

export async function putOrgsOrgPublicMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members[':username'].$put(args, options))
}

export async function deleteOrgsOrgPublicMembersUsername(
  args: InferRequestType<(typeof client.orgs)[':org']['public_members'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].public_members[':username'].$delete(args, options))
}

export async function postOrgsOrgRename(
  args: InferRequestType<(typeof client.orgs)[':org']['rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].rename.$post(args, options))
}

export async function getOrgsOrgRepos(
  args: InferRequestType<(typeof client.orgs)[':org']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].repos.$get(args, options))
}

export async function postOrgsOrgRepos(
  args: InferRequestType<(typeof client.orgs)[':org']['repos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].repos.$post(args, options))
}

export async function deleteOrgsOrgRepos(
  args: InferRequestType<(typeof client.orgs)[':org']['repos']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].repos.$delete(args, options))
}

export async function getOrgsOrgTeams(
  args: InferRequestType<(typeof client.orgs)[':org']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams.$get(args, options))
}

export async function postOrgsOrgTeams(
  args: InferRequestType<(typeof client.orgs)[':org']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams.$post(args, options))
}

export async function getOrgsOrgTeamsSearch(
  args: InferRequestType<(typeof client.orgs)[':org']['teams']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs[':org'].teams.search.$get(args, options))
}

export async function getPackagesOwner(
  args: InferRequestType<(typeof client.packages)[':owner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packages[':owner'].$get(args, options))
}

export async function getPackagesOwnerTypeName(
  args: InferRequestType<(typeof client.packages)[':owner'][':type'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packages[':owner'][':type'][':name'].$get(args, options))
}

export async function deletePackagesOwnerTypeName(
  args: InferRequestType<(typeof client.packages)[':owner'][':type'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.packages[':owner'][':type'][':name'].$delete(args, options))
}

export async function getPackagesOwnerTypeNameDashLatest(
  args: InferRequestType<
    (typeof client.packages)[':owner'][':type'][':name']['-']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.packages[':owner'][':type'][':name']['-'].latest.$get(args, options),
  )
}

export async function postPackagesOwnerTypeNameDashLinkRepoName(
  args: InferRequestType<
    (typeof client.packages)[':owner'][':type'][':name']['-']['link'][':repo_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.packages[':owner'][':type'][':name']['-'].link[':repo_name'].$post(args, options),
  )
}

export async function postPackagesOwnerTypeNameDashUnlink(
  args: InferRequestType<
    (typeof client.packages)[':owner'][':type'][':name']['-']['unlink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.packages[':owner'][':type'][':name']['-'].unlink.$post(args, options),
  )
}

export async function getPackagesOwnerTypeNameVersion(
  args: InferRequestType<(typeof client.packages)[':owner'][':type'][':name'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.packages[':owner'][':type'][':name'][':version'].$get(args, options),
  )
}

export async function deletePackagesOwnerTypeNameVersion(
  args: InferRequestType<
    (typeof client.packages)[':owner'][':type'][':name'][':version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.packages[':owner'][':type'][':name'][':version'].$delete(args, options),
  )
}

export async function getPackagesOwnerTypeNameVersionFiles(
  args: InferRequestType<
    (typeof client.packages)[':owner'][':type'][':name'][':version']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.packages[':owner'][':type'][':name'][':version'].files.$get(args, options),
  )
}

export async function getReposIssuesSearch(
  args: InferRequestType<typeof client.repos.issues.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos.issues.search.$get(args, options))
}

export async function postReposMigrate(
  args: InferRequestType<typeof client.repos.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos.migrate.$post(args, options))
}

export async function getReposSearch(
  args: InferRequestType<typeof client.repos.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos.search.$get(args, options))
}

export async function getReposOwnerRepo(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].$get(args, options))
}

export async function deleteReposOwnerRepo(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].$delete(args, options))
}

export async function patchReposOwnerRepo(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].$patch(args, options))
}

export async function getReposOwnerRepoActionsArtifacts(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.artifacts.$get(args, options))
}

export async function getReposOwnerRepoActionsArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['artifacts'][':artifact_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.artifacts[':artifact_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsArtifactsArtifactId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['artifacts'][':artifact_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.artifacts[':artifact_id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsArtifactsArtifactIdZip(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['artifacts'][':artifact_id']['zip']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.artifacts[':artifact_id'].zip.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsJobs(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.jobs.$get(args, options))
}

export async function getReposOwnerRepoActionsJobsJobId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['jobs'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.jobs[':job_id'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsJobsJobIdLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['jobs'][':job_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.jobs[':job_id'].logs.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsRunners(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['runners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.runners.$get(args, options))
}

export async function postReposOwnerRepoActionsRunnersRegistrationToken(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners']['registration-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners['registration-token'].$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoActionsRunnersRunnerId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runners'][':runner_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runners[':runner_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoActionsRuns(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.runs.$get(args, options))
}

export async function getReposOwnerRepoActionsRunsRun(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoActionsRunsRun(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].$delete(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunApprove(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].approve.$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunArtifacts(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].artifacts.$get(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunAttemptsAttempt(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['attempts'][':attempt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].attempts[':attempt'].$get(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunAttemptsAttemptJobs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['attempts'][':attempt']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].attempts[':attempt'].jobs.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoActionsRunsRunCancel(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].cancel.$post(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunForceCancel(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['force-cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run']['force-cancel'].$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunJobs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].jobs.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunJobsJobIdRerun(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['jobs'][':job_id']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].jobs[':job_id'].rerun.$post(args, options),
  )
}

export async function getReposOwnerRepoActionsRunsRunLogs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].logs.$get(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunRerun(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['rerun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run'].rerun.$post(args, options),
  )
}

export async function postReposOwnerRepoActionsRunsRunRerunFailedJobs(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['runs'][':run']['rerun-failed-jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.runs[':run']['rerun-failed-jobs'].$post(args, options),
  )
}

export async function getReposOwnerRepoActionsSecrets(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.secrets.$get(args, options))
}

export async function putReposOwnerRepoActionsSecretsSecretname(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['secrets'][':secretname']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.secrets[':secretname'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoActionsSecretsSecretname(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['secrets'][':secretname']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.secrets[':secretname'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsTasks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.tasks.$get(args, options))
}

export async function getReposOwnerRepoActionsVariables(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.variables.$get(args, options))
}

export async function getReposOwnerRepoActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':variablename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':variablename'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':variablename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':variablename'].$put(args, options),
  )
}

export async function postReposOwnerRepoActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':variablename']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':variablename'].$post(args, options),
  )
}

export async function deleteReposOwnerRepoActionsVariablesVariablename(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['variables'][':variablename']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.variables[':variablename'].$delete(args, options),
  )
}

export async function getReposOwnerRepoActionsWorkflows(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['actions']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].actions.workflows.$get(args, options))
}

export async function getReposOwnerRepoActionsWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].$get(args, options),
  )
}

export async function putReposOwnerRepoActionsWorkflowsWorkflowIdDisable(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['disable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].disable.$put(args, options),
  )
}

export async function postReposOwnerRepoActionsWorkflowsWorkflowIdDispatches(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['dispatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].dispatches.$post(
      args,
      options,
    ),
  )
}

export async function putReposOwnerRepoActionsWorkflowsWorkflowIdEnable(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['enable']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].enable.$put(args, options),
  )
}

export async function getReposOwnerRepoActionsWorkflowsWorkflowIdRuns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['actions']['workflows'][':workflow_id']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].actions.workflows[':workflow_id'].runs.$get(args, options),
  )
}

export async function getReposOwnerRepoActivitiesFeeds(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['activities']['feeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].activities.feeds.$get(args, options))
}

export async function getReposOwnerRepoArchiveArchive(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['archive'][':archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].archive[':archive'].$get(args, options),
  )
}

export async function getReposOwnerRepoAssignees(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['assignees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].assignees.$get(args, options))
}

export async function getReposOwnerRepoAssigneesAssignee(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['assignees'][':assignee']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].assignees[':assignee'].$get(args, options),
  )
}

export async function postReposOwnerRepoAvatar(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].avatar.$post(args, options))
}

export async function deleteReposOwnerRepoAvatar(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['avatar']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].avatar.$delete(args, options))
}

export async function getReposOwnerRepoBranchProtections(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branch_protections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].branch_protections.$get(args, options))
}

export async function postReposOwnerRepoBranchProtections(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branch_protections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branch_protections.$post(args, options),
  )
}

export async function postReposOwnerRepoBranchProtectionsPriority(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branch_protections']['priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branch_protections.priority.$post(args, options),
  )
}

export async function getReposOwnerRepoBranchProtectionsName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branch_protections'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branch_protections[':name'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoBranchProtectionsName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branch_protections'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branch_protections[':name'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoBranchProtectionsName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branch_protections'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branch_protections[':name'].$patch(args, options),
  )
}

export async function getReposOwnerRepoBranches(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].branches.$get(args, options))
}

export async function postReposOwnerRepoBranches(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].branches.$post(args, options))
}

export async function getReposOwnerRepoBranchesBranch(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches'][':branch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].$get(args, options),
  )
}

export async function putReposOwnerRepoBranchesBranch(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches'][':branch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoBranchesBranch(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['branches'][':branch']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoBranchesBranch(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['branches'][':branch']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].branches[':branch'].$patch(args, options),
  )
}

export async function getReposOwnerRepoCodeSearch(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['code']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].code.search.$get(args, options))
}

export async function getReposOwnerRepoCollaborators(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].collaborators.$get(args, options))
}

export async function getReposOwnerRepoCollaboratorsCollaborator(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':collaborator']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':collaborator'].$get(args, options),
  )
}

export async function putReposOwnerRepoCollaboratorsCollaborator(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':collaborator']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':collaborator'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoCollaboratorsCollaborator(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':collaborator']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':collaborator'].$delete(args, options),
  )
}

export async function getReposOwnerRepoCollaboratorsCollaboratorPermission(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['collaborators'][':collaborator']['permission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].collaborators[':collaborator'].permission.$get(args, options),
  )
}

export async function getReposOwnerRepoCommits(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['commits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].commits.$get(args, options))
}

export async function getReposOwnerRepoCommitsRefStatus(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':ref']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':ref'].status.$get(args, options),
  )
}

export async function getReposOwnerRepoCommitsRefStatuses(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':ref']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':ref'].statuses.$get(args, options),
  )
}

export async function getReposOwnerRepoCommitsShaPull(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['commits'][':sha']['pull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].commits[':sha'].pull.$get(args, options),
  )
}

export async function getReposOwnerRepoCompareBasehead(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['compare'][':basehead']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].compare[':basehead'].$get(args, options),
  )
}

export async function getReposOwnerRepoContents(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].contents.$get(args, options))
}

export async function postReposOwnerRepoContents(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].contents.$post(args, options))
}

export async function getReposOwnerRepoContentsExtFilepath(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['contents-ext'][':filepath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['contents-ext'][':filepath'].$get(args, options),
  )
}

export async function getReposOwnerRepoContentsFilepath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents'][':filepath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].contents[':filepath'].$get(args, options),
  )
}

export async function putReposOwnerRepoContentsFilepath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['contents'][':filepath']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].contents[':filepath'].$put(args, options),
  )
}

export async function postReposOwnerRepoContentsFilepath(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['contents'][':filepath']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].contents[':filepath'].$post(args, options),
  )
}

export async function deleteReposOwnerRepoContentsFilepath(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['contents'][':filepath']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].contents[':filepath'].$delete(args, options),
  )
}

export async function postReposOwnerRepoDiffpatch(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['diffpatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].diffpatch.$post(args, options))
}

export async function getReposOwnerRepoEditorconfigFilepath(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['editorconfig'][':filepath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].editorconfig[':filepath'].$get(args, options),
  )
}

export async function getReposOwnerRepoFileContents(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['file-contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['file-contents'].$get(args, options))
}

export async function postReposOwnerRepoFileContents(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['file-contents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['file-contents'].$post(args, options))
}

export async function getReposOwnerRepoForks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].forks.$get(args, options))
}

export async function postReposOwnerRepoForks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['forks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].forks.$post(args, options))
}

export async function getReposOwnerRepoGitBlobsSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['blobs'][':sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.blobs[':sha'].$get(args, options))
}

export async function getReposOwnerRepoGitCommitsSha(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['commits'][':sha']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.commits[':sha'].$get(args, options),
  )
}

export async function getReposOwnerRepoGitCommitsShaDiffType(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['git']['commits'][':sha.{diffType}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].git.commits[':sha.{diffType}'].$get(args, options),
  )
}

export async function getReposOwnerRepoGitNotesSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['notes'][':sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.notes[':sha'].$get(args, options))
}

export async function getReposOwnerRepoGitRefs(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.refs.$get(args, options))
}

export async function getReposOwnerRepoGitRefsRef(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['refs'][':ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.refs[':ref'].$get(args, options))
}

export async function getReposOwnerRepoGitTagsSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['tags'][':sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.tags[':sha'].$get(args, options))
}

export async function getReposOwnerRepoGitTreesSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['git']['trees'][':sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].git.trees[':sha'].$get(args, options))
}

export async function getReposOwnerRepoHooks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.$get(args, options))
}

export async function postReposOwnerRepoHooks(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.$post(args, options))
}

export async function getReposOwnerRepoHooksGit(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['git']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.git.$get(args, options))
}

export async function getReposOwnerRepoHooksGitId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['git'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.git[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoHooksGitId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks']['git'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks.git[':id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoHooksGitId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks']['git'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks.git[':id'].$patch(args, options))
}

export async function getReposOwnerRepoHooksId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoHooksId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks[':id'].$delete(args, options))
}

export async function patchReposOwnerRepoHooksId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['hooks'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].hooks[':id'].$patch(args, options))
}

export async function getReposOwnerRepoHooksIdDeliveries(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':id']['deliveries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':id'].deliveries.$get(args, options),
  )
}

export async function getReposOwnerRepoHooksIdDeliveriesUuid(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':id']['deliveries'][':uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':id'].deliveries[':uuid'].$get(args, options),
  )
}

export async function postReposOwnerRepoHooksIdTests(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['hooks'][':id']['tests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].hooks[':id'].tests.$post(args, options),
  )
}

export async function getReposOwnerRepoIssueConfig(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issue_config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issue_config.$get(args, options))
}

export async function getReposOwnerRepoIssueConfigValidate(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issue_config']['validate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issue_config.validate.$get(args, options),
  )
}

export async function getReposOwnerRepoIssueTemplates(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issue_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issue_templates.$get(args, options))
}

export async function getReposOwnerRepoIssues(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.$get(args, options))
}

export async function postReposOwnerRepoIssues(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.$post(args, options))
}

export async function getReposOwnerRepoIssuesComments(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.comments.$get(args, options))
}

export async function getReposOwnerRepoIssuesCommentsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesCommentsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoIssuesCommentsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoIssuesCommentsIdAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].assets.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesCommentsIdAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].assets.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesCommentsIdAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['assets'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].assets[':attachment_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoIssuesCommentsIdAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['assets'][':attachment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].assets[':attachment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoIssuesCommentsIdAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['assets'][':attachment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].assets[':attachment_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoIssuesCommentsIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesCommentsIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesCommentsIdReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues']['comments'][':id']['reactions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues.comments[':id'].reactions.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesPinned(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues']['pinned']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues.pinned.$get(args, options))
}

export async function getReposOwnerRepoIssuesIndex(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues[':index'].$get(args, options))
}

export async function deleteReposOwnerRepoIssuesIndex(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues'][':index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoIssuesIndex(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['issues'][':index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].issues[':index'].$patch(args, options))
}

export async function getReposOwnerRepoIssuesIndexAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assets.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assets.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assets'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assets[':attachment_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assets'][':attachment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assets[':attachment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoIssuesIndexAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assets'][':attachment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assets[':attachment_id'].$patch(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexAssignees(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assignees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assignees.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexAssignees(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assignees']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assignees.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexAssigneesAssignee(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['assignees'][':assignee']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].assignees[':assignee'].$get(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexBlocks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['blocks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].blocks.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexBlocks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['blocks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].blocks.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexBlocks(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['blocks']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].blocks.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].comments.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].comments.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexCommentsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['comments'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].comments[':id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoIssuesIndexCommentsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['comments'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].comments[':id'].$patch(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexDeadline(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['deadline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].deadline.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexDependencies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].dependencies.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexDependencies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['dependencies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].dependencies.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexDependencies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['dependencies']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].dependencies.$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].labels.$get(args, options),
  )
}

export async function putReposOwnerRepoIssuesIndexLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].labels.$put(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].labels.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexLabels(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['labels']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].labels.$delete(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexLabelsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['labels'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].labels[':id'].$delete(args, options),
  )
}

export async function putReposOwnerRepoIssuesIndexLock(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['lock']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].lock.$put(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexLock(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].lock.$delete(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexPin(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['pin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].pin.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexPin(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['pin']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].pin.$delete(args, options),
  )
}

export async function patchReposOwnerRepoIssuesIndexPinPosition(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['pin'][':position']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].pin[':position'].$patch(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].reactions.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['reactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].reactions.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexReactions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['reactions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].reactions.$delete(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexStopwatchDelete(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['stopwatch']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].stopwatch.delete.$delete(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexStopwatchStart(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['stopwatch']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].stopwatch.start.$post(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexStopwatchStop(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['stopwatch']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].stopwatch.stop.$post(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexSubscriptions(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].subscriptions.$get(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexSubscriptionsCheck(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['subscriptions']['check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].subscriptions.check.$get(args, options),
  )
}

export async function putReposOwnerRepoIssuesIndexSubscriptionsUser(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['subscriptions'][':user']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].subscriptions[':user'].$put(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexSubscriptionsUser(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['subscriptions'][':user']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].subscriptions[':user'].$delete(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexTimeline(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['timeline']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].timeline.$get(args, options),
  )
}

export async function getReposOwnerRepoIssuesIndexTimes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['times']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].times.$get(args, options),
  )
}

export async function postReposOwnerRepoIssuesIndexTimes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['times']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].times.$post(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexTimes(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['times']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].times.$delete(args, options),
  )
}

export async function deleteReposOwnerRepoIssuesIndexTimesId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['issues'][':index']['times'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].issues[':index'].times[':id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoKeys(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys.$get(args, options))
}

export async function postReposOwnerRepoKeys(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys.$post(args, options))
}

export async function postReposOwnerRepoKeysTokens(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys.tokens.$post(args, options))
}

export async function getReposOwnerRepoKeysId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoKeysId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].keys[':id'].$delete(args, options))
}

export async function getReposOwnerRepoLabels(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels.$get(args, options))
}

export async function postReposOwnerRepoLabels(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels.$post(args, options))
}

export async function getReposOwnerRepoLabelsId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoLabelsId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels[':id'].$delete(args, options))
}

export async function patchReposOwnerRepoLabelsId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['labels'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].labels[':id'].$patch(args, options))
}

export async function getReposOwnerRepoLanguages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['languages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].languages.$get(args, options))
}

export async function getReposOwnerRepoLicenses(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].licenses.$get(args, options))
}

export async function getReposOwnerRepoMediaFilepath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['media'][':filepath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].media[':filepath'].$get(args, options))
}

export async function postReposOwnerRepoMergeUpstream(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['merge-upstream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['merge-upstream'].$post(args, options))
}

export async function getReposOwnerRepoMilestones(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].milestones.$get(args, options))
}

export async function postReposOwnerRepoMilestones(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].milestones.$post(args, options))
}

export async function getReposOwnerRepoMilestonesId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].milestones[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoMilestonesId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].milestones[':id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoMilestonesId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['milestones'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].milestones[':id'].$patch(args, options),
  )
}

export async function postReposOwnerRepoMirrorSync(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['mirror-sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['mirror-sync'].$post(args, options))
}

export async function getReposOwnerRepoNewPinAllowed(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['new_pin_allowed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].new_pin_allowed.$get(args, options))
}

export async function getReposOwnerRepoNotifications(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].notifications.$get(args, options))
}

export async function putReposOwnerRepoNotifications(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['notifications']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].notifications.$put(args, options))
}

export async function getReposOwnerRepoProjects(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].projects.$get(args, options))
}

export async function postReposOwnerRepoProjects(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].projects.$post(args, options))
}

export async function getReposOwnerRepoProjectsId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['projects'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].projects[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoProjectsId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['projects'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].projects[':id'].$delete(args, options))
}

export async function patchReposOwnerRepoProjectsId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['projects'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].projects[':id'].$patch(args, options))
}

export async function getReposOwnerRepoProjectsIdColumns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns.$get(args, options),
  )
}

export async function postReposOwnerRepoProjectsIdColumns(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns.$post(args, options),
  )
}

export async function postReposOwnerRepoProjectsIdColumnsMove(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns.move.$post(args, options),
  )
}

export async function getReposOwnerRepoProjectsIdColumnsColumnId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoProjectsIdColumnsColumnId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoProjectsIdColumnsColumnId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].$patch(args, options),
  )
}

export async function postReposOwnerRepoProjectsIdColumnsColumnIdDefault(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].default.$post(
      args,
      options,
    ),
  )
}

export async function getReposOwnerRepoProjectsIdColumnsColumnIdIssues(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].issues.$get(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['issues'][':issue_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].issues[':issue_id'].$post(
      args,
      options,
    ),
  )
}

export async function deleteReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['columns'][':column_id']['issues'][':issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].columns[':column_id'].issues[
      ':issue_id'
    ].$delete(args, options),
  )
}

export async function postReposOwnerRepoProjectsIdIssuesIssueIdMove(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['issues'][':issue_id']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].issues[':issue_id'].move.$post(args, options),
  )
}

export async function getReposOwnerRepoProjectsIdWorkflows(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['workflows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].workflows.$get(args, options),
  )
}

export async function postReposOwnerRepoProjectsIdWorkflows(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['workflows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].workflows.$post(args, options),
  )
}

export async function getReposOwnerRepoProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['workflows'][':workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].workflows[':workflow_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['workflows'][':workflow_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].workflows[':workflow_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchReposOwnerRepoProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['projects'][':id']['workflows'][':workflow_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].projects[':id'].workflows[':workflow_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoPulls(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls.$get(args, options))
}

export async function postReposOwnerRepoPulls(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls.$post(args, options))
}

export async function postReposOwnerRepoPullsCommentsIdResolve(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':id']['resolve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':id'].resolve.$post(args, options),
  )
}

export async function postReposOwnerRepoPullsCommentsIdUnresolve(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls']['comments'][':id']['unresolve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls.comments[':id'].unresolve.$post(args, options),
  )
}

export async function getReposOwnerRepoPullsPinned(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls']['pinned']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls.pinned.$get(args, options))
}

export async function getReposOwnerRepoPullsBaseHead(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':base'][':head']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':base'][':head'].$get(args, options),
  )
}

export async function getReposOwnerRepoPullsIndex(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls[':index'].$get(args, options))
}

export async function patchReposOwnerRepoPullsIndex(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['pulls'][':index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].pulls[':index'].$patch(args, options))
}

export async function getReposOwnerRepoPullsIndexDiffType(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index.{diffType}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index.{diffType}'].$get(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexCommentsIdReplies(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['comments'][':id']['replies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].comments[':id'].replies.$post(args, options),
  )
}

export async function getReposOwnerRepoPullsIndexCommits(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].commits.$get(args, options),
  )
}

export async function getReposOwnerRepoPullsIndexFiles(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].files.$get(args, options),
  )
}

export async function getReposOwnerRepoPullsIndexMerge(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['merge']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].merge.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexMerge(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].merge.$post(args, options),
  )
}

export async function deleteReposOwnerRepoPullsIndexMerge(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['merge']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].merge.$delete(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexRequestedReviewers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['requested_reviewers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].requested_reviewers.$post(args, options),
  )
}

export async function deleteReposOwnerRepoPullsIndexRequestedReviewers(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['requested_reviewers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].requested_reviewers.$delete(args, options),
  )
}

export async function getReposOwnerRepoPullsIndexReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexReviews(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews.$post(args, options),
  )
}

export async function getReposOwnerRepoPullsIndexReviewsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews[':id'].$get(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexReviewsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews[':id'].$post(args, options),
  )
}

export async function deleteReposOwnerRepoPullsIndexReviewsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews[':id'].$delete(args, options),
  )
}

export async function getReposOwnerRepoPullsIndexReviewsIdComments(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews'][':id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews[':id'].comments.$get(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexReviewsIdDismissals(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews'][':id']['dismissals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews[':id'].dismissals.$post(args, options),
  )
}

export async function postReposOwnerRepoPullsIndexReviewsIdUndismissals(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['reviews'][':id']['undismissals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].reviews[':id'].undismissals.$post(
      args,
      options,
    ),
  )
}

export async function postReposOwnerRepoPullsIndexUpdate(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['pulls'][':index']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].pulls[':index'].update.$post(args, options),
  )
}

export async function getReposOwnerRepoPushMirrors(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['push_mirrors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].push_mirrors.$get(args, options))
}

export async function postReposOwnerRepoPushMirrors(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['push_mirrors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].push_mirrors.$post(args, options))
}

export async function postReposOwnerRepoPushMirrorsSync(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['push_mirrors-sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo']['push_mirrors-sync'].$post(args, options),
  )
}

export async function getReposOwnerRepoPushMirrorsName(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['push_mirrors'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].push_mirrors[':name'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoPushMirrorsName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['push_mirrors'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].push_mirrors[':name'].$delete(args, options),
  )
}

export async function getReposOwnerRepoRawFilepath(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['raw'][':filepath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].raw[':filepath'].$get(args, options))
}

export async function getReposOwnerRepoReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases.$get(args, options))
}

export async function postReposOwnerRepoReleases(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases.$post(args, options))
}

export async function getReposOwnerRepoReleasesLatest(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases.latest.$get(args, options))
}

export async function getReposOwnerRepoReleasesTagsTag(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['tags'][':tag']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases.tags[':tag'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoReleasesTagsTag(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases']['tags'][':tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases.tags[':tag'].$delete(args, options),
  )
}

export async function getReposOwnerRepoReleasesId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases[':id'].$get(args, options))
}

export async function deleteReposOwnerRepoReleasesId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases[':id'].$delete(args, options))
}

export async function patchReposOwnerRepoReleasesId(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['releases'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].releases[':id'].$patch(args, options))
}

export async function getReposOwnerRepoReleasesIdAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':id'].assets.$get(args, options),
  )
}

export async function postReposOwnerRepoReleasesIdAssets(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':id']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':id'].assets.$post(args, options),
  )
}

export async function getReposOwnerRepoReleasesIdAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':id']['assets'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':id'].assets[':attachment_id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoReleasesIdAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':id']['assets'][':attachment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':id'].assets[':attachment_id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoReleasesIdAssetsAttachmentId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['releases'][':id']['assets'][':attachment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].releases[':id'].assets[':attachment_id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoReviewers(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['reviewers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].reviewers.$get(args, options))
}

export async function getReposOwnerRepoSigningKeyGpg(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['signing-key.gpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['signing-key.gpg'].$get(args, options))
}

export async function getReposOwnerRepoSigningKeyPub(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['signing-key.pub']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo']['signing-key.pub'].$get(args, options))
}

export async function getReposOwnerRepoStargazers(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['stargazers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].stargazers.$get(args, options))
}

export async function getReposOwnerRepoStatusesSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['statuses'][':sha']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].statuses[':sha'].$get(args, options))
}

export async function postReposOwnerRepoStatusesSha(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['statuses'][':sha']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].statuses[':sha'].$post(args, options))
}

export async function getReposOwnerRepoSubscribers(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscribers.$get(args, options))
}

export async function getReposOwnerRepoSubscription(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscription.$get(args, options))
}

export async function putReposOwnerRepoSubscription(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscription']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscription.$put(args, options))
}

export async function deleteReposOwnerRepoSubscription(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['subscription']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].subscription.$delete(args, options))
}

export async function getReposOwnerRepoTagProtections(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tag_protections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tag_protections.$get(args, options))
}

export async function postReposOwnerRepoTagProtections(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tag_protections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tag_protections.$post(args, options))
}

export async function getReposOwnerRepoTagProtectionsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['tag_protections'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].tag_protections[':id'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoTagProtectionsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['tag_protections'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].tag_protections[':id'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoTagProtectionsId(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['tag_protections'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].tag_protections[':id'].$patch(args, options),
  )
}

export async function getReposOwnerRepoTags(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tags.$get(args, options))
}

export async function postReposOwnerRepoTags(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tags.$post(args, options))
}

export async function getReposOwnerRepoTagsTag(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tags'][':tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tags[':tag'].$get(args, options))
}

export async function deleteReposOwnerRepoTagsTag(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['tags'][':tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].tags[':tag'].$delete(args, options))
}

export async function getReposOwnerRepoTeams(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].teams.$get(args, options))
}

export async function getReposOwnerRepoTeamsTeam(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['teams'][':team']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].teams[':team'].$get(args, options))
}

export async function putReposOwnerRepoTeamsTeam(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['teams'][':team']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].teams[':team'].$put(args, options))
}

export async function deleteReposOwnerRepoTeamsTeam(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['teams'][':team']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].teams[':team'].$delete(args, options))
}

export async function getReposOwnerRepoTimes(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['times']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].times.$get(args, options))
}

export async function getReposOwnerRepoTimesUser(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['times'][':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].times[':user'].$get(args, options))
}

export async function getReposOwnerRepoTopics(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].topics.$get(args, options))
}

export async function putReposOwnerRepoTopics(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['topics']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].topics.$put(args, options))
}

export async function putReposOwnerRepoTopicsTopic(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['topics'][':topic']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].topics[':topic'].$put(args, options))
}

export async function deleteReposOwnerRepoTopicsTopic(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['topics'][':topic']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].topics[':topic'].$delete(args, options),
  )
}

export async function postReposOwnerRepoTransfer(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].transfer.$post(args, options))
}

export async function postReposOwnerRepoTransferAccept(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['transfer']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].transfer.accept.$post(args, options))
}

export async function postReposOwnerRepoTransferReject(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['transfer']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].transfer.reject.$post(args, options))
}

export async function postReposOwnerRepoWikiNew(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['wiki']['new']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].wiki.new.$post(args, options))
}

export async function getReposOwnerRepoWikiPagePageName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['wiki']['page'][':pageName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].wiki.page[':pageName'].$get(args, options),
  )
}

export async function deleteReposOwnerRepoWikiPagePageName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['wiki']['page'][':pageName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].wiki.page[':pageName'].$delete(args, options),
  )
}

export async function patchReposOwnerRepoWikiPagePageName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['wiki']['page'][':pageName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].wiki.page[':pageName'].$patch(args, options),
  )
}

export async function getReposOwnerRepoWikiPages(
  args: InferRequestType<(typeof client.repos)[':owner'][':repo']['wiki']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repos[':owner'][':repo'].wiki.pages.$get(args, options))
}

export async function getReposOwnerRepoWikiRevisionsPageName(
  args: InferRequestType<
    (typeof client.repos)[':owner'][':repo']['wiki']['revisions'][':pageName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':owner'][':repo'].wiki.revisions[':pageName'].$get(args, options),
  )
}

export async function postReposTemplateOwnerTemplateRepoGenerate(
  args: InferRequestType<
    (typeof client.repos)[':template_owner'][':template_repo']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.repos[':template_owner'][':template_repo'].generate.$post(args, options),
  )
}

export async function getRepositoriesId(
  args: InferRequestType<(typeof client.repositories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.repositories[':id'].$get(args, options))
}

export async function getSearchCode(
  args: InferRequestType<typeof client.search.code.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.code.$get(args, options))
}

export async function getSettingsApi(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.api.$get(undefined, options))
}

export async function getSettingsAttachment(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.attachment.$get(undefined, options))
}

export async function getSettingsRepository(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.repository.$get(undefined, options))
}

export async function getSettingsUi(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.ui.$get(undefined, options))
}

export async function getSigningKeyGpg(options?: ClientRequestOptions) {
  return await parseResponse(client['signing-key.gpg'].$get(undefined, options))
}

export async function getSigningKeyPub(options?: ClientRequestOptions) {
  return await parseResponse(client['signing-key.pub'].$get(undefined, options))
}

export async function getTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$get(args, options))
}

export async function deleteTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$delete(args, options))
}

export async function patchTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$patch(args, options))
}

export async function getTeamsIdActivitiesFeeds(
  args: InferRequestType<(typeof client.teams)[':id']['activities']['feeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].activities.feeds.$get(args, options))
}

export async function getTeamsIdMembers(
  args: InferRequestType<(typeof client.teams)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].members.$get(args, options))
}

export async function getTeamsIdMembersUsername(
  args: InferRequestType<(typeof client.teams)[':id']['members'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].members[':username'].$get(args, options))
}

export async function putTeamsIdMembersUsername(
  args: InferRequestType<(typeof client.teams)[':id']['members'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].members[':username'].$put(args, options))
}

export async function deleteTeamsIdMembersUsername(
  args: InferRequestType<(typeof client.teams)[':id']['members'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].members[':username'].$delete(args, options))
}

export async function getTeamsIdRepos(
  args: InferRequestType<(typeof client.teams)[':id']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].repos.$get(args, options))
}

export async function getTeamsIdReposOrgRepo(
  args: InferRequestType<(typeof client.teams)[':id']['repos'][':org'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].repos[':org'][':repo'].$get(args, options))
}

export async function putTeamsIdReposOrgRepo(
  args: InferRequestType<(typeof client.teams)[':id']['repos'][':org'][':repo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].repos[':org'][':repo'].$put(args, options))
}

export async function deleteTeamsIdReposOrgRepo(
  args: InferRequestType<(typeof client.teams)[':id']['repos'][':org'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].repos[':org'][':repo'].$delete(args, options))
}

export async function getToken(options?: ClientRequestOptions) {
  return await parseResponse(client.token.$get(undefined, options))
}

export async function deleteToken(options?: ClientRequestOptions) {
  return await parseResponse(client.token.$delete(undefined, options))
}

export async function getTopicsSearch(
  args: InferRequestType<typeof client.topics.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics.search.$get(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function getUserActionsJobs(
  args: InferRequestType<typeof client.user.actions.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.jobs.$get(args, options))
}

export async function getUserActionsRunners(
  args: InferRequestType<typeof client.user.actions.runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.runners.$get(args, options))
}

export async function postUserActionsRunnersRegistrationToken(options?: ClientRequestOptions) {
  return await parseResponse(
    client.user.actions.runners['registration-token'].$post(undefined, options),
  )
}

export async function getUserActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.user.actions.runners)[':runner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.runners[':runner_id'].$get(args, options))
}

export async function deleteUserActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.user.actions.runners)[':runner_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.runners[':runner_id'].$delete(args, options))
}

export async function patchUserActionsRunnersRunnerId(
  args: InferRequestType<(typeof client.user.actions.runners)[':runner_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.runners[':runner_id'].$patch(args, options))
}

export async function getUserActionsRuns(
  args: InferRequestType<typeof client.user.actions.runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.runs.$get(args, options))
}

export async function putUserActionsSecretsSecretname(
  args: InferRequestType<(typeof client.user.actions.secrets)[':secretname']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.secrets[':secretname'].$put(args, options))
}

export async function deleteUserActionsSecretsSecretname(
  args: InferRequestType<(typeof client.user.actions.secrets)[':secretname']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.secrets[':secretname'].$delete(args, options))
}

export async function getUserActionsVariables(
  args: InferRequestType<typeof client.user.actions.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.variables.$get(args, options))
}

export async function getUserActionsVariablesVariablename(
  args: InferRequestType<(typeof client.user.actions.variables)[':variablename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.variables[':variablename'].$get(args, options))
}

export async function putUserActionsVariablesVariablename(
  args: InferRequestType<(typeof client.user.actions.variables)[':variablename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.variables[':variablename'].$put(args, options))
}

export async function postUserActionsVariablesVariablename(
  args: InferRequestType<(typeof client.user.actions.variables)[':variablename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.variables[':variablename'].$post(args, options))
}

export async function deleteUserActionsVariablesVariablename(
  args: InferRequestType<(typeof client.user.actions.variables)[':variablename']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.actions.variables[':variablename'].$delete(args, options))
}

export async function getUserApplicationsOauth2(
  args: InferRequestType<typeof client.user.applications.oauth2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.applications.oauth2.$get(args, options))
}

export async function postUserApplicationsOauth2(
  args: InferRequestType<typeof client.user.applications.oauth2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.applications.oauth2.$post(args, options))
}

export async function getUserApplicationsOauth2Id(
  args: InferRequestType<(typeof client.user.applications.oauth2)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.applications.oauth2[':id'].$get(args, options))
}

export async function deleteUserApplicationsOauth2Id(
  args: InferRequestType<(typeof client.user.applications.oauth2)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.applications.oauth2[':id'].$delete(args, options))
}

export async function patchUserApplicationsOauth2Id(
  args: InferRequestType<(typeof client.user.applications.oauth2)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.applications.oauth2[':id'].$patch(args, options))
}

export async function postUserAvatar(
  args: InferRequestType<typeof client.user.avatar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.avatar.$post(args, options))
}

export async function deleteUserAvatar(options?: ClientRequestOptions) {
  return await parseResponse(client.user.avatar.$delete(undefined, options))
}

export async function getUserBlocks(
  args: InferRequestType<typeof client.user.blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks.$get(args, options))
}

export async function getUserBlocksUsername(
  args: InferRequestType<(typeof client.user.blocks)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks[':username'].$get(args, options))
}

export async function putUserBlocksUsername(
  args: InferRequestType<(typeof client.user.blocks)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks[':username'].$put(args, options))
}

export async function deleteUserBlocksUsername(
  args: InferRequestType<(typeof client.user.blocks)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.blocks[':username'].$delete(args, options))
}

export async function getUserEmails(options?: ClientRequestOptions) {
  return await parseResponse(client.user.emails.$get(undefined, options))
}

export async function postUserEmails(
  args: InferRequestType<typeof client.user.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.emails.$post(args, options))
}

export async function deleteUserEmails(
  args: InferRequestType<typeof client.user.emails.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.emails.$delete(args, options))
}

export async function getUserFollowers(
  args: InferRequestType<typeof client.user.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.followers.$get(args, options))
}

export async function getUserFollowing(
  args: InferRequestType<typeof client.user.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following.$get(args, options))
}

export async function getUserFollowingUsername(
  args: InferRequestType<(typeof client.user.following)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following[':username'].$get(args, options))
}

export async function putUserFollowingUsername(
  args: InferRequestType<(typeof client.user.following)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following[':username'].$put(args, options))
}

export async function deleteUserFollowingUsername(
  args: InferRequestType<(typeof client.user.following)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.following[':username'].$delete(args, options))
}

export async function getUserGpgKeyToken(options?: ClientRequestOptions) {
  return await parseResponse(client.user.gpg_key_token.$get(undefined, options))
}

export async function postUserGpgKeyVerify(options?: ClientRequestOptions) {
  return await parseResponse(client.user.gpg_key_verify.$post(undefined, options))
}

export async function getUserGpgKeys(
  args: InferRequestType<typeof client.user.gpg_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys.$get(args, options))
}

export async function postUserGpgKeys(
  args: InferRequestType<typeof client.user.gpg_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys.$post(args, options))
}

export async function getUserGpgKeysId(
  args: InferRequestType<(typeof client.user.gpg_keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys[':id'].$get(args, options))
}

export async function deleteUserGpgKeysId(
  args: InferRequestType<(typeof client.user.gpg_keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.gpg_keys[':id'].$delete(args, options))
}

export async function getUserHooks(
  args: InferRequestType<typeof client.user.hooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.hooks.$get(args, options))
}

export async function postUserHooks(
  args: InferRequestType<typeof client.user.hooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.hooks.$post(args, options))
}

export async function getUserHooksId(
  args: InferRequestType<(typeof client.user.hooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.hooks[':id'].$get(args, options))
}

export async function deleteUserHooksId(
  args: InferRequestType<(typeof client.user.hooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.hooks[':id'].$delete(args, options))
}

export async function patchUserHooksId(
  args: InferRequestType<(typeof client.user.hooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.hooks[':id'].$patch(args, options))
}

export async function getUserKeys(
  args: InferRequestType<typeof client.user.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys.$get(args, options))
}

export async function postUserKeys(
  args: InferRequestType<typeof client.user.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys.$post(args, options))
}

export async function getUserKeysId(
  args: InferRequestType<(typeof client.user.keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys[':id'].$get(args, options))
}

export async function deleteUserKeysId(
  args: InferRequestType<(typeof client.user.keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.keys[':id'].$delete(args, options))
}

export async function getUserOrgs(
  args: InferRequestType<typeof client.user.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.orgs.$get(args, options))
}

export async function getUserProjects(
  args: InferRequestType<typeof client.user.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects.$get(args, options))
}

export async function postUserProjects(
  args: InferRequestType<typeof client.user.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects.$post(args, options))
}

export async function getUserProjectsId(
  args: InferRequestType<(typeof client.user.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].$get(args, options))
}

export async function deleteUserProjectsId(
  args: InferRequestType<(typeof client.user.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].$delete(args, options))
}

export async function patchUserProjectsId(
  args: InferRequestType<(typeof client.user.projects)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].$patch(args, options))
}

export async function getUserProjectsIdColumns(
  args: InferRequestType<(typeof client.user.projects)[':id']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].columns.$get(args, options))
}

export async function postUserProjectsIdColumns(
  args: InferRequestType<(typeof client.user.projects)[':id']['columns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].columns.$post(args, options))
}

export async function postUserProjectsIdColumnsMove(
  args: InferRequestType<(typeof client.user.projects)[':id']['columns']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].columns.move.$post(args, options))
}

export async function getUserProjectsIdColumnsColumnId(
  args: InferRequestType<(typeof client.user.projects)[':id']['columns'][':column_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].columns[':column_id'].$get(args, options))
}

export async function deleteUserProjectsIdColumnsColumnId(
  args: InferRequestType<(typeof client.user.projects)[':id']['columns'][':column_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].columns[':column_id'].$delete(args, options),
  )
}

export async function patchUserProjectsIdColumnsColumnId(
  args: InferRequestType<(typeof client.user.projects)[':id']['columns'][':column_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].columns[':column_id'].$patch(args, options),
  )
}

export async function postUserProjectsIdColumnsColumnIdDefault(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['columns'][':column_id']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].columns[':column_id'].default.$post(args, options),
  )
}

export async function getUserProjectsIdColumnsColumnIdIssues(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['columns'][':column_id']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].columns[':column_id'].issues.$get(args, options),
  )
}

export async function postUserProjectsIdColumnsColumnIdIssuesIssueId(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['columns'][':column_id']['issues'][':issue_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].columns[':column_id'].issues[':issue_id'].$post(args, options),
  )
}

export async function deleteUserProjectsIdColumnsColumnIdIssuesIssueId(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['columns'][':column_id']['issues'][':issue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].columns[':column_id'].issues[':issue_id'].$delete(args, options),
  )
}

export async function postUserProjectsIdIssuesIssueIdMove(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['issues'][':issue_id']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].issues[':issue_id'].move.$post(args, options),
  )
}

export async function getUserProjectsIdWorkflows(
  args: InferRequestType<(typeof client.user.projects)[':id']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].workflows.$get(args, options))
}

export async function postUserProjectsIdWorkflows(
  args: InferRequestType<(typeof client.user.projects)[':id']['workflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.projects[':id'].workflows.$post(args, options))
}

export async function getUserProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.user.projects)[':id']['workflows'][':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].workflows[':workflow_id'].$get(args, options),
  )
}

export async function deleteUserProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['workflows'][':workflow_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].workflows[':workflow_id'].$delete(args, options),
  )
}

export async function patchUserProjectsIdWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.user.projects)[':id']['workflows'][':workflow_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user.projects[':id'].workflows[':workflow_id'].$patch(args, options),
  )
}

export async function getUserRepos(
  args: InferRequestType<typeof client.user.repos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.repos.$get(args, options))
}

export async function postUserRepos(
  args: InferRequestType<typeof client.user.repos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.repos.$post(args, options))
}

export async function getUserSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.user.settings.$get(undefined, options))
}

export async function patchUserSettings(
  args: InferRequestType<typeof client.user.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.settings.$patch(args, options))
}

export async function getUserStarred(
  args: InferRequestType<typeof client.user.starred.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred.$get(args, options))
}

export async function getUserStarredOwnerRepo(
  args: InferRequestType<(typeof client.user.starred)[':owner'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred[':owner'][':repo'].$get(args, options))
}

export async function putUserStarredOwnerRepo(
  args: InferRequestType<(typeof client.user.starred)[':owner'][':repo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred[':owner'][':repo'].$put(args, options))
}

export async function deleteUserStarredOwnerRepo(
  args: InferRequestType<(typeof client.user.starred)[':owner'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.starred[':owner'][':repo'].$delete(args, options))
}

export async function getUserStopwatches(
  args: InferRequestType<typeof client.user.stopwatches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.stopwatches.$get(args, options))
}

export async function getUserSubscriptions(
  args: InferRequestType<typeof client.user.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.subscriptions.$get(args, options))
}

export async function getUserTeams(
  args: InferRequestType<typeof client.user.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.teams.$get(args, options))
}

export async function getUserTimes(
  args: InferRequestType<typeof client.user.times.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.times.$get(args, options))
}

export async function getUsersSearch(
  args: InferRequestType<typeof client.users.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.search.$get(args, options))
}

export async function getUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$get(args, options))
}

export async function getUsersUsernameActivitiesFeeds(
  args: InferRequestType<(typeof client.users)[':username']['activities']['feeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].activities.feeds.$get(args, options))
}

export async function getUsersUsernameFollowers(
  args: InferRequestType<(typeof client.users)[':username']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].followers.$get(args, options))
}

export async function getUsersUsernameFollowing(
  args: InferRequestType<(typeof client.users)[':username']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].following.$get(args, options))
}

export async function getUsersUsernameFollowingTarget(
  args: InferRequestType<(typeof client.users)[':username']['following'][':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].following[':target'].$get(args, options))
}

export async function getUsersUsernameGpgKeys(
  args: InferRequestType<(typeof client.users)[':username']['gpg_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].gpg_keys.$get(args, options))
}

export async function getUsersUsernameHeatmap(
  args: InferRequestType<(typeof client.users)[':username']['heatmap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].heatmap.$get(args, options))
}

export async function getUsersUsernameKeys(
  args: InferRequestType<(typeof client.users)[':username']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].keys.$get(args, options))
}

export async function getUsersUsernameOrgs(
  args: InferRequestType<(typeof client.users)[':username']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].orgs.$get(args, options))
}

export async function getUsersUsernameOrgsOrgPermissions(
  args: InferRequestType<(typeof client.users)[':username']['orgs'][':org']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].orgs[':org'].permissions.$get(args, options))
}

export async function getUsersUsernameProjects(
  args: InferRequestType<(typeof client.users)[':username']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].projects.$get(args, options))
}

export async function getUsersUsernameRepos(
  args: InferRequestType<(typeof client.users)[':username']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].repos.$get(args, options))
}

export async function getUsersUsernameStarred(
  args: InferRequestType<(typeof client.users)[':username']['starred']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].starred.$get(args, options))
}

export async function getUsersUsernameSubscriptions(
  args: InferRequestType<(typeof client.users)[':username']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].subscriptions.$get(args, options))
}

export async function getUsersUsernameTokens(
  args: InferRequestType<(typeof client.users)[':username']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].tokens.$get(args, options))
}

export async function postUsersUsernameTokens(
  args: InferRequestType<(typeof client.users)[':username']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].tokens.$post(args, options))
}

export async function deleteUsersUsernameTokensToken(
  args: InferRequestType<(typeof client.users)[':username']['tokens'][':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].tokens[':token'].$delete(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
