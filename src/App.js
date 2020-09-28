import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
        <Button variant="contained" color="primary" onClick={()=>setOpen(true)}>

  Open
</Button>
 <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
     
         

       Minimalism
  

         
        </DialogContent>
        <DialogActions>
          <Button  color="primary" onClick={() => setOpen(false)}>
            Done
          </Button>
       
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
