const program = require('commander');
const key = require('../commands/key');

program
    .command('set')
    .description('Set API key -- Get at https://nomics.com')
    .action(key.set);

program
    .command('show')
    .description('Show API key')
    .action(key.show);
    
program
    .command('remove')
    .description('Remove API key')
    .action(key.remove);   

program.parse(process.argv);