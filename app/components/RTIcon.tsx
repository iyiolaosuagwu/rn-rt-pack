import React from 'react';
import {ViewStyle} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ICON_TYPE, COLOR_TYPES} from '@dtos';

interface RTIconProps {
    icon: ICON_TYPE;
    size: number;
    color?: COLOR_TYPES;
    style?: ViewStyle;
}

function RTIcon(props: RTIconProps) {
    const {icon, size, style, color} = props;

    let SelectedIconName;
    let SelectedIconComponent;

    switch (icon) {
        case 'check_mark':
            SelectedIconName = 'checkmark-sharp';
            SelectedIconComponent = Ionicons;
            break;

        case 'eye_open':
            SelectedIconName = 'eye';
            SelectedIconComponent = Entypo;
            break;

        case 'eye_close':
            SelectedIconName = 'eye-with-line';
            SelectedIconComponent = Entypo;
            break;

        case 'right_up_arrow':
            SelectedIconName = 'arrow-up-right';
            SelectedIconComponent = Feather;
            break;

        case 'bank_transfer':
            SelectedIconName = 'account-cash-outline';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'recurring_transfer':
            SelectedIconName = 'transfer';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'investments':
            SelectedIconName = 'donate';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'corporate_investments':
            SelectedIconName = 'finance';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'piggy':
            SelectedIconName = 'piggy-bank';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'sim':
            SelectedIconName = 'sim-card';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'remove':
            SelectedIconName = 'md-person-remove-sharp';
            SelectedIconComponent = Ionicons;
            break;

        case 'user':
            SelectedIconName = 'user-tie';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'money':
            SelectedIconName = 'money-bill';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'book':
            SelectedIconName = 'open-book';
            SelectedIconComponent = Entypo;
            break;

        case 'money':
            SelectedIconName = 'attach-money';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'pin':
            SelectedIconName = 'lastpass';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'bank':
            SelectedIconName = 'bank';
            SelectedIconComponent = FontAwesome;
            break;

        case 'fingerprint':
            SelectedIconName = 'fingerprint';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'share':
            SelectedIconName = 'share';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'network':
            SelectedIconName = 'network';
            SelectedIconComponent = Entypo;
            break;

        case 'loans':
            SelectedIconName = 'loans';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'smartphone':
            SelectedIconName = 'smartphone';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'backspace':
            SelectedIconName = 'backspace';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'dot':
            SelectedIconName = 'circle-medium';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'warning':
            SelectedIconName = 'exclamationcircle';
            SelectedIconComponent = AntDesign;
            break;

        case 'beenhere':
            SelectedIconName = 'beenhere';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'chat':
            SelectedIconName = 'chat';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'whatsapp':
            SelectedIconName = 'whatsapp';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'facebook':
            SelectedIconName = 'facebook';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'twitter':
            SelectedIconName = 'twitter';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'address':
            SelectedIconName = 'map';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'linkedin':
            SelectedIconName = 'linkedin';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'instagram':
            SelectedIconName = 'instagram';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'FAQ':
            SelectedIconName = 'chat';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'lock':
            SelectedIconName = 'lock';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'help':
            SelectedIconName = 'help';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'comment':
            SelectedIconName = 'comment';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'receipt':
            SelectedIconName = 'receipt';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'left_arrow':
            SelectedIconName = 'arrowleft';
            SelectedIconComponent = AntDesign;
            break;

        case 'card':
            SelectedIconName = 'credit-card';
            SelectedIconComponent = Octicons;
            break;

        case 'add_folder':
            SelectedIconName = 'addfolder';
            SelectedIconComponent = AntDesign;
            break;

        case 'safe':
            SelectedIconName = 'safe-square-outline';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'loan':
            SelectedIconName = 'money-bill-alt';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'ATM':
            SelectedIconName = 'atm';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'POS':
            SelectedIconName = 'point-of-sale';
            SelectedIconComponent = MaterialCommunityIcons;
            break;

        case 'tv':
            SelectedIconName = 'tv';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'electricity':
            SelectedIconName = 'bolt';
            SelectedIconComponent = FontAwesome5;
            break;

        case 'menu':
            SelectedIconName = 'menu';
            SelectedIconComponent = Feather;
            break;

        case 'right_arrow':
            SelectedIconName = 'arrowright';
            SelectedIconComponent = AntDesign;
            break;

        case 'drop_down_arrow':
            SelectedIconName = 'chevron-down';
            SelectedIconComponent = Entypo;
            break;

        case 'grater_than':
            SelectedIconName = 'chevron-small-right';
            SelectedIconComponent = Entypo;
            break;

        case 'email':
            SelectedIconName = 'email';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'home':
            SelectedIconName = 'home';
            SelectedIconComponent = Ionicons;
            break;

        case 'phone':
            SelectedIconName = 'phone';
            SelectedIconComponent = FontAwesome;
            break;

        case 'plus':
            SelectedIconName = 'plus';
            SelectedIconComponent = Entypo;
            break;

        case 'circle':
            SelectedIconName = 'controller-record';
            SelectedIconComponent = Entypo;
            break;

        case 'power':
            SelectedIconName = 'power-off';
            SelectedIconComponent = FontAwesome;
            break;

        case 'close':
            SelectedIconName = 'close';
            SelectedIconComponent = AntDesign;
            break;

        case 'close-circle':
            SelectedIconName = 'close-circle';
            SelectedIconComponent = Ionicons;
            break;

        case 'scan':
            SelectedIconName = 'scan';
            SelectedIconComponent = Ionicons;
            break;

        case 'ios-copy-outline':
            SelectedIconName = 'ios-copy-outline';
            SelectedIconComponent = Ionicons;
            break;

        case 'checkcircle':
            SelectedIconName = 'checkcircle';
            SelectedIconComponent = AntDesign;
            break;

        case 'date-range':
            SelectedIconName = 'date-range';
            SelectedIconComponent = MaterialIcons;
            break;

        case 'search':
            SelectedIconName = 'search';
            SelectedIconComponent = Feather;
            break;

        default:
            SelectedIconName = 'checkmark-sharp';
            SelectedIconComponent = Ionicons;
            break;
    }

    return (
        <SelectedIconComponent
            style={style}
            name={SelectedIconName}
            size={size}
            color={color}
        />
    );
}

RTIcon.defaultProps = {
    icon: 'check_mark',
    size: 20,
};

export default RTIcon;
