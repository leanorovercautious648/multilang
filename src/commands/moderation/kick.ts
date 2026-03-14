import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { t } from '../../utils/i18n.js';

const kickCommand: Command = {
    get data() {
        return new SlashCommandBuilder()
            .setName('kick')
            .setDescription('Bir kullanıcıyı sunucudan atar.')
            .addUserOption(option => 
                option.setName('user')
                    .setDescription('Atılacak kullanıcı')
                    .setRequired(true))
            .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers);
    },
    async execute(interaction) {
        // i18n is ready, we could add keys for this too.
        await interaction.reply({ content: 'Bu komut henüz tam olarak uygulanmadı (örnek kategorizasyon).', ephemeral: true });
    },
};

export default kickCommand;
