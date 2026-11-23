type MaskPosition = {
  point: 'forehead' | 'eyes' | 'mouth' | 'chin'
  scale: number
  x_shift: number
  y_shift: number
}
type InputFile = { [x: string]: unknown }
type ResponseParameters = {
  migrate_to_chat_id?: number | undefined
  retry_after?: number | undefined
}
type Error = {
  description: string
  error_code: number
  ok: boolean
  parameters?: ResponseParameters | undefined
}
type User = {
  can_join_groups?: boolean | undefined
  can_read_all_group_messages?: boolean | undefined
  first_name: string
  id: number
  is_bot: boolean
  language_code?: string | undefined
  last_name?: string | undefined
  supports_inline_queries?: boolean | undefined
  username?: string | undefined
}
type MessageEntity = {
  language?: string | undefined
  length: number
  offset: number
  type:
    | 'mention'
    | 'hashtag'
    | 'cashtag'
    | 'bot_command'
    | 'url'
    | 'email'
    | 'phone_number'
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'code'
    | 'pre'
    | 'text_link'
    | 'text_mention'
  url?: string | undefined
  user?: User | undefined
}
type InputTextMessageContent = {
  disable_web_page_preview?: boolean | undefined
  entities?: MessageEntity[] | undefined
  message_text: string
  parse_mode?: string | undefined
}
type InputLocationMessageContent = {
  heading?: number | undefined
  horizontal_accuracy?: number | undefined
  latitude: number
  live_period?: number | undefined
  longitude: number
  proximity_alert_radius?: number | undefined
}
type InputVenueMessageContent = {
  address: string
  foursquare_id?: string | undefined
  foursquare_type?: string | undefined
  google_place_id?: string | undefined
  google_place_type?: string | undefined
  latitude: number
  longitude: number
  title: string
}
type InputContactMessageContent = {
  first_name: string
  last_name?: string | undefined
  phone_number: string
  vcard?: string | undefined
}
type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
type CallbackGame = { [x: string]: unknown }
type LoginUrl = {
  bot_username?: string | undefined
  forward_text?: string | undefined
  request_write_access?: boolean | undefined
  url: string
}
type InlineKeyboardButton = {
  callback_data?: string | undefined
  callback_game?: CallbackGame | undefined
  login_url?: LoginUrl | undefined
  pay?: boolean | undefined
  switch_inline_query?: string | undefined
  switch_inline_query_current_chat?: string | undefined
  text: string
  url?: string | undefined
}
type InlineKeyboardMarkup = { inline_keyboard: InlineKeyboardButton[][] }
type InlineQueryResultCachedAudio = {
  audio_file_id: string
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  type: string
}
type InlineQueryResultCachedDocument = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  description?: string | undefined
  document_file_id: string
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title: string
  type: string
}
type InlineQueryResultCachedGif = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  gif_file_id: string
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title?: string | undefined
  type: string
}
type InlineQueryResultCachedMpeg4Gif = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  mpeg4_file_id: string
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title?: string | undefined
  type: string
}
type InlineQueryResultCachedPhoto = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  description?: string | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  photo_file_id: string
  reply_markup?: InlineKeyboardMarkup | undefined
  title?: string | undefined
  type: string
}
type InlineQueryResultCachedSticker = {
  id: string
  input_message_content?: InputMessageContent | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  sticker_file_id: string
  type: string
}
type InlineQueryResultCachedVideo = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  description?: string | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title: string
  type: string
  video_file_id: string
}
type InlineQueryResultCachedVoice = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title: string
  type: string
  voice_file_id: string
}
type InlineQueryResultArticle = {
  description?: string | undefined
  hide_url?: boolean | undefined
  id: string
  input_message_content: InputMessageContent
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_height?: number | undefined
  thumb_url?: string | undefined
  thumb_width?: number | undefined
  title: string
  type: string
  url?: string | undefined
}
type InlineQueryResultAudio = {
  audio_duration?: number | undefined
  audio_url: string
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  performer?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title: string
  type: string
}
type InlineQueryResultContact = {
  first_name: string
  id: string
  input_message_content?: InputMessageContent | undefined
  last_name?: string | undefined
  phone_number: string
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_height?: number | undefined
  thumb_url?: string | undefined
  thumb_width?: number | undefined
  type: string
  vcard?: string | undefined
}
type InlineQueryResultGame = {
  game_short_name: string
  id: string
  reply_markup?: InlineKeyboardMarkup | undefined
  type: string
}
type InlineQueryResultDocument = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  description?: string | undefined
  document_url: string
  id: string
  input_message_content?: InputMessageContent | undefined
  mime_type: 'application/pdf' | 'application/zip'
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_height?: number | undefined
  thumb_url?: string | undefined
  thumb_width?: number | undefined
  title: string
  type: string
}
type InlineQueryResultGif = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  gif_duration?: number | undefined
  gif_height?: number | undefined
  gif_url: string
  gif_width?: number | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4' | undefined
  thumb_url: string
  title?: string | undefined
  type: string
}
type InlineQueryResultLocation = {
  heading?: number | undefined
  horizontal_accuracy?: number | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  latitude: number
  live_period?: number | undefined
  longitude: number
  proximity_alert_radius?: number | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_height?: number | undefined
  thumb_url?: string | undefined
  thumb_width?: number | undefined
  title: string
  type: string
}
type InlineQueryResultMpeg4Gif = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  mpeg4_duration?: number | undefined
  mpeg4_height?: number | undefined
  mpeg4_url: string
  mpeg4_width?: number | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4' | undefined
  thumb_url: string
  title?: string | undefined
  type: string
}
type InlineQueryResultPhoto = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  description?: string | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  photo_height?: number | undefined
  photo_url: string
  photo_width?: number | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_url: string
  title?: string | undefined
  type: string
}
type InlineQueryResultVenue = {
  address: string
  foursquare_id?: string | undefined
  foursquare_type?: string | undefined
  google_place_id?: string | undefined
  google_place_type?: string | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  latitude: number
  longitude: number
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_height?: number | undefined
  thumb_url?: string | undefined
  thumb_width?: number | undefined
  title: string
  type: string
}
type InlineQueryResultVideo = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  description?: string | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  mime_type: string
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  thumb_url: string
  title: string
  type: string
  video_duration?: number | undefined
  video_height?: number | undefined
  video_url: string
  video_width?: number | undefined
}
type InlineQueryResultVoice = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  id: string
  input_message_content?: InputMessageContent | undefined
  parse_mode?: string | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  title: string
  type: string
  voice_duration?: number | undefined
  voice_url: string
}
type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice
type LabeledPrice = { amount: number; label: string }
type ShippingOption = { id: string; prices: LabeledPrice[]; title: string }
type KeyboardButtonPollType = { type?: string | undefined }
type KeyboardButton = {
  request_contact?: boolean | undefined
  request_location?: boolean | undefined
  request_poll?: KeyboardButtonPollType | undefined
  text: string
}
type ReplyKeyboardMarkup = {
  keyboard: KeyboardButton[][]
  one_time_keyboard?: boolean | undefined
  resize_keyboard?: boolean | undefined
  selective?: boolean | undefined
}
type ReplyKeyboardRemove = { remove_keyboard: boolean; selective?: boolean | undefined }
type ForceReply = { force_reply: boolean; selective?: boolean | undefined }
type MessageId = { message_id: number }
type PhotoSize = {
  file_id: string
  file_size?: number | undefined
  file_unique_id: string
  height: number
  width: number
}
type Animation = {
  duration: number
  file_id: string
  file_name?: string | undefined
  file_size?: number | undefined
  file_unique_id: string
  height: number
  mime_type?: string | undefined
  thumb?: PhotoSize | undefined
  width: number
}
type Audio = {
  duration: number
  file_id: string
  file_name?: string | undefined
  file_size?: number | undefined
  file_unique_id: string
  mime_type?: string | undefined
  performer?: string | undefined
  thumb?: PhotoSize | undefined
  title?: string | undefined
}
type Location = {
  heading?: number | undefined
  horizontal_accuracy?: number | undefined
  latitude: number
  live_period?: number | undefined
  longitude: number
  proximity_alert_radius?: number | undefined
}
type ChatLocation = { address: string; location: Location }
type ChatPermissions = {
  can_add_web_page_previews?: boolean | undefined
  can_change_info?: boolean | undefined
  can_invite_users?: boolean | undefined
  can_pin_messages?: boolean | undefined
  can_send_media_messages?: boolean | undefined
  can_send_messages?: boolean | undefined
  can_send_other_messages?: boolean | undefined
  can_send_polls?: boolean | undefined
}
type ChatPhoto = {
  big_file_id: string
  big_file_unique_id: string
  small_file_id: string
  small_file_unique_id: string
}
type Chat = {
  bio?: string | undefined
  can_set_sticker_set?: boolean | undefined
  description?: string | undefined
  first_name?: string | undefined
  id: number
  invite_link?: string | undefined
  last_name?: string | undefined
  linked_chat_id?: number | undefined
  location?: ChatLocation | undefined
  permissions?: ChatPermissions | undefined
  photo?: ChatPhoto | undefined
  pinned_message?: Message | undefined
  slow_mode_delay?: number | undefined
  sticker_set_name?: string | undefined
  title?: string | undefined
  type: 'private' | 'group' | 'supergroup' | 'channel'
  username?: string | undefined
}
type Contact = {
  first_name: string
  last_name?: string | undefined
  phone_number: string
  user_id?: number | undefined
  vcard?: string | undefined
}
type Dice = { emoji: string; value: number }
type Document = {
  file_id: string
  file_name?: string | undefined
  file_size?: number | undefined
  file_unique_id: string
  mime_type?: string | undefined
  thumb?: PhotoSize | undefined
}
type Game = {
  animation?: Animation | undefined
  description: string
  photo: PhotoSize[]
  text?: string | undefined
  text_entities?: MessageEntity[] | undefined
  title: string
}
type Invoice = {
  currency: string
  description: string
  start_parameter: string
  title: string
  total_amount: number
}
type EncryptedCredentials = { data: string; hash: string; secret: string }
type PassportFile = {
  file_date: number
  file_id: string
  file_size: number
  file_unique_id: string
}
type EncryptedPassportElement = {
  data?: string | undefined
  email?: string | undefined
  files?: PassportFile[] | undefined
  front_side?: PassportFile | undefined
  hash: string
  phone_number?: string | undefined
  reverse_side?: PassportFile | undefined
  selfie?: PassportFile | undefined
  translation?: PassportFile[] | undefined
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
    | 'phone_number'
    | 'email'
}
type PassportData = { credentials: EncryptedCredentials; data: EncryptedPassportElement[] }
type PollOption = { text: string; voter_count: number }
type Poll = {
  allows_multiple_answers: boolean
  close_date?: number | undefined
  correct_option_id?: number | undefined
  explanation?: string | undefined
  explanation_entities?: MessageEntity[] | undefined
  id: string
  is_anonymous: boolean
  is_closed: boolean
  open_period?: number | undefined
  options: PollOption[]
  question: string
  total_voter_count: number
  type: string
}
type ProximityAlertTriggered = { distance: number; traveler: User; watcher: User }
type Sticker = {
  emoji?: string | undefined
  file_id: string
  file_size?: number | undefined
  file_unique_id: string
  height: number
  is_animated: boolean
  mask_position?: MaskPosition | undefined
  set_name?: string | undefined
  thumb?: PhotoSize | undefined
  width: number
}
type ShippingAddress = {
  city: string
  country_code: string
  post_code: string
  state: string
  street_line1: string
  street_line2: string
}
type OrderInfo = {
  email?: string | undefined
  name?: string | undefined
  phone_number?: string | undefined
  shipping_address?: ShippingAddress | undefined
}
type SuccessfulPayment = {
  currency: string
  invoice_payload: string
  order_info?: OrderInfo | undefined
  provider_payment_charge_id: string
  shipping_option_id?: string | undefined
  telegram_payment_charge_id: string
  total_amount: number
}
type Venue = {
  address: string
  foursquare_id?: string | undefined
  foursquare_type?: string | undefined
  google_place_id?: string | undefined
  google_place_type?: string | undefined
  location: Location
  title: string
}
type Video = {
  duration: number
  file_id: string
  file_name?: string | undefined
  file_size?: number | undefined
  file_unique_id: string
  height: number
  mime_type?: string | undefined
  thumb?: PhotoSize | undefined
  width: number
}
type VideoNote = {
  duration: number
  file_id: string
  file_size?: number | undefined
  file_unique_id: string
  length: number
  thumb?: PhotoSize | undefined
}
type Voice = {
  duration: number
  file_id: string
  file_size?: number | undefined
  file_unique_id: string
  mime_type?: string | undefined
}
type Message = {
  animation?: Animation | undefined
  audio?: Audio | undefined
  author_signature?: string | undefined
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  channel_chat_created?: boolean | undefined
  chat: Chat
  connected_website?: string | undefined
  contact?: Contact | undefined
  date: number
  delete_chat_photo?: boolean | undefined
  dice?: Dice | undefined
  document?: Document | undefined
  edit_date?: number | undefined
  entities?: MessageEntity[] | undefined
  forward_date?: number | undefined
  forward_from?: User | undefined
  forward_from_chat?: Chat | undefined
  forward_from_message_id?: number | undefined
  forward_sender_name?: string | undefined
  forward_signature?: string | undefined
  from?: User | undefined
  game?: Game | undefined
  group_chat_created?: boolean | undefined
  invoice?: Invoice | undefined
  left_chat_member?: User | undefined
  location?: Location | undefined
  media_group_id?: string | undefined
  message_id: number
  migrate_from_chat_id?: number | undefined
  migrate_to_chat_id?: number | undefined
  new_chat_members?: User[] | undefined
  new_chat_photo?: PhotoSize[] | undefined
  new_chat_title?: string | undefined
  passport_data?: PassportData | undefined
  photo?: PhotoSize[] | undefined
  pinned_message?: Message | undefined
  poll?: Poll | undefined
  proximity_alert_triggered?: ProximityAlertTriggered | undefined
  reply_markup?: InlineKeyboardMarkup | undefined
  reply_to_message?: Message | undefined
  sender_chat?: Chat | undefined
  sticker?: Sticker | undefined
  successful_payment?: SuccessfulPayment | undefined
  supergroup_chat_created?: boolean | undefined
  text?: string | undefined
  venue?: Venue | undefined
  via_bot?: User | undefined
  video?: Video | undefined
  video_note?: VideoNote | undefined
  voice?: Voice | undefined
}
type InputMediaAnimation = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  duration?: number | undefined
  height?: number | undefined
  media: string
  parse_mode?: string | undefined
  thumb?: InputFile | string | undefined
  type: string
  width?: number | undefined
}
type InputMediaDocument = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  disable_content_type_detection?: boolean | undefined
  media: string
  parse_mode?: string | undefined
  thumb?: InputFile | string | undefined
  type: string
}
type InputMediaAudio = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  duration?: number | undefined
  media: string
  parse_mode?: string | undefined
  performer?: string | undefined
  thumb?: InputFile | string | undefined
  title?: string | undefined
  type: string
}
type InputMediaPhoto = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  media: string
  parse_mode?: string | undefined
  type: string
}
type InputMediaVideo = {
  caption?: string | undefined
  caption_entities?: MessageEntity[] | undefined
  duration?: number | undefined
  height?: number | undefined
  media: string
  parse_mode?: string | undefined
  supports_streaming?: boolean | undefined
  thumb?: InputFile | string | undefined
  type: string
  width?: number | undefined
}
type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo
type ChatMember = {
  can_add_web_page_previews?: boolean | undefined
  can_be_edited?: boolean | undefined
  can_change_info?: boolean | undefined
  can_delete_messages?: boolean | undefined
  can_edit_messages?: boolean | undefined
  can_invite_users?: boolean | undefined
  can_pin_messages?: boolean | undefined
  can_post_messages?: boolean | undefined
  can_promote_members?: boolean | undefined
  can_restrict_members?: boolean | undefined
  can_send_media_messages?: boolean | undefined
  can_send_messages?: boolean | undefined
  can_send_other_messages?: boolean | undefined
  can_send_polls?: boolean | undefined
  custom_title?: string | undefined
  is_anonymous?: boolean | undefined
  is_member?: boolean | undefined
  status: 'creator' | 'administrator' | 'member' | 'restricted' | 'left' | 'kicked'
  until_date?: number | undefined
  user: User
}
type File2 = {
  file_id: string
  file_path?: string | undefined
  file_size?: number | undefined
  file_unique_id: string
}
type GameHighScore = { position: number; score: number; user: User }
type BotCommand = { command: string; description: string }
type StickerSet = {
  contains_masks: boolean
  is_animated: boolean
  name: string
  stickers: Sticker[]
  thumb?: PhotoSize | undefined
  title: string
}
type CallbackQuery = {
  chat_instance: string
  data?: string | undefined
  from: User
  game_short_name?: string | undefined
  id: string
  inline_message_id?: string | undefined
  message?: Message | undefined
}
type ChosenInlineResult = {
  from: User
  inline_message_id?: string | undefined
  location?: Location | undefined
  query: string
  result_id: string
}
type InlineQuery = {
  from: User
  id: string
  location?: Location | undefined
  offset: string
  query: string
}
type PollAnswer = { option_ids: number[]; poll_id: string; user: User }
type PreCheckoutQuery = {
  currency: string
  from: User
  id: string
  invoice_payload: string
  order_info?: OrderInfo | undefined
  shipping_option_id?: string | undefined
  total_amount: number
}
type ShippingQuery = {
  from: User
  id: string
  invoice_payload: string
  shipping_address: ShippingAddress
}
type Update = {
  callback_query?: CallbackQuery | undefined
  channel_post?: Message | undefined
  chosen_inline_result?: ChosenInlineResult | undefined
  edited_channel_post?: Message | undefined
  edited_message?: Message | undefined
  inline_query?: InlineQuery | undefined
  message?: Message | undefined
  poll?: Poll | undefined
  poll_answer?: PollAnswer | undefined
  pre_checkout_query?: PreCheckoutQuery | undefined
  shipping_query?: ShippingQuery | undefined
  update_id: number
}
type UserProfilePhotos = { photos: PhotoSize[][]; total_count: number }
type WebhookInfo = {
  allowed_updates?: string[] | undefined
  has_custom_certificate: boolean
  ip_address?: string | undefined
  last_error_date?: number | undefined
  last_error_message?: string | undefined
  max_connections?: number | undefined
  pending_update_count: number
  url: string
}
type PassportElementErrorDataField = {
  data_hash: string
  field_name: string
  message: string
  source: string
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address'
}
type PassportElementErrorFrontSide = {
  file_hash: string
  message: string
  source: string
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport'
}
type PassportElementErrorReverseSide = {
  file_hash: string
  message: string
  source: string
  type: 'driver_license' | 'identity_card'
}
type PassportElementErrorSelfie = {
  file_hash: string
  message: string
  source: string
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport'
}
type PassportElementErrorFile = {
  file_hash: string
  message: string
  source: string
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
}
type PassportElementErrorFiles = {
  file_hashes: string[]
  message: string
  source: string
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
}
type PassportElementErrorTranslationFile = {
  file_hash: string
  message: string
  source: string
  type:
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
}
type PassportElementErrorTranslationFiles = {
  file_hashes: string[]
  message: string
  source: string
  type:
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
}
type PassportElementErrorUnspecified = {
  element_hash: string
  message: string
  source: string
  type: string
}
type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/addStickerToSet': {
      $post:
        | {
            input: {
              form: {
                emojis: string
                mask_position?: MaskPosition | undefined
                name: string
                png_sticker?: InputFile | string | undefined
                tgs_sticker?: InputFile | undefined
                user_id: number
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                emojis: string
                mask_position?: MaskPosition | undefined
                name: string
                png_sticker?: InputFile | string | undefined
                tgs_sticker?: InputFile | undefined
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/answerCallbackQuery': {
      $post:
        | {
            input: {
              json: {
                cache_time?: number | undefined
                callback_query_id: string
                show_alert?: boolean | undefined
                text?: string | undefined
                url?: string | undefined
              }
            } & {
              form: {
                cache_time?: number | undefined
                callback_query_id: string
                show_alert?: boolean | undefined
                text?: string | undefined
                url?: string | undefined
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cache_time?: number | undefined
                callback_query_id: string
                show_alert?: boolean | undefined
                text?: string | undefined
                url?: string | undefined
              }
            } & {
              form: {
                cache_time?: number | undefined
                callback_query_id: string
                show_alert?: boolean | undefined
                text?: string | undefined
                url?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/answerInlineQuery': {
      $post:
        | {
            input: {
              json: {
                cache_time?: number | undefined
                inline_query_id: string
                is_personal?: boolean | undefined
                next_offset?: string | undefined
                results: InlineQueryResult[]
                switch_pm_parameter?: string | undefined
                switch_pm_text?: string | undefined
              }
            } & {
              form: {
                cache_time?: number | undefined
                inline_query_id: string
                is_personal?: boolean | undefined
                next_offset?: string | undefined
                results: InlineQueryResult[]
                switch_pm_parameter?: string | undefined
                switch_pm_text?: string | undefined
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cache_time?: number | undefined
                inline_query_id: string
                is_personal?: boolean | undefined
                next_offset?: string | undefined
                results: InlineQueryResult[]
                switch_pm_parameter?: string | undefined
                switch_pm_text?: string | undefined
              }
            } & {
              form: {
                cache_time?: number | undefined
                inline_query_id: string
                is_personal?: boolean | undefined
                next_offset?: string | undefined
                results: InlineQueryResult[]
                switch_pm_parameter?: string | undefined
                switch_pm_text?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/answerPreCheckoutQuery': {
      $post:
        | {
            input: {
              json: {
                error_message?: string | undefined
                ok: boolean
                pre_checkout_query_id: string
              }
            } & {
              form: {
                error_message?: string | undefined
                ok: boolean
                pre_checkout_query_id: string
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                error_message?: string | undefined
                ok: boolean
                pre_checkout_query_id: string
              }
            } & {
              form: {
                error_message?: string | undefined
                ok: boolean
                pre_checkout_query_id: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/answerShippingQuery': {
      $post:
        | {
            input: {
              json: {
                error_message?: string | undefined
                ok: boolean
                shipping_options?: ShippingOption[] | undefined
                shipping_query_id: string
              }
            } & {
              form: {
                error_message?: string | undefined
                ok: boolean
                shipping_options?: ShippingOption[] | undefined
                shipping_query_id: string
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                error_message?: string | undefined
                ok: boolean
                shipping_options?: ShippingOption[] | undefined
                shipping_query_id: string
              }
            } & {
              form: {
                error_message?: string | undefined
                ok: boolean
                shipping_options?: ShippingOption[] | undefined
                shipping_query_id: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/close': {
      $post:
        | { input: {}; output: { ok: boolean; result: boolean }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/copyMessage': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: { ok: boolean; result: MessageId }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/createNewStickerSet': {
      $post:
        | {
            input: {
              form: {
                contains_masks?: boolean | undefined
                emojis: string
                mask_position?: MaskPosition | undefined
                name: string
                png_sticker?: InputFile | string | undefined
                tgs_sticker?: InputFile | undefined
                title: string
                user_id: number
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                contains_masks?: boolean | undefined
                emojis: string
                mask_position?: MaskPosition | undefined
                name: string
                png_sticker?: InputFile | string | undefined
                tgs_sticker?: InputFile | undefined
                title: string
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deleteChatPhoto': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deleteChatStickerSet': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deleteMessage': {
      $post:
        | {
            input: { json: { chat_id: number | string; message_id: number } } & {
              form: { chat_id: number | string; message_id: number }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; message_id: number } } & {
              form: { chat_id: number | string; message_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deleteStickerFromSet': {
      $post:
        | {
            input: { json: { sticker: string } } & { form: { sticker: string } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { sticker: string } } & { form: { sticker: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deleteWebhook': {
      $post:
        | {
            input: { json: { drop_pending_updates?: boolean | undefined } } & {
              form: { drop_pending_updates?: boolean | undefined }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { drop_pending_updates?: boolean | undefined } } & {
              form: { drop_pending_updates?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/editMessageCaption': {
      $post:
        | {
            input: {
              json: {
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/editMessageLiveLocation': {
      $post:
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                inline_message_id?: string | undefined
                latitude: number
                longitude: number
                message_id?: number | undefined
                proximity_alert_radius?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                inline_message_id?: string | undefined
                latitude: number
                longitude: number
                message_id?: number | undefined
                proximity_alert_radius?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                inline_message_id?: string | undefined
                latitude: number
                longitude: number
                message_id?: number | undefined
                proximity_alert_radius?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                inline_message_id?: string | undefined
                latitude: number
                longitude: number
                message_id?: number | undefined
                proximity_alert_radius?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/editMessageMedia': {
      $post:
        | {
            input: {
              form: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                media: InputMedia
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                media: InputMedia
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/editMessageReplyMarkup': {
      $post:
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/editMessageText': {
      $post:
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
                text: string
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
                text: string
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
                text: string
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                parse_mode?: string | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
                text: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/exportChatInviteLink': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/forwardMessage': {
      $post:
        | {
            input: {
              json: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
              }
            } & {
              form: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
              }
            } & {
              form: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                from_chat_id: number | string
                message_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getChat': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: Chat }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getChatAdministrators': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: ChatMember[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getChatMember': {
      $post:
        | {
            input: { json: { chat_id: number | string; user_id: number } } & {
              form: { chat_id: number | string; user_id: number }
            }
            output: { ok: boolean; result: ChatMember }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; user_id: number } } & {
              form: { chat_id: number | string; user_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getChatMembersCount': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getFile': {
      $post:
        | {
            input: { json: { file_id: string } } & { form: { file_id: string } }
            output: { ok: boolean; result: File2 }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { file_id: string } } & { form: { file_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getGameHighScores': {
      $post:
        | {
            input: {
              json: {
                chat_id?: number | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                user_id: number
              }
            } & {
              form: {
                chat_id?: number | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                user_id: number
              }
            }
            output: { ok: boolean; result: GameHighScore[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id?: number | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                user_id: number
              }
            } & {
              form: {
                chat_id?: number | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getMe': {
      $post:
        | { input: {}; output: { ok: boolean; result: User }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/getMyCommands': {
      $post:
        | {
            input: {}
            output: { ok: boolean; result: BotCommand[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/getStickerSet': {
      $post:
        | {
            input: { json: { name: string } } & { form: { name: string } }
            output: { ok: boolean; result: StickerSet }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string } } & { form: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getUpdates': {
      $post:
        | {
            input: {
              json: {
                allowed_updates?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                timeout?: number | undefined
              }
            } & {
              form: {
                allowed_updates?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                timeout?: number | undefined
              }
            }
            output: { ok: boolean; result: Update[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allowed_updates?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                timeout?: number | undefined
              }
            } & {
              form: {
                allowed_updates?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                timeout?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getUserProfilePhotos': {
      $post:
        | {
            input: {
              json: { limit?: number | undefined; offset?: number | undefined; user_id: number }
            } & {
              form: { limit?: number | undefined; offset?: number | undefined; user_id: number }
            }
            output: { ok: boolean; result: UserProfilePhotos }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { limit?: number | undefined; offset?: number | undefined; user_id: number }
            } & {
              form: { limit?: number | undefined; offset?: number | undefined; user_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/getWebhookInfo': {
      $post:
        | {
            input: {}
            output: { ok: boolean; result: WebhookInfo }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/kickChatMember': {
      $post:
        | {
            input: {
              json: { chat_id: number | string; until_date?: number | undefined; user_id: number }
            } & {
              form: { chat_id: number | string; until_date?: number | undefined; user_id: number }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { chat_id: number | string; until_date?: number | undefined; user_id: number }
            } & {
              form: { chat_id: number | string; until_date?: number | undefined; user_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/leaveChat': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/logOut': {
      $post:
        | { input: {}; output: { ok: boolean; result: boolean }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/pinChatMessage': {
      $post:
        | {
            input: {
              json: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                message_id: number
              }
            } & {
              form: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                message_id: number
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                message_id: number
              }
            } & {
              form: {
                chat_id: number | string
                disable_notification?: boolean | undefined
                message_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/promoteChatMember': {
      $post:
        | {
            input: {
              json: {
                can_change_info?: boolean | undefined
                can_delete_messages?: boolean | undefined
                can_edit_messages?: boolean | undefined
                can_invite_users?: boolean | undefined
                can_pin_messages?: boolean | undefined
                can_post_messages?: boolean | undefined
                can_promote_members?: boolean | undefined
                can_restrict_members?: boolean | undefined
                chat_id: number | string
                is_anonymous?: boolean | undefined
                user_id: number
              }
            } & {
              form: {
                can_change_info?: boolean | undefined
                can_delete_messages?: boolean | undefined
                can_edit_messages?: boolean | undefined
                can_invite_users?: boolean | undefined
                can_pin_messages?: boolean | undefined
                can_post_messages?: boolean | undefined
                can_promote_members?: boolean | undefined
                can_restrict_members?: boolean | undefined
                chat_id: number | string
                is_anonymous?: boolean | undefined
                user_id: number
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                can_change_info?: boolean | undefined
                can_delete_messages?: boolean | undefined
                can_edit_messages?: boolean | undefined
                can_invite_users?: boolean | undefined
                can_pin_messages?: boolean | undefined
                can_post_messages?: boolean | undefined
                can_promote_members?: boolean | undefined
                can_restrict_members?: boolean | undefined
                chat_id: number | string
                is_anonymous?: boolean | undefined
                user_id: number
              }
            } & {
              form: {
                can_change_info?: boolean | undefined
                can_delete_messages?: boolean | undefined
                can_edit_messages?: boolean | undefined
                can_invite_users?: boolean | undefined
                can_pin_messages?: boolean | undefined
                can_post_messages?: boolean | undefined
                can_promote_members?: boolean | undefined
                can_restrict_members?: boolean | undefined
                chat_id: number | string
                is_anonymous?: boolean | undefined
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/restrictChatMember': {
      $post:
        | {
            input: {
              json: {
                chat_id: number | string
                permissions: ChatPermissions
                until_date?: number | undefined
                user_id: number
              }
            } & {
              form: {
                chat_id: number | string
                permissions: ChatPermissions
                until_date?: number | undefined
                user_id: number
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id: number | string
                permissions: ChatPermissions
                until_date?: number | undefined
                user_id: number
              }
            } & {
              form: {
                chat_id: number | string
                permissions: ChatPermissions
                until_date?: number | undefined
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendAnimation': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                animation: InputFile | string
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                height?: number | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
                width?: number | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                animation: InputFile | string
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                height?: number | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
                width?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendAudio': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                audio: InputFile | string
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                parse_mode?: string | undefined
                performer?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
                title?: string | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                audio: InputFile | string
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                parse_mode?: string | undefined
                performer?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendChatAction': {
      $post:
        | {
            input: { json: { action: string; chat_id: number | string } } & {
              form: { action: string; chat_id: number | string }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { action: string; chat_id: number | string } } & {
              form: { action: string; chat_id: number | string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendContact': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                first_name: string
                last_name?: string | undefined
                phone_number: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                vcard?: string | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                first_name: string
                last_name?: string | undefined
                phone_number: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                vcard?: string | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                first_name: string
                last_name?: string | undefined
                phone_number: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                vcard?: string | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                first_name: string
                last_name?: string | undefined
                phone_number: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                vcard?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendDice': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                emoji?: '🎲' | '🎯' | '🏀' | '⚽' | '🎰' | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                emoji?: '🎲' | '🎯' | '🏀' | '⚽' | '🎰' | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                emoji?: '🎲' | '🎯' | '🏀' | '⚽' | '🎰' | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                emoji?: '🎲' | '🎯' | '🏀' | '⚽' | '🎰' | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendDocument': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_content_type_detection?: boolean | undefined
                disable_notification?: boolean | undefined
                document: InputFile | string
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_content_type_detection?: boolean | undefined
                disable_notification?: boolean | undefined
                document: InputFile | string
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendGame': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                disable_notification?: boolean | undefined
                game_short_name: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                disable_notification?: boolean | undefined
                game_short_name: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                disable_notification?: boolean | undefined
                game_short_name: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                disable_notification?: boolean | undefined
                game_short_name: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendInvoice': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                currency: string
                description: string
                disable_notification?: boolean | undefined
                is_flexible?: boolean | undefined
                need_email?: boolean | undefined
                need_name?: boolean | undefined
                need_phone_number?: boolean | undefined
                need_shipping_address?: boolean | undefined
                payload: string
                photo_height?: number | undefined
                photo_size?: number | undefined
                photo_url?: string | undefined
                photo_width?: number | undefined
                prices: LabeledPrice[]
                provider_data?: string | undefined
                provider_token: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
                send_email_to_provider?: boolean | undefined
                send_phone_number_to_provider?: boolean | undefined
                start_parameter: string
                title: string
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                currency: string
                description: string
                disable_notification?: boolean | undefined
                is_flexible?: boolean | undefined
                need_email?: boolean | undefined
                need_name?: boolean | undefined
                need_phone_number?: boolean | undefined
                need_shipping_address?: boolean | undefined
                payload: string
                photo_height?: number | undefined
                photo_size?: number | undefined
                photo_url?: string | undefined
                photo_width?: number | undefined
                prices: LabeledPrice[]
                provider_data?: string | undefined
                provider_token: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
                send_email_to_provider?: boolean | undefined
                send_phone_number_to_provider?: boolean | undefined
                start_parameter: string
                title: string
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                currency: string
                description: string
                disable_notification?: boolean | undefined
                is_flexible?: boolean | undefined
                need_email?: boolean | undefined
                need_name?: boolean | undefined
                need_phone_number?: boolean | undefined
                need_shipping_address?: boolean | undefined
                payload: string
                photo_height?: number | undefined
                photo_size?: number | undefined
                photo_url?: string | undefined
                photo_width?: number | undefined
                prices: LabeledPrice[]
                provider_data?: string | undefined
                provider_token: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
                send_email_to_provider?: boolean | undefined
                send_phone_number_to_provider?: boolean | undefined
                start_parameter: string
                title: string
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number
                currency: string
                description: string
                disable_notification?: boolean | undefined
                is_flexible?: boolean | undefined
                need_email?: boolean | undefined
                need_name?: boolean | undefined
                need_phone_number?: boolean | undefined
                need_shipping_address?: boolean | undefined
                payload: string
                photo_height?: number | undefined
                photo_size?: number | undefined
                photo_url?: string | undefined
                photo_width?: number | undefined
                prices: LabeledPrice[]
                provider_data?: string | undefined
                provider_token: string
                reply_markup?: InlineKeyboardMarkup | undefined
                reply_to_message_id?: number | undefined
                send_email_to_provider?: boolean | undefined
                send_phone_number_to_provider?: boolean | undefined
                start_parameter: string
                title: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendLocation': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                latitude: number
                live_period?: number | undefined
                longitude: number
                proximity_alert_radius?: number | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                latitude: number
                live_period?: number | undefined
                longitude: number
                proximity_alert_radius?: number | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                latitude: number
                live_period?: number | undefined
                longitude: number
                proximity_alert_radius?: number | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                heading?: number | undefined
                horizontal_accuracy?: number | undefined
                latitude: number
                live_period?: number | undefined
                longitude: number
                proximity_alert_radius?: number | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendMediaGroup': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                media: (InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo)[]
                reply_to_message_id?: number | undefined
              }
            }
            output: { ok: boolean; result: Message[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                media: (InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo)[]
                reply_to_message_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendMessage': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                text: string
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                text: string
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                text: string
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                disable_web_page_preview?: boolean | undefined
                entities?: MessageEntity[] | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                text: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendPhoto': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                parse_mode?: string | undefined
                photo: InputFile | string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                parse_mode?: string | undefined
                photo: InputFile | string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendPoll': {
      $post:
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                allows_multiple_answers?: boolean | undefined
                chat_id: number | string
                close_date?: number | undefined
                correct_option_id?: number | undefined
                disable_notification?: boolean | undefined
                explanation?: string | undefined
                explanation_entities?: MessageEntity[] | undefined
                explanation_parse_mode?: string | undefined
                is_anonymous?: boolean | undefined
                is_closed?: boolean | undefined
                open_period?: number | undefined
                options: string[]
                question: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                type?: string | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                allows_multiple_answers?: boolean | undefined
                chat_id: number | string
                close_date?: number | undefined
                correct_option_id?: number | undefined
                disable_notification?: boolean | undefined
                explanation?: string | undefined
                explanation_entities?: MessageEntity[] | undefined
                explanation_parse_mode?: string | undefined
                is_anonymous?: boolean | undefined
                is_closed?: boolean | undefined
                open_period?: number | undefined
                options: string[]
                question: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                type?: string | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allow_sending_without_reply?: boolean | undefined
                allows_multiple_answers?: boolean | undefined
                chat_id: number | string
                close_date?: number | undefined
                correct_option_id?: number | undefined
                disable_notification?: boolean | undefined
                explanation?: string | undefined
                explanation_entities?: MessageEntity[] | undefined
                explanation_parse_mode?: string | undefined
                is_anonymous?: boolean | undefined
                is_closed?: boolean | undefined
                open_period?: number | undefined
                options: string[]
                question: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                type?: string | undefined
              }
            } & {
              form: {
                allow_sending_without_reply?: boolean | undefined
                allows_multiple_answers?: boolean | undefined
                chat_id: number | string
                close_date?: number | undefined
                correct_option_id?: number | undefined
                disable_notification?: boolean | undefined
                explanation?: string | undefined
                explanation_entities?: MessageEntity[] | undefined
                explanation_parse_mode?: string | undefined
                is_anonymous?: boolean | undefined
                is_closed?: boolean | undefined
                open_period?: number | undefined
                options: string[]
                question: string
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                type?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendSticker': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                sticker: InputFile | string
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                sticker: InputFile | string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendVenue': {
      $post:
        | {
            input: {
              json: {
                address: string
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                foursquare_id?: string | undefined
                foursquare_type?: string | undefined
                google_place_id?: string | undefined
                google_place_type?: string | undefined
                latitude: number
                longitude: number
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                title: string
              }
            } & {
              form: {
                address: string
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                foursquare_id?: string | undefined
                foursquare_type?: string | undefined
                google_place_id?: string | undefined
                google_place_type?: string | undefined
                latitude: number
                longitude: number
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                title: string
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                address: string
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                foursquare_id?: string | undefined
                foursquare_type?: string | undefined
                google_place_id?: string | undefined
                google_place_type?: string | undefined
                latitude: number
                longitude: number
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                title: string
              }
            } & {
              form: {
                address: string
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                foursquare_id?: string | undefined
                foursquare_type?: string | undefined
                google_place_id?: string | undefined
                google_place_type?: string | undefined
                latitude: number
                longitude: number
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                title: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendVideo': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                height?: number | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                supports_streaming?: boolean | undefined
                thumb?: InputFile | string | undefined
                video: InputFile | string
                width?: number | undefined
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                height?: number | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                supports_streaming?: boolean | undefined
                thumb?: InputFile | string | undefined
                video: InputFile | string
                width?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendVideoNote': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                length?: number | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
                video_note: InputFile | string
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                length?: number | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                thumb?: InputFile | string | undefined
                video_note: InputFile | string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sendVoice': {
      $post:
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                voice: InputFile | string
              }
            }
            output: { ok: boolean; result: Message }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allow_sending_without_reply?: boolean | undefined
                caption?: string | undefined
                caption_entities?: MessageEntity[] | undefined
                chat_id: number | string
                disable_notification?: boolean | undefined
                duration?: number | undefined
                parse_mode?: string | undefined
                reply_markup?:
                  | InlineKeyboardMarkup
                  | ReplyKeyboardMarkup
                  | ReplyKeyboardRemove
                  | ForceReply
                  | undefined
                reply_to_message_id?: number | undefined
                voice: InputFile | string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setChatAdministratorCustomTitle': {
      $post:
        | {
            input: { json: { chat_id: number | string; custom_title: string; user_id: number } } & {
              form: { chat_id: number | string; custom_title: string; user_id: number }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; custom_title: string; user_id: number } } & {
              form: { chat_id: number | string; custom_title: string; user_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setChatDescription': {
      $post:
        | {
            input: { json: { chat_id: number | string; description?: string | undefined } } & {
              form: { chat_id: number | string; description?: string | undefined }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; description?: string | undefined } } & {
              form: { chat_id: number | string; description?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setChatPermissions': {
      $post:
        | {
            input: { json: { chat_id: number | string; permissions: ChatPermissions } } & {
              form: { chat_id: number | string; permissions: ChatPermissions }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; permissions: ChatPermissions } } & {
              form: { chat_id: number | string; permissions: ChatPermissions }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setChatPhoto': {
      $post:
        | {
            input: { form: { chat_id: number | string; photo: InputFile } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { chat_id: number | string; photo: InputFile } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setChatStickerSet': {
      $post:
        | {
            input: { json: { chat_id: number | string; sticker_set_name: string } } & {
              form: { chat_id: number | string; sticker_set_name: string }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; sticker_set_name: string } } & {
              form: { chat_id: number | string; sticker_set_name: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setChatTitle': {
      $post:
        | {
            input: { json: { chat_id: number | string; title: string } } & {
              form: { chat_id: number | string; title: string }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; title: string } } & {
              form: { chat_id: number | string; title: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setGameScore': {
      $post:
        | {
            input: {
              json: {
                chat_id?: number | undefined
                disable_edit_message?: boolean | undefined
                force?: boolean | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                score: number
                user_id: number
              }
            } & {
              form: {
                chat_id?: number | undefined
                disable_edit_message?: boolean | undefined
                force?: boolean | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                score: number
                user_id: number
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id?: number | undefined
                disable_edit_message?: boolean | undefined
                force?: boolean | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                score: number
                user_id: number
              }
            } & {
              form: {
                chat_id?: number | undefined
                disable_edit_message?: boolean | undefined
                force?: boolean | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                score: number
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setMyCommands': {
      $post:
        | {
            input: { json: { commands: BotCommand[] } } & { form: { commands: BotCommand[] } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { commands: BotCommand[] } } & { form: { commands: BotCommand[] } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setPassportDataErrors': {
      $post:
        | {
            input: { json: { errors: PassportElementError[]; user_id: number } } & {
              form: { errors: PassportElementError[]; user_id: number }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { errors: PassportElementError[]; user_id: number } } & {
              form: { errors: PassportElementError[]; user_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setStickerPositionInSet': {
      $post:
        | {
            input: { json: { position: number; sticker: string } } & {
              form: { position: number; sticker: string }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { position: number; sticker: string } } & {
              form: { position: number; sticker: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setStickerSetThumb': {
      $post:
        | {
            input: {
              form: { name: string; thumb?: InputFile | string | undefined; user_id: number }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: { name: string; thumb?: InputFile | string | undefined; user_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/setWebhook': {
      $post:
        | {
            input: {
              form: {
                allowed_updates?: string[] | undefined
                certificate?: InputFile | undefined
                drop_pending_updates?: boolean | undefined
                ip_address?: string | undefined
                max_connections?: number | undefined
                url: string
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                allowed_updates?: string[] | undefined
                certificate?: InputFile | undefined
                drop_pending_updates?: boolean | undefined
                ip_address?: string | undefined
                max_connections?: number | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stopMessageLiveLocation': {
      $post:
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: { ok: boolean; result: Message | boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id?: number | string | undefined
                inline_message_id?: string | undefined
                message_id?: number | undefined
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stopPoll': {
      $post:
        | {
            input: {
              json: {
                chat_id: number | string
                message_id: number
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id: number | string
                message_id: number
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: { ok: boolean; result: Poll }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id: number | string
                message_id: number
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            } & {
              form: {
                chat_id: number | string
                message_id: number
                reply_markup?: InlineKeyboardMarkup | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/unbanChatMember': {
      $post:
        | {
            input: {
              json: {
                chat_id: number | string
                only_if_banned?: boolean | undefined
                user_id: number
              }
            } & {
              form: {
                chat_id: number | string
                only_if_banned?: boolean | undefined
                user_id: number
              }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                chat_id: number | string
                only_if_banned?: boolean | undefined
                user_id: number
              }
            } & {
              form: {
                chat_id: number | string
                only_if_banned?: boolean | undefined
                user_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/unpinAllChatMessages': {
      $post:
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string } } & { form: { chat_id: number | string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/unpinChatMessage': {
      $post:
        | {
            input: { json: { chat_id: number | string; message_id?: number | undefined } } & {
              form: { chat_id: number | string; message_id?: number | undefined }
            }
            output: { ok: boolean; result: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { chat_id: number | string; message_id?: number | undefined } } & {
              form: { chat_id: number | string; message_id?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/uploadStickerFile': {
      $post:
        | {
            input: { form: { png_sticker: InputFile; user_id: number } }
            output: { ok: boolean; result: File2 }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { png_sticker: InputFile; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
