import { createRoute, z } from '@hono/zod-openapi'

const AlertSchema = z
  .object({
    alert_id: z.string().exactOptional(),
    last_sent: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The UTC date and time when the alert was last triggered and sent out (may be null).',
      }),
    search: z
      .string()
      .exactOptional()
      .openapi({ description: 'The search phrase that the alert triggers on.' }),
    send_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of time the alert has triggered and been send out.' }),
    types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of the post types that the alert is set to match against.  The available post types are: offer, wanted <br /><br /> NOTE: Additional post types may be added in the future (eg. events) so clients should take care to support arbitrary types being returned.\n',
      }),
    user_id: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.',
    example: {
      alert_id: 7584,
      last_sent: '2018-02-16T12:58:51',
      search: 'table',
      send_count: 3,
      types: ['offer'],
      user_id: 9191,
    },
    required: [],
  })
  .openapi('Alert')

const BoundingBoxSchema = z
  .object({
    northeast: z
      .object({ latitude: z.number().exactOptional(), longitude: z.number().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The point defining the northeast corner of the bounding box.',
        required: [],
      }),
    southwest: z
      .object({ latitude: z.number().exactOptional(), longitude: z.number().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The point defining the southwest corner of the bounding box.',
        required: [],
      }),
  })
  .openapi({
    description: 'A geographic bounding box defined by its southwest and northeast points.',
    example: {
      northeast: { latitude: 52.8293255665, longitude: -0.600956182 },
      southwest: { latitude: 51.0025285305, longitude: -3.5323240284 },
    },
    required: [],
  })
  .openapi('BoundingBox')

const PhotoSchema = z
  .object({
    blurhash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.\n',
      }),
    images: z
      .array(
        z
          .object({
            height: z.int().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties.',
      }),
    photo_id: z.string().exactOptional(),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL to a large version of this photo (but not necessarily the largest size available).',
      }),
  })
  .openapi({
    example: {
      blurhash: 'TkJ7jsoz%f~VoLxu-pWCWB-oj[M|',
      images: [
        {
          height: 120,
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
          width: 90,
        },
        {
          height: 240,
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg',
          width: 180,
        },
        {
          height: 360,
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg',
          width: 270,
        },
        {
          height: 500,
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
          width: 375,
        },
      ],
      photo_id: '695624-768616',
      thumbnail: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
      url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
    },
    required: [],
  })
  .openapi('Photo')

const PostSchema = z
  .object({
    content: z.string().exactOptional(),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time when the post was published.' }),
    expiration: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.\n',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).',
      }),
    group_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The group ID of the post.  For public posts, this is always null.\n',
      }),
    latitude: z
      .number()
      .exactOptional()
      .openapi({ description: "May be null if a post hasn't been mapped." }),
    longitude: z
      .number()
      .exactOptional()
      .openapi({ description: "May be null if a post hasn't been mapped." }),
    outcome: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.\n',
      }),
    photos: z
      .array(PhotoSchema)
      .exactOptional()
      .openapi({
        description:
          'Details about the photos associated with this post (may be null if there are no photos).',
      }),
    post_id: z.string().exactOptional(),
    repost_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.\n',
      }),
    reselling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn't indicated whether or not they intend to resell the item they are requesting.\n",
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.\n',
      }),
    title: z.string().exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of post.  One of: offer, taken, wanted, received, admin\n',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to use to view the post on the trash nothing site.' }),
    user_id: z.string().exactOptional(),
  })
  .openapi({
    description: 'An offer, wanted, admin, taken or received post.',
    example: {
      content:
        'This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.',
      date: '2018-02-05T15:10:21',
      expiration: '2018-03-05T15:10:21',
      footer: null,
      group_id: 6,
      latitude: 43.653226,
      longitude: -79.383184,
      outcome: 'satisfied',
      photos: [
        {
          images: [
            {
              height: 120,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
              width: 90,
            },
            {
              height: 240,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg',
              width: 180,
            },
            {
              height: 360,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg',
              width: 270,
            },
            {
              height: 500,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
              width: 375,
            },
          ],
          photo_id: '695624-768616',
          thumbnail:
            'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
        },
      ],
      post_id: 3171898,
      repost_count: 1,
      reselling: false,
      title: 'Ultrasonic diffuser (Downtown Toronto)',
      type: 'offer',
      url: 'https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto',
      user_id: 2933,
    },
    required: [],
  })
  .openapi('Post')

const MessageSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The content of the message.' }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time when the message was sent.' }),
    email_attachments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Every message a user receives is made available via the API and is sent to the user by email.  Some messages may contain unsupported attachments that are not available by the API but are emailed to the user (eg. documents, videos, zip files). The email_attachments field provides the names of all the unsupported attachments that were emailed to the user (will be null if there are no unsupported attachments).\n',
      }),
    from_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user that sent the message (the sender).' }),
    message_id: z.string().exactOptional(),
    photos: z
      .array(PhotoSchema)
      .exactOptional()
      .openapi({
        description:
          'Details about the photos associated with this message (may be null if there are no photos).',
      }),
    post: PostSchema.exactOptional(),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Because many messages are received by email, all messages have a subject. The subject is often useful to allow the recipient to determine which post a message may be referring to.  In rare cases, some senders send emails with a subject and but no email body which causes the message content to be an empty string.\n',
      }),
    to_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user that received the message (the recipient).' }),
  })
  .openapi({
    description: 'A message between two users.',
    example: {
      content: 'Here are some photos and the directions for pick up.',
      date: '2019-07-24T22:29:10',
      email_attachments: ['Directions and map.pdf'],
      from_user_id: 2946512,
      message_id: 10199633,
      photos: [
        {
          images: [
            {
              height: 120,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
              width: 90,
            },
            {
              height: 240,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg',
              width: 180,
            },
            {
              height: 360,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg',
              width: 270,
            },
            {
              height: 500,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
              width: 375,
            },
          ],
          photo_id: '695624-768616',
          thumbnail:
            'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
        },
      ],
      post: null,
      subject: 'Dining Table and 4 Chairs',
      to_user_id: 119458,
    },
    required: [],
  })
  .openapi('Message')

const UserSchema = z
  .object({
    about_me: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.\n',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.\n',
      }),
    feedback: z
      .object({
        percent_positive: z
          .number()
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              'The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.\n',
          }),
        restriction: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "If the current user can leave positive or negative feedback on this user then restriction is null. <br /><br /> Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative <br /><br /> - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. <br /> - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is >= 0. <br /> - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. <br /> - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait\n  some number of days before they will be able to leave negative feedback on this user.  This string can \n  change depending on the number of days.  For example, when the current user must wait one day, the\n  string will be '1-day-wait-for-negative'.  A wait is necessary because a lot of negative feedback results\n  from communication issues that are resolved with more time.\n",
          }),
        score: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.\n',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    firstname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user (may be null).' }),
    lastname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user (may be null).' }),
    member_since: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).',
      }),
    profile_image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.\n",
      }),
    reply_time: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.\n',
      }),
    user_id: z.string().exactOptional(),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.\n",
      }),
  })
  .openapi({
    example: {
      about_me: 'Just an old fisherman looking to reuse more.',
      country: 'GB',
      feedback: { percent_positive: 87.5, restriction: 'no-recent-messages', score: 7 },
      firstname: null,
      lastname: null,
      member_since: '2017-01-27T06:35:55',
      profile_image:
        'https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg',
      reply_time: 4850,
      user_id: 2946512,
      username: 'fred gibson',
    },
    required: [],
  })
  .openapi('User')

const ConversationSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this conversation is archived.' }),
    blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this conversation is blocked.' }),
    conversation_id: z.string().exactOptional(),
    last_message_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time of the last message in this conversation.' }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({ description: 'The latest messages in this conversation.' }),
    num_unread_messages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The count of how many unread messages this conversation has.' }),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description: 'A conversation between the current user and another user.',
    example: {
      archived: false,
      blocked: false,
      conversation_id: 38914,
      last_message_date: '2019-07-24T22:51:09',
      messages: [
        {
          content: 'Here are some photos and the directions for pick up.',
          date: '2019-07-24T22:29:10',
          email_attachments: ['Directions and map.pdf'],
          from_user_id: 2946512,
          message_id: 10199633,
          photos: [
            {
              images: [
                {
                  height: 120,
                  url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
                  width: 90,
                },
                {
                  height: 240,
                  url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg',
                  width: 180,
                },
                {
                  height: 360,
                  url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg',
                  width: 270,
                },
                {
                  height: 500,
                  url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
                  width: 375,
                },
              ],
              photo_id: '695624-768616',
              thumbnail:
                'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
            },
          ],
          subject: 'Dining Table and 4 Chairs',
          to_user_id: 119458,
        },
      ],
      num_unread_messages: 1,
      user: {
        about_me: 'Just an old fisherman looking to reuse more.',
        country: 'GB',
        firstname: null,
        lastname: null,
        member_since: '2017-01-27T06:35:55',
        profile_image:
          'https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg',
        user_id: 2946512,
        username: 'fred gibson',
      },
    },
    required: [],
  })
  .openapi('Conversation')

const CurrentUserSchema = UserSchema.and(
  z
    .object({
      digest_photos: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Whether or not photos are included in the digest emails sent to the user.',
        }),
      email: z
        .object({
          address: z.string().exactOptional().openapi({ description: 'The email address.' }),
          bouncing: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                "Whether or not this email address has been bouncing emails that are sent to it.  When bouncing is true, no emails will be sent to the user.  If the user thinks that their email account shouldn't be bouncing emails, use the email not bouncing endpoint to reset bouncing to false.\n",
            }),
          spam_stop: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                "Whether or not emails have been stopped because of a spam complaint from the users' email account. When spam_stop is first set to true, it indicates that all emails have been automatically disabled for the users' account (eg. digest and alerts).  The user will need to re-enable digests and re-add any alerts that they had previously set up.\n",
            }),
        })
        .exactOptional()
        .openapi({ description: "Data related to the users' email address.", required: [] }),
      email_message_delay: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "How quickly new messages from other users are emailed to this user. One of: immediate, 30_minutes, 1_hour, 2_hours, 4_hours, 6_hours, 8_hours <br /> If set to anything other than immediate, the user will receive a digest email summarizing all of the new messages that they haven't viewed.\n",
        }),
      email_post_reminders: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether or not post reminder emails are enabled for this user (to remind them to update or repost their posts).',
        }),
      email_posts_frequency: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'How often new post email notifications are sent to the user. One of: weekly, twice_weekly, daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> Will be null if new post email notifications are turned off.\n',
        }),
      email_search_alerts: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Whether or not search alert emails are enabled for this user.' }),
      has_password: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            "Whether or not the user has a password (accounts created using 3rd party providers like Facebook don't have passwords set). <br /><br /> When has_password is false, the only way to set a password on the users' account is to send the user a password reset email.\n",
        }),
      last_listings_view: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'The UTC date and time when the user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page.\n',
        }),
      location: z
        .object({
          latitude: z.number().exactOptional(),
          longitude: z.number().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A text description of the location specified by latitude and longitude.',
            }),
          radius: z
            .number()
            .min(0)
            .max(257500)
            .exactOptional()
            .openapi({
              description:
                'Defines the radius (in meters) of a circle around the point specified by latitude and longitude.',
            }),
        })
        .exactOptional()
        .openapi({
          description:
            "The users' location.  The location is used to determine which posts are shown to the user (may be null).",
          required: [],
        }),
      profile_image_source: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "The source of the users' profile image. One of: gravatar, facebook, google, freegle, custom\n",
        }),
      public_name: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether or not the user has chosen to make their first and last name public.',
        }),
      public_post_sources: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            "A list of the public post sources the user is interested in seeing posts from (currently only 'trashnothing' is supported). If the array is empty, no sources are enabled and the user will only see posts from the groups they are a member of. <br /><br /> NOTE: Additional sources may be added in the future so clients should take care to support arbitrary sources being returned.\n",
        }),
      show_all_group_posts: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            "If true, all group posts from the users' groups are shown to them on the main posts page and in the digests. <br /><br /> If false, only group posts in the area defined by the users' location are shown.\n",
        }),
      signup: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The UTC date and time when the user signed up.' }),
      special_notices: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether or not the user wants to receive special notice emails from the groups they are a member of. Special notices are admin posts that the group moderators choose to send out by email.\n',
        }),
      uses_fair_offer_policy: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether or not the user used the Fair Offer Policy (see https://trashnothing.com/fair_offer_policy ) the last time they posted.',
        }),
      verified: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether or not the user has verified their account. The user account will be limited (eg. they will not be able to reply to posts) until their account is verified.\n',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      about_me: 'I used to be an accountant but then I decided to become a pirate.',
      country: 'US',
      digest_photos: false,
      email: { address: 'johndoe@example.com', bouncing: false, spam_stop: false, verified: true },
      email_message_delay: 'immediate',
      email_post_reminders: true,
      email_posts_frequency: '6_hours',
      email_search_alerts: true,
      firstname: 'Jack',
      has_password: false,
      last_listings_view: '2018-02-15T15:04:47',
      lastname: 'Carter',
      location: {
        latitude: 39.766098,
        longitude: -105.077206,
        name: 'Wheat Ridge, CO, USA',
        "radius'": 32186.88,
      },
      member_since: '2009-09-25T14:20:01',
      profile_image:
        'https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon',
      profile_image_source: 'gravatar',
      public_name: false,
      public_post_sources: ['trashnothing'],
      show_all_group_posts: true,
      signup: '2017-11-20T04:32:06',
      special_notices: true,
      user_id: 119458,
      username: 'captainjack',
      uses_fair_offer_policy: true,
      verified: true,
    },
  })
  .openapi('CurrentUser')

const FeedbackSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'A comment written by the reviewer about the user (may be null).' }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date when the feedback was submitted.' }),
    feedback_id: z.string().exactOptional(),
    positive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set to true for positive feedback and false for negative feedback.',
      }),
    reviewer_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user ID of the user that submitted the feedback.' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user ID of the user that the feedback is about.' }),
  })
  .openapi({
    example: {
      content: 'Fred gave me a great antique table for my new apartment!',
      date: '2020-03-01T12:01:22',
      positive: true,
      reviewer_user_id: 9191,
      user_id: 2946512,
    },
    required: [],
  })
  .openapi('Feedback')

const GeolocateBoundsSchema = z
  .object({ default: BoundingBoxSchema.exactOptional(), limit: BoundingBoxSchema.exactOptional() })
  .openapi({
    description:
      "Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.\n",
    required: [],
  })
  .openapi('GeolocateBounds')

const GroupSchema = z
  .object({
    country: z
      .object({
        abbreviation: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).\n',
          }),
        name: z.string().exactOptional().openapi({ description: 'The name of the country.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Provides information about the country that is associated with a group.  May be null.',
        example: { abbreviation: 'US', name: 'United States' },
        required: [],
      }),
    group_id: z.string().exactOptional(),
    has_questions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, anyone requesting membership to this group will be required to answer a new membership questionnaire.',
      }),
    homepage: z.string().exactOptional().openapi({ description: 'A URL to the group homepage.' }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the group that is used in URLs.' }),
    latitude: z.number().exactOptional(),
    longitude: z.number().exactOptional(),
    member_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of members who belong to the group.' }),
    membership: z
      .object({
        date: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'The UTC date and time when the membership was last updated.\n',
          }),
        questionnaire: z
          .object({
            message: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A message from the group moderators to be displayed above the questions (may be null).',
              }),
            questions: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'The list of questions.' }),
          })
          .exactOptional()
          .openapi({
            description:
              'Membership questionnaire data.  Will be null unless the membership status is pending-questions.',
            required: [],
          }),
        status: z
          .string()
          .exactOptional()
          .openapi({ description: 'One of: subscribed, pending, pending-questions\n' }),
      })
      .exactOptional()
      .openapi({
        description:
          "Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.\n",
        required: [],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the group (not guaranteed to be unique).' }),
    open_archives: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group.',
      }),
    open_membership: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, the group allows anyone to join.  When false, the group moderators review and approve applicants.',
      }),
    region: z
      .object({
        abbreviation: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A 2 letter abbreviation for the region (is not guaranteed to be globally unique but is unique among all the regions in the country).',
          }),
        name: z.string().exactOptional().openapi({ description: 'The name of the region.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.',
        example: { abbreviation: 'CA', name: 'California' },
        required: [],
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timezone that the group is in (eg. America/New_York).' }),
  })
  .openapi({
    description:
      'Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).\n',
    example: {
      country: { abbreviation: 'CA', name: 'Canada' },
      group_id: 46,
      has_questions: true,
      homepage: 'https://trashnothing.com/OttawaReuse',
      identifier: 'OttawaReuse',
      latitude: 45.423494,
      longitude: -75.697933,
      member_count: 4838,
      membership: {
        date: '2015-01-22T17:05:50',
        questionnaire: {
          message: 'This group is only for people who live in Ottawa.',
          questions: ['Where do you live?'],
        },
        status: 'pending-questions',
      },
      name: 'Ottawa Reuse',
      open_archives: false,
      open_membership: false,
      region: { abbreviation: 'ON', name: 'Ontario' },
      timezone: 'America/Toronto',
    },
    required: [],
  })
  .openapi('Group')

const GroupNoticeSchema = z
  .object({
    content: z.string().exactOptional(),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time when this notice was received.' }),
    group_id: z.string().exactOptional(),
    notice_id: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).',
    example: {
      content:
        'Everything must be free, legal and appropriate for all ages.  Repeat offenders will be banned.',
      date: '2018-02-17T13:22:40',
      group_id: 1781,
      notice_id: 81178,
      title: 'Group Rules & Guidelines',
    },
    required: [],
  })
  .openapi('GroupNotice')

const PhotoResultSchema = z
  .object({
    photo_id: z.string().exactOptional(),
    thumbnail: z
      .object({
        height: z.int().exactOptional(),
        url: z.string().exactOptional(),
        width: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Photo thumbnail data.', required: [] }),
  })
  .openapi({
    description: 'The result of uploading or editing a photo.',
    example: {
      photo_id: '987-423',
      thumbnail: {
        height: 120,
        url: 'https://trashnothing.com/img/2018-02-02/307731-20180119_155358.90x120.jpg',
        width: 90,
      },
    },
    required: [],
  })
  .openapi('PhotoResult')

const PostSearchResultSchema = PostSchema.and(
  z
    .object({
      search_content: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class \'highlight\' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.\n',
        }),
      search_title: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class \'highlight\'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.\n',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      content:
        "Panasonic microwave oven in good working order 800 W power and turntable inside Has all the normal microwave functions plus grill elements for browning Comes with original instructions booklet It's an old microwave and could do with a bit of a clean, but still works very well\n",
      date: '2018-02-18T17:11:38',
      expiration: '2018-04-18T17:11:38',
      footer: null,
      group_id: 81,
      latitude: 42.961404,
      longitude: -88.012586,
      outcome: null,
      photos: null,
      post_id: 25997431,
      repost_count: 0,
      reselling: false,
      search_content:
        'Panasonic <span class="highlight">microwave</span> oven in good working order 800 W power and turntable',
      search_title: '<span class="highlight">Microwave</span> Oven (Greenfield)',
      title: 'Microwave Oven (Greenfield)',
      type: 'offer',
      url: 'https://trashnothing.com/post/25997431/microwave-oven-greenfield',
      user_id: 82928,
    },
  })
  .openapi('PostSearchResult')

const StorySchema = z
  .object({
    content: z.string().exactOptional(),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The UTC date and time when the post was published.' }),
    like_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of people who have liked this story.' }),
    photos: z
      .array(PhotoSchema)
      .exactOptional()
      .openapi({
        description:
          'Details about the photos associated with this story (may be null if there are no photos).',
      }),
    share_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that can be used to share the story (may be null if the story is not public).',
      }),
    story_id: z.string().exactOptional(),
    title: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
    user_liked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the current user has liked this story or not.' }),
  })
  .openapi({
    description: 'A user story',
    example: {
      content: "People helping people - it doesn't get better than this!",
      date: '2020-04-25T10:26:32',
      like_count: 3,
      photos: [
        {
          images: [
            {
              height: 120,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
              width: 90,
            },
            {
              height: 240,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg',
              width: 180,
            },
            {
              height: 360,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg',
              width: 270,
            },
            {
              height: 500,
              url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
              width: 375,
            },
          ],
          photo_id: '695624-768616',
          thumbnail:
            'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg',
          url: 'https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg',
        },
      ],
      share_url: 'https://trashnothing.com/story/7584',
      story_id: 7584,
      title: 'Sharing is caring',
      user: {
        about_me: 'Just an old fisherman looking to reuse more.',
        country: 'GB',
        firstname: null,
        lastname: null,
        member_since: '2017-01-27T06:35:55',
        profile_image:
          'https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg',
        user_id: 2946512,
        username: 'fred gibson',
      },
    },
    required: [],
  })
  .openapi('Story')

const MarkAllConversationsReadRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          message_id: z
            .string()
            .openapi({
              description:
                'The message_id of the most recent message from the conversations that the client has downloaded.',
            }),
        })
        .openapi({ required: ['message_id'] }),
    },
  },
  required: true,
}

const ApiKeySecurityScheme = {
  description:
    "Provides access to specific public API endpoints which don't require user authorization. <br /><br /> The API currently allows api key access to list, search and retrieve posts (for public posts and posts on open archive groups) and to list, search and retrieve groups. <br /><br /> NOTE: Some API endpoints behave differently when requests are made using api keys instead of oauth (because api key requests have no user associated with them).  Check the documentation for each endpoint for a description of the differences.\n",
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

const Oauth2CodeSecurityScheme = {
  description:
    'This OAuth2 flow is designed for server side apps and is not enabled by default for new apps. If you would like to use this flow for your app, contact us through the [trash nothing Developer page](https://trashnothing.com/developer).\n',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://trashnothing.com/oauth2/authorize',
      scopes: { basic: "Provides full access to a user's account" },
      tokenUrl: 'https://trashnothing.com/oauth2/token',
    },
  },
  type: 'oauth2',
}

const Oauth2ImplicitSecurityScheme = {
  description: 'This is the default OAuth2 flow for new apps.\n',
  flows: {
    implicit: {
      authorizationUrl: 'https://trashnothing.com/oauth2/authorize',
      scopes: { basic: "Provides full access to a user's account" },
    },
  },
  type: 'oauth2',
}

export const getConversationsRoute = createRoute({
  method: 'get',
  path: '/conversations',
  tags: ['messages'],
  summary: 'List conversations',
  operationId: 'get_conversations',
  request: {
    query: z.object({
      category: z
        .string()
        .default('inbox')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to filter messases by category.  Must be set to one of the following three categories: inbox, archived, blocked\n',
            in: 'query',
            name: 'category',
            required: false,
            schema: { default: 'inbox', type: 'string' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of conversations to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(30),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of conversations to return per page (must be >= 1 and <= 30).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, maximum: 30, minimum: 1, type: 'integer' },
          },
        }),
      num_messages: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(30),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of recent messages to return with each conversation. Additional messages can be retrieved using get conversation messages endpoint.\n',
            in: 'query',
            name: 'num_messages',
            required: false,
            schema: { default: 10, maximum: 30, minimum: 0, type: 'integer' },
          },
        }),
      include_num_unread: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to 1, the num_unread field in the response will be set to the count of the total number of conversations that have unread messages. <br /><br /> This is useful for showing users the total number of unread messages that they have in their inbox. Calculating the count will slow the request down a bit so setting this should be avoided for requests where it's not needed (eg. requesting archived or blocked conversations or requests that are just paging through older conversations).\n",
            in: 'query',
            name: 'include_num_unread',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The conversations and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              conversations: z.array(ConversationSchema).exactOptional(),
              num_unread: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'If the include_num_unread parameter is set to 1, this will be set to the total number of conversations that have unread messages matching the query parameters of the request.  If the include_num_unread parameter is set to 0, this will be null.\n',
                }),
              page: z.int().exactOptional(),
              per_page: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid parameters.' },
  },
})

export const putConversationsArchiveAllRoute = createRoute({
  method: 'put',
  path: '/conversations/archive-all',
  tags: ['messages'],
  summary: 'Archive all conversations',
  operationId: 'archive_all_conversations',
  request: { body: MarkAllConversationsReadRequestBody },
  responses: {
    200: { description: 'Conversations archived.' },
    400: { description: 'Invalid message_id.' },
  },
})

export const putConversationsMarkAllReadRoute = createRoute({
  method: 'put',
  path: '/conversations/mark-all-read',
  tags: ['messages'],
  summary: 'Mark all conversations as read',
  operationId: 'mark_all_conversations_read',
  request: { body: MarkAllConversationsReadRequestBody },
  responses: {
    200: { description: 'Conversations marked as read.' },
    400: { description: 'Invalid message_id.' },
  },
})

export const getConversationsSearchRoute = createRoute({
  method: 'get',
  path: '/conversations/search',
  tags: ['messages'],
  summary: 'Search conversations',
  description: 'Searches all conversations except blocked conversations.',
  operationId: 'search_conversations',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description: 'The search query used to find conversations and messages.',
            in: 'query',
            name: 'search',
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of conversations to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(30),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of conversations to return per page (must be >= 1 and <= 30).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, maximum: 30, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The conversations and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              conversations: z.array(ConversationSchema).exactOptional(),
              page: z.int().exactOptional(),
              per_page: z.int().exactOptional(),
              search: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid parameters.' },
  },
})

export const deleteConversationsConversationIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{conversation_id}',
  tags: ['messages'],
  summary: 'Delete conversation',
  operationId: 'delete_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to delete.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the newest message in the conversation that the client has downloaded.',
            in: 'query',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Conversation deleted.' },
    400: { description: 'Invalid parameters.' },
    403: { description: "The user doesn't have permission to modify this conversation." },
    404: { description: 'Conversation or message not found.' },
  },
})

export const putConversationsConversationIdArchiveRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/archive',
  tags: ['messages'],
  summary: 'Archive conversation',
  operationId: 'archive_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to archive.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Conversation archived.' },
    403: { description: "The user doesn't have permission to modify this conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const putConversationsConversationIdBlockRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/block',
  tags: ['messages'],
  summary: 'Block conversation',
  operationId: 'block_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to block.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Conversation blocked.' },
    400: { description: 'Conversations with moderators cannot be blocked.' },
    403: { description: "The user doesn't have permission to modify this conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const putConversationsConversationIdMarkReadRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/mark-read',
  tags: ['messages'],
  summary: 'Mark conversation as read',
  operationId: 'mark_conversation_read',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to mark as read.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              message_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the newest message in the conversation that the current user has read.',
                }),
            })
            .openapi({ required: ['message_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Conversation marked as read.' },
    400: { description: 'Invalid parameters.' },
    403: { description: "The user doesn't have permission to modify this conversation." },
    404: { description: 'Conversation or message not found.' },
  },
})

export const getConversationsConversationIdMessagesRoute = createRoute({
  method: 'get',
  path: '/conversations/{conversation_id}/messages',
  tags: ['messages'],
  summary: 'List conversation messages',
  operationId: 'get_conversation_messages',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to return messages from.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of messages to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(30),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of messages to return per page (must be >= 1 and <= 30).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 10, maximum: 30, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      include_conversation: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to 1, the conversation will be returned along with the messages.',
            in: 'query',
            name: 'include_conversation',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The messages and page data.  The conversation data is optional and is only returned if the include_conversation parameter is set.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              conversation: ConversationSchema.exactOptional(),
              messages: z.array(MessageSchema).exactOptional(),
              page: z.int().exactOptional(),
              per_page: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid parameters.' },
    403: { description: "The user doesn't have permission to access the conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const postConversationsConversationIdReplyRoute = createRoute({
  method: 'post',
  path: '/conversations/{conversation_id}/reply',
  tags: ['messages'],
  summary: 'Reply to conversation',
  operationId: 'reply_to_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to reply to.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              content: z.string().openapi({ description: 'The content of the reply.' }),
              device_pixel_ratio: z
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
                  description:
                    'Client device pixel ratio used to determine thumbnail size (default 1.0).',
                }),
              photo_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of the IDs of the photos that should be attached to this message.',
                }),
            })
            .openapi({ required: ['content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new message sent to the conversation.',
      content: { 'application/json': { schema: MessageSchema } },
    },
    400: { description: 'Invalid parameters or duplicate reply or conversation is blocked.' },
    403: { description: "The user doesn't have permission to reply to the conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const postConversationsConversationIdReportRoute = createRoute({
  method: 'post',
  path: '/conversations/{conversation_id}/report',
  tags: ['messages'],
  summary: 'Report conversation',
  operationId: 'report_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to report.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              reason: z
                .string()
                .openapi({
                  description: 'A user provided reason why the conversation is being reported.',
                }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Conversation reported.' },
    400: { description: 'Empty reason parameter.' },
    403: { description: "The user doesn't have permission to report the conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const putConversationsConversationIdUnarchiveRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/unarchive',
  tags: ['messages'],
  summary: 'Unarchive conversation',
  operationId: 'unarchive_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to unarchive.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Conversation unarchived.' },
    403: { description: "The user doesn't have permission to modify this conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const putConversationsConversationIdUnblockRoute = createRoute({
  method: 'put',
  path: '/conversations/{conversation_id}/unblock',
  tags: ['messages'],
  summary: 'Unblock conversation',
  operationId: 'unblock_conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the conversation to unblock.',
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Conversation unblocked.' },
    403: { description: "The user doesn't have permission to modify this conversation." },
    404: { description: 'Conversation not found.' },
  },
})

export const postFeedbackRoute = createRoute({
  method: 'post',
  path: '/feedback',
  tags: ['misc'],
  summary: 'Send feedback',
  description: 'Allows users to send feedback about the trashnothing.com site or apps.',
  operationId: 'send_feedback',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'The message.' }),
              meta: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Extra information set by the client that may be useful to contextualize the feedback (eg. operating system details, browser details, app details, device details).\n',
                }),
              subject: z.string().openapi({ description: 'The subject.' }),
            })
            .openapi({ required: ['subject', 'message'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'The feedback has been sent.' } },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['groups'],
  summary: 'Search groups',
  operationId: 'search_groups',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Find groups that have the given text somewhere in their name (case insensitive).',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      latitude: z
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
            description: 'Find groups near the given latitude and longitude.',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'Find groups near the given latitude and longitude.',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      distance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.\n',
            in: 'query',
            name: 'distance',
            required: false,
            schema: { default: 100, maximum: 150, minimum: 0, type: 'number' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).\n',
            in: 'query',
            name: 'country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv\n',
            in: 'query',
            name: 'region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      postal_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.\n',
            in: 'query',
            name: 'postal_code',
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of groups to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of groups to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The groups and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last group being returned (an integer between start_index and num_groups).',
                }),
              groups: z.array(GroupSchema).exactOptional(),
              num_groups: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of groups available.' }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the groups being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of groups being returned per page.' }),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first group being returned (an integer between 1 and num_groups).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getGroupsMultipleRoute = createRoute({
  method: 'get',
  path: '/groups/multiple',
  tags: ['groups'],
  summary: 'Retrieve multiple groups',
  operationId: 'get_groups_by_ids',
  request: {
    query: z.object({
      group_ids: z
        .string()
        .openapi({
          param: {
            description:
              'The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.',
            in: 'query',
            name: 'group_ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The groups.',
      content: { 'application/json': { schema: z.array(GroupSchema) } },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const postGroupsSubscribeRoute = createRoute({
  method: 'post',
  path: '/groups/subscribe',
  tags: ['groups'],
  summary: 'Join groups',
  description:
    "Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.\n",
  operationId: 'join_groups',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              group_ids: z
                .string()
                .openapi({
                  description: 'A comma separated list of the IDs of the groups to join.',
                }),
            })
            .openapi({ required: ['group_ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The groups with updated membership data.',
      content: {
        'application/json': {
          schema: z
            .object({
              groups: z
                .array(GroupSchema)
                .exactOptional()
                .openapi({
                  description:
                    "Updated data about the groups and the current users' membership to each group.",
                }),
              over_group_limit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When this is true, it means that some of the membership requests weren't processed in order to keep the user from going over the 12 group limit (the membership field of the groups can be used to determine which requests were processed).\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
    404: { description: 'Group not found.' },
  },
})

export const getGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/groups/{group_id}',
  tags: ['groups'],
  summary: 'Retrieve a group',
  operationId: 'get_group',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the group to retrieve.',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The group.', content: { 'application/json': { schema: GroupSchema } } },
    404: { description: 'Group not found.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const postGroupsGroupIdAnswersRoute = createRoute({
  method: 'post',
  path: '/groups/{group_id}/answers',
  tags: ['groups'],
  summary: 'Submit group answers',
  description:
    'Submits answers to a groups\' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.\n',
  operationId: 'submit_answers',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'The group ID of the group that the user is submitting answers for.',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'A JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.\n',
      content: { 'application/json': { schema: z.record(z.string(), z.string()) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated group.',
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: {
      description:
        "Missing or invalid answers or questions were already answered or questions don't need to be answered.",
    },
    404: { description: 'Group not found.' },
  },
})

export const postGroupsGroupIdContactRoute = createRoute({
  method: 'post',
  path: '/groups/{group_id}/contact',
  tags: ['groups'],
  summary: 'Contact group moderators',
  operationId: 'contact_moderators',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'The group ID of the group whose moderators will be contacted.',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'The body of the message.' }),
              subject: z.string().openapi({ description: 'The subject of the message.' }),
            })
            .openapi({ required: ['subject', 'message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Message was sent to moderators.' },
    400: { description: 'Missing or invalid parameters.' },
    404: { description: 'Group not found.' },
  },
})

export const postGroupsGroupIdUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/groups/{group_id}/unsubscribe',
  tags: ['groups'],
  summary: 'Leave a group',
  operationId: 'leave_group',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the group to leave.',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Updated data about the group and the current users' membership.",
      content: { 'application/json': { schema: GroupSchema } },
    },
    400: { description: 'The current user is not an active or pending member of the given group.' },
    404: { description: 'Group not found.' },
  },
})

export const postPhotosRoute = createRoute({
  method: 'post',
  path: '/photos',
  tags: ['photos'],
  summary: 'Create a photo',
  operationId: 'upload_photo',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              device_pixel_ratio: z
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
                  description:
                    'Client device pixel ratio used to determine thumbnail size (default 1.0).',
                }),
              photo: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'Photo to upload.' }),
            })
            .openapi({ required: ['photo'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Photo created.',
      content: { 'application/json': { schema: PhotoResultSchema } },
    },
    400: { description: 'Invalid photo.' },
  },
})

export const getPhotosMultipleRoute = createRoute({
  method: 'get',
  path: '/photos/multiple',
  tags: ['photos'],
  summary: 'Retrieve multiple photos',
  operationId: 'get_photos_by_ids',
  request: {
    query: z.object({
      photo_ids: z
        .string()
        .openapi({
          param: {
            description:
              'The IDs of the photos to retrieve.  If more than 50 photo IDs are passed, only the first 50 photos will be returned.',
            in: 'query',
            name: 'photo_ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The photos.',
      content: { 'application/json': { schema: z.array(PhotoResultSchema) } },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const deletePhotosPhotoIdRoute = createRoute({
  method: 'delete',
  path: '/photos/{photo_id}',
  tags: ['photos'],
  summary: 'Delete a photo',
  operationId: 'delete_photo',
  request: {
    params: z.object({
      photo_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'photo_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Photo deleted.' },
    400: { description: 'Invalid photo.' },
    403: { description: "The user doesn't have permission to delete the photo." },
    404: { description: 'Photo not found.' },
  },
})

export const postPhotosPhotoIdRotateRoute = createRoute({
  method: 'post',
  path: '/photos/{photo_id}/rotate',
  tags: ['photos'],
  summary: 'Rotate a photo',
  operationId: 'rotate_photo',
  request: {
    params: z.object({
      photo_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'photo_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      degrees: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'Rotation in degrees - currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.',
            in: 'query',
            name: 'degrees',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Photo rotated.',
      content: { 'application/json': { schema: PhotoResultSchema } },
    },
    400: { description: 'Invalid photo.' },
    403: { description: "The user doesn't have permission to rotate the photo." },
    404: { description: 'Photo not found.' },
  },
})

export const getPostsRoute = createRoute({
  method: 'get',
  path: '/posts',
  tags: ['posts'],
  summary: 'List posts',
  description:
    "NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.\nNOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.\n",
  operationId: 'get_posts',
  request: {
    query: z.object({
      sort_by: z
        .string()
        .default('date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the posts that are returned.  One of: date, active, distance <br /><br />\nDate sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'date', type: 'string' },
          },
        }),
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sources: z
        .string()
        .openapi({
          param: {
            description:
              "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
            in: 'query',
            name: 'sources',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .default('The group IDs of every group the current user is a member of.')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: {
              default: 'The group IDs of every group the current user is a member of.',
              type: 'string',
            },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      latitude: z
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
            description: 'The latitude of a point around which to return posts.\n',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'The longitude of a point around which to return posts.\n',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(257500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { maximum: 257500, minimum: 0, type: 'number' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.\n',
            in: 'query',
            name: 'date_min',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.',
            in: 'query',
            name: 'date_max',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      outcomes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
            in: 'query',
            name: 'outcomes',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      user_state: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.\n',
            in: 'query',
            name: 'user_state',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      include_reposts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n',
            in: 'query',
            name: 'include_reposts',
            required: false,
            schema: { default: 1, maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last post being returned (an integer between start_index and num_posts).',
                }),
              group_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.\n",
                }),
              last_listings_view: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.\n',
                }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              num_posts: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of posts available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the posts being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of posts being returned per page.' }),
              posts: z.array(PostSchema).exactOptional(),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first post being returned (an integer between 1 and num_posts).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const postPostsRoute = createRoute({
  method: 'post',
  path: '/posts',
  tags: ['posts'],
  summary: 'Submit a post',
  description: 'Submits a new post.\n',
  operationId: 'submit_post',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              content: z
                .string()
                .exactOptional()
                .openapi({ description: 'A longer description of the item(s).' }),
              expires_in: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "When the post should expire.  Defaults to 90 days. Any amount of time from 1 hour to 90 days can be provided.  To pass a number of hours, provide the number of hours prefixed by 'h' (eg. 1hr 24hr). To pass a number of days, provide the number of days prefixed by 'd' (eg. 1d 90d). <br /><br /> Note that posts may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays.  So with short expirations (eg. < 8 hours), there is a chance that the post may expire before it's approved and so it will never be published.\n",
                }),
              fair_offer: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    'If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).',
                }),
              group_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of group IDs to submit the post to (if any).',
                }),
              latitude: z
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
                  description:
                    "The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.\n",
                }),
              location: z
                .string()
                .min(2)
                .max(30)
                .openapi({ description: 'A short location description.' }),
              longitude: z
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
                  description:
                    'The longitude corresponding to the location description provided. (see the NOTE in latitude description)',
                }),
              photo_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of the IDs of the photos that should be attached to this post.',
                }),
              preferences: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the post submission process and user input.  Some warnings returned after submitting  a post have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.\n',
                }),
              repost: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the post is a repost of an existing post, this should be set to the post_id of the post that is being reposted.\n',
                }),
              reselling: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For wanted posts only. If set to 1, the wanted post will show that the poster intends to resell any items that they receive in response to this post.  Posters must declare if they intend to resell items.\n',
                }),
              session: z
                .string()
                .openapi({
                  description:
                    "A JSON string representing a temporary object that is used to store data about the submission process for a single post.  The first time a post is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that post is successfully submitted and then it  can be discarded so that the next post will start over with a new empty session object.  Every time a post is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.\n",
                }),
              title: z
                .string()
                .min(2)
                .max(35)
                .openapi({ description: 'A short description of the item(s).' }),
              type: z
                .string()
                .openapi({ description: 'The type of post.  One of: offer, wanted\n' }),
            })
            .openapi({ required: ['type', 'title', 'location', 'session'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Post submission result.',
      content: {
        'application/json': {
          schema: z
            .object({
              identifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.\n',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Contains text describing the reason a post  was not successful.  Is null on success.\n',
                }),
              preference_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.\n",
                }),
              result: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "One of: success, error, warning. <br /><br /> A success result indicates that the post  was submitted successfully. Note that posts may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post  to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post  from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.\n",
                }),
              session: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const getPostsAllRoute = createRoute({
  method: 'get',
  path: '/posts/all',
  tags: ['posts'],
  summary: 'List all posts',
  description:
    'This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.\n',
  operationId: 'get_all_posts',
  request: {
    query: z.object({
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, wanted\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.\n',
            in: 'query',
            name: 'date_min',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.\n',
            in: 'query',
            name: 'date_max',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 50).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts.',
      content: {
        'application/json': {
          schema: z
            .object({ posts: z.array(PostSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getPostsAllChangesRoute = createRoute({
  method: 'get',
  path: '/posts/all/changes',
  tags: ['posts'],
  summary: 'List all post changes',
  description:
    'This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.\n',
  operationId: 'get_all_posts_changes',
  request: {
    query: z.object({
      date_min: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.\n',
            in: 'query',
            name: 'date_min',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.\n',
            in: 'query',
            name: 'date_max',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of changes to return per page (must be >= 1 and <= 50).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of changes to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The changes.',
      content: {
        'application/json': {
          schema: z
            .object({
              changes: z
                .array(
                  z
                    .object({
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The UTC date and time when the post was changed.',
                        }),
                      post_id: z.string().exactOptional(),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired\n',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getPostsMultipleRoute = createRoute({
  method: 'get',
  path: '/posts/multiple',
  tags: ['posts'],
  summary: 'Retrieve multiple posts',
  operationId: 'get_posts_by_ids',
  request: {
    query: z.object({
      post_ids: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.\n',
            in: 'query',
            name: 'post_ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts.',
      content: {
        'application/json': {
          schema: z
            .object({
              forbidden: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The IDs of posts that are forbidden for the current user.',
                }),
              not_found: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of posts that weren't found (may have been deleted or never existed).",
                }),
              posts: z.array(PostSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getPostsSearchRoute = createRoute({
  method: 'get',
  path: '/posts/search',
  tags: ['posts'],
  summary: 'Search posts',
  description:
    'Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.\nNOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.\n',
  operationId: 'search_posts',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description: 'The search query used to find posts.',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort_by: z
        .string()
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'relevance', type: 'string' },
          },
        }),
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sources: z
        .string()
        .openapi({
          param: {
            description:
              "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
            in: 'query',
            name: 'sources',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .default('The group IDs of every group the current user is a member of.')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: {
              default: 'The group IDs of every group the current user is a member of.',
              type: 'string',
            },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      latitude: z
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
            description: 'The latitude of a point around which to return posts.\n',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'The longitude of a point around which to return posts.\n',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(257500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { maximum: 257500, minimum: 0, type: 'number' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.\n',
            in: 'query',
            name: 'date_min',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.',
            in: 'query',
            name: 'date_max',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      outcomes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
            in: 'query',
            name: 'outcomes',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      user_state: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.\n',
            in: 'query',
            name: 'user_state',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      include_reposts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n',
            in: 'query',
            name: 'include_reposts',
            required: false,
            schema: { default: 1, maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last post being returned (an integer between start_index and num_posts).',
                }),
              group_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.\n",
                }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              num_posts: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of posts available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the posts being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of posts being returned per page.' }),
              posts: z.array(PostSearchResultSchema).exactOptional(),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first post being returned (an integer between 1 and num_posts).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getPostsPostIdRoute = createRoute({
  method: 'get',
  path: '/posts/{post_id}',
  tags: ['posts'],
  summary: 'Retrieve a post',
  operationId: 'get_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to retrieve.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The post.', content: { 'application/json': { schema: PostSchema } } },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const putPostsPostIdRoute = createRoute({
  method: 'put',
  path: '/posts/{post_id}',
  tags: ['posts'],
  summary: 'Update a post',
  description:
    'Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.\n',
  operationId: 'update_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to update.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              content: z
                .string()
                .exactOptional()
                .openapi({ description: 'A longer description of the item(s).' }),
              expires_in: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "When the post should expire.   Any amount of time from 1 hour to 90 days can be provided.  To pass a number of hours, provide the number of hours prefixed by 'h' (eg. 1hr 24hr). To pass a number of days, provide the number of days prefixed by 'd' (eg. 1d 90d). <br /><br /> Note that updates may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays.  So with short expirations (eg. < 8 hours), there is a chance that the post may expire before the update is approved and so it will never be published.\n<br><br> NOTE: The max expiration for a post is 90 days after the post is published.  So updates to posts that try to set an longer expiration will be silently changed to just apply the max expiration.\n",
                }),
              fair_offer: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    'If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).',
                }),
              latitude: z
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
                  description:
                    "The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.\n",
                }),
              location: z
                .string()
                .min(2)
                .max(30)
                .openapi({ description: 'A short location description.' }),
              longitude: z
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
                  description:
                    'The longitude corresponding to the location description provided. (see the NOTE in latitude description)',
                }),
              photo_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of the IDs of the photos that should be attached to this post.',
                }),
              preferences: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the update submission process and user input.  Some warnings returned after submitting  an update have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.\n',
                }),
              reselling: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For wanted posts only. If set to 1, the wanted post will show that the poster intends to resell any items that they receive in response to this post.  Posters must declare if they intend to resell items.\n',
                }),
              session: z
                .string()
                .openapi({
                  description:
                    "A JSON string representing a temporary object that is used to store data about the update process for a single post.  The first time a post update is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that update is successfully submitted and then it  can be discarded so that the next update will start over with a new empty session object.  Every time an update is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.\n",
                }),
              title: z
                .string()
                .min(2)
                .max(35)
                .openapi({ description: 'A short description of the item(s).' }),
              type: z
                .string()
                .openapi({ description: 'The type of post.  One of: offer, wanted\n' }),
            })
            .openapi({ required: ['type', 'title', 'location', 'session'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Post update result.',
      content: {
        'application/json': {
          schema: z
            .object({
              identifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.\n',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Contains text describing the reason a post update was not successful.  Is null on success.\n',
                }),
              preference_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.\n",
                }),
              result: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "One of: success, error, warning. <br /><br /> A success result indicates that the post update was submitted successfully. Note that post updates may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post update to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post update from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.\n",
                }),
              session: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
    403: { description: "The user doesn't have permission to edit the post." },
    404: { description: 'Post not found.' },
  },
})

export const deletePostsPostIdRoute = createRoute({
  method: 'delete',
  path: '/posts/{post_id}',
  tags: ['posts'],
  summary: 'Delete a post',
  description:
    "Users can delete posts they have made that have been satisfied or withdrawn or that have expired. Deleting posts isn't intended to be a normal part of the posting process since it makes reposting and viewing old posts harder.\n",
  operationId: 'delete_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'post_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Post deleted.' },
    400: { description: 'Post cannot be deleted until it is satisfied, withdrawn or expired.' },
    403: { description: "The user doesn't have permission to delete the post." },
    404: { description: 'Post not found.' },
  },
})

export const putPostsPostIdBookmarkRoute = createRoute({
  method: 'put',
  path: '/posts/{post_id}/bookmark',
  tags: ['posts'],
  summary: 'Bookmark a post',
  operationId: 'bookmark_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'post_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'The post has been bookmarked.' },
    403: { description: "The user doesn't have permission to view the post." },
    404: { description: 'Post not found.' },
  },
})

export const deletePostsPostIdBookmarkRoute = createRoute({
  method: 'delete',
  path: '/posts/{post_id}/bookmark',
  tags: ['posts'],
  summary: 'Delete a post bookmark',
  operationId: 'delete_bookmark',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'post_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Bookmark deleted.' }, 404: { description: 'Post not found.' } },
})

export const getPostsPostIdDisplayRoute = createRoute({
  method: 'get',
  path: '/posts/{post_id}/display',
  tags: ['posts'],
  summary: 'Retrieve post display data',
  description:
    'Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.\n',
  operationId: 'get_post_and_related_data',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to retrieve.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The post and related data.',
      content: {
        'application/json': {
          schema: z
            .object({
              author: UserSchema.exactOptional(),
              author_offer_count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Count of offer posts made by the post author in the last 90 days.',
                }),
              author_posts: z
                .array(PostSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Other active posts from the post author in the last 90 days. A maximum of 30 posts will be returned.\n',
                }),
              author_wanted_count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Count of wanted posts made by the post author in the last 90 days.',
                }),
              bookmarked: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users' posts.",
                }),
              feedback: z
                .array(FeedbackSchema)
                .exactOptional()
                .openapi({ description: 'Feedback the current user has left on the post author.' }),
              groups: z
                .array(GroupSchema)
                .exactOptional()
                .openapi({ description: 'The groups the post is published on.' }),
              post: PostSchema.exactOptional(),
              replied: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users' posts.",
                }),
              user_can_reply: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.\n',
                }),
              viewed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users' posts.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const putPostsPostIdPromiseRoute = createRoute({
  method: 'put',
  path: '/posts/{post_id}/promise',
  tags: ['posts'],
  summary: 'Promise an offer post',
  description:
    'Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.\n',
  operationId: 'promise_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to promise.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated post.',
      content: { 'application/json': { schema: PostSchema } },
    },
    400: {
      description:
        'The post is not an offer post or the post has already been satisfied or withdrawn or expired.',
    },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
})

export const postPostsPostIdReplyRoute = createRoute({
  method: 'post',
  path: '/posts/{post_id}/reply',
  tags: ['posts'],
  summary: 'Reply to a post',
  description: 'Send a reply to a post from the current user to the post author.',
  operationId: 'reply_to_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to reply to.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              message: z
                .string()
                .openapi({ description: 'The message to send to the post author.' }),
              photo_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of the IDs of the photos that should be attached to this reply.',
                }),
            })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The reply has been sent.' },
    400: {
      description:
        'Missing message parameter or post has been satisfied or withdrawn or expired or the post author is blocked.',
    },
    403: { description: "The user doesn't have permission to reply to the post." },
    404: { description: 'Post not found.' },
  },
})

export const postPostsPostIdReportRoute = createRoute({
  method: 'post',
  path: '/posts/{post_id}/report',
  tags: ['posts'],
  summary: 'Report a post',
  description: 'Reports a post to be reviewed by the moderators.',
  operationId: 'report_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'post_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              details: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "An explanation from the current user for why they are reporting this post.   This is useful for users to provide evidence or explain why there is a problem with the post. <br /><br /> NOTE: If reason is set to 'other', details are required.\n",
                }),
              reason: z
                .string()
                .openapi({
                  description:
                    "The reason that this post is being reported.  Must be one of: 'spam', 'not free (for sale/trade/borrow)', 'illegal item', 'not family-friendly', 'other', 'mislabeled: is a Want', 'mislabeled: is an Offer'. <br /><br /> NOTE: If reason is set to 'other', the details parameter is required to be set.\n",
                }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The post has been reported.' },
    400: { description: 'Invalid reason parameter or missing details.' },
    404: { description: 'Post not found.' },
  },
})

export const putPostsPostIdSatisfyRoute = createRoute({
  method: 'put',
  path: '/posts/{post_id}/satisfy',
  tags: ['posts'],
  summary: 'Satisfy a post',
  description:
    'Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).',
  operationId: 'satisfy_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to satisfy.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated post.',
      content: { 'application/json': { schema: PostSchema } },
    },
    400: {
      description:
        'Invalid summary or the post is not an offer or wanted post or the post has been withdrawn or has expired.',
    },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
})

export const postPostsPostIdShareRoute = createRoute({
  method: 'post',
  path: '/posts/{post_id}/share',
  tags: ['posts'],
  summary: 'Share a post',
  description:
    'Forwards a copy of the post to the current user so that they can forward it to friends.',
  operationId: 'share_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to share.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Post shared.' },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
})

export const putPostsPostIdUnpromiseRoute = createRoute({
  method: 'put',
  path: '/posts/{post_id}/unpromise',
  tags: ['posts'],
  summary: 'Unpromise an offer post',
  description: 'Mark an offer by the current user as unpromised.',
  operationId: 'unpromise_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to unpromise.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated post.',
      content: { 'application/json': { schema: PostSchema } },
    },
    400: {
      description:
        'The post is not an offer post or the post has already been satisfied or withdrawn.',
    },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
})

export const putPostsPostIdWithdrawRoute = createRoute({
  method: 'put',
  path: '/posts/{post_id}/withdraw',
  tags: ['posts'],
  summary: 'Withdraw a post',
  description: 'Mark an offer or wanted post by the current user as withdrawn.',
  operationId: 'withdraw_post',
  request: {
    params: z.object({
      post_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the post to withdraw.',
            in: 'path',
            name: 'post_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated post.',
      content: { 'application/json': { schema: PostSchema } },
    },
    400: {
      description:
        'The post is not an offer or wanted post or the post has already been satisfied or expired.',
    },
    403: { description: "The user doesn't have permission to access the post." },
    404: { description: 'Post not found.' },
  },
})

export const getStoriesRoute = createRoute({
  method: 'get',
  path: '/stories',
  tags: ['stories'],
  summary: 'List stories',
  operationId: 'get_stories',
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of stories to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of stories to return per page (must be >= 1 and <= 50).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
          },
        }),
      sort_by: z
        .string()
        .default('date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the stories that are returned.  One of: date, distance, likes, views <br /><br /> Setting sort_by to date will sort posts from newest to oldest.  Setting sort_by to distance will sort posts from nearest to farthest.  Setting sort_by to likes will sort posts with the most likes first.  Setting sort_by to views will show the posts with the most views first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'date', type: 'string' },
          },
        }),
      latitude: z
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
            description: 'Find groups near the given latitude and longitude.',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'Find groups near the given latitude and longitude.',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The stories and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({ stories: z.array(StorySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const postStoriesRoute = createRoute({
  method: 'post',
  path: '/stories',
  tags: ['stories'],
  summary: 'Submit a story',
  operationId: 'submit_story',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              content: z.string().openapi({ description: 'The content of the story.' }),
              device_pixel_ratio: z
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
                  description:
                    'Client device pixel ratio used to determine thumbnail size (default 1.0).',
                }),
              photo_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A comma separated list of the IDs of the photos that should be attached to this story.',
                }),
              sharing: z
                .string()
                .openapi({
                  description:
                    'Must be set to one of the following two options: public, members <br /><br /> When sharing is set to public, anyone will be able to view the story. When sharing is set to members, only other members will be able to view the story.\n',
                }),
              title: z.string().max(80).openapi({ description: 'The title of the story.' }),
            })
            .openapi({ required: ['title', 'content', 'sharing'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new story.',
      content: { 'application/json': { schema: StorySchema } },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const getStoriesStoryIdRoute = createRoute({
  method: 'get',
  path: '/stories/{story_id}',
  tags: ['stories'],
  summary: 'Retrieve a story',
  operationId: 'get_story',
  request: {
    params: z.object({
      story_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the story to retrieve.',
            in: 'path',
            name: 'story_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The story.', content: { 'application/json': { schema: StorySchema } } },
    403: { description: 'Story is only visible to members.' },
    404: { description: 'Story not found.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const putStoriesStoryIdLikeRoute = createRoute({
  method: 'put',
  path: '/stories/{story_id}/like',
  tags: ['stories'],
  summary: 'Like a story',
  operationId: 'like_story',
  request: {
    params: z.object({
      story_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the story to like.',
            in: 'path',
            name: 'story_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated story.',
      content: { 'application/json': { schema: StorySchema } },
    },
    404: { description: 'Story not found.' },
  },
})

export const putStoriesStoryIdUnlikeRoute = createRoute({
  method: 'put',
  path: '/stories/{story_id}/unlike',
  tags: ['stories'],
  summary: 'Unlike a story',
  operationId: 'unlike_story',
  request: {
    params: z.object({
      story_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the story to unlike.',
            in: 'path',
            name: 'story_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated story.',
      content: { 'application/json': { schema: StorySchema } },
    },
    404: { description: 'Story not found.' },
  },
})

export const postStoriesStoryIdViewedRoute = createRoute({
  method: 'post',
  path: '/stories/{story_id}/viewed',
  tags: ['stories'],
  summary: 'Record story viewed',
  description:
    'Records every time a user views the full story (and not just a preview or snippet),',
  operationId: 'viewed_story',
  request: {
    params: z.object({
      story_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the story viewed.',
            in: 'path',
            name: 'story_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Story view was recorded.' },
    404: { description: 'Story not found.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['users'],
  summary: 'Retrieve current user',
  operationId: 'get_current_user',
  responses: {
    200: {
      description: 'User data',
      content: { 'application/json': { schema: CurrentUserSchema } },
    },
    404: { description: 'User not found.' },
  },
})

export const putUsersMeRoute = createRoute({
  method: 'put',
  path: '/users/me',
  tags: ['users'],
  summary: 'Update current user',
  description:
    'Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.\n',
  operationId: 'update_current_user',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              about_me: z
                .string()
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'A short bio a user has written about themselves to help other members get to know them better.',
                }),
              digest_photos: z
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
                  description:
                    'Whether or not to include photos in the digest emails. Set to 1 to enable photos and 0 to disable photos.\n',
                }),
              email_message_delay: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "How quickly new messages from other users are emailed to this user. One of: immediate, 30_minutes, 1_hour, 2_hours, 4_hours, 6_hours, 8_hours <br /> If set to anything other than immediate, the user will receive a digest email summarizing all of the new messages that they haven't viewed.\n",
                }),
              email_newsletters: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If set to 1, the user will receive occasional email newsletters from trash nothing.  To disable, set to 0.',
                }),
              email_post_reminders: z
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
                  description:
                    'If set to 1, the user will receive emails to remind them to handle their old posts.  To disable, set to 0.',
                }),
              email_posts_frequency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'How often new post email notifications are sent to the user. One of: weekly, twice_weekly, daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> To turn off new post email notifications, set this to an empty string.\n',
                }),
              email_search_alerts: z
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
                  description:
                    'If set to 1, the user will receive emails when new posts that match one of their search alerts.  To disable, set to 0.',
                }),
              firstname: z
                .string()
                .max(64)
                .exactOptional()
                .openapi({ description: 'The first name of the user.' }),
              last_listings_view: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The UTC date and time when the user last viewed the newest posts on the All Posts page.',
                }),
              lastname: z
                .string()
                .max(64)
                .exactOptional()
                .openapi({ description: 'The last name of the user.' }),
              notify_about_reposts: z
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
                  description:
                    'If set to 1, the user will be notified about reposts. This affects digests and search alerts. If set to 0, the user will not be notified about reposts. <br /><br /> This does not affect the posts that are returned by the /posts endpoint which has an include_reposts option for this purpose. <br /><br /> See the repost_count field of post objects for details about how reposts are identified.\n',
                }),
              old_password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The users current password.  This is required when the user is changing their password.',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A new password for the users' account.  When setting a new password, the old_password parameter must be passed and set to the users' current password. <br /><br /> NOTE: The password and old_password properties can NOT be used when the user property has_password is false.  Instead, use the password reset endpoint to have a new password emailed to the user.\n",
                }),
              profile_image_source: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The source of the users' profile image. The values this can be set to change dynamically based on the users' account. To get the values that can be used, use the source properties returned by the profile images endpoint.\n",
                }),
              public_name: z
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
                  description:
                    "Whether or not the users' first and last name will be visible to other users. Set to 1 to enable and 0 to disable.\n",
                }),
              public_post_sources: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A comma separated list of the sources to show public posts from. Currently only 'trashnothing' is supported.\nIf not passed, all sources will be enabled.\nIf set to an empty string, no sources will be enabled which effectively disables public posts for the user so that the user will only see posts from the groups they are a member of.  Setting to an empty string is only allowed if the user is a member of one or more groups.\n",
                }),
              show_all_group_posts: z
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
                  description:
                    "Set to 1 to show all group posts on the main posts page and in the digests.  Set to 0 to only show group posts in the area defined by the users' location.  Can only be set to 0 if the users' location is already set.\n",
                }),
              special_notices: z
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
                  description:
                    'Whether or not the user wants to receive special notice emails from the groups they are a member of. Special notices are admin posts that the group moderators choose to send out by email. Set to 1 to enable and 0 to disable.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated user data.',
      content: { 'application/json': { schema: CurrentUserSchema } },
    },
    400: { description: 'Invalid parameter.' },
  },
})

export const getUsersMeAlertsRoute = createRoute({
  method: 'get',
  path: '/users/me/alerts',
  tags: ['users'],
  summary: "List current users' email alerts",
  operationId: 'get_alerts',
  responses: {
    200: {
      description: 'The users alerts.',
      content: { 'application/json': { schema: z.array(AlertSchema) } },
    },
  },
})

export const putUsersMeAlertsRoute = createRoute({
  method: 'put',
  path: '/users/me/alerts',
  tags: ['users'],
  summary: 'Create an email alert',
  operationId: 'create_alert',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              search: z
                .string()
                .openapi({
                  description:
                    'When a post matches this search query, an email alert will be sent.  Must have a length >= 2 and < 255 characters.',
                }),
              types: z
                .string()
                .openapi({
                  description:
                    'A comma separated list of the post types that the alert should match against. The available post types are: offer, wanted\n',
                }),
            })
            .openapi({ required: ['search', 'types'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new alert.',
      content: { 'application/json': { schema: AlertSchema } },
    },
    400: { description: 'Missing or invalid parameters or maximum number of alerts reached.' },
  },
})

export const deleteUsersMeAlertsAlertIdRoute = createRoute({
  method: 'delete',
  path: '/users/me/alerts/{alert_id}',
  tags: ['users'],
  summary: 'Delete an email alert',
  operationId: 'delete_alert',
  request: {
    params: z.object({
      alert_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the email alert to delete.',
            in: 'path',
            name: 'alert_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Alert deleted.' },
    403: { description: "The user doesn't have permission to access the alert." },
    404: { description: 'Alert not found.' },
  },
})

export const postUsersMeEmailRoute = createRoute({
  method: 'post',
  path: '/users/me/email',
  tags: ['users'],
  summary: 'Change email address',
  description:
    "Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.\n",
  operationId: 'change_email',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ address: z.string().openapi({ description: 'The new email address.' }) })
            .openapi({ required: ['address'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'A verification email was sent to the new email address.' },
    400: { description: 'Invalid email address.' },
  },
})

export const putUsersMeEmailNotBouncingRoute = createRoute({
  method: 'put',
  path: '/users/me/email/not-bouncing',
  tags: ['users'],
  summary: "Set users' email address as not bouncing",
  description:
    "Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.\n",
  operationId: 'set_email_not_bouncing',
  responses: {
    200: {
      description: 'The updated user.',
      content: { 'application/json': { schema: CurrentUserSchema } },
    },
    400: { description: 'Email not yet verified.' },
  },
})

export const getUsersMeGroupsRoute = createRoute({
  method: 'get',
  path: '/users/me/groups',
  tags: ['users'],
  summary: "List current users' groups",
  operationId: 'get_current_user_groups',
  request: {
    query: z.object({
      membership: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.\n',
            in: 'query',
            name: 'membership',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The users groups.',
      content: { 'application/json': { schema: z.array(GroupSchema) } },
    },
    400: { description: 'Invalid membership parameter.' },
  },
})

export const putUsersMeLocationRoute = createRoute({
  method: 'put',
  path: '/users/me/location',
  tags: ['users'],
  summary: 'Update location',
  description:
    "Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).\n",
  operationId: 'update_location',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              latitude: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              ),
              longitude: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              ),
              name: z
                .string()
                .openapi({
                  description:
                    'A name that describes the location specified by the given latitude and longitude (must be <= 128 characters).',
                }),
              radius: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number().min(0).max(257500),
                )
                .openapi({
                  description:
                    'A radius in meters that defines a circle around the point specified by latitude and longitude. Only posts within the area specified by this circle will be shown.\nIf set to 0, effectively disables public posts for the user.\n',
                }),
            })
            .openapi({ required: ['name', 'latitude', 'longitude', 'radius'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The user with the updated location.',
      content: { 'application/json': { schema: CurrentUserSchema } },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const getUsersMeNoticesRoute = createRoute({
  method: 'get',
  path: '/users/me/notices',
  tags: ['users'],
  summary: "List current users' group notices",
  operationId: 'get_user_group_notices',
  request: {
    query: z.object({
      group_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma separated list of group IDs to return notices for.  If unset, notices for all the users groups will be returned.',
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The users group notices.',
      content: { 'application/json': { schema: z.array(GroupNoticeSchema) } },
    },
    400: { description: 'Invalid group IDs.' },
  },
})

export const getUsersMePostLocationsRoute = createRoute({
  method: 'get',
  path: '/users/me/post-locations',
  tags: ['users'],
  summary: "List current users' post locations",
  description: 'Only the most recent 3 post locations are returned.',
  operationId: 'get_post_locations',
  responses: {
    200: {
      description: "The current users' post locations.",
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                latitude: z.number().exactOptional(),
                longitude: z.number().exactOptional(),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The location name used when submitting new posts.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const putUsersMePostLocationsRoute = createRoute({
  method: 'put',
  path: '/users/me/post-locations',
  tags: ['users'],
  summary: 'Save a post location for the current user',
  description:
    'Creates or updates a post location for the current user. Updates will happen when the name of the post location matches a previous post location.\n',
  operationId: 'save_post_location',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              latitude: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              ),
              longitude: z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              ),
              name: z
                .string()
                .openapi({
                  description:
                    'A name that describes the location specified by the given latitude and longitude (must be >= 2 characters and <= 30 characters).',
                }),
            })
            .openapi({ required: ['name', 'latitude', 'longitude'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The current users' post locations.",
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                latitude: z.number().exactOptional(),
                longitude: z.number().exactOptional(),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The location name used when submitting new posts.' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getUsersMePostsRoute = createRoute({
  method: 'get',
  path: '/users/me/posts',
  tags: ['users'],
  summary: "List current users' posts",
  description:
    'NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.\n',
  operationId: 'get_current_user_posts',
  request: {
    query: z.object({
      sort_by: z
        .string()
        .default('date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the posts that are returned.  One of: date, active, distance <br /><br />\nDate sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'date', type: 'string' },
          },
        }),
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sources: z
        .string()
        .openapi({
          param: {
            description:
              "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
            in: 'query',
            name: 'sources',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .default('The group IDs of every group the current user is a member of.')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: {
              default: 'The group IDs of every group the current user is a member of.',
              type: 'string',
            },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      latitude: z
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
            description: 'The latitude of a point around which to return posts.\n',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'The longitude of a point around which to return posts.\n',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(257500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { maximum: 257500, minimum: 0, type: 'number' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned.\n',
            in: 'query',
            name: 'date_min',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only posts older than this UTC date and time will be returned.',
            in: 'query',
            name: 'date_max',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      outcomes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
            in: 'query',
            name: 'outcomes',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      user_state: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.\n',
            in: 'query',
            name: 'user_state',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      include_reposts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n',
            in: 'query',
            name: 'include_reposts',
            required: false,
            schema: { default: 1, maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last post being returned (an integer between start_index and num_posts).',
                }),
              group_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.\n",
                }),
              last_listings_view: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.\n',
                }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              num_posts: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of posts available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the posts being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of posts being returned per page.' }),
              posts: z.array(PostSchema).exactOptional(),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first post being returned (an integer between 1 and num_posts).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const getUsersMePostsSearchRoute = createRoute({
  method: 'get',
  path: '/users/me/posts/search',
  tags: ['users'],
  summary: "Search current users' posts",
  description:
    'Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.\n',
  operationId: 'search_current_user_posts',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description: 'The search query used to find posts.',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort_by: z
        .string()
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'relevance', type: 'string' },
          },
        }),
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sources: z
        .string()
        .openapi({
          param: {
            description:
              "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
            in: 'query',
            name: 'sources',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .default('The group IDs of every group the current user is a member of.')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: {
              default: 'The group IDs of every group the current user is a member of.',
              type: 'string',
            },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      latitude: z
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
            description: 'The latitude of a point around which to return posts.\n',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'The longitude of a point around which to return posts.\n',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(257500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { maximum: 257500, minimum: 0, type: 'number' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned.\n',
            in: 'query',
            name: 'date_min',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only posts older than this UTC date and time will be returned.',
            in: 'query',
            name: 'date_max',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      outcomes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
            in: 'query',
            name: 'outcomes',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      user_state: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.\n',
            in: 'query',
            name: 'user_state',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      include_reposts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n',
            in: 'query',
            name: 'include_reposts',
            required: false,
            schema: { default: 1, maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last post being returned (an integer between start_index and num_posts).',
                }),
              group_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.\n",
                }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              num_posts: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of posts available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the posts being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of posts being returned per page.' }),
              posts: z.array(PostSearchResultSchema).exactOptional(),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first post being returned (an integer between 1 and num_posts).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const postUsersMeProfileImageRoute = createRoute({
  method: 'post',
  path: '/users/me/profile-image',
  tags: ['users'],
  summary: 'Set a profile image',
  description:
    'Profile images must be at least 90 pixels wide and tall.  And if the image used is not square it will be automatically cropped to be square.\n',
  operationId: 'set_profile_image',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              crop: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the photo needs to be cropped, a JSON encoded object with the crop arguments can be passed. The supported crop arguments are below.  All arguments except rotate are required. <br /><br /> - **original_width**: Original width of the photo before being cropped or rotated (in pixels).<br /> - **original_height**: Original height of the photo before being cropped or rotated (in pixels).<br /> - **x**: The x-coordinate of the top left corner of the cropped area.<br /> - **y**: The y-coordinate of the top left corner of the cropped area.<br /> - **size**: The size of the square cropped area.<br /> - **rotate**: (optional) The number of degrees to rotate the image before cropping.\n  Currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.\n<br />\n',
                }),
              device_pixel_ratio: z
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
                  description:
                    'Client device pixel ratio used to determine thumbnail size (default 1.0).',
                }),
              photo: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Photo to upload.' }),
              photo_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Photo to use (if already uploaded).' }),
              set_default: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not to set the photo as the users' default profile image.  Set to 1 to enable and 0 to disable.\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated user and the photo.',
      content: {
        'application/json': {
          schema: z
            .object({
              photo: PhotoResultSchema.exactOptional(),
              user: CurrentUserSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
})

export const getUsersMeProfileImagesRoute = createRoute({
  method: 'get',
  path: '/users/me/profile-images',
  tags: ['users'],
  summary: "List current users' profile images",
  operationId: 'get_profile_images',
  responses: {
    200: {
      description: 'The  users profile images.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                image: z.string().exactOptional().openapi({ description: 'An image URL.' }),
                source: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "The source of the image.  Currently one of: gravatar, facebook, google <br /><br /> NOTE: Additional sources may be added in the future (eg. 'trashnothing' when support for uploading custom profile images is added) so clients should take care to support arbitrary sources being returned.\n",
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postUsersMeResendVerificationRoute = createRoute({
  method: 'post',
  path: '/users/me/resend-verification',
  tags: ['users'],
  summary: 'Resend account verification email',
  operationId: 'resend_account_verification_email',
  responses: {
    200: { description: 'Verification email was resent.' },
    400: { description: 'Account already verified.' },
  },
})

export const postUsersMeResetPasswordRoute = createRoute({
  method: 'post',
  path: '/users/me/reset-password',
  tags: ['users'],
  summary: 'Send password reset email',
  operationId: 'send_password_reset_email',
  responses: { 200: { description: 'Password reset email was sent.' } },
})

export const postUsersReportRoute = createRoute({
  method: 'post',
  path: '/users/report',
  tags: ['users'],
  summary: 'Report a user',
  operationId: 'report_user',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              group_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the group to report the user to.  This may be disregarded in cases where user_email is set and can be used to automatically identify which group the user should be reported to (because some email addresses are specific to certain groups).\n',
                }),
              message: z.string().openapi({ description: 'The body of the message.' }),
              subject: z
                .string()
                .exactOptional()
                .openapi({ description: 'The subject of the message.' }),
              user_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email of the user to report.  Often users only know to identify other users by their email addresses so allowing users to enter an email address can be easier in certain cases.\n',
                }),
              user_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the user to report.  One of user_id or user_email must be passed but only user_id will be used if both are passed.',
                }),
            })
            .openapi({ required: ['message'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'The user was reported.' },
    400: {
      description:
        'Missing or invalid parameters.  In particular, a user cannot report themselves.',
    },
    404: { description: 'User or group not found.' },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Retrieve a user',
  operationId: 'get_user',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'A user ID.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User data', content: { 'application/json': { schema: UserSchema } } },
    404: { description: 'User not found.' },
  },
})

export const getUsersUserIdDisplayRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/display',
  tags: ['users'],
  summary: 'Retrieve user display info',
  description:
    'Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.\n',
  operationId: 'get_user_and_related_data',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'A user ID.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The user and related data.',
      content: {
        'application/json': {
          schema: z
            .object({
              feedback: z
                .array(FeedbackSchema)
                .exactOptional()
                .openapi({ description: 'Feedback the current user has left on the user.' }),
              offer_count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Count of offer posts made by the user in the last 90 days.',
                }),
              posts: z
                .array(PostSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Other active posts from the user in the last 90 days. A maximum of 30 posts will be returned.\n',
                }),
              user: UserSchema.exactOptional(),
              wanted_count: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Count of wanted posts made by the user in the last 90 days.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'User not found.' },
  },
})

export const postUsersUserIdFeedbackRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/feedback',
  tags: ['users'],
  summary: 'Submit feedback on a user',
  description:
    'Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.\n',
  operationId: 'submit_user_feedback',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'A user ID.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              category: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "For positive feedback, category should not be set. <br /><br /> For negative feedback, category should be set to one of: NO_SHOW, UNRESPONSIVE, LATE_OR_TOO_EARLY, ITEM_NOT_AS_DESCRIBED, BROKEN_PROMISE, RUDE, RESELLER, SELLING, UNWANTED_MESSAGES, COMMUNICATION, OTHER <br /><br /> Below are descriptions for each of these categories: <br /><br /> **NO_SHOW** - The user did not show up when they said they would.<br /> **UNRESPONSIVE** - The user failed to respond when a response was expected.<br /> **LATE_OR_TOO_EARLY** - The user showed up later than they said they would (or too early).<br /> **ITEM_NOT_AS_DESCRIBED** - The user gave away an item that had a misleading on incomplete description.<br /> **BROKEN_PROMISE** - The user broke a promise.<br /> **RUDE** - The user was rude or impolite.<br /> **RESELLER** - The user is obtaining free items to sell on other sites without disclosing their intent to resell.<br /> **SELLING** - The user is selling items on trash nothing.<br /> **UNWANTED_MESSAGES** - The user is sending off-topic or unrelated messages.<br />           **COMMUNICATION** - The users' communication is unclear, confusing or bad.<br /> **OTHER** - This category is for anything that does not fit in any of the above categories.\n",
                }),
              content: z
                .string()
                .max(16384)
                .exactOptional()
                .openapi({
                  description:
                    'A comment written by the current user about the user they are leaving feedback on. This is optional for positive feedback but is required for negative feedback.\n',
                }),
              positive: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({
                  description:
                    'If set to 1, the feedback is positive.  If set to 0, the feedback is negative.',
                }),
            })
            .openapi({ required: ['positive'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated user and feedback.',
      content: {
        'application/json': {
          schema: z
            .object({ feedback: FeedbackSchema.exactOptional(), user: UserSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
    404: { description: 'User not found.' },
  },
})

export const deleteUsersUserIdFeedbackRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}/feedback',
  tags: ['users'],
  summary: 'Remove feedback on a user',
  description: 'Allows the current user to remove feedback that they left on a user.\n',
  operationId: 'remove_user_feedback',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'A user ID.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The updated user.',
      content: {
        'application/json': {
          schema: z.object({ user: UserSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
    404: { description: 'User not found.' },
  },
})

export const getUsersUserIdPostsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/posts',
  tags: ['users'],
  summary: 'List posts by a user',
  description:
    'NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.\n',
  operationId: 'get_user_posts',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description:
              "The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.\n",
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sort_by: z
        .string()
        .default('date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the posts that are returned.  One of: date, active, distance <br /><br />\nDate sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'date', type: 'string' },
          },
        }),
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sources: z
        .string()
        .openapi({
          param: {
            description:
              "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
            in: 'query',
            name: 'sources',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .default('The group IDs of every group the current user is a member of.')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: {
              default: 'The group IDs of every group the current user is a member of.',
              type: 'string',
            },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      latitude: z
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
            description: 'The latitude of a point around which to return posts.\n',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'The longitude of a point around which to return posts.\n',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(257500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { maximum: 257500, minimum: 0, type: 'number' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned.\n',
            in: 'query',
            name: 'date_min',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only posts older than this UTC date and time will be returned.',
            in: 'query',
            name: 'date_max',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      outcomes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
            in: 'query',
            name: 'outcomes',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      include_reposts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n',
            in: 'query',
            name: 'include_reposts',
            required: false,
            schema: { default: 1, maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last post being returned (an integer between start_index and num_posts).',
                }),
              group_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.\n",
                }),
              last_listings_view: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.\n',
                }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              num_posts: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of posts available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the posts being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of posts being returned per page.' }),
              posts: z.array(PostSchema).exactOptional(),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first post being returned (an integer between 1 and num_posts).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getUsersUserIdPostsSearchRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/posts/search',
  tags: ['users'],
  summary: 'Search posts by a user',
  description:
    'Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.\n',
  operationId: 'search_user_posts',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description:
              "The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.\n",
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description: 'The search query used to find posts.',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort_by: z
        .string()
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            description:
              'How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.\n',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'relevance', type: 'string' },
          },
        }),
      types: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin\n',
            in: 'query',
            name: 'types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sources: z
        .string()
        .openapi({
          param: {
            description:
              "A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.\n",
            in: 'query',
            name: 'sources',
            required: true,
            schema: { type: 'string' },
          },
        }),
      group_ids: z
        .string()
        .default('The group IDs of every group the current user is a member of.')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.\n",
            in: 'query',
            name: 'group_ids',
            required: false,
            schema: {
              default: 'The group IDs of every group the current user is a member of.',
              type: 'string',
            },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of posts to return per page (must be >= 1 and <= 100).',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of posts to return.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      device_pixel_ratio: z
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
            description:
              'Client device pixel ratio used to determine thumbnail size (default 1.0).',
            in: 'query',
            name: 'device_pixel_ratio',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
      latitude: z
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
            description: 'The latitude of a point around which to return posts.\n',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      longitude: z
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
            description: 'The longitude of a point around which to return posts.\n',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { type: 'number' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(257500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.\n',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { maximum: 257500, minimum: 0, type: 'number' },
          },
        }),
      date_min: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only posts newer than or equal to this UTC date and time will be returned.\n',
            in: 'query',
            name: 'date_min',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_max: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only posts older than this UTC date and time will be returned.',
            in: 'query',
            name: 'date_max',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      outcomes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.\n",
            in: 'query',
            name: 'outcomes',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      include_reposts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.\n',
            in: 'query',
            name: 'include_reposts',
            required: false,
            schema: { default: 1, maximum: 1, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The posts and paging data.',
      content: {
        'application/json': {
          schema: z
            .object({
              end_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the last post being returned (an integer between start_index and num_posts).',
                }),
              group_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.\n",
                }),
              num_pages: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of pages available.' }),
              num_posts: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of posts available.' }),
              page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The page number of the posts being returned.' }),
              per_page: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of posts being returned per page.' }),
              posts: z.array(PostSearchResultSchema).exactOptional(),
              start_index: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The index of the first post being returned (an integer between 1 and num_posts).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing or invalid parameters.' },
  },
  security: [{ oauth2_implicit: ['basic'] }, { oauth2_code: ['basic'] }, { api_key: [] }],
})

export const getUsersUserIdProfileImageRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/profile-image',
  tags: ['users'],
  summary: "Retrieve a users' profile image",
  description:
    'This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.\n',
  operationId: 'get_profile_image_file',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'The user ID of the user to return the profile image of.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      default: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A default image URL to use when the user has no profile image. Or to use one of the Gravatar default images, you can set default to any one of (404, mm, identicon, monsterid, wavatar, retro, blank). <br /><br /> To learn how the Gravatar default images options work, see the Default Image section on the page at:<br /> https://en.gravatar.com/site/implement/images/\n',
            in: 'query',
            name: 'default',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    302: {
      description:
        'This endpoint returns an HTTP redirect to a URL that hosts the image. So requests on this endpoint that automatically follow redirects (eg. most browsers) will be redirected to a valid image file.\n',
    },
    400: { description: 'Invalid default parameter.' },
  },
})
