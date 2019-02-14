/**
 * @fileoverview Adventure Land MMORPG ESLint plugin adding a custom environment containing global
 * game functions, classes, and variables.
 * @author David Timmons
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
    environments: {
        api: {
            globals: {
                Character: false,
                Monster: false,
                Sprite: false,
                Player: false,
                activate: false,
                attack: false,
                buy: false,
                can_attack: false,
                can_heal: false,
                can_move_to: false,
                can_use: false,
                change_target: false,
                character: false,
                compound: false,
                destroy_item: false,
                equip: false,
                exchange: false,
                game_log: false,
                get_map: false,
                get_nearest_hostile: false,
                get_nearest_monster: false,
                get_player: false,
                get_socket: false,
                get_target: false,
                get_target_of: false,
                get_targeted_monster: false,
                heal: false,
                in_attack_range: false,
                is_moving: false,
                is_transporting: false,
                item_grade: false,
                item_properties: false,
                item_value: false,
                loot: false,
                monster: false,
                move: false,
                player: false,
                pm: false,
                say: false,
                sell: false,
                send_gold: false,
                send_item: false,
                send_party_invite: false,
                set_message: false,
                shift: false,
                show_json: false,
                sprite: false,
                trade: false,
                trade_buy: false,
                upgrade: false,
                use: false,
                use_hp_or_mp: false,
                use_skill: false,
            },
        },
    },
};
