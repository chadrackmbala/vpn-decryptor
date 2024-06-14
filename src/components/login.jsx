import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, } from '@mui/material';
import Email from '@mui/icons-material/Email';

export default function Login() {
    return (
        <div className="flex flex-col gap-4 justify-cneter items-cneter">
            {/* <h1 className="text-3xl font-bold underline">
                VPN Decryptor
            </h1> */}
            <AccountCircleIcon className='w-[300px] h-[400px] text-[#319484]' />
            <TextField
              className='w-60'
              id="outlined-password-input"
              label="Adresse E-mail"
              type="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className='text-[#319484]' />
                  </InputAdornment>
                ),
              }}
              name='email'
              
            />
        </div>
    )
}