import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getEmoji(options?: ClientRequestOptions) {
  return await parseResponse(client.emoji.$get(undefined, options))
}

export async function getChat(
  args: InferRequestType<typeof client.chat.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.$get(args, options))
}

export async function postChatRegister(
  args: InferRequestType<typeof client.chat.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.register.$post(args, options))
}

export async function optionsChatRegister(options?: ClientRequestOptions) {
  return await parseResponse(client.chat.register.$options(undefined, options))
}

export async function postChatMessagevisibility(
  args: InferRequestType<typeof client.chat.messagevisibility.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.messagevisibility.$post(args, options))
}

export async function postChatUsersSetenabled(
  args: InferRequestType<typeof client.chat.users.setenabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users.setenabled.$post(args, options))
}

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getYp(options?: ClientRequestOptions) {
  return await parseResponse(client.yp.$get(undefined, options))
}

export async function getSocialplatforms(options?: ClientRequestOptions) {
  return await parseResponse(client.socialplatforms.$get(undefined, options))
}

export async function getVideoVariants(options?: ClientRequestOptions) {
  return await parseResponse(client.video.variants.$get(undefined, options))
}

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function postRemotefollow(
  args: InferRequestType<typeof client.remotefollow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.remotefollow.$post(args, options))
}

export async function getFollowers(
  args: InferRequestType<typeof client.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.followers.$get(args, options))
}

export async function getMetricsCmcd(
  args: InferRequestType<typeof client.metrics.cmcd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.cmcd.$get(args, options))
}

export async function postMetricsCmcd(
  args: InferRequestType<typeof client.metrics.cmcd.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.cmcd.$post(args, options))
}

export async function optionsMetricsCmcd(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.cmcd.$options(undefined, options))
}

export async function postMetricsPlayback(
  args: InferRequestType<typeof client.metrics.playback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.playback.$post(args, options))
}

export async function postNotificationsRegister(
  args: InferRequestType<typeof client.notifications.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.register.$post(args, options))
}

export async function getAdminStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.status.$get(undefined, options))
}

export async function optionsAdminStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.status.$options(undefined, options))
}

export async function postAdminDisconnect(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.disconnect.$post(undefined, options))
}

export async function optionsAdminDisconnect(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.disconnect.$options(undefined, options))
}

export async function getAdminServerconfig(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.serverconfig.$get(undefined, options))
}

export async function optionsAdminServerconfig(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.serverconfig.$options(undefined, options))
}

export async function getAdminViewersOverTime(
  args: InferRequestType<typeof client.admin.viewersOverTime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.viewersOverTime.$get(args, options))
}

export async function optionsAdminViewersOverTime(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.viewersOverTime.$options(undefined, options))
}

export async function getAdminViewers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.viewers.$get(undefined, options))
}

export async function optionsAdminViewers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.viewers.$options(undefined, options))
}

export async function getAdminViewersPlayback(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.viewers.playback.$get(undefined, options))
}

export async function optionsAdminViewersPlayback(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.viewers.playback.$options(undefined, options))
}

export async function getAdminHardwarestats(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.hardwarestats.$get(undefined, options))
}

export async function optionsAdminHardwarestats(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.hardwarestats.$options(undefined, options))
}

export async function getAdminChatClients(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.clients.$get(undefined, options))
}

export async function optionsAdminChatClients(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.clients.$options(undefined, options))
}

export async function getAdminChatMessages(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.messages.$get(undefined, options))
}

export async function optionsAdminChatMessages(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.messages.$options(undefined, options))
}

export async function postAdminChatMessagevisibility(
  args: InferRequestType<typeof client.admin.chat.messagevisibility.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.chat.messagevisibility.$post(args, options))
}

export async function optionsAdminChatMessagevisibility(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.messagevisibility.$options(undefined, options))
}

export async function postAdminChatUsersSetenabled(
  args: InferRequestType<typeof client.admin.chat.users.setenabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.chat.users.setenabled.$post(args, options))
}

export async function optionsAdminChatUsersSetenabled(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.setenabled.$options(undefined, options))
}

export async function getAdminChatUsersDisabled(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.disabled.$get(undefined, options))
}

export async function optionsAdminChatUsersDisabled(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.disabled.$options(undefined, options))
}

export async function postAdminChatUsersIpbansCreate(
  args: InferRequestType<typeof client.admin.chat.users.ipbans.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.chat.users.ipbans.create.$post(args, options))
}

export async function optionsAdminChatUsersIpbansCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.ipbans.create.$options(undefined, options))
}

export async function postAdminChatUsersIpbansRemove(
  args: InferRequestType<typeof client.admin.chat.users.ipbans.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.chat.users.ipbans.remove.$post(args, options))
}

export async function optionsAdminChatUsersIpbansRemove(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.ipbans.remove.$options(undefined, options))
}

export async function getAdminChatUsersIpbans(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.ipbans.$get(undefined, options))
}

export async function optionsAdminChatUsersIpbans(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.ipbans.$options(undefined, options))
}

export async function postAdminChatUsersSetmoderator(
  args: InferRequestType<typeof client.admin.chat.users.setmoderator.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.chat.users.setmoderator.$post(args, options))
}

export async function optionsAdminChatUsersSetmoderator(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.setmoderator.$options(undefined, options))
}

export async function getAdminChatUsersModerators(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.moderators.$get(undefined, options))
}

export async function optionsAdminChatUsersModerators(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.chat.users.moderators.$options(undefined, options))
}

export async function getAdminUsers(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.$get(args, options))
}

export async function optionsAdminUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.users.$options(undefined, options))
}

export async function postAdminUsersDelete(
  args: InferRequestType<typeof client.admin.users.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.users.delete.$post(args, options))
}

export async function optionsAdminUsersDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.users.delete.$options(undefined, options))
}

export async function getAdminLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.logs.$get(undefined, options))
}

export async function optionsAdminLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.logs.$options(undefined, options))
}

export async function getAdminLogsWarnings(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.logs.warnings.$get(undefined, options))
}

export async function optionsAdminLogsWarnings(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.logs.warnings.$options(undefined, options))
}

export async function getAdminFollowers(
  args: InferRequestType<typeof client.admin.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.followers.$get(args, options))
}

export async function optionsAdminFollowers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.$options(undefined, options))
}

export async function getAdminFollowersPending(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.pending.$get(undefined, options))
}

export async function optionsAdminFollowersPending(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.pending.$options(undefined, options))
}

export async function getAdminFollowersBlocked(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.blocked.$get(undefined, options))
}

export async function optionsAdminFollowersBlocked(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.blocked.$options(undefined, options))
}

export async function getAdminFollowersDirectory(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.directory.$get(undefined, options))
}

export async function optionsAdminFollowersDirectory(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.directory.$options(undefined, options))
}

export async function postAdminFollowersApprove(
  args: InferRequestType<typeof client.admin.followers.approve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.followers.approve.$post(args, options))
}

export async function optionsAdminFollowersApprove(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.approve.$options(undefined, options))
}

export async function postAdminFollowersRemove(
  args: InferRequestType<typeof client.admin.followers.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.followers.remove.$post(args, options))
}

export async function optionsAdminFollowersRemove(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.followers.remove.$options(undefined, options))
}

export async function postAdminEmojiUpload(
  args: InferRequestType<typeof client.admin.emoji.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.emoji.upload.$post(args, options))
}

export async function optionsAdminEmojiUpload(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.emoji.upload.$options(undefined, options))
}

export async function postAdminEmojiDelete(
  args: InferRequestType<typeof client.admin.emoji.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.emoji.delete.$post(args, options))
}

export async function optionsAdminEmojiDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.emoji.delete.$options(undefined, options))
}

export async function postAdminConfigAdminpass(
  args: InferRequestType<typeof client.admin.config.adminpass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.adminpass.$post(args, options))
}

export async function optionsAdminConfigAdminpass(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.adminpass.$options(undefined, options))
}

export async function postAdminConfigStreamkeys(
  args: InferRequestType<typeof client.admin.config.streamkeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.streamkeys.$post(args, options))
}

export async function optionsAdminConfigStreamkeys(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.streamkeys.$options(undefined, options))
}

export async function postAdminConfigPagecontent(
  args: InferRequestType<typeof client.admin.config.pagecontent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.pagecontent.$post(args, options))
}

export async function optionsAdminConfigPagecontent(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.pagecontent.$options(undefined, options))
}

export async function postAdminConfigStreamtitle(
  args: InferRequestType<typeof client.admin.config.streamtitle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.streamtitle.$post(args, options))
}

export async function optionsAdminConfigStreamtitle(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.streamtitle.$options(undefined, options))
}

export async function postAdminConfigName(
  args: InferRequestType<typeof client.admin.config.name.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.name.$post(args, options))
}

export async function optionsAdminConfigName(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.name.$options(undefined, options))
}

export async function postAdminConfigServersummary(
  args: InferRequestType<typeof client.admin.config.serversummary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.serversummary.$post(args, options))
}

export async function optionsAdminConfigServersummary(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.serversummary.$options(undefined, options))
}

export async function postAdminConfigOfflinemessage(
  args: InferRequestType<typeof client.admin.config.offlinemessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.offlinemessage.$post(args, options))
}

export async function optionsAdminConfigOfflinemessage(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.offlinemessage.$options(undefined, options))
}

export async function postAdminConfigWelcomemessage(
  args: InferRequestType<typeof client.admin.config.welcomemessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.welcomemessage.$post(args, options))
}

export async function optionsAdminConfigWelcomemessage(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.welcomemessage.$options(undefined, options))
}

export async function postAdminConfigChatDisable(
  args: InferRequestType<typeof client.admin.config.chat.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.disable.$post(args, options))
}

export async function optionsAdminConfigChatDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.chat.disable.$options(undefined, options))
}

export async function postAdminConfigChatJoinmessagesenabled(
  args: InferRequestType<typeof client.admin.config.chat.joinmessagesenabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.joinmessagesenabled.$post(args, options))
}

export async function optionsAdminConfigChatJoinmessagesenabled(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.joinmessagesenabled.$options(undefined, options),
  )
}

export async function postAdminConfigChatEstablishedusermode(
  args: InferRequestType<typeof client.admin.config.chat.establishedusermode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.establishedusermode.$post(args, options))
}

export async function optionsAdminConfigChatEstablishedusermode(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.establishedusermode.$options(undefined, options),
  )
}

export async function postAdminConfigChatForbiddenusernames(
  args: InferRequestType<typeof client.admin.config.chat.forbiddenusernames.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.forbiddenusernames.$post(args, options))
}

export async function optionsAdminConfigChatForbiddenusernames(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.forbiddenusernames.$options(undefined, options),
  )
}

export async function postAdminConfigChatSuggestedusernames(
  args: InferRequestType<typeof client.admin.config.chat.suggestedusernames.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.suggestedusernames.$post(args, options))
}

export async function optionsAdminConfigChatSuggestedusernames(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.suggestedusernames.$options(undefined, options),
  )
}

export async function postAdminConfigChatSpamprotectionenabled(
  args: InferRequestType<typeof client.admin.config.chat.spamprotectionenabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.spamprotectionenabled.$post(args, options))
}

export async function optionsAdminConfigChatSpamprotectionenabled(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.spamprotectionenabled.$options(undefined, options),
  )
}

export async function postAdminConfigChatSlurfilterenabled(
  args: InferRequestType<typeof client.admin.config.chat.slurfilterenabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.slurfilterenabled.$post(args, options))
}

export async function optionsAdminConfigChatSlurfilterenabled(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.slurfilterenabled.$options(undefined, options),
  )
}

export async function postAdminConfigChatRequireauthentication(
  args: InferRequestType<typeof client.admin.config.chat.requireauthentication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.chat.requireauthentication.$post(args, options))
}

export async function optionsAdminConfigChatRequireauthentication(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.chat.requireauthentication.$options(undefined, options),
  )
}

export async function postAdminConfigVideoCodec(
  args: InferRequestType<typeof client.admin.config.video.codec.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.video.codec.$post(args, options))
}

export async function optionsAdminConfigVideoCodec(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.video.codec.$options(undefined, options))
}

export async function postAdminConfigVideoStreamlatencylevel(
  args: InferRequestType<typeof client.admin.config.video.streamlatencylevel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.video.streamlatencylevel.$post(args, options))
}

export async function optionsAdminConfigVideoStreamlatencylevel(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.video.streamlatencylevel.$options(undefined, options),
  )
}

export async function postAdminConfigVideoStreamoutputvariants(
  args: InferRequestType<typeof client.admin.config.video.streamoutputvariants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.video.streamoutputvariants.$post(args, options))
}

export async function optionsAdminConfigVideoStreamoutputvariants(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.video.streamoutputvariants.$options(undefined, options),
  )
}

export async function postAdminConfigAppearance(
  args: InferRequestType<typeof client.admin.config.appearance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.appearance.$post(args, options))
}

export async function optionsAdminConfigAppearance(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.appearance.$options(undefined, options))
}

export async function postAdminConfigLogo(
  args: InferRequestType<typeof client.admin.config.logo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.logo.$post(args, options))
}

export async function optionsAdminConfigLogo(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.logo.$options(undefined, options))
}

export async function postAdminConfigFavicon(
  args: InferRequestType<typeof client.admin.config.favicon.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.favicon.$post(args, options))
}

export async function deleteAdminConfigFavicon(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.favicon.$delete(undefined, options))
}

export async function optionsAdminConfigFavicon(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.favicon.$options(undefined, options))
}

export async function postAdminConfigTags(
  args: InferRequestType<typeof client.admin.config.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.tags.$post(args, options))
}

export async function optionsAdminConfigTags(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.tags.$options(undefined, options))
}

export async function postAdminConfigFfmpegpath(
  args: InferRequestType<typeof client.admin.config.ffmpegpath.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.ffmpegpath.$post(args, options))
}

export async function optionsAdminConfigFfmpegpath(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.ffmpegpath.$options(undefined, options))
}

export async function postAdminConfigWebserverport(
  args: InferRequestType<typeof client.admin.config.webserverport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.webserverport.$post(args, options))
}

export async function optionsAdminConfigWebserverport(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.webserverport.$options(undefined, options))
}

export async function postAdminConfigWebserverip(
  args: InferRequestType<typeof client.admin.config.webserverip.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.webserverip.$post(args, options))
}

export async function optionsAdminConfigWebserverip(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.webserverip.$options(undefined, options))
}

export async function postAdminConfigRtmpserverport(
  args: InferRequestType<typeof client.admin.config.rtmpserverport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.rtmpserverport.$post(args, options))
}

export async function optionsAdminConfigRtmpserverport(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.rtmpserverport.$options(undefined, options))
}

export async function postAdminConfigRtmpserverbindaddress(
  args: InferRequestType<typeof client.admin.config.rtmpserverbindaddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.rtmpserverbindaddress.$post(args, options))
}

export async function optionsAdminConfigRtmpserverbindaddress(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.rtmpserverbindaddress.$options(undefined, options))
}

export async function postAdminConfigSockethostoverride(
  args: InferRequestType<typeof client.admin.config.sockethostoverride.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.sockethostoverride.$post(args, options))
}

export async function optionsAdminConfigSockethostoverride(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.sockethostoverride.$options(undefined, options))
}

export async function postAdminConfigVideoservingendpoint(
  args: InferRequestType<typeof client.admin.config.videoservingendpoint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.videoservingendpoint.$post(args, options))
}

export async function optionsAdminConfigVideoservingendpoint(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.videoservingendpoint.$options(undefined, options))
}

export async function postAdminConfigNsfw(
  args: InferRequestType<typeof client.admin.config.nsfw.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.nsfw.$post(args, options))
}

export async function optionsAdminConfigNsfw(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.nsfw.$options(undefined, options))
}

export async function postAdminConfigAutoplay(
  args: InferRequestType<typeof client.admin.config.autoplay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.autoplay.$post(args, options))
}

export async function optionsAdminConfigAutoplay(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.autoplay.$options(undefined, options))
}

export async function postAdminConfigDirectoryenabled(
  args: InferRequestType<typeof client.admin.config.directoryenabled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.directoryenabled.$post(args, options))
}

export async function optionsAdminConfigDirectoryenabled(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.directoryenabled.$options(undefined, options))
}

export async function postAdminConfigSocialhandles(
  args: InferRequestType<typeof client.admin.config.socialhandles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.socialhandles.$post(args, options))
}

export async function optionsAdminConfigSocialhandles(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.socialhandles.$options(undefined, options))
}

export async function postAdminConfigS3(
  args: InferRequestType<typeof client.admin.config.s3.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.s3.$post(args, options))
}

export async function optionsAdminConfigS3(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.s3.$options(undefined, options))
}

export async function postAdminConfigServerurl(
  args: InferRequestType<typeof client.admin.config.serverurl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.serverurl.$post(args, options))
}

export async function optionsAdminConfigServerurl(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.serverurl.$options(undefined, options))
}

export async function postAdminConfigExternalactions(
  args: InferRequestType<typeof client.admin.config.externalactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.externalactions.$post(args, options))
}

export async function optionsAdminConfigExternalactions(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.externalactions.$options(undefined, options))
}

export async function postAdminConfigCustomstyles(
  args: InferRequestType<typeof client.admin.config.customstyles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.customstyles.$post(args, options))
}

export async function optionsAdminConfigCustomstyles(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.customstyles.$options(undefined, options))
}

export async function postAdminConfigCustomjavascript(
  args: InferRequestType<typeof client.admin.config.customjavascript.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.customjavascript.$post(args, options))
}

export async function optionsAdminConfigCustomjavascript(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.customjavascript.$options(undefined, options))
}

export async function postAdminConfigHideviewercount(
  args: InferRequestType<typeof client.admin.config.hideviewercount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.hideviewercount.$post(args, options))
}

export async function optionsAdminConfigHideviewercount(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.hideviewercount.$options(undefined, options))
}

export async function postAdminConfigDisablesearchindexing(
  args: InferRequestType<typeof client.admin.config.disablesearchindexing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.disablesearchindexing.$post(args, options))
}

export async function optionsAdminConfigDisablesearchindexing(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.disablesearchindexing.$options(undefined, options))
}

export async function postAdminConfigFederationEnable(
  args: InferRequestType<typeof client.admin.config.federation.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.enable.$post(args, options))
}

export async function optionsAdminConfigFederationEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.federation.enable.$options(undefined, options))
}

export async function postAdminConfigFederationPrivate(
  args: InferRequestType<typeof client.admin.config.federation.private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.private.$post(args, options))
}

export async function optionsAdminConfigFederationPrivate(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.federation.private.$options(undefined, options))
}

export async function postAdminConfigFederationShowengagement(
  args: InferRequestType<typeof client.admin.config.federation.showengagement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.showengagement.$post(args, options))
}

export async function optionsAdminConfigFederationShowengagement(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.federation.showengagement.$options(undefined, options),
  )
}

export async function postAdminConfigFederationEnablequotes(
  args: InferRequestType<typeof client.admin.config.federation.enablequotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.enablequotes.$post(args, options))
}

export async function optionsAdminConfigFederationEnablequotes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.federation.enablequotes.$options(undefined, options),
  )
}

export async function postAdminConfigFederationHidefollowers(
  args: InferRequestType<typeof client.admin.config.federation.hidefollowers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.hidefollowers.$post(args, options))
}

export async function optionsAdminConfigFederationHidefollowers(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.federation.hidefollowers.$options(undefined, options),
  )
}

export async function postAdminConfigFederationUsername(
  args: InferRequestType<typeof client.admin.config.federation.username.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.username.$post(args, options))
}

export async function optionsAdminConfigFederationUsername(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.federation.username.$options(undefined, options))
}

export async function postAdminConfigFederationLivemessage(
  args: InferRequestType<typeof client.admin.config.federation.livemessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.livemessage.$post(args, options))
}

export async function optionsAdminConfigFederationLivemessage(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.federation.livemessage.$options(undefined, options),
  )
}

export async function postAdminConfigFederationBlockdomains(
  args: InferRequestType<typeof client.admin.config.federation.blockdomains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.federation.blockdomains.$post(args, options))
}

export async function optionsAdminConfigFederationBlockdomains(options?: ClientRequestOptions) {
  return await parseResponse(
    client.admin.config.federation.blockdomains.$options(undefined, options),
  )
}

export async function getFederationServers(options?: ClientRequestOptions) {
  return await parseResponse(client.federation.servers.$get(undefined, options))
}

export async function getAdminFederationServers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.federation.servers.$get(undefined, options))
}

export async function postAdminFederationServers(
  args: InferRequestType<typeof client.admin.federation.servers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.servers.$post(args, options))
}

export async function optionsAdminFederationServers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.federation.servers.$options(undefined, options))
}

export async function deleteAdminFederationServersId(
  args: InferRequestType<(typeof client.admin.federation.servers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.servers[':id'].$delete(args, options))
}

export async function optionsAdminFederationServersId(
  args: InferRequestType<(typeof client.admin.federation.servers)[':id']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.servers[':id'].$options(args, options))
}

export async function putAdminFederationServersIdReorder(
  args: InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.servers[':id'].reorder.$put(args, options))
}

export async function optionsAdminFederationServersIdReorder(
  args: InferRequestType<(typeof client.admin.federation.servers)[':id']['reorder']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.servers[':id'].reorder.$options(args, options))
}

export async function getAdminFederationFeatureRequests(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.federation['feature-requests'].$get(undefined, options))
}

export async function postAdminConfigNotificationsDiscord(
  args: InferRequestType<typeof client.admin.config.notifications.discord.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.notifications.discord.$post(args, options))
}

export async function optionsAdminConfigNotificationsDiscord(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.notifications.discord.$options(undefined, options))
}

export async function postAdminConfigNotificationsBrowser(
  args: InferRequestType<typeof client.admin.config.notifications.browser.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.notifications.browser.$post(args, options))
}

export async function optionsAdminConfigNotificationsBrowser(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.notifications.browser.$options(undefined, options))
}

export async function getAdminWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.webhooks.$get(undefined, options))
}

export async function optionsAdminWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.webhooks.$options(undefined, options))
}

export async function postAdminWebhooksDelete(
  args: InferRequestType<typeof client.admin.webhooks.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.webhooks.delete.$post(args, options))
}

export async function optionsAdminWebhooksDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.webhooks.delete.$options(undefined, options))
}

export async function postAdminWebhooksCreate(
  args: InferRequestType<typeof client.admin.webhooks.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.webhooks.create.$post(args, options))
}

export async function optionsAdminWebhooksCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.webhooks.create.$options(undefined, options))
}

export async function getAdminAccesstokens(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.accesstokens.$get(undefined, options))
}

export async function optionsAdminAccesstokens(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.accesstokens.$options(undefined, options))
}

export async function postAdminAccesstokensDelete(
  args: InferRequestType<typeof client.admin.accesstokens.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.accesstokens.delete.$post(args, options))
}

export async function optionsAdminAccesstokensDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.accesstokens.delete.$options(undefined, options))
}

export async function postAdminAccesstokensCreate(
  args: InferRequestType<typeof client.admin.accesstokens.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.accesstokens.create.$post(args, options))
}

export async function optionsAdminAccesstokensCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.accesstokens.create.$options(undefined, options))
}

export async function postAdminYpReset(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.yp.reset.$post(undefined, options))
}

export async function optionsAdminYpReset(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.yp.reset.$options(undefined, options))
}

export async function getAdminMetricsVideo(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.metrics.video.$get(undefined, options))
}

export async function optionsAdminMetricsVideo(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.metrics.video.$options(undefined, options))
}

export async function postAdminFederationSend(
  args: InferRequestType<typeof client.admin.federation.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.send.$post(args, options))
}

export async function optionsAdminFederationSend(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.federation.send.$options(undefined, options))
}

export async function getAdminFederationActions(
  args: InferRequestType<typeof client.admin.federation.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.federation.actions.$get(args, options))
}

export async function optionsAdminFederationActions(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.federation.actions.$options(undefined, options))
}

export async function postIntegrationsChatSystem(
  args: InferRequestType<typeof client.integrations.chat.system.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.chat.system.$post(args, options))
}

export async function optionsIntegrationsChatSystem(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.system.$options(undefined, options))
}

export async function postIntegrationsChatSystemClientClientId(
  args: InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations.chat.system.client[':clientId'].$post(args, options),
  )
}

export async function optionsIntegrationsChatSystemClientClientId(
  args: InferRequestType<(typeof client.integrations.chat.system.client)[':clientId']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations.chat.system.client[':clientId'].$options(args, options),
  )
}

export async function postIntegrationsChatUser(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.user.$post(undefined, options))
}

export async function optionsIntegrationsChatUser(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.user.$options(undefined, options))
}

export async function postIntegrationsChatSend(
  args: InferRequestType<typeof client.integrations.chat.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.chat.send.$post(args, options))
}

export async function optionsIntegrationsChatSend(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.send.$options(undefined, options))
}

export async function postIntegrationsChatAction(
  args: InferRequestType<typeof client.integrations.chat.action.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.chat.action.$post(args, options))
}

export async function optionsIntegrationsChatAction(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.action.$options(undefined, options))
}

export async function postIntegrationsChatMessagevisibility(
  args: InferRequestType<typeof client.integrations.chat.messagevisibility.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.chat.messagevisibility.$post(args, options))
}

export async function optionsIntegrationsChatMessagevisibility(options?: ClientRequestOptions) {
  return await parseResponse(
    client.integrations.chat.messagevisibility.$options(undefined, options),
  )
}

export async function getIntegrationsStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.status.$get(undefined, options))
}

export async function postIntegrationsStreamtitle(
  args: InferRequestType<typeof client.integrations.streamtitle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.streamtitle.$post(args, options))
}

export async function optionsIntegrationsStreamtitle(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.streamtitle.$options(undefined, options))
}

export async function getIntegrationsChat(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.$get(undefined, options))
}

export async function optionsIntegrationsChat(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.chat.$options(undefined, options))
}

export async function getIntegrationsClients(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.clients.$get(undefined, options))
}

export async function optionsIntegrationsClients(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.clients.$options(undefined, options))
}

export async function getIntegrationsModerationChatUserUserId(
  args: InferRequestType<(typeof client.integrations.moderation.chat.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrations.moderation.chat.user[':userId'].$get(args, options),
  )
}

export async function getModerationChatUserUserId(
  args: InferRequestType<(typeof client.moderation.chat.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.moderation.chat.user[':userId'].$get(args, options))
}

export async function postAuthIndieauth(
  args: InferRequestType<typeof client.auth.indieauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.indieauth.$post(args, options))
}

export async function getAuthIndieauthCallback(
  args: InferRequestType<typeof client.auth.indieauth.callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.indieauth.callback.$get(args, options))
}

export async function getAuthProviderIndieauth(
  args: InferRequestType<typeof client.auth.provider.indieauth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.provider.indieauth.$get(args, options))
}

export async function postAuthProviderIndieauth(
  args: InferRequestType<typeof client.auth.provider.indieauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.provider.indieauth.$post(args, options))
}

export async function postAuthFediverse(
  args: InferRequestType<typeof client.auth.fediverse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.fediverse.$post(args, options))
}

export async function postAuthFediverseVerify(
  args: InferRequestType<typeof client.auth.fediverse.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.fediverse.verify.$post(args, options))
}
