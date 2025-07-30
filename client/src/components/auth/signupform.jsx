import React from 'react';

const SignUpForm = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>NGO/HOSPITAL</h2>
      <h3 style={styles.subHeading}>SIGN UP</h3>
      <form style={styles.form}>
        <input type="text" placeholder="NGO Name" style={styles.input} />
        <input type="text" placeholder="Darpan ID or UIN" style={styles.input} />
        <input type="text" placeholder="Contact" style={styles.input} />
        <input type="email" placeholder="Email Id" style={styles.input} />
        <div style={styles.uploadGroup}>
  <button style={styles.uploadActive}>UPLOAD</button>
  <button style={styles.uploadInactive}>Documents</button>
</div>

        <button type="submit" style={styles.verifyButton}>Verify</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    margin: 'auto',
    border: '1px solid #e5e5e5'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000'
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'blue'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #e5e5e5',
    borderRadius: '5px',
    fontSize: '16px',
    width: '100%'
  },
  uploadGroup: {
  display: 'flex',
  margin: '10px 0',
  borderRadius: '25px',
  overflow: 'hidden',
  backgroundColor: '#eaeaea',
  alignSelf: 'center',
  width: '220px',
},

uploadActive: {
  flex: 1,
  padding: '10px',
  backgroundColor: '#1f1f3e',
  color: '#fff',
  fontWeight: '700',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  borderTopLeftRadius: '25px',
  borderBottomLeftRadius: '25px',
},

uploadInactive: {
  flex: 1,
  padding: '10px',
  backgroundColor: '#f0f0f0',
  color: '#1f1f3e',
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  borderTopRightRadius: '25px',
  borderBottomRightRadius: '25px',
},



  verifyButton: {
  backgroundColor: '#0a76ff',
  color: '#fff',
  fontSize: '17px',
  fontWeight: '700',
  width: '130px',
  height: '45px',
  borderRadius: '25px',
  border: 'none',
  boxShadow: '0 4px 11px rgba(10, 118, 255, 0.6)',
  margin: '0 auto',
  display: 'block',
  cursor: 'pointer',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
}

};

export default SignUpForm;
