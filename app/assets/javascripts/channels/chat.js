var messages = $('#messages');
if (messages.length > 0) {
    var scrollBottom = function() {
        messages.scrollTop(messages.prop("scrollHeight"));
    };

    scrollBottom();

    App.chat = App.cable.subscriptions.create({
        channel: "ChatChannel",
        chatId: messages.data('chatId')
    }, {
        connected: function () {
            // 서버 사이드에서 구독을 시작했을 때
        },
        disconnected: function () {
            // 서버 사이드에서 구독이 끝났을 때
        },
        received: function (data) {
            message.append(data['message']);
            scrollBottom();
        },
        sendMessage: function (text) {
            perform('send_message', {
                text: text,
                chat_id: messages.data('chatId')
            });
        }
    });
}



var messages = $('#messages');
if (messages.length > 0) {
    $('#new_message').submit(function (e) {
        var textarea = $(this).find('#message_text');
        if($.trim(textarea.val()).length > 1) {
            App.chat.send_message(textarea.val(), messages.data('chatId'));
            textarea.val('');
        }
        e.preventDefault();
        return false;
    });
}
