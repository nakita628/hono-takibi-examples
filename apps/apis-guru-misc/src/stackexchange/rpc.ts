import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccessTokensAccessTokens(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-tokens'][':accessTokens'].$get(args, options))
}

export async function getAccessTokensAccessTokensInvalidate(
  args: InferRequestType<(typeof client)['access-tokens'][':accessTokens']['invalidate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['access-tokens'][':accessTokens'].invalidate.$get(args, options),
  )
}

export async function getAnswers(
  args: InferRequestType<typeof client.answers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answers.$get(args, options))
}

export async function getAnswersIds(
  args: InferRequestType<(typeof client.answers)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answers[':ids'].$get(args, options))
}

export async function getAnswersIdsComments(
  args: InferRequestType<(typeof client.answers)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answers[':ids'].comments.$get(args, options))
}

export async function getAppsAccessTokensDeAuthenticate(
  args: InferRequestType<(typeof client.apps)[':accessTokens']['de-authenticate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':accessTokens']['de-authenticate'].$get(args, options))
}

export async function getBadges(
  args: InferRequestType<typeof client.badges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badges.$get(args, options))
}

export async function getBadgesName(
  args: InferRequestType<typeof client.badges.name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badges.name.$get(args, options))
}

export async function getBadgesRecipients(
  args: InferRequestType<typeof client.badges.recipients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badges.recipients.$get(args, options))
}

export async function getBadgesTags(
  args: InferRequestType<typeof client.badges.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badges.tags.$get(args, options))
}

export async function getBadgesIds(
  args: InferRequestType<(typeof client.badges)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badges[':ids'].$get(args, options))
}

export async function getBadgesIdsRecipients(
  args: InferRequestType<(typeof client.badges)[':ids']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badges[':ids'].recipients.$get(args, options))
}

export async function getComments(
  args: InferRequestType<typeof client.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$get(args, options))
}

export async function getCommentsIds(
  args: InferRequestType<(typeof client.comments)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':ids'].$get(args, options))
}

export async function postCommentsIdDelete(
  args: InferRequestType<(typeof client.comments)[':id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].delete.$post(args, options))
}

export async function postCommentsIdEdit(
  args: InferRequestType<(typeof client.comments)[':id']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].edit.$post(args, options))
}

export async function getErrors(
  args: InferRequestType<typeof client.errors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.errors.$get(args, options))
}

export async function getErrorsId(
  args: InferRequestType<(typeof client.errors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.errors[':id'].$get(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getFiltersCreate(
  args: InferRequestType<typeof client.filters.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.filters.create.$get(args, options))
}

export async function getFiltersFilters(
  args: InferRequestType<(typeof client.filters)[':filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.filters[':filters'].$get(args, options))
}

export async function getInbox(
  args: InferRequestType<typeof client.inbox.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox.$get(args, options))
}

export async function getInboxUnread(
  args: InferRequestType<typeof client.inbox.unread.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbox.unread.$get(args, options))
}

export async function getInfo(
  args: InferRequestType<typeof client.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.$get(args, options))
}

export async function getMe(
  args: InferRequestType<typeof client.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$get(args, options))
}

export async function getMeAnswers(
  args: InferRequestType<typeof client.me.answers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.answers.$get(args, options))
}

export async function getMeAssociated(
  args: InferRequestType<typeof client.me.associated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.associated.$get(args, options))
}

export async function getMeBadges(
  args: InferRequestType<typeof client.me.badges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.badges.$get(args, options))
}

export async function getMeComments(
  args: InferRequestType<typeof client.me.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.comments.$get(args, options))
}

export async function getMeCommentsToId(
  args: InferRequestType<(typeof client.me.comments)[':toId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.comments[':toId'].$get(args, options))
}

export async function getMeFavorites(
  args: InferRequestType<typeof client.me.favorites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.favorites.$get(args, options))
}

export async function getMeInbox(
  args: InferRequestType<typeof client.me.inbox.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.inbox.$get(args, options))
}

export async function getMeInboxUnread(
  args: InferRequestType<typeof client.me.inbox.unread.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.inbox.unread.$get(args, options))
}

export async function getMeMentioned(
  args: InferRequestType<typeof client.me.mentioned.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.mentioned.$get(args, options))
}

export async function getMeMerges(
  args: InferRequestType<typeof client.me.merges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.merges.$get(args, options))
}

export async function getMeNotifications(
  args: InferRequestType<typeof client.me.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.notifications.$get(args, options))
}

export async function getMeNotificationsUnread(
  args: InferRequestType<typeof client.me.notifications.unread.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.notifications.unread.$get(args, options))
}

export async function getMePrivileges(
  args: InferRequestType<typeof client.me.privileges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.privileges.$get(args, options))
}

export async function getMeQuestions(
  args: InferRequestType<typeof client.me.questions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.questions.$get(args, options))
}

export async function getMeQuestionsFeatured(
  args: InferRequestType<typeof client.me.questions.featured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.questions.featured.$get(args, options))
}

export async function getMeQuestionsNoAnswers(
  args: InferRequestType<(typeof client.me.questions)['no-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.questions['no-answers'].$get(args, options))
}

export async function getMeQuestionsUnaccepted(
  args: InferRequestType<typeof client.me.questions.unaccepted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.questions.unaccepted.$get(args, options))
}

export async function getMeQuestionsUnanswered(
  args: InferRequestType<typeof client.me.questions.unanswered.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.questions.unanswered.$get(args, options))
}

export async function getMeReputation(
  args: InferRequestType<typeof client.me.reputation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.reputation.$get(args, options))
}

export async function getMeReputationHistory(
  args: InferRequestType<(typeof client.me)['reputation-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['reputation-history'].$get(args, options))
}

export async function getMeReputationHistoryFull(
  args: InferRequestType<(typeof client.me)['reputation-history']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['reputation-history'].full.$get(args, options))
}

export async function getMeSuggestedEdits(
  args: InferRequestType<(typeof client.me)['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['suggested-edits'].$get(args, options))
}

export async function getMeTags(
  args: InferRequestType<typeof client.me.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tags.$get(args, options))
}

export async function getMeTagsTagsTopAnswers(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tags[':tags']['top-answers'].$get(args, options))
}

export async function getMeTagsTagsTopQuestions(
  args: InferRequestType<(typeof client.me.tags)[':tags']['top-questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tags[':tags']['top-questions'].$get(args, options))
}

export async function getMeTimeline(
  args: InferRequestType<typeof client.me.timeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.timeline.$get(args, options))
}

export async function getMeTopAnswerTags(
  args: InferRequestType<(typeof client.me)['top-answer-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['top-answer-tags'].$get(args, options))
}

export async function getMeTopQuestionTags(
  args: InferRequestType<(typeof client.me)['top-question-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['top-question-tags'].$get(args, options))
}

export async function getMeWritePermissions(
  args: InferRequestType<(typeof client.me)['write-permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me['write-permissions'].$get(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function getNotificationsUnread(
  args: InferRequestType<typeof client.notifications.unread.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.unread.$get(args, options))
}

export async function getPosts(
  args: InferRequestType<typeof client.posts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts.$get(args, options))
}

export async function getPostsIds(
  args: InferRequestType<(typeof client.posts)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':ids'].$get(args, options))
}

export async function getPostsIdsComments(
  args: InferRequestType<(typeof client.posts)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':ids'].comments.$get(args, options))
}

export async function getPostsIdsRevisions(
  args: InferRequestType<(typeof client.posts)[':ids']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':ids'].revisions.$get(args, options))
}

export async function getPostsIdsSuggestedEdits(
  args: InferRequestType<(typeof client.posts)[':ids']['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':ids']['suggested-edits'].$get(args, options))
}

export async function postPostsIdCommentsAdd(
  args: InferRequestType<(typeof client.posts)[':id']['comments']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.posts[':id'].comments.add.$post(args, options))
}

export async function getPrivileges(
  args: InferRequestType<typeof client.privileges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.privileges.$get(args, options))
}

export async function getQuestions(
  args: InferRequestType<typeof client.questions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions.$get(args, options))
}

export async function getQuestionsFeatured(
  args: InferRequestType<typeof client.questions.featured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions.featured.$get(args, options))
}

export async function getQuestionsNoAnswers(
  args: InferRequestType<(typeof client.questions)['no-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions['no-answers'].$get(args, options))
}

export async function getQuestionsUnanswered(
  args: InferRequestType<typeof client.questions.unanswered.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions.unanswered.$get(args, options))
}

export async function getQuestionsIds(
  args: InferRequestType<(typeof client.questions)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions[':ids'].$get(args, options))
}

export async function getQuestionsIdsAnswers(
  args: InferRequestType<(typeof client.questions)[':ids']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions[':ids'].answers.$get(args, options))
}

export async function getQuestionsIdsComments(
  args: InferRequestType<(typeof client.questions)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions[':ids'].comments.$get(args, options))
}

export async function getQuestionsIdsLinked(
  args: InferRequestType<(typeof client.questions)[':ids']['linked']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions[':ids'].linked.$get(args, options))
}

export async function getQuestionsIdsRelated(
  args: InferRequestType<(typeof client.questions)[':ids']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions[':ids'].related.$get(args, options))
}

export async function getQuestionsIdsTimeline(
  args: InferRequestType<(typeof client.questions)[':ids']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions[':ids'].timeline.$get(args, options))
}

export async function getRevisionsIds(
  args: InferRequestType<(typeof client.revisions)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.revisions[':ids'].$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchAdvanced(
  args: InferRequestType<typeof client.search.advanced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.advanced.$get(args, options))
}

export async function getSimilar(
  args: InferRequestType<typeof client.similar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.similar.$get(args, options))
}

export async function getSites(
  args: InferRequestType<typeof client.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$get(args, options))
}

export async function getSuggestedEdits(
  args: InferRequestType<(typeof client)['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['suggested-edits'].$get(args, options))
}

export async function getSuggestedEditsIds(
  args: InferRequestType<(typeof client)['suggested-edits'][':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['suggested-edits'][':ids'].$get(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function getTagsModeratorOnly(
  args: InferRequestType<(typeof client.tags)['moderator-only']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags['moderator-only'].$get(args, options))
}

export async function getTagsRequired(
  args: InferRequestType<typeof client.tags.required.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.required.$get(args, options))
}

export async function getTagsSynonyms(
  args: InferRequestType<typeof client.tags.synonyms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.synonyms.$get(args, options))
}

export async function getTagsTagsFaq(
  args: InferRequestType<(typeof client.tags)[':tags']['faq']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tags'].faq.$get(args, options))
}

export async function getTagsTagsInfo(
  args: InferRequestType<(typeof client.tags)[':tags']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tags'].info.$get(args, options))
}

export async function getTagsTagsRelated(
  args: InferRequestType<(typeof client.tags)[':tags']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tags'].related.$get(args, options))
}

export async function getTagsTagsSynonyms(
  args: InferRequestType<(typeof client.tags)[':tags']['synonyms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tags'].synonyms.$get(args, options))
}

export async function getTagsTagsWikis(
  args: InferRequestType<(typeof client.tags)[':tags']['wikis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tags'].wikis.$get(args, options))
}

export async function getTagsTagTopAnswerersPeriod(
  args: InferRequestType<(typeof client.tags)[':tag']['top-answerers'][':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag']['top-answerers'][':period'].$get(args, options))
}

export async function getTagsTagTopAskersPeriod(
  args: InferRequestType<(typeof client.tags)[':tag']['top-askers'][':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag']['top-askers'][':period'].$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersModerators(
  args: InferRequestType<typeof client.users.moderators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.moderators.$get(args, options))
}

export async function getUsersModeratorsElected(
  args: InferRequestType<typeof client.users.moderators.elected.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.moderators.elected.$get(args, options))
}

export async function getUsersIds(
  args: InferRequestType<(typeof client.users)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].$get(args, options))
}

export async function getUsersIdsAnswers(
  args: InferRequestType<(typeof client.users)[':ids']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].answers.$get(args, options))
}

export async function getUsersIdsAssociated(
  args: InferRequestType<(typeof client.users)[':ids']['associated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].associated.$get(args, options))
}

export async function getUsersIdsBadges(
  args: InferRequestType<(typeof client.users)[':ids']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].badges.$get(args, options))
}

export async function getUsersIdsComments(
  args: InferRequestType<(typeof client.users)[':ids']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].comments.$get(args, options))
}

export async function getUsersIdsCommentsToid(
  args: InferRequestType<(typeof client.users)[':ids']['comments'][':toid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].comments[':toid'].$get(args, options))
}

export async function getUsersIdsFavorites(
  args: InferRequestType<(typeof client.users)[':ids']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].favorites.$get(args, options))
}

export async function getUsersIdsMentioned(
  args: InferRequestType<(typeof client.users)[':ids']['mentioned']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].mentioned.$get(args, options))
}

export async function getUsersIdsMerges(
  args: InferRequestType<(typeof client.users)[':ids']['merges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].merges.$get(args, options))
}

export async function getUsersIdsQuestions(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].questions.$get(args, options))
}

export async function getUsersIdsQuestionsFeatured(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['featured']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].questions.featured.$get(args, options))
}

export async function getUsersIdsQuestionsNoAnswers(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['no-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].questions['no-answers'].$get(args, options))
}

export async function getUsersIdsQuestionsUnaccepted(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unaccepted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].questions.unaccepted.$get(args, options))
}

export async function getUsersIdsQuestionsUnanswered(
  args: InferRequestType<(typeof client.users)[':ids']['questions']['unanswered']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].questions.unanswered.$get(args, options))
}

export async function getUsersIdsReputation(
  args: InferRequestType<(typeof client.users)[':ids']['reputation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].reputation.$get(args, options))
}

export async function getUsersIdsReputationHistory(
  args: InferRequestType<(typeof client.users)[':ids']['reputation-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids']['reputation-history'].$get(args, options))
}

export async function getUsersIdsSuggestedEdits(
  args: InferRequestType<(typeof client.users)[':ids']['suggested-edits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids']['suggested-edits'].$get(args, options))
}

export async function getUsersIdsTags(
  args: InferRequestType<(typeof client.users)[':ids']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].tags.$get(args, options))
}

export async function getUsersIdsTimeline(
  args: InferRequestType<(typeof client.users)[':ids']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ids'].timeline.$get(args, options))
}

export async function getUsersIdInbox(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].inbox.$get(args, options))
}

export async function getUsersIdInboxUnread(
  args: InferRequestType<(typeof client.users)[':id']['inbox']['unread']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].inbox.unread.$get(args, options))
}

export async function getUsersIdNotifications(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].notifications.$get(args, options))
}

export async function getUsersIdNotificationsUnread(
  args: InferRequestType<(typeof client.users)[':id']['notifications']['unread']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].notifications.unread.$get(args, options))
}

export async function getUsersIdPrivileges(
  args: InferRequestType<(typeof client.users)[':id']['privileges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].privileges.$get(args, options))
}

export async function getUsersIdReputationHistoryFull(
  args: InferRequestType<(typeof client.users)[':id']['reputation-history']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['reputation-history'].full.$get(args, options))
}

export async function getUsersIdTagsTagsTopAnswers(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].tags[':tags']['top-answers'].$get(args, options))
}

export async function getUsersIdTagsTagsTopQuestions(
  args: InferRequestType<(typeof client.users)[':id']['tags'][':tags']['top-questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].tags[':tags']['top-questions'].$get(args, options))
}

export async function getUsersIdTopAnswerTags(
  args: InferRequestType<(typeof client.users)[':id']['top-answer-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['top-answer-tags'].$get(args, options))
}

export async function getUsersIdTopQuestionTags(
  args: InferRequestType<(typeof client.users)[':id']['top-question-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['top-question-tags'].$get(args, options))
}

export async function getUsersIdWritePermissions(
  args: InferRequestType<(typeof client.users)[':id']['write-permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['write-permissions'].$get(args, options))
}
